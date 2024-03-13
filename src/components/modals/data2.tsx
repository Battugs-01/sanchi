import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSearchParams } from "next/navigation";
import SlideUpWhenVisible from "../system/animate_when_visible";
import { getTranslation } from "@/locale/common";
const Data2 = () => {
  const searchParams = useSearchParams();

  const currentLocale = searchParams?.get("locale") || "mn";
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-start rounded border-cyan-500 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[#fff] mt-4 flex items-center gap-2">
          {getTranslation(currentLocale, "detail")}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="w-[1000px] pt-16 pb-10 px-10 overflow-y-auto max-w-[800px]"
        style={{ maxHeight: "800px" }}
      >
        <DialogHeader>
          <DialogTitle className="">
            <h3 className="text-start text-3xl  font-semibold uppercase">
              {getTranslation(currentLocale, "service_2")}
            </h3>
          </DialogTitle>
        </DialogHeader>
        <p className="text-start text-lg">
          {getTranslation(currentLocale, "service_2desc")}
        </p>

        <p className="text-start text-lg">Манай терминалын давуу тал:</p>

        <div className="flex gap-4">
          <ul className="text-base text-start list-disc ml-5">
            <li>Улаанбаатар хотын “А” бүсэд байрлалтай </li>
            <li>Бүрэн цутгамал хучилтат талбайтай</li>
            <li>Техник, тоног төхөөрөмжөөр бүрэн хангагдсан</li>
            <li>50 тн даац бүхий 2 гүүрэн крантай </li>
            <li>Өөрийн эзэмшлийн 2 салаа төмөр замтай</li>
          </ul>
          <ul className="text-base text-start list-disc ml-5">
            <li>Хүнд даацын автомашины зогсоолтой</li>
            <li>Иж бүрэн камерын хяналттай</li>
            <li>24 цагийн харуул хамгаалалттай</li>
            <li>Ариутгал, халдваргүйжүүлэлтийн тогтмол үйлчилгээтэй</li>
            <li>Гааль, мэргэжлийн хяналтын нэгдсэн системд холбогдсон</li>
            <li>
              Мэргэжлийн хариуцлагын бүрэн даатгалтай мэргэшсэн баг хамт олон
            </li>
          </ul>
        </div>
        <div
          className="grid md:grid-cols-2 gap-8 flex-col lg:flex-row z-10 grid-cols-1"
          id="services1"
        >
          <SlideUpWhenVisible
            className="col-span-2 z-10  flex justify-center items-center"
            from="left"
          >
            <div className="flex flex-col justify-center gap-2">
              <h3 className="text-2xl font-semibold uppercase mb-4 text-start">
                ТЕРМИНАЛЫН НЭГ ЦЭГИЙН ҮЙЛЧИЛГЭЭ
              </h3>
              <p className="text-start text-lg">
                Монгол улсад жишиг болохуйц тохижилттой “Нэг цэгийн үйлчилгээ”
                бүхий Гаалийн хяналтын бүсэд тээвэр логистикийн цогц үйлчилгээг
                харилцагчиддаа үзүүлж байна.
              </p>
              <ul className="text-base text-start list-disc ml-5">
                <li>Ачаа тээврийн контор</li>
                <li>Гааль</li>
                <li>Мэргэжлийн хяналт</li>
                <li>Кофе шоп</li>
                <li>Банк</li>
              </ul>
              <p>Манай терминалын үйлчилгээ:</p>
              <ul className="text-base text-start list-disc ml-5">
                <li>Кранаар чингэлэг болон вагоноос ачиж, буулгах</li>
                <li>Кранаар автомашинд ачиж, буулгах</li>
                <li>Авто ачигчаар ачаа ачиж, буулгах</li>
                <li>Гар аргаар ачаа ачиж, буулгах</li>
                <li>Ачааг чингэлэг болон вагоны дотор бэхлэх</li>
                <li>Чингэлэг, вагон цэвэрлэх, ариутгах</li>
                <li>Бараа, материалд шошго наах</li>
                <li>Задгай ачаа болон чингэлэг хадгалах</li>
                <li>Хөргүүртэй чингэлэг хадгалах үйлчилгээ</li>
                <li>Ачаа пүүлэх</li>
              </ul>
            </div>
          </SlideUpWhenVisible>
        </div>
        <div
          className="grid md:grid-cols-2 gap-8 flex-col lg:flex-row z-10 grid-cols-1"
          id="services1"
        >
          <SlideUpWhenVisible
            className="col-span-2 z-10  flex justify-center items-center"
            from="right"
          >
            <div className="flex flex-col justify-center gap-2">
              <h3 className="text-2xl font-semibold uppercase mb-4 text-start">
                ГААЛИЙН БАТАЛГААТ АГУУЛАХ
              </h3>
              <p className="text-start text-lg">
                Аж ахуйн нэгж, иргэдэд гаалийн болон бусад татварыг төлөх,
                гаалийн бичиг баримтыг бүрэн бүрдэл болгох цаг хугацааг олгох,
                зах зээл хайх боломжийг бүрдүүлэх, бизнесийн таатай орчин бий
                болгох зорилгоор харилцагчдын ачаа барааг гэрэлтүүлэг,
                агааржуулалт, халаалт, хяналтын камер зэрэг стандартын шаардлага
                хангасан 3,132.4 м.куб /CBM/ ачааны багтаамжтай Гаалийн
                баталгаат агуулахын үйлчилгээг санал болгож байна.
              </p>
              <p className="text-start text-lg">Дараах барааг байршуулна:</p>
              <ul className="text-base text-start list-disc ml-5">
                <li>Экспортын бараа</li>
                <li>Импортын бараа</li>
                <li>
                  Монгол улсын хилээр нэвтрүүлэхийг хориглосноос бусад тарифын
                  бус хязгаарлалтад хамаарахгүй бараа
                </li>
                <li>Бусад горимын бараа </li>
              </ul>
            </div>
          </SlideUpWhenVisible>
        </div>
        <div
          className="grid md:grid-cols-2 gap-8 flex-col lg:flex-row z-10 grid-cols-1"
          id="services1"
        >
          <SlideUpWhenVisible
            className="col-span-2 z-10  flex justify-center items-center"
            from="left"
          >
            <div className="flex flex-col justify-center gap-2">
              <h3 className="text-2xl font-semibold uppercase mb-4 text-start">
                ГААЛИЙН ТҮР АГУУЛАХ
              </h3>
              <p className="text-start text-lg">
                Гаалийн түр агуулахын үйл ажиллагаа нь Замын үүд боомт болон
                Алтанбулаг боомтоос орж ирж буй түүвэр импортын барааг хүлээн
                авч харилцагч аж ахуйн нэгж, иргэдэд олгох, түр хугацаанд
                хадгалах, ачааны бүрэн бүтэн байдал болон ачиж, буулгах,
                хадгалах стандартын шаардлагыг бүрэн хангасан 1,426.3 м.куб
                /CBM/ ачааны багтаамжтай агуулах, техник, тоног төхөөрөмжөөр
                манай чадварлаг ажилтнууд үйлчилж байна.
              </p>
            </div>
          </SlideUpWhenVisible>
        </div>

        <div
          className="grid md:grid-cols-2 gap-8 flex-col lg:flex-row z-10 grid-cols-1"
          id="services1"
        >
          <SlideUpWhenVisible
            className="col-span-2 z-10  flex justify-center items-center"
            from="right"
          >
            <div className="flex flex-col justify-center gap-2">
              <h3 className="text-2xl font-semibold uppercase mb-4 text-start">
                ХҮРГЭЛТ
              </h3>
              <p className="text-start text-lg">
                Бид таны ачааг хүссэн байршлаас эдийн засгийн өгөөжтэй,
                тохиромжтой тээврийн хэрэгслээр тээвэрлэх болон хүргэж өгөх
                “хаалганаас хаалганд” үйлчилгээг санал болгож байна.
              </p>
              <ul className="list-disc ml-5 text-start text-base">
                <li>Хот доторх тээвэр</li>
                <li>Орон нутгийн тээвэр</li>
                <li>Жижиг ачааны хүргэлт /хот дотор/</li>
              </ul>
            </div>
          </SlideUpWhenVisible>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="default"
              className="text-start rounded border-cyan-500 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[#fff] mt-4 flex items-center"
            >
              Хаах
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default Data2;
