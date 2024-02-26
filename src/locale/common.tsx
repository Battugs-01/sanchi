export const getTranslation = (locale: string, key: string) => {
  return (translationData as any)[locale][key];
};

const translationData = {
  mn: {
    home: "Нүүр",
    about: "Бидний тухай",
    services: "Бүтээгдэхүүн үйлчилгээ",
    news: "Мэдээ мэдээлэл",
    contact: "Холбоо барих",
    human_resources: "Ажлын байр",
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    news: "News",
    contact: "Contact",
    human_resources: "Human Resources",
  },
};
