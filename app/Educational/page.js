import EducationalClient from "../components/EducationalClient";

export const metadata = {
  title: "Tonno Auriga - Tonno per Passione - Educational",
  description:
    "Scopri curiosità e consigli su Tonno Auriga! Approfondisci le proprietà nutrizionali del tonno, ricette innovative e suggerimenti per una corretta conservazione. Impara a scegliere e gustare al meglio i nostri prodotti.",
  openGraph: {
    title: "Tonno Auriga - Tonno per Passione - Educational",
    description:
      "Scopri curiosità e consigli su Tonno Auriga! Approfondisci le proprietà nutrizionali del tonno, ricette innovative e suggerimenti per una corretta conservazione. Impara a scegliere e gustare al meglio i nostri prodotti.",
    url: "https://www.tonnoauriga.it",
    images: [
      {
        url: "https://www.tonnoauriga.it/wp/wp-content/uploads/2024/10/Tonno_Auriga_prodotti.webp",
        width: 1200,
        height: 630,
        alt: "Tonno Auriga",
      },
    ],
    siteName: "Tonno Auriga - Tonno per Passione",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tonno Auriga - Tonno per Passione - Educational",
    description:
      "Scopri curiosità e consigli su Tonno Auriga! Approfondisci le proprietà nutrizionali del tonno, ricette innovative e suggerimenti per una corretta conservazione. Impara a scegliere e gustare al meglio i nostri prodotti.",
    image:
      "https://www.tonnoauriga.it/wp/wp-content/uploads/2024/10/Tonno_Auriga_prodotti.webp",
  },
  robots: {
    index: true,
    follow: true,
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "tonno, auriga, castiglione, peschereccio, erice, trapani, sicilia, tonno in scatola ",
    },
    {
      name: "author",
      content: "Tonno Auriga",
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Il tonno in scatola contiene conservanti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gli unici ingredienti contenuti in una scatoletta sono il tonno, l’olio e il sale. Il processo di sterilizzazione garantisce che il tonno si conservi a lungo senza la necessità di aggiungere nulla!",
      },
    },
    {
      "@type": "Question",
      name: "Il tonno in scatola contiene carboidrati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "È un prodotto privo di carboidrati e zuccheri. È ricco, invece, di proteine ed è quindi un alimento perfetto per chi segue regimi alimentari dove l’apporto proteico è importante.",
      },
    },
    {
      "@type": "Question",
      name: "I tonni in scatola sono tutti uguali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Controlla l’etichetta e fai attenzione alla specie inscatolata. Due sono le specie più diffuse in Italia: il tonno pinna gialla (Thunnus albacares), che si presenta con una carne rosea e compatta, e il tonnetto striato (Katsuwonus pelamis) o Skipjack, che ha una carne più tenera e chiara. Queste due specie hanno valori nutrizionali e caratteristiche organolettiche diversi. Scegli quindi in base alle tue preferenze, ma sii consapevole che non tutto il tonno è uguale!",
      },
    },
    {
      "@type": "Question",
      name: "Il tonno in scatola si conserva fuori dal frigo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puoi tenere le tue scatolette in dispensa. Solo una volta aperto conservalo in frigorifero e consumalo entro 24 ore.",
      },
    },
    {
      "@type": "Question",
      name: "Il tonno in scatola si può consumare anche vicino alla data di scadenza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L’indicazione di conservazione è “preferibilmente” entro una certa data. Infatti, più il tonno stagiona in scatoletta, più olio e salamoia lo rendono morbido e saporito. Il processo di sterilizzazione garantisce lunghissima durata al prodotto.",
      },
    },
    {
      "@type": "Question",
      name: "Una volta aperto, il tonno in scatola per quanto si può conservare in frigo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se non si consuma l’intero contenuto di una scatoletta, quello che rimane va coperto di olio e consumato entro 24 ore!",
      },
    },
    {
      "@type": "Question",
      name: "Le scatolette di tonno e i cartoncini sono riciclabili?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tutte le confezioni di tonno Auriga sono realizzate con materiale riciclato e riciclabile, sia il cartone che il metallo. Noi indichiamo come svolgere la raccolta differenziata per agevolare la seconda vita delle confezioni.",
      },
    },
    {
      "@type": "Question",
      name: "Nelle scatolette mettono gli “scarti” del tonno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il processo di produzione di una scatoletta prevede che si usino i filettoni cotti e puliti. Questi vengono tagliati e inscatolati. Gli scarti che si producono a seguito di questa fase vengono conferiti ad aziende che producono colla di pesce o pet food.",
      },
    },
    {
      "@type": "Question",
      name: "Nelle scatolette di tonno mettono anche altre specie di pesci?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I pescherecci intercettano i banchi di tonni e osservatori neutrali certificano che il sistema di pesca sia selettivo e non coinvolga altre specie ittiche. Inoltre, chi produce tonno in scatola effettua periodicamente test del DNA per garantire addirittura la specie di tonno.",
      },
    },
    {
      "@type": "Question",
      name: "Più una scatoletta è grande, migliore la qualità del tonno contenuto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A parità di materia prima, il tonno nelle lattine più grandi mantiene le fibre muscolari più integre. Inoltre, olio e salamoia le penetrano meglio offrendo un prodotto più saporito.",
      },
    },
    {
      "@type": "Question",
      name: "La scatoletta di tonno è sicura come il vetro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entrambi garantiscono la sicurezza del prodotto in termini di conservazione perché entrambi sono sottoposti al processo di sterilizzazione, che elimina il rischio di contaminazioni batteriche. La scatoletta presenta il vantaggio di reggere meglio gli urti.",
      },
    },
    {
      "@type": "Question",
      name: "L’olio del tonno in scatola va buttato?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il tonno “rilascia” i suoi nutrienti all’olio in cui viene conservato. Quell’olio quindi si arricchisce di omega 3 e vitamina D, che non possedeva al momento del suo utilizzo. Non va quindi buttato e va usato per altre preparazioni in cucina, evitando così sprechi e inquinamento.",
      },
    },
  ],
};

export default function Educational() {
  return (
    <>
      <EducationalClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
