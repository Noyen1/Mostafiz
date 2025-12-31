// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      "home.heroTitle": "Trusted Garments Buying House",
      "home.heroSubtitle": "We source quality garments from Bangladesh for global buyers",
      "services.title": "Our Services",
      "services.sourcingTitle": "Sourcing & Procurement",
      "services.sourcingDescription": "We connect you with the best garment manufacturers ensuring competitive pricing and quality.",
      // add more keys for other services...
    },
  },
  bn: {
    translation: {
      home: "হোম",
      about: "আমাদের সম্পর্কে",
      services: "সেবা সমূহ",
      contact: "যোগাযোগ",
      "home.heroTitle": "বিশ্বস্ত গার্মেন্টস বায়িং হাউস",
      "home.heroSubtitle": "বাংলাদেশ থেকে আন্তর্জাতিক ক্রেতাদের জন্য মানসম্পন্ন গার্মেন্টস সরবরাহ",
      "services.title": "আমাদের সেবা সমূহ",
      "services.sourcingTitle": "সোর্সিং ও প্রোকিউরমেন্ট",
      "services.sourcingDescription": "আমরা আপনাকে সেরা গার্মেন্ট প্রস্তুতকারকদের সাথে যুক্ত করি প্রতিযোগিতামূলক মূল্য ও গুণগত মান নিশ্চিত করে।",
      // add more keys for other services...
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
