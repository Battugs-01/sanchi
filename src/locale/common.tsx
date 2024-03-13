export const getTranslation = (locale: string, key: string) => {
  return (translationData as any)[locale][key];
};

const translationData = {
  mn: {
    boss: "Тээврийн хэлтсийн дарга",
    boss1: "Дарга",
    meneger: "Тээврийн менежер",
    partners: "Хамтрагч ",
    XXK: "Байгууллагууд ",
    simple_container: "Энгийн чингэлэг",
    seven_days: "7 хоног тутамд",
    seven_days3: "7 хоногт 2-3 удаа",
    fourten_days: "14 Хоног тутамд",
    day_text2: "Темп/Тохируулгатай чингэлэг",
    tir_truck: "ТИР машины авто тээвэр",
    china: "БНХАУ-ААС",
    ewrope: 'ЕВРОПЫН УЛС, ХОТУУДААС"',
    turk: "БНТУ-ААС",
    korea: "БНСУ-аас",
    china_description:
      "Хятад улсын бүх хотуудаас өөрийн агентаар дамжуулан Эрээн хотын агуулахад татан цуглуулж Улаанбаатар хот хүртэл тээвэрлэх түүвэр чингэлгийн тээвэр",
    ewrope_description:
      "Европын улс, хотуудаас өөрийн төлөөлөгчөөр дамжуулан Бэрлин хотын агуулаха дтатан цуглуулж Улаанбаатар хот хүртэл тээвэрлэх түүвэр чингэлгийн тээвэр",
    turk_description:
      "Турк улсын Истанбул дахь өөрийн агентын агуулахад татан цуглуулж чингэлгээр болон ТИР автомашинаар тээвэрлэх цуглуулбар ачааны тээвэр",
    korea_description:
      "Солонгос улсын Инчон боомтоос ачигдан Улаанбаатар хотод ирэх түүвэр чингэлгийн тээвэр",
    leadership: "Манлайлал",
    skill: "Ур чадвар",
    team: "Хамт олон",
    hearth: "Сэтгэл зүрх",
    what_do_we_do:
      "Бид өөрсдийн үйлчилгээндээ сэтгэл зүрхээ шингээж ажилдаг хамт олон.",
    our_vision: "АЛСЫН ХАРАА",
    our_vision1:
      "Инноваци шингээсэн, дэлхийн энтэй тээвэр логистикийн төгс шийдлийг бизнес бүрт хүргэнэ.",
    our_mission: "ЭРХЭМ ЗОРИЛГО",
    our_mission1:
      "Тээвэр логистикийн салбарт олон улсын түвшинд өрсөлдөхүйц цогц үйлчилгээ нэвтрүүлсэн компани байж харилцагчдынхаа бизнесийн амжилтад хувь нэмрээ оруулна.",
    our_values: "ҮНЭТ ЗҮЙЛС",
    our_values1:
      "Өөриймсөг сэтгэлгээ, үнэнч шударга зарчим Бие биенээ хүндэтгэж, ил тод байдлыг эрхэмлэж, аливаад хариуцлагатай, сэтгэл гарган, зөв хандлагаар уялдаа холбоотой хамтран ажиллах, гар нийлсэн бүтээлч хамт олон",
    company_expereince: "жилийн ажлын туршлага",
    company_different1: "Хөрөнгө оруулалтын чадавхитай үндэсний компани",
    company_different2:
      "Харилцагчийн тав тухыг хангасан өөрийн эзэмшлийн терминалын талбай",
    company_different3:
      "Терминалын үйлчилгээний мэргэшсэн, чадварлаг ажилтнууд",
    company_different: "БИДНИЙ ДАВУУ ТАЛ",
    company_what: "Бид юу хийдэг вэ?",
    company_what1:
      "Бид бизнес эрхлэгчдийн гадаад худалдааны тээвэрлэлтийг зохион байгуулж, ОУ-ын стандарт, МУ-ын хууль тогтоомжийн хүрээнд хөнгөвчлөх, зуучлах цогц үйлчилгээг үзүүлэгч үндэсний компани юм.",
    company_intro: "КОМПАНИЙН ТАНИЛЦУУЛГА",
    company_intro_1:
      "“ТИ АЙ ЛОЖИСТИК” ХХК нь 2011 онд 100 хувийн дотоодын хөрөнгө оруулалттайгаар байгуулагдсан үндэсний тээвэр зуучийн компаниудын нэг юм. Улаанбаатар хотын А зэрэглэлийн бүсэд байрлах өөрийн эзэмшлийн “Нэг цэгийн үйлчилгээ” бүхий “ТЭЭВЭР ҮЙЛЧИЛГЭЭНИЙ ЦОГЦОЛБОР”-т гаалийн хяналтын бүс, стандартын шаардлага хангасан гаалийн баталгаат болон түр агуулах ажиллуулан тээвэр логистикийн цогц үйлчилгээг үзүүлж байна. Бид дэлхийн улс орнуудад байрлах агентын өргөн сүлжээгээ ашиглан үйлчлүүлэгчиддээ авто, агаар, далай, төмөр замын бүх төрлийн тээврийн замналаар улс хоорондын болон орон нутгийн ачаа тээврийг хаалганаас хаалганд хүргэн үйлчилдэг. Компанийн урт хугацааны тогтвортой үйл ажиллагааг хангах, удирдлагын болон зохион байгуулалтын уялдааг нэмэгдүүлэх, бүтээгдэхүүн үйлчилгээний чанарыг сайжруулах, хэрэглэгчдийн сэтгэл ханамжийг өсгөх зорилгоор Чанарын менежментийн тогтолцоо (ISO 9001:2015) стандартыг үйл ажиллагаандаа нэвтрүүлэн ажиллаж байна. Бид үйлчлүүлэгчдийнхээ байнгын найдвартай түнш, мэргэжлийн зөвлөх байж чадна гэдэгтээ итгэлтэй байдаг.",
    company_about: "Бидний тухай",
    hero_title: "ТЭЭВЭР ЗУУЧЛАЛЫН ЦОГЦ",
    hero_title1: "ШИЙДЭЛ",
    hero_download: "Танилцуулга татах",
    hero_traffic_info: "Замын мэдээ шалгах",
    haeder_time: "Даваа - Бямба 9.00 - 18.00",
    haeder_time1: "Ням амарна",
    email: "И-мэйл",
    phone: "Утасны дугаар",
    home: "Нүүр",
    about: "Бидний тухай",
    services: "Бүтээгдэхүүн  үйлчилгээ",
    "https://til.digitalpress.blog/": "Мэдээ мэдээлэл",
    contact: "Холбоо барих",
    human_resources: "Ажлын байр",
    greeting: "Захиралын мэндчилгээ",
    story: "Бидний түүх",
    services1: "Олон улсын тээвэр зуучлал",
    services2: "Гаалийн терминал",
    services3: "Гаалийн зуучлал",
    detail: "Дэлгэрэнгүй",
    hero_description:
      "Олон жилийн туршлагатай манай хамт олон харилцагч таны ачааг дэлхийн өнцөг булан бүрээс гадаад агентын өргөн сүлжээгээ ашиглан тээвэрлэлтийн бүхий л чиглэлд хүссэн хэмжээгээр далай, төмөр зам, авто зам зэрэг сувгуудаар улс хооронд тээвэрлэх ачаа тээврийн үйлчилгээг санал болгож байна.",
    location:
      "Монгол улс, Улаанбаатар хот, Баянгол дүүрэг, 4-р хороо, Үйлдвэрийн төвийн бүс – 1, Ажилчны гудамж 16010, Ти Ай Бизнес Центр",
    terminal_area: "Терминалын газар",
    trans_area: "Тээврийн газар",
    product: "Бүтээгдэхүүн ",
    service: "үйлчилгээ",
    service_1: "Олон улсын тээвэр зуучлал",
    service_desc:
      "Бид дэлхийн улс орнуудад байрлах агентын өргөн сүлжээгээ ашиглан үйлчлүүлэгчиддээ авто, агаар, далай, төмөр замын бүх төрлийн тээврийн замналаар улс хоорондын болон орон нутгийн ачаа тээврийг хаалганаас хаалганд хүргэн үйлчилдэг.",
    service_2: "Гаалын терминал",
    service_2desc:
      "Улаанбаатар хотын А зэрэглэлийн бүсэд байрлах өөрийн эзэмшлийн “Нэг цэгийн үйлчилгээ” бүхий “ТЭЭВЭР ҮЙЛЧИЛГЭЭНИЙ ЦОГЦОЛБОР”-т Гаалийн хяналтын бүс, стандартын шаардлага хангасан гаалийн баталгаат болон түр агуулах ажиллуулан тээвэр логистикийн цогц үйлчилгээг үзүүлж байна.",
    service_3: "Гаалын зуучлал",
    service_3desc:
      "Гаалийн бүрдүүлэлт нь гаалийн хилээр нэвтрүүлэх барааг гаалийн байгууллагад мэдүүлсэн үеэс гаалийн бичиг баримтыг, шаардлагатай тохиолдолд барааг шалгах, ногдуулсан татварыг төлсний дараа барааг олгох, эсвэл гаалийн хилээр гаргахыг зөвшөөрөх хүртэлх цогц үйл ажиллагаа юм.",
    human_res: "ХҮНИЙ НӨӨЦИЙН",
    human_res_policy: " БОДЛОГО",
    human_res_title:
      "Манай компаний хамгийн гол үнэт зүйл бол нарийн мэргэжлийн өндөр боловсрол, ур чадвартай ажиллах хүч болох хүний нөөц мөн. Бид хүний нөөцийн бодлогоороо компанийн эрхэм зорилго, алсын хараа, үйл ажиллагааны стратеги төлөвлөгөөг хэрэгжүүлэх удирдлагын манлайллаар хангаж, мэргэжлийн өндөр түвшинд хэрэгжүүлэх чадавхтай компаний үнэт зүйлийг өөртөө шингээсэн хүний нөөцийг бүрдүүлэх, тасралтгүй сургаж хөгжүүлэх, идэвхжүүлэх, хүний нөөцийн манлайллыг хангах, тогтоон барих хөтөлбөрүүдийг хэрэгжүүлэх замаар хүний нөөцийн удирдлагын үйл ажиллагааг сайжруулахад оршино.",
    human_res_check_1:
      "Байгууллагын дотоод журам, хөдөлмөрийн гэрээг нийт ажилтнууддаа нээлттэй танилцуулж, хөдөлмөрийн харилцааны холбогдох хуулиудыг чанд баримтлах",
    human_res_check_2:
      "Байнгын сургалт, хувь хүний хөгжлийн хөтөлбөрт хамруулах",
    human_res_check_3:
      "Бусад олон төрлийн хөнгөлөлт тусламжуудыг эдлэх өргөн боломж байнга нээлттэй байдаг",
    human_res_check_5:
      "Эерэг хандлагатай хамт олныг бүрдүүлэн, ажил мэргэжлээрээ өсөж хөгжих боломжийг олгож, чадварлаг боловсон хүчнээ дотоод эх үүсвэрээс дэвшүүлэн ажиллуулах замаар хүний нөөцийг байнга хангах",
    human_res_check_6: "Даатгалын цогц үйлчилгээнд хамруулах",
    human_res_check_7:
      "Ажлын гүйцэтгэлийн зөв шудрага үнэлгээ, цалин, шагнал урамшуулал өгөх",
    open_job: "Нээлттэй ажлын байр",
    pull_resumes: "Анкет татах",
    resume:
      "Та нээлттэй ажлын байранд тавигдах шаардлагыг хангаж байна гэж үзвэл онлайн анкетаа office@til.mn хаягт хандан илгээнэ үү.",
    get_quotes: "Үнийн санал авах",
    our: "Манай",
    team1: " Баг",
    director_greetings: "Захиралын мэндчилгээ",
    director_greetings1:
      "Манай компанийн цахим хуудсаар зочилж байгаа Эрхэм таны амрыг эрэн мэндчилье! Монгол улсын тээвэр зуучийн тэргүүлэх байгууллага “ТИ АЙ ЛОЖИСТИК” компанийн үйлчлүүлэгч та бүхнийхээ итгэлээр жигүүрлэн дэлхий ертөнцийн дөрвөн зүг найман зовхист хүрсэн өргөн сүлжээ, харилцаа холбоог бий болгож, дэлхийн жишигт нийцсэн тээврийн зуучийн үйлчилгээг үзүүлсээр ирсэн билээ. Тээврийн зуучийн салбар бол улс орны нийгэм, эдийн засгийн онцгой ач холбогдол бүхий салбар бөгөөд цаашид бид эх орон, ард түмэн, эрхэм харилцагч та бүхнээ дэлхий нийттэй холбогч гүүр байж, эх орныхоо хөгжил цэцэглэлт, бүтээн байгуулалтад хувь нэмэр оруулж, хамтдаа хөгжинө гэдэгт итгэл дүүрэн байна.",
    CEO: "ТИ АЙ ЛОЖИСТИК ХХК-ийн Ерөнхий захирал",
  },
  en: {
    CEO: "CEO of TI LOGISTIC LLC",
    director_greetings: "Message from the President",
    director_greetings1:
      "Greetings to you visiting our company's website! TI LOGISTIC, the leading transport agency organization in Mongolia, has been providing world-class transport agency services by creating a wide network and communication that has reached eight corners of the world with the trust of our customers. The transport brokerage sector is a sector of special social and economic importance in the country, and we are full of confidence that in the future, we will be a bridge connecting our country, people, and dear customers to the world, contribute to the prosperity and development of our country, and develop together. is",
    our: "Our",
    team1: " Team",
    get_quotes: "Get quotes",
    hero_traffic_info: "Check traffic information",
    resume:
      "If you think you meet the requirements for the open position, please send your online resume to office@til.mn.",
    pull_resumes: "Donwload resume",
    open_job: "Open jobs",
    human_res_check_1:
      "The organization's internal procedures and labor contracts are openly presented to all employees, and strict adherence to relevant labor relations laws",
    human_res_check_2:
      "Inclusion in regular training and personal development programs",
    human_res_check_3: "A wide range of other benefits are always available",
    human_res_check_5:
      "Continuously provide human resources by forming a team with a positive attitude, providing opportunities to grow and develop in their careers, and promoting skilled personnel from internal sources",
    human_res_check_6: "Comprehensive insurance coverage",
    human_res_check_7:
      "Providing fair evaluation of work performance, salary and rewards",
    human_res_title:
      "Our company places paramount importance on higher education, skilled human resources, and effective talent management. Our human resources strategy aligns with our core objectives, encouraging professional development, skill enhancement, and adherence to organizational values. By joining our team, you will benefit from a robust framework that encompasses comprehensive training, adherence to labor laws, career advancement opportunities, skillful cadre formation, and participation in insurance coverage. For further inquiries or details, please feel free to contact us.",
    human_res: "HUMAN RESOURCE",
    human_res_policy: " POLICY",
    service_1: "INTEGRATED LOGISTICS SOLUTIONS",
    service_desc:
      "We provide transportation services to customers using a network of agents located in countries around the world, delivering international and domestic freight by road, air, sea and rail.",
    service_2: "Customs Terminal Management",
    service_2desc:
      "Operational within the TRANSPORT AND SERVICE COMPLEX, Zone A, Ulaanbaatar, we oversee transport, logistics, customs warehousing, and storage under one roof. Our Customs Intermediation service shepherds the comprehensive customs clearance process.",
    service_3: "Customs Intermediation service",
    service_3desc:
      "Customs clearance is a complex activity from the time of declaration of goods to the customs authority, customs documents, if necessary, inspection of the goods, the release of the goods after payment of the imposed taxes, or the permission to leave the customs border.",
    product: "Product and",
    service: " services",
    trans_area: "Department of Transportation",
    terminal_area: "Terminal area",
    location:
      "Mongolia, Ulaanbaatar City, Bayangol District, District 4, Industrial Center Zone – 1, Ajilchny St. 16010, TI Business Center",
    boss: "Head of Transport Department",
    boss1: "Boss",
    meneger: "Transport Manager",
    partners: "Partner",
    XXK: " Organizations",
    simple_container: "Simple container",
    seven_days: "Every 7 days",
    seven_days3: "2-3 times a week",
    fourten_days: "Every 14 days",
    day_text2: "Container with Tempo/Adjustment",
    tir_truck: "Transportation of TIR cars",
    china_description:
      "Transport of sample containers from all cities in China to be collected in Ereen warehouse through its agent and transported to Ulaanbaatar.",
    ewrope_description:
      "Transport of sample containers from European countries and cities to Ulaanbaatar, collecting data from the Berlin warehouse through its representative.",
    turk_description:
      "Collected cargo to be collected at our agent's warehouse in Istanbul, Turkey and transported by container or TIR truck",
    korea_description:
      "Transportation of sample containers from Inchon port in Korea to Ulaanbaatar city",
    china: "From China",
    ewrope: "FROM EUROPEAN COUNTRIES AND CITIES",
    turk: "From Turkey",
    korea: "From South Korea",
    leadership: "Leadership",
    skill: "Skills",
    team: "Team",
    hearth: "Heart",
    what_do_we_do:
      "We are a team that puts our heart and soul into our services",
    our_vision: "OUR VISION",
    our_vision1:
      "Delivering innovative solutions in global transportation logistics to businesses.",
    our_mission: "OUR MISSION",
    our_mission1:
      "Aiming for Excellence in International Transport and Logistics Our central objective revolves around providing holistic transport and logistics services on an international scale, contributing substantively to our clients' business achievements.",
    our_values: "OUR CORE VALUES",
    our_values1:
      "Genuine Respect, Integrity, and Transparency Our personnel are bound by a code of mutual respect, transparency, accountability, and collaboration, fostering a dynamic and creative professional environment.",
    company_expereince: "years of work experience",
    company_different1: "A national company with investment potential",
    company_different2:
      "Our Customs Intermediation service shepherds the comprehensive customs clearance process",
    company_different3:
      "Our company places paramount importance on higher education, skilled human resources, and effective talent management",
    company_different: "OUR DISTINCTIONS",
    company_what: "What do we do?",
    company_what1:
      "We are a national enterprise committed to orchestrating foreign cargo transportation with meticulous adherence to Mongolian and global legislative and quality benchmarks, delivering prompt support and intermediation tailored to your needs.",
    company_intro: "COMPANY INTRODUCTION",
    company_intro_1:
      "TI I LOGISTICS LLC is one of the national freight forwarding companies established in 2011 with 100% domestic investment. Our company located in the A-class zone of Ulaanbaatar city, provides comprehensive transportation logistics services through our owned “ One-stop service” center within the “Logistics service complex” meeting the requirements of international standards and ensuring timely and efficient transportation logistics service through constant monitoring and temporary storage facilities. We utilize a wide network of agents in countries around the world to provide our customers with transportation service using all types of transport routes, including road, air, sea and rail. We ensure the seamless transportation of goods and cargo between countries and within regions, delivering door-to-door service from port to port. We are actively implementing Quality Management System (ISO 9001:2015) standards in our operations to enhance the reliability  of our services, improve management and organization effectiveness, and accelerate customer satisfaction by ensuring consistent quality in our products and services. Our goal is to increase operational efficiency, strengthen leadership and management practices, and continually enhance customer satisfaction through the consistent implementation of quality management principles.",
    company_about: "About us",
    hero_title: "Integrated logistics",
    hero_title1: " solutions",
    hero_download: "Download introduction",
    haeder_time: "Monday - Saturday 9.00 - 18.00",
    haeder_time1: "Sunday off",
    email: "Email",
    phone: "Phone number",
    home: "Home",
    detail: "Detail",
    about: "About",
    services: "Services",
    "https://til.digitalpress.blog/": "News",
    contact: "Contact",
    human_resources: "Human Resources",
    greeting: "Message from the President",
    story: "Our Story",
    services1: "Global Logistic Services",
    services2: "Customs terminal managment",
    services3: "Customs intermediation service",
    hero_description:
      "Leveraging Decades of Expertise, we extend an invitation to engage in our comprehensive logistics services. Our seasoned professionals adeptly facilitate the transportation of your consignments through rail, maritime, and road networks, employing an expansive web of international agents to accommodate your specific requirements.",
  },
};
