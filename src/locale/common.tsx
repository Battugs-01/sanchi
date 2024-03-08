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
    a: "ТЭЭВЭР ЗУУЧЛАЛЫН ЦОГЦ ШИЙДЭЛ",
    hero_description:
      "Олон жилийн туршлагатай манай хамт олон харилцагч таны ачааг дэлхийн өнцөг булан бүрээс гадаад агентын өргөн сүлжээгээ ашиглан тээвэрлэлтийн бүхий л чиглэлд хүссэн хэмжээгээр далай, төмөр зам, авто зам зэрэг сувгуудаар улс хооронд тээвэрлэх ачаа тээврийн үйлчилгээг санал болгож байна.",
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
    a: "INTEGRATED LOGISTICS SOLUTIONS",
    hero_description:
      "With many years of experience, our team offers cargo transportation services to our customers from all over the world using our wide network of foreign agents in all directions of transportation.",
  },
};
