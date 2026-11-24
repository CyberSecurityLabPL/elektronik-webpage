/**
 * Static content of the landing page sections that are NOT (yet) managed in Strapi.
 *
 * Hero, News, Map and FAQ still come from Strapi (`/api/landing-page`).
 * Everything below can be edited here directly.
 *
 * IMAGES
 *  - Put files into `frontend/public/landing/` and set `src` to e.g. "/landing/kadra-1.jpg".
 *  - While `src` is `null`, a neutral placeholder is rendered in its place.
 *  - Strapi uploads can also be used: "/cms/uploads/<file>.jpg".
 */

export type LandingImage = {
  /** Path to the image, `null` renders a placeholder. */
  src: string | null
  /** Alternative text (also shown on the placeholder). */
  alt: string
}

export type LandingLink = {
  title: string
  href: string
  isExternal?: boolean
}

/* -------------------------------------------------------------------------- */
/*  "Chcesz być na bieżąco?" – mobile app promo                               */
/* -------------------------------------------------------------------------- */

export const appPromo = {
  sectionId: "aplikacja",
  title: "Chcesz być na bieżąco?",
  description:
    "Aplikacja Elektronik to niezastąpione narzędzie dla każdego ucznia. Dzięki niej zawsze wiesz, ile czasu zostało do końca lekcji, i nie przegapisz żadnego ogłoszenia ani wydarzenia. Wszystko to masz pod ręką w przejrzystym, nowoczesnym interfejsie!",
  featuresTitle: "Co zyskujesz z aplikacją Elektronik?",
  features: [
    {
      title: "Aktualności na bieżąco",
      text: "Bądź pierwszy i dowiedz się o najnowszych informacjach.",
    },
    {
      title: "Plan w zasięgu ręki",
      text: "Sprawdzaj plan lekcji, kiedy tylko chcesz.",
    },
    {
      title: "Kalendarz wydarzeń",
      text: "Wyczekuj zbliżających się wydarzeń szkolnych.",
    },
    {
      title: "Tablica zastępstw",
      text: "Sprawdź zastępstwa na dziś lub na kolejne dni.",
    },
  ],
  featuresFooter: "…oraz wiele więcej!",
  stores: {
    googlePlay: "#", // TODO: link do Google Play
    appStore: "#", // TODO: link do App Store
  },
  note: "Aplikacja jest bezpłatna dla wszystkich uczniów.",
  qrCode: {
    src: null, // TODO: np. "/landing/app-qr.png"
    alt: "Kod QR do pobrania aplikacji",
  } as LandingImage,
  qrCaption: "Zeskanuj i pobierz",
  /** Screenshots shown inside the phone mockups (portrait, ~9:19.5). */
  screens: {
    front: {
      src: null, // TODO: np. "/landing/app-home.png"
      alt: "Ekran główny aplikacji",
    } as LandingImage,
    back: {
      src: null, // TODO: np. "/landing/app-plan.png"
      alt: "Plan lekcji w aplikacji",
    } as LandingImage,
  },
}

/* -------------------------------------------------------------------------- */
/*  "Dlaczego warto wybrać Elektrona?" – tabs                                  */
/* -------------------------------------------------------------------------- */

export type WhyUsTab = {
  /** Label shown in the tab list. */
  label: string
  title: string
  description: string
  link?: LandingLink
  /** Exactly two photos: [main (bottom-left), secondary (top-right)]. */
  images: [LandingImage, LandingImage]
}

export const whyUs = {
  // "overview" – the hero's secondary button in Strapi links to "#overview"
  sectionId: "overview",
  /** The highlighted word must be a part of the title. */
  title: "Dlaczego warto wybrać Elektrona?",
  highlight: "Elektrona",
  tabs: [
    {
      label: "Nauczyciele",
      title: "Najlepsza kadra",
      description:
        "Uczą nas pasjonaci – nauczyciele z wieloletnim doświadczeniem dydaktycznym i zawodowym. Chętnie pomagają, przygotowują do egzaminów i konkursów, a po lekcjach prowadzą koła zainteresowań. U nas nikt nie zostaje sam z trudnym tematem.",
      link: { title: "Poznaj kadrę", href: "/kadra" },
      images: [
        { src: null, alt: "Nauczyciel podczas lekcji" },
        { src: null, alt: "Nauczyciele pomagający uczniom" },
      ],
    },
    {
      label: "Sale",
      title: "Nowoczesne pracownie",
      description:
        "Jasne, świeżo wyremontowane sale lekcyjne i specjalistyczne pracownie: informatyczne, elektroniczne, mechatroniczne i samochodowe. Uczysz się w warunkach, które przypominają prawdziwe miejsce pracy.",
      link: { title: "Zobacz galerię", href: "/galeria" },
      images: [
        { src: null, alt: "Pracownia komputerowa" },
        { src: null, alt: "Sala lekcyjna" },
      ],
    },
    {
      label: "Wyposażenie",
      title: "Sprzęt jak w firmie",
      description:
        "Stacje lutownicze, sterowniki PLC, drukarki 3D, serwery, roboty i diagnostyka samochodowa – na zajęciach pracujesz na sprzęcie, który spotkasz później w pracy. Teoria od razu zamienia się w praktykę.",
      link: { title: "Kierunki kształcenia", href: "/nabor" },
      images: [
        { src: null, alt: "Uczniowie przy stanowisku elektronicznym" },
        { src: null, alt: "Wyposażenie pracowni" },
      ],
    },
    {
      label: "Zajęcia dodatkowe",
      title: "Rozwijaj pasje po lekcjach",
      description:
        "Koła zainteresowań, zawody sportowe, turnieje e-sportowe, konkursy branżowe i wyjazdy. Każdy znajdzie coś dla siebie – a nasi uczniowie regularnie zdobywają nagrody w olimpiadach i konkursach.",
      link: { title: "Nasze osiągnięcia", href: "/osiagniecia" },
      images: [
        { src: null, alt: "Uczniowie na zajęciach dodatkowych" },
        { src: null, alt: "Zawody szkolne" },
      ],
    },
  ] satisfies WhyUsTab[],
}

