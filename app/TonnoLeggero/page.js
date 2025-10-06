import LeggeroClient from "../components/LeggeroClient";

export const metadata = {
  title: "Tonno Auriga - Tonno per Passione - Tonno Leggero",
  description:
    "Scopri il Tonno Leggero di Tonno Auriga, alternativa sana e gustosa per chi cerca un prodotto con meno grassi. Perfetto per insalate, sandwich e piatti leggeri, offre un sapore autentico e una qualità superiore.",
  openGraph: {
    title: "Tonno Auriga - Tonno per Passione - Tonno Leggero",
    description:
      "Il vero tonno lavorato in Sicilia. Qui maturiamo la nostra esperienza con la pesca e la lavorazione del tonno rosso. Oggi quell’esperienza è tutta in Auriga, tonno a pinne gialle di provenienza oceanica lavorato completamente in Sicilia.",
    url: "https://www.tonnoauriga.it",
    images: [
      {
        url: "https://www.tonnohttps://www.tonnoauriga.it/wp/wp-content/uploads/2024/10/Tonno_Auriga_prodotti.webp",
        width: 1200,
        height: 630,
        alt: "Tonno Auriga",
      },
    ],
    siteName: "Tonno Auriga - Tonno per Passione",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tonno Auriga - Tonno per Passione - Tonno Leggero",
    description:
      "Il vero tonno lavorato in Sicilia. Qui maturiamo la nostra esperienza con la pesca e la lavorazione del tonno rosso. Oggi quell’esperienza è tutta in Auriga, tonno a pinne gialle di provenienza oceanica lavorato completamente in Sicilia.",
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
    "@id": "https://www.tonnoauriga.it/TonnoLeggero/",
  },
  headline: "Tonno Leggero - Tonno in scatola senza conservanti",
  description:
    "Il vero tonno lavorato in Sicilia. Qui maturiamo la nostra esperienza con la pesca e la lavorazione del tonno rosso. Oggi quell’esperienza è tutta in Auriga, tonno a pinne gialle di provenienza oceanica lavorato completamente in Sicilia.",
  image: "https://www.tonnoauriga.it/prodotti/leggero.webp",
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

export default function Leggero() {
  return (
    <>
      <LeggeroClient />

      <script
        id="organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      ></script>
    </>
  );
}
