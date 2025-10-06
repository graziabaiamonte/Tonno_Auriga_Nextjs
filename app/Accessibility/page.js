export const metadata = {
  title: "Tonno Auriga - Tonno per Passione - Privacy",
  description:
    "Scopri la dichiarazione di accessibilità del sito Tonno Auriga: trasparenza, inclusione e rispetto degli standard WCAG.",
  openGraph: {
    title: "Tonno Auriga - Tonno per Passione - Privacy",
    description:
      "Scopri la dichiarazione di accessibilità del sito Tonno Auriga: trasparenza, inclusione e rispetto degli standard WCAG.",
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
    title: "Tonno Auriga - Tonno per Passione - Privacy",
    description:
      "Scopri la dichiarazione di accessibilità del sito Tonno Auriga: trasparenza, inclusione e rispetto degli standard WCAG.",
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

export default function Accessibility() {
  return (
    <>
      {/* HERO */}
      <div className="bg-yellowLight h-[100vh] flex items-center justify-center">
        <h1 className="text-2xl xl:text-5xl fontPrimary text-yellowDark uppercase">
          Dichiarazione di accessibilità
        </h1>
      </div>

      {/* BOX SVG */}
      <div className="relative w-full">
        <svg
          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className=" top-0 left-0 w-full"
          style={{ transform: "translateY(-70%)" }}
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,128L120,149.3C240,171,480,213,720,208C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* MAIN */}
      <div className="w-full flex  justify-center textFontLight ">
        <div className="w-[90vw] -mt-[10%] flex flex-col gap-[10px]">
          <p>
            Tonno Auriga si impegna a rendere www.tonnoauriga.it accessibile,
            conformemente al D.lgs 10 agosto 2018, n. 106 che ha recepito la
            direttiva UE 2016/2102 del Parlamento europeo e del Consiglio. La
            presente dichiarazione di accessibilità si applica a
            www.tonnoauriga.it.
          </p>

          <p>Stato di conformità: Parzialmente conforme.</p>

          <p>
            Questo sito web è parzialmente conforme ai requisiti previsti
            dall’appendice A della norma UNI CEI EN 301549 in ragione dei casi
            di non conformità elencati di seguito.
          </p>

          <div>
            <h2 className="font-semibold uppercase">
              Contenuti non accessibili
            </h2>
            <p>
              I contenuti di seguito elencati non sono accessibili per i
              seguenti motivi:
            </p>

            <ul className="list-disc ml-[5%]">
              <li>
                Requisito: 9.1.1.1 – Alcuni contenuti non testuali presentati
                all’utente non hanno un’alternativa testuale equivalente che
                serva allo stesso scopo;
              </li>

              <li>
                Requisito: 9.1.3.1 – In alcuni casi, informazioni, struttura o
                correlazioni trasmesse dalla presentazione delle pagine, non
                possono essere determinate programmaticamente (o non sono
                disponibili tramite testo);
              </li>

              <li>
                Requisito: 9.1.4.3 – La rappresentazione visiva del testo e di
                immagini contenenti testo non ha sempre il rapporto minimo di
                contrasto richiesto, salvo eccezioni previste della normativa
                (ES. i logotipi);
              </li>

              <li>
                Requisito: 9.1.4.4 – Alcuni testi, ad eccezione dei sottotitoli
                e delle immagini contenenti testo, non possono essere
                ridimensionati fino al 200 percento senza utilizzare tecnologie
                assistive e senza perdere contenuto e funzionalità;
              </li>

              <li>
                Requisito: 9.1.4.5 – In alcuni casi sono state usate immagini di
                testo al posto del solo testo e non sono né personalizzabili né
                essenziali al tipi di informazioni veicolate;
              </li>

              <li>
                Requisito: 9.1.4.10 – Il contenuto che non richiede una
                rappresentazione in due dimensioni (come tabelle di dati o
                mappe) non si ridispone quando cambia la dimensione visualizzata
                dal programma utente;
              </li>

              <li>
                Requisito: 9.1.4.11 – Per alcuni componenti essenziali, anche
                nei diversi stati, il contrasto colore rispetto agli elementi
                adiacenti non supera il rapporto di 3:1;
              </li>

              <li>
                Requisito: 9.1.4.13 – In alcuni casi, quando il passaggio del
                puntatore del mouse (hover) o il focus della tastiera rendono
                visibili e nascosti dei contenuti, non è disponibile un
                meccanismo per eliminare il contenuto aggiuntivo senza spostare
                il puntatore del mouse o il focus della tastiera, il puntatore
                non può essere spostato su contenuti aggiuntivi senza che questo
                scompaia oppure il contenuto aggiuntivo non resta visibile fino
                a quando l’evento hover o focus non viene rimosso, l’utente lo
                elimina o le sue informazioni non sono più valide, salvo alcune
                eccezioni previste;
              </li>

              <li>
                Requisito: 9.2.1.1 – Alcune funzionalità non possono essere
                utilizzabili tramite tastiera (o interfaccia con input analogo);
              </li>

              <li>
                Requisito: 9.2.4.3 – In alcune pagine Web che possono essere
                navigate in modo sequenziale e in cui la sequenza di navigazione
                influisce sul loro significato e sul loro funzionamento, alcuni
                oggetti che potrebbero ricevere il focus non lo ricevono con un
                ordine tale da conservarne il senso e l’operatività;
              </li>

              <li>
                Requisito: 9.2.4.4 – Lo scopo di alcuni collegamenti non può
                essere determinato dal testo del collegamento oppure dal testo
                del collegamento insieme a dei contenuti adiacenti;
              </li>

              <li>
                Requisito: 9.2.4.6 – Intestazioni e/o etichette non chiariscono
                sufficientemente contenuti o funzionalità;
              </li>

              <li>
                Requisito: 9.2.4.7 – Su alcuni elementi interattivi non è
                visibile l’indicatore del focus;
              </li>

              <li>
                Requisito: 9.3.2.2 – Quando l’utente modifica l’impostazione di
                qualsiasi componente dell’interfaccia (input), avviene un
                cambiamento del contesto;
              </li>

              <li>
                Requisito: 9.4.1.2 – In alcuni casi i componenti
                dell’interfaccia utente (fra cui: elementi di un modulo,
                collegamenti e componenti generati da script…), nome, ruolo,
                stati, proprietà e valori non sono corretti o impostati o non è
                avvisato l’utente e le sue tecnologie assistive quando questi
                cambiano.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase">
              Strumenti di accessibilità integrati
            </h3>
            <p>
              Per facilitare la navigazione e migliorare l’esperienza d’uso del
              sito, è stato integrato il widget per l’accessibilità, che
              consente agli utenti di personalizzare l’interfaccia in base alle
              proprie esigenze. Il widget, attivabile cliccando sull’apposita
              icona presente su ogni pagina del sito, offre una serie di
              funzionalità, tra cui:
            </p>

            <ul className="list-disc ml-[5%]">
              <li>
                Ingrandimento del testo: Aumenta la dimensione dei caratteri
                fino a quattro livelli differenti.
              </li>
              <li>
                Regolazione del contrasto e dei colori: Possibilità di attivare
                modalità ad alto contrasto, in scala di grigi o inversione dei
                colori.
              </li>
              <li>
                Sospensione delle animazioni: Blocca elementi in movimento per
                evitare distrazioni o interferenze, utili anche per utenti
                fotosensibili.
              </li>

              <li>
                Font ad alta leggibilità: Utilizzo di caratteri ottimizzati per
                dislessia.
              </li>

              <li>
                Spaziatura e interlinea: Regolazioni personalizzabili per
                migliorare la leggibilità del testo.
              </li>

              <li>
                Cursore ingrandito: Incremento delle dimensioni del puntatore
                del mouse per facilitarne l’individuazione.
              </li>

              <li>
                Visualizzazione della struttura della pagina: Evidenzia titoli,
                punti di riferimento e collegamenti per una navigazione più
                chiara e semplificata.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold uppercase">
              Redazione della dichiarazione di accessibilità
            </h2>
            <p>
              La presente dichiarazione è stata redatta il 27/07/2023. La
              valutazione è stata effettuata da terzi tramite analisi oggettive
              e soggettive (cfr. l’articolo 3, paragrafo 1, della decisione di
              esecuzione UE 2018/1523 della Commissione).
            </p>
          </div>

          <div>
            <h2 className="font-semibold uppercase ">
              Feedback e informazioni di contatto
            </h2>
            <p>
              È possibile segnalare eventuali casi di difficoltà ad accedere ai
              contenuti del sito. La segnalazione può essere fatta tramite posta
              elettronica all’indirizzo email:info@ninocastiglione.it.
              Nell’e-mail è necessario indicare: nome e cognome; indirizzo della
              pagina web o sezioni del sito o app oggetto della segnalazione;
              descrizione chiara e sintetica del problema riscontrato; strumenti
              utilizzati (sistema operativo, browser, tecnologie assistive).
              Nell’oggetto della email chiediamo di scrivere ‘Accessibilità’,
              inoltre raccomandiamo di descrivere il problema, senza inserire
              dati sensibili relativi alla propria disabilità.
            </p>
          </div>

          <div>
            <h2 className="font-semibold uppercase ">
              Modalità di invio delle segnalazioni all’AgID
            </h2>
            <p>
              In caso di risposta insoddisfacente o di mancata risposta, nel
              termine di trenta giorni, alla notifica o alla richiesta,
              l’interessato può inoltrare una segnalazione ad AgID, tramite pec,
              al seguente indirizzo: protocollo@pec.agid.gov.it.
            </p>
          </div>

          <div>
            <h2 className="font-semibold uppercase ">Informazioni sul sito</h2>
            <ul className="list-disc ml-[5%]">
              <li>La data di pubblicazione del sito Web: 15/10/2024</li>
              <li>Sono stati effettuati i test di usabilità: Sì</li>
              <li>CMS utilizzato per il sito Web: Wordpress</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
