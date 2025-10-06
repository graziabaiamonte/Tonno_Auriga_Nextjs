import ContattiClient from "../components/ContattiClient";

export const metadata = {
  title: "Tonno Auriga, Il vero tonno lavorato in Sicilia - Contatti",
  description:
    "Contatta Tonno Auriga per informazioni sui nostri prodotti di alta qualità. Siamo a tua disposizione per richieste, supporto clienti e collaborazioni commerciali. Scrivici o chiamaci!",
  openGraph: {
    title: "Tonno Auriga - Tonno per Passione",
    description:
      "Contatta Tonno Auriga per informazioni sui nostri prodotti di alta qualità. Siamo a tua disposizione per richieste, supporto clienti e collaborazioni commerciali. Scrivici o chiamaci!",
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
    title: "Tonno Auriga - Tonno per Passione",
    description:
      "Contatta Tonno Auriga per informazioni sui nostri prodotti di alta qualità. Siamo a tua disposizione per richieste, supporto clienti e collaborazioni commerciali. Scrivici o chiamaci!",
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
    "Il vero tonno lavorato in Sicilia, frutto di anni di esperienza nella pesca e nella lavorazione. Auriga porta la tradizione siciliana nel tuo piatto.",
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

export default function Contatti() {
  return (
    <>
      <ContattiClient />

      <script
        id="organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      ></script>
    </>
  );
}
