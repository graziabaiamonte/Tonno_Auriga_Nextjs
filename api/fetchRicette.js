import axios from "axios";

export const fetchRicetteBySlug = async (slug) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/ricette`,
      {
        params: { slug },
      }
    );

    const data = response.data;

    if (data.length > 0) {
      const ricetta = data[0];
      let result = {
        id: ricetta.id,
        slug: ricetta.slug,
        nome: ricetta.acf.nome_ricetta,
        sottotitolo: ricetta.acf.sottotitolo,
        portata: ricetta.acf.portata,
        tempoPreparazione: ricetta.acf.tempo_di_preparazione,
        stagione: ricetta.acf.stagione,
        fotoCopertina: ricetta.foto_copertina,
        fotoCopertinaMobile: ricetta.foto_copertina_mobile,
      };

      return result;
    }

    throw new Error("ricetta non trovata");
  } catch (error) {
    // console.log('errore nel recupero della ricetta:', error);
    throw error;
  }
};

// Funzione generale per il recupero dei dati con immagini
export const fetchLastRicette = async () => {
  try {
    // Limita la richiesta API a solo 6 ricette
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/ricette?_limit=6&orderby=date&order=desc`
    );
    const ricette = response.data;

    const ricetteWithImages = await Promise.all(
      ricette.map(async (ricetta) => {
        // Inizializza result come oggetto vuoto
        const result = {
          ...ricetta.acf, // Clona acf in result
          slug: ricetta.slug || "",
          fotoCopertina: null, // Inizializza a null
          fotoCopertinaMobile: null, // Inizializza a null
          dataImmissione: ricetta.date || "", // Prendi la data direttamente dal campo date
        };

        // Fetch foto copertina
        if (ricetta.acf?.foto_copertina) {
          try {
            const imageResponse = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/media/${ricetta.acf.foto_copertina}`
            );
            result.fotoCopertina =
              imageResponse.data?.media_details?.sizes?.full?.source_url ||
              null;
          } catch (imageError) {}
        }

        // Fetch foto copertina mobile
        if (ricetta.acf?.foto_copertina_mobile) {
          try {
            const imageResponse = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/media/${ricetta.acf.foto_copertina_mobile}`
            );
            result.fotoCopertinaMobile =
              imageResponse.data?.media_details?.sizes?.full?.source_url ||
              null;
          } catch (imageError) {}
        }

        return result;
      })
    );

    return ricetteWithImages; // Restituisce solo le ultime 6 ricette con le immagini
  } catch (error) {
    // console.error('Errore nel recupero delle ricette:', error);
    throw error;
  }
};

let ricetteCache = {};

export const fetchAllRicette = async (perPage = 6, page = 1) => {
  const cacheKey = `${perPage}-${page}`;
  if (ricetteCache[cacheKey]) {
    return ricetteCache[cacheKey];
  }

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/ricette`,
      {
        params: { page, _limit: perPage },
      }
    );

    const data = response.data;
    if (!data.length) return [];

    const ricetteWithImages = await Promise.all(
      data.map(async (ricetta) => {
        let fotoCopertinaUrl = null;
        let fotoCopertinaMobileUrl = null;

        if (ricetta.acf?.foto_copertina) {
          try {
            const imageResponse = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/media/${ricetta.acf.foto_copertina}`
            );
            fotoCopertinaUrl =
              imageResponse.data?.media_details?.sizes?.full?.source_url ||
              null;
          } catch (imageError) {}
        }

        if (ricetta.acf?.foto_copertina_mobile) {
          try {
            const imageResponse = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/media/${ricetta.acf.foto_copertina_mobile}`
            );
            fotoCopertinaMobileUrl =
              imageResponse.data?.media_details?.sizes?.full?.source_url ||
              null;
          } catch (imageError) {}
        }

        return {
          ...ricetta.acf,
          slug: ricetta.slug || "",
          fotoCopertina: fotoCopertinaUrl,
          fotoCopertinaMobile: fotoCopertinaMobileUrl,
          dataImmissione: ricetta.date || "",
        };
      })
    );

    ricetteCache[cacheKey] = ricetteWithImages;
    return ricetteWithImages;
  } catch (error) {
    console.error("Errore durante il fetch delle ricette:", error);
    return [];
  }
};
