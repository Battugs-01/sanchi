export const getTranslation = (locale: string, key: string) => {
  return (translationData as any)[locale][key];
};

const translationData = {
  mn: {
    home: "Нүүр",
    about: "Бидний тухай",
    services: "Бүтээгдэхүүн үйлчилгээ",
    "https://til.digitalpress.blog/": "Мэдээ мэдээлэл",
    contact: "Холбоо барих",
    human_resources: "Ажлын байр",
    greeting: "Захиралын мэндчилгээ",
    story: "Бидний түүх",
    services1: "Олон улсын тээвэр зуучлал",
    services2: "Гаалийн терминал",
    services3: "Гаалийн зуучлал",
    detail: "Дэлгэрэнгүй",
  },
  en: {
    home: "Home",
    detail: "Detail",
    about: "About",
    services: "Services",
    "https://til.digitalpress.blog/": "News",
    contact: "Contact",
    human_resources: "Human Resources",
    greeting: "Director's Greeting",
    story: "Our Story",
    services1: "Global Logistic Services",
    services2: "Customs terminal managment",
    services3: "Customs intermediation service",
  },
};
