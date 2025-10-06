import ProdottiClient from "../components/ProdottiClient";

export const metadata = {
  title: "Tonno Auriga - Tonno per Passione - I nostri prodotti",
  description:
    "Esplora la gamma di prodotti Tonno Auriga, realizzati con tonno di alta qualità e lavorati secondo la tradizione. Scopri le nostre gustose e sostenibili proposte, specialità dal mare.",
  openGraph: {
    title: "Tonno Auriga - Tonno per Passione -  I nostri prodotti",
    description:
      "Esplora la gamma di prodotti Tonno Auriga, realizzati con tonno di alta qualità e lavorati secondo la tradizione. Scopri le nostre gustose e sostenibili proposte, specialità dal mare.",
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
    title: "Tonno Auriga - Tonno per Passione -  I nostri prodotti",
    description:
      "Esplora la gamma di prodotti Tonno Auriga, realizzati con tonno di alta qualità e lavorati secondo la tradizione. Scopri le nostre gustose e sostenibili proposte, specialità dal mare.",
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
    "Esplora la gamma di prodotti Tonno Auriga, realizzati con tonno di alta qualità e lavorati secondo la tradizione. Scopri le nostre gustose e sostenibili proposte, specialità dal mare.",
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

export default function Prodotti() {
  return (
    <>
      <ProdottiClient />

      <script
        id="organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      ></script>
    </>
  );
}
