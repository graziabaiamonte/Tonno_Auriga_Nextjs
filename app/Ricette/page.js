"use cilient";
import Image from "next/image";
import SearchBar from "../components/SearchBar";
export const metadata = {
  title: "Tonno Auriga - Tonno per Passione - Ricette",
  description:
    "Scopri deliziose ricette con Tonno Auriga. Idee creative e facili da preparare per portare in tavola piatti gustosi e salutari, realizzati con il nostro tonno di qualità.",
  openGraph: {
    title: "Tonno Auriga - Tonno per Passione - Ricette",
    description:
      "Scopri deliziose ricette con Tonno Auriga. Idee creative e facili da preparare per portare in tavola piatti gustosi e salutari, realizzati con il nostro tonno di qualità.",
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
    title: "Tonno Auriga - Tonno per Passione - Ricette",
    description:
      "Scopri deliziose ricette con Tonno Auriga. Idee creative e facili da preparare per portare in tavola piatti gustosi e salutari, realizzati con il nostro tonno di qualità.",
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
  "@type": "Organization",
  name: "Tonno Auriga",
  url: "https://www.tonnoauriga.it",
  logo: "https://www.tonnoauriga.it/wp/wp-content/uploads/2024/10/Tonno_Auriga_prodotti.webp",
  image:
    "https://www.tonnoauriga.it/wp/wp-content/uploads/2024/10/Tonno_Auriga_prodotti.webp",
  description:
    "Scopri deliziose ricette con Tonno Auriga. Idee creative e facili da preparare per portare in tavola piatti gustosi e salutari, realizzati con il nostro tonno di qualità..",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Contrada San Cusumano",
    addressLocality: "Erice (TP)",
    postalCode: "91016",
    addressCountry: "IT",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+39 0923562888",
    contactType: "customer service",
    email: "info@ninocastiglione.it",
  },
  sameAs: [
    "https://www.facebook.com/tonnoauriga",
    "https://www.instagram.com/tonnoauriga",
    "https://www.linkedin.com/company/tonno-auriga",
  ],
  brand: {
    "@type": "Brand",
    name: "Tonno Auriga",
  },
  founder: {
    "@type": "Person",
    name: "Famiglia Castiglione",
  },
  foundingDate: "1950",
};

export default async function Ricette() {
  return (
    <>
      {/* HERO */}
      <div className="h-[85vh] flex items-end justify-center ">
        {/* desktop */}
        <Image
          alt="Foto ricetta ai peperoni"
          src="/img/ricetteDesk.webp"
          width={30}
          height={30}
          className="w-full h-full object-cover hidden md:block"
        />

        {/* mobile */}
        <Image
          alt="Foto ricetta ai peperoni"
          src="/img/ricettaHero1.webp"
          width={30}
          height={30}
          className=" h-full w-full object-cover md:hidden"
        />
      </div>

      {/* Barra di ricerca */}
      <div className="w-full z-[800]">
        <h1 className="fontPrimary text-yellowDark uppercase items-center text-center text-3xl md:text-5xl lg:text-[5rem] 2xl:text-[7rem] mb-[5%] mt-[1%] ">
          Ricette
        </h1>
        <SearchBar />
      </div>

      <script
        id="organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      ></script>
    </>
  );
}