/* -------------------------------------------------------------------------- */
/*  "Kierunki kształcenia" – programs overview                                */
/* -------------------------------------------------------------------------- */

export type ProgramIcon =
  | "code"
  | "server"
  | "cpu"
  | "bot"
  | "sun"
  | "car"
  | "wrench"
  | "graduation"

/**
 * The list of programs itself (name, number of places, classes, link) comes
 * from Strapi – the same data as on `/nabor` (`/api/recruitments-page`).
 * Here we only add the visual "wrapping": an icon and a short tagline.
 * A profession matches the first entry whose `match` fragment is contained
 * in its name (case-insensitive). Unknown professions get `fallback`.
 */
export const programs = {
  sectionId: "kierunki",
  eyebrow: "Rekrutacja",
  title: "Wybierz kierunek dla siebie",
  highlight: "kierunek",
  description:
    "Technikum i szkoła branżowa – kierunki, po których masz zawód w ręku i otwartą drogę na studia. Kliknij, żeby dowiedzieć się więcej.",
  link: { title: "Pełna oferta naboru", href: "/nabor" } as LandingLink,
  cta: {
    title: "Nie wiesz, co wybrać?",
    description:
      "Przyjdź na dzień otwarty albo napisz do nas – pomożemy dobrać kierunek do Twoich zainteresowań.",
    link: { title: "Napisz do nas", href: "/kontakt" } as LandingLink,
    secondary: {
      title: "Kalkulator punktów",
      href: "https://nabor.pcss.pl/zielonagora/szkolaponadpodstawowa/Informator/Calkulator",
      isExternal: true,
    } as LandingLink,
  },
  highlights: [
    {
      match: ["programist"],
      icon: "code",
      tagline: "Aplikacje, gry i strony – od pomysłu do działającego kodu.",
    },
    {
      match: ["informatyk"],
      icon: "server",
      tagline: "Sieci, serwery i sprzęt komputerowy od podszewki.",
    },
    {
      match: ["mechatronik"],
      icon: "bot",
      tagline: "Robotyka, automatyka i sterowniki PLC w praktyce.",
    },
    {
      match: ["elektronik"],
      icon: "cpu",
      tagline: "Układy, mikrokontrolery i lutownica zawsze pod ręką.",
    },
    {
      match: ["energetyk", "odnawialn"],
      icon: "sun",
      tagline: "Fotowoltaika, pompy ciepła i energia przyszłości.",
    },
    {
      match: ["mechanik"],
      icon: "wrench",
      tagline: "Naprawa i obsługa samochodów w nowoczesnym warsztacie.",
    },
    {
      match: ["pojazd", "samochod"],
      icon: "car",
      tagline: "Diagnostyka i elektronika nowoczesnych samochodów.",
    },
  ] as { match: string[]; icon: ProgramIcon; tagline: string }[],
  fallback: { icon: "graduation", tagline: "" } as {
    icon: ProgramIcon
    tagline: string
  },
}

/* -------------------------------------------------------------------------- */
/*  "Jesteśmy dla was już od…" – stats                                         */
/* -------------------------------------------------------------------------- */

export const stats = {
  sectionId: "liczby",
  titleLead: "Jesteśmy dla was już od",
  titleHighlight: "80 lat",
  items: [
    // `value` is animated (count-up), `prefix`/`suffix` are rendered as is.
    { value: 95, suffix: "%", label: "zdawalności matur" },
    { value: 230, suffix: " tys.", label: "absolwentów Elektronika" },
    { value: 87, suffix: "%", label: "zdawalności egzaminów zawodowych" },
  ],
}

/* -------------------------------------------------------------------------- */
/*  "Elektronik to coś więcej niż tylko szkoła" – quote                        */
/* -------------------------------------------------------------------------- */

export const aboutQuote = {
  sectionId: "o-nas",
  highlight: "Elektronik",
  title: "to coś więcej niż tylko szkoła",
  description:
    "To miejsce, w którym zawiera się przyjaźnie na lata, odkrywa swoje talenty i zdobywa zawód z przyszłością. Dołącz do społeczności Elektronika i przekonaj się sam!",
  link: { title: "Dołącz do nas", href: "/nabor" } as LandingLink,
  image: {
    src: null, // TODO: np. "/landing/budynek-szkoly.jpg"
    alt: "Budynek szkoły Elektronik",
  } as LandingImage,
}

/* -------------------------------------------------------------------------- */
/*  Map – extra info (contact data itself comes from Strapi)                   */
/* -------------------------------------------------------------------------- */

export const mapExtras = {
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=CKZiU+Elektronik+Staszica+2+Zielona+G%C3%B3ra",
  transport: [
    { type: "train", label: "Dworzec PKP", detail: "kilka minut pieszo" },
    { type: "bus", label: "Centrum przesiadkowe MZK", detail: "tuż obok szkoły" },
  ] as { type: "train" | "bus"; label: string; detail: string }[],
}
