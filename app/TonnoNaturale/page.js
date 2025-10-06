import NaturaleClient from "../components/NaturaleClient";

export const metadata = {
  title: "Tonno Auriga - Tonno per Passione - Tonno al Naturale",
  description:
    "Scopri il Tonno al Naturale di Tonno Auriga, realizzato con ingredienti freschi e senza additivi. Perfetto per chi cerca un prodotto sano e versatile, ideale per insalate, piatti freddi e ricette gourmet.",
  openGraph: {
    title: "Tonno Auriga - Tonno per Passione - Tonno al Naturale",
    description:
      "Scopri il Tonno al Naturale di Tonno Auriga, realizzato con ingredienti freschi e senza additivi. Perfetto per chi cerca un prodotto sano e versatile, ideale per insalate, piatti freddi e ricette gourmet.",
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
    title: "Tonno Auriga - Tonno per Passione - Tonno al Naturale",
    description:
      "Scopri il Tonno al Naturale di Tonno Auriga, realizzato con ingredienti freschi e senza additivi. Perfetto per chi cerca un prodotto sano e versatile, ideale per insalate, piatti freddi e ricette gourmet.",
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
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.tonnoauriga.it/TonnoNaturale/",
  },
  headline: "Tonno Leggero - Tonno in scatola senza conservanti",
  description:
    "Il vero tonno lavorato in Sicilia. Qui maturiamo la nostra esperienza con la pesca e la lavorazione del tonno rosso. Oggi quell’esperienza è tutta in Auriga, tonno a pinne gialle di provenienza oceanica lavorato completamente in Sicilia.",
  image: "https://www.tonnoauriga.it/prodotti/naturale.webp",
  author: {
    "@type": "Organization",
    name: "Auriga",
    url: "https://www.linkedin.com/company/tonno-auriga",
  },
  publisher: {
    "@type": "Organization",
    name: "Auriga",
    logo: {
      "@type": "ImageObject",
      url: "https://www.tonnoauriga.it/img/logo.webp",
    },
  },
  datePublished: "",
};

export default function Naturale() {
  return (
    <>
      <NaturaleClient />

      <script
        id="organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      ></script>
    </>
  );
}
