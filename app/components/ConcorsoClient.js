import Image from "next/image";
import Link from "next/link";

export default function Concorso() {
  return (
    <div className="  bg-yellowLight">
      {/* MAIN */}
      <div>
        {/* HERO */}
        <div className="relative min-h-[50vh] md:min-h-[95vh] xl:h-[110vh] w-full flex items-center justify-center">
          <Image
            src="/concorso-2025/hero_claim_def.svg"
            alt="Hero Image"
            width={1920}
            height={1080}
            className="w-[75%] md:w-[60%] xl:w-[50%] h-auto object-contain"
          />
          {/* svg */}

          <svg
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 1440 220"
            width="100vw"
            className="absolute z-[9] -bottom-1 left-0 w-full"
          >
            <path
              fill="#CE122D"
              d="M0,131.08L120,139.63C240,148.17,480,158.71,720,158.71C960,158.71,1200,148.17,1320,139.63L1440,131.08L1440,220L1320,220C1200,220,960,220,720,220C480,220,240,220,120,220L0,220Z"
            ></path>
          </svg>
        </div>

        {/* BANNER ROSSO PREMI */}
        <div className="bg-red min-h-[50vh]  w-full flex flex-col items-center justify-center">
          <div className="max-w-[1800px] w-full flex flex-col md:flex-row items-center md:items-start justify-center">
            {/* foto premi sinistra (DESKTOP) */}
            <div className="-mt-[30%] w-[50%] hidden md:block md:-mt-[15%] z-[10]">
              <Image
                alt="buoni premi auriga"
                src="/concorso-2025/buoni_def.webp"
                width={1920}
                height={1080}
                className="w-[120vw] h-auto object-contain"
              />
            </div>

            {/* foto premi sinistra (MOBILE) */}
            <div className="-mt-[20%] block md:hidden z-[10]">
              <Image
                alt="buoni premi auriga"
                src="/concorso-2025/buoni_Card_mobile.webp"
                width={1920}
                height={1080}
                className="w-[100vw] h-auto object-contain"
              />
            </div>

            {/* sezione premio box tonno (DESKTOP) */}
            <div className="mt-[0%] w-[40%] md:-mt-[14%] z-[10] justify-center hidden md:flex">
              <Image
                alt="buoni premi auriga"
                src="/concorso-2025/box_tonno_latta.webp"
                width={1920}
                height={1080}
                className="w-[50%] md:w-[80%] h-auto object-contain"
              />
            </div>

            {/* sezione premio box tonno (MOBILE) */}
            <div className="mt-[0%] md:-mt-[20%] z-[10] flex justify-center items-center md:hidden">
              <Image
                alt="buoni premi auriga"
                src="/concorso-2025/box_tonno_latta.webp"
                width={1920}
                height={1080}
                className="w-[55vw] h-auto object-contain"
              />
            </div>
          </div>

          <div className="w-full relative -mt-[8%] md:-mt-[8%] flex items-end md:px-16  justify-center">
            <Image
              alt="aereo"
              src="/concorso-2025/full_aereo.svg"
              width={1920}
              height={1080}
              className=" z-[3] bottom-0 pb-[0%] md:-mb-[5%] left-0 w-[100%] lg:w-[80%] h-auo"
            />
          </div>
        </div>

        {/* MAIN CLAIM */}
        <div className="relative">
          {/* svg*/}

          <svg
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 1440 220"
            width="100vw"
            className="absolute z-[9] -mt-1 w-full md:-mt-[3%]"
          >
            <path
              fill="#CE122D"
              d="M0,88.92L120,80.37C240,71.83,480,61.29,720,61.29C960,61.29,1200,71.83,1320,80.37L1440,88.92L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>
        </div>

        {/* SECOND SECTION */}

        {/* claim foto */}
        {/* <div className="flex items-center justify-center ">
          <Image
            src="/concorso-2025/claim_vinci.webp"
            alt="segui il gusto e vinci claim"
            width={1920}
            height={1080}
            className="w-[75%] md:w-[60%] xl:w-[40%] h-auto"
          />
        </div> */}

        {/* Durata/Modalità/Chi partecipa  */}
        <div className="flex mt-[3%] items-start px-8 p-4 gap-8 md:items-center justify-center flex-col md:flex-row">
          {/* durata */}
          <div>
            <h2 className="text-red fontPrimary  md:text-left uppercase text-xl md:text-3xl">
              Durata
            </h2>
            <p className="text-black text_concorso_bold text-center md:text-left text-lg md:text-2xl w-full md:w-[70%]">
              Attiva dal 9 al 22 giugno 2025
            </p>
          </div>

          {/* modalità */}
          <div>
            <h2 className="text-red fontPrimary uppercase text-xl md:text-3xl r md:text-left">
              Modalità
            </h2>
            <p className="text-black text_concorso_bold text-lg md:text-2xl w-full md:w-[70%]  md:text-left">
              Instant Win + Estrazione finale
            </p>
          </div>

          {/* chi può partecipare */}
          <div>
            <h2 className="text-red fontPrimary uppercase text-xl md:text-3xl md:text-left">
              Chi può partecipare
            </h2>
            <p className="text-black text_concorso_bold text-center md:text-left text-lg md:text-2xl w-full md:w-[70%]">
              Persone fisiche maggiorenni
            </p>
          </div>
        </div>

        {/* COME PARTECIPARE */}

        <div className="pl-2 overflow-x-hidden p-0 md:p-8 lg:px-20 md:mt-[5%]">
          <h2 className="text-red px-6 fontPrimary uppercase text-xl md:text-4xl ">
            Come partecipare
          </h2>

          {/* riga step */}
          <div className="flex  items-center justify-start flex-wrap">
            {/* Secondo step */}
            <div className="flex mt-[5%]">
              {/* cerchio step */}
              <div className="bg-yellowDark rounded-full w-[80px] z-10 h-[80px] p-8 flex items-center justify-center">
                <p className="fontPrimary text-red text-2xl">1</p>
              </div>

              {/* card 2*/}
              <div className="rounded-2xl lg:w-[100%] lg:max-w-[400px] max-h-[500px] min-h-[300px]  w-[300px] 2xl:w-[100vw]   bg-yellowLight z-20 -ml-[9%] mt-[9%] border-yellowDark border-2  min-w-[300px] ">
                {/* testo main instruzioni */}
                <div className="h-[70%] pt-2 flex flex-col justify-center items-center flex-wrap gap-16 md:gap-12 relative">
                  <h4 className="fontPrimary uppercase text-red text-3xl mt-4  md:mt-2 lg:text-4xl">
                    Commenta
                  </h4>

                  <Image
                    alt="@tonnoauriga"
                    src="/concorso-2025/vinciAuriga.svg"
                    width={350}
                    height={300}
                    className="absolute right-0 top-12 md:top-10"
                  />

                  <h4 className="fontPrimary uppercase text-red text-3xl mt-6 md:mt-4 z-[88] lg:text-4xl">
                    e tagga un
                  </h4>
                </div>

                {/* testo nel giallo */}
                <div className="relative rounded-b-xl bg-yellowDark w-full h-[20%]  min-h-[90px]">
                  {/* curva */}
                  <div className="w-[100%] border-none flex items-end relative">
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      className="absolute -bottom-2"
                    >
                      <path
                        fill="#FFCE00"
                        fillOpacity="1"
                        d="M0,240L120,220C240,200,480,160,720,160C960,160,1200,200,1320,220L1440,240L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                      ></path>
                    </svg>

                    <Image
                      alt="@tonnoauriga"
                      src="/concorso-2025/amico_testo_light-03.svg"
                      width={100}
                      height={100}
                      className="absolute -top-[50px] md:-top-[60px] left-[5%] md:left-[15%] w-[85%] md:w-[70%] h-auto z-[666]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Terzo step */}
            <div className="flex mt-[5%]">
              {/* cerchio step */}
              <div className="bg-yellowDark rounded-full w-[80px] z-10 h-[80px] p-8 flex items-center justify-center">
                <p className="fontPrimary text-red text-2xl">2</p>
              </div>

              {/* card 3*/}
              <div className="rounded-2xl lg:w-[100%] lg:max-w-[400px] max-h-[500px] min-h-[300px]  w-[300px]  2xl:w-[100vw] bg-yellowLight z-20 -ml-[9%] mt-[9%] border-yellowDark border-2  min-w-[300px] ">
                {/* testo main instruzioni */}
                <div className="h-[70%] flex items-center flex-wrap justify-center">
                  <h4 className="fontPrimary uppercase text-red text-center text-3xl mt-2 lg:text-4xl text-balance">
                    Completa gli step in
                  </h4>
                </div>

                {/* testo nel giallo */}
                <div className="relative rounded-b-xl bg-yellowDark w-full  min-h-[90px]">
                  {/* curva */}
                  <div className="w-[100%] border-none flex items-end relative">
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      className="absolute -top-16 md:-top-20"
                    >
                      <path
                        fill="#FFCE00"
                        fillOpacity="1"
                        d="M0,240L120,220C240,200,480,160,720,160C960,160,1200,200,1320,220L1440,240L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                      ></path>
                    </svg>

                    <Image
                      alt="chat testo"
                      width={100}
                      height={100}
                      src="/concorso-2025/chat_testo.svg"
                      className="w-[85%] absolute -top-[40px] left-[5%] md:left-[20%] md:w-[60%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* REGOLAMENTO (Premi instant win) */}
        <div className="flex flex-wrap  gap-2 items-center justify-center">
          {/* descrizione premi */}
          <div className="p-8 lg:p-2 mt-[5%] lg:w-[50%] flex flex-col gap-2">
            <h2 className="text-red fontPrimary uppercase text-xl md:text-4xl">
              Premi Instant Win (15 in totale)
            </h2>

            <ul className="text_concorso_bold text-md list-disc pl-6 mt-4">
              <li>5 x Gift Card Kasanova da €50 + fornitura di Tonno Auriga</li>
              <li>
                5 x Gift Card MediaWorld da €50 + fornitura di Tonno Auriga
              </li>
              <li>
                5 x Gift Card Decathlon da €50 + fornitura di Tonno Auriga
              </li>
            </ul>

            <p>
              Le Gift Card in palio sono da considerarsi IVA compresa e dovranno
              essere riscattate dai vincitori esclusivamente sui siti ufficiali
              o presso i punti vendita dei rispettivi marchi. Non sono
              sostituibili, non sono cedibili, non danno diritto a resto, non
              sono rimborsabili e non sono convertibili in denaro. Le stesse
              avranno una validità di 24 mesi, decorrenti dalla data di consegna
              ai vincitori.
            </p>

            <ul className="text_concorso_bold text-md list-disc pl-6 mt-4">
              Contenuto del box Auriga:
              <li>3x Tonno Leggero 60g</li>
              <li>3x Tonno Filolio 65g</li>
              <li>3x Tonno Olio di oliva 70g</li>
              <li>1x Tonno Olio di oliva 220g</li>
            </ul>
          </div>

          {/* foto premi */}
          <div className="">
            <Image
              alt="foto premi Auriga"
              src="/concorso-2025/composizione_premi_new.webp"
              width={1920}
              height={1080}
              className="w-[100vw] lg:w-[40vw] h-auto"
            />
          </div>
        </div>

        {/* REGOLAMENTO (Estrazione finale) */}
        <div className="p-8 lg:px-20 mt-[5%] flex flex-col gap-4">
          <h2 className="text-red fontPrimary uppercase text-xl md:text-4xl">
            Estrazione finale
          </h2>

          {/* descrizione + foto */}
          <div className="flex lg:-mt-[5%] flex-col-reverse lg:flex-row md:items-end">
            <Image
              alt="premio viaggio"
              src="/concorso-2025/viaggio_piccolo_item.svg"
              width={1920}
              height={1080}
              className="w-[100%] md:w-[50%] lg:w-[30vw]  -mt-[15%] md:mt-0"
            />

            <div className="flex flex-col gap-2 lg:w-[30%] mb-[2%]">
              <p>
                Lestrazione finale è aperta a tutti i partecipanti su Instagram,
                Facebook e TikTok che hanno commentato i post del concorso.
              </p>
              <p>
                Premio in palio:
                <span className="text_concorso_bold ml-1">
                  1 x Gift Card Viaggio da €400 + box Tonno Auriga
                </span>
              </p>
            </div>
          </div>

          {/* descrizione */}
          <div className="lg:max-w-[900px]">
            <p>
              La Gift Card Viaggio dovrà essere riscattata dal vincitore nella
              modalità descritta qui di seguito e comunicata al vincitore in
              fase di consegna del premio:
            </p>

            <ul className=" text-md list-disc pl-6 mt-4">
              <li>
                Visitare uno dei seguenti siti:
                https://www.cartaregalo.it/controlla-il-credito/ o
                https://www.giftcards.it/controlla-il-credito/
              </li>
              <li>
                Inserire il codice a 19 cifre che si trova sulla carta regalo
              </li>
              <li>
                Assicurarsi che la carta sia registrata prima della scadenza
              </li>
              <li>Cliccare su ‘Controlla il tuo saldo’ per procedere</li>
              <li>
                Nella pagina successiva selezionare il brand presso il quale si
                desidera utilizzare il credito
              </li>
              <li>
                Inserire l’importo desiderato e cliccare su “Sto per fare un
                ordine”
              </li>
              <li>
                Si riceverà un voucher all’indirizzo e-mail fornito, che dovrà
                essere utilizzato esclusivamente presso il brand scelto, secondo
                le condizioni stabilite dal brand stesso
              </li>
            </ul>
          </div>

          {/* altra descrizione */}
          <div className="flex flex-col gap-2 lg:max-w-[900px]">
            <p>
              In generale tutti i premi in palio non sono cedibili, non sono
              sostituibili, non sono convertibili in voucher sconto o in danaro,
              né è data facoltà al vincitore di richiedere, con o senza
              l’aggiunta di danaro, la possibilità di ricevere un premio diverso
              anche se di minor valore.
            </p>
            <p>
              Nel caso in cui i premi in palio abbiano subito per cause di forza
              maggiore non dipendenti dalla Società Promotrice, delle
              modifiche/aggiornamenti di forma o sostanza rispetto a quello
              promesso, oppure qualora gli stessi non siano più attivabili, la
              Società Promotrice si impegna a consegnare al partecipante un
              premio di pari o maggior valore.
            </p>
          </div>
        </div>

        {/* REGOLAMENTO (Validazione e consegna) */}
        <div className="flex flex-wrap gap-2 items-center">
          {/* descrizione premi */}
          <div className="p-8  lg:px-20  mt-[5%] flex flex-col gap-2 lg:max-w-[900px]">
            <h2 className="text-red fontPrimary uppercase text-xl md:text-4xl">
              Validazione e consegna dei premi
            </h2>

            <p>
              I vincitori saranno contattati via social (e-mail o telefono se
              disponibili). I premi saranno consegnati entro 180 giorni. È
              richiesto un documento valido per convalidare la vincita.
            </p>
          </div>
        </div>

        {/* REGOLAMENTO (Trattamento) */}

        <div className="flex flex-wrap gap-2 items-center r">
          {/* descrizione premi */}
          <div className="p-8 lg:px-20  mt-[5%] flex flex-col gap-2">
            <h2 className="text-red fontPrimary uppercase text-xl md:text-4xl">
              Trattamento dei dati personali
            </h2>

            <ul className="text-md list-disc pl-6 mt-4">
              <li>I dati saranno trattati nel rispetto del GDPR</li>
              <li>I dati dei partecipanti non saranno diffusi</li>
              <li>I vincitori saranno verbalizzati da un pubblico ufficiale</li>
              <li>
                È possibile richiedere rettifica o cancellazione dei propri dati
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* PULSANTI SOCIAL */}
      <div className=" w-[100%] fixed bottom-2  flex items-center justify-center z-[9999]">
        <div className="bg-yellowDark rounded-full p-2 w-[60%] lg:w-[30%] flex  flex-col items-center justify-center h-full">
          <h3 className="fontPrimary text-red uppercase text-xl lg:text-4xl">
            Partecipa
          </h3>
          <div className="flex items-center justify-center">
            <Link
              className=" max-w-fit w-fit"
              href={"https://www.facebook.com/tonnoauriga/"}
              target="_blank"
            >
              <Image
                alt="icona Facebook"
                src="/concorso-2025/facebook_icon.svg"
                width={30}
                height={30}
                className=" w-[30px] lg:w-[45px]"
              />
            </Link>

            <Link
              className="w-fit"
              href={"https://www.instagram.com/tonnoauriga/"}
              target="_blank"
            >
              <Image
                alt="icona Facebook"
                src="/concorso-2025/instagram_icon.svg"
                width={40}
                height={40}
                className="w-[40px] lg:w-[55px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
