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
const Data1 = () => {
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
              {getTranslation(currentLocale, "services1")}
            </h3>
          </DialogTitle>
        </DialogHeader>
        <p className="text-start text-lg">
          {getTranslation(currentLocale, "service_desc")}
        </p>
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
                ЭНГИЙН АЧААНЫ ТЭЭВЭР
              </h3>
              <p className="text-start text-lg">
                Олон жилийн туршлагатай манай хамт олон харилцагч таны ачааг
                дэлхийн өнцөг булан бүрээс гадаад агентын өргөн сүлжээгээ
                ашиглан тээвэрлэлтийн бүхий л чиглэлд хүссэн хэмжээгээр далай,
                төмөр зам, авто зам зэрэг сувгуудаар улс хооронд тээвэрлэх ачаа
                тээврийн үйлчилгээг санал болгож байна
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
                ТҮҮВЭР АЧААНЫ ТЭЭВЭР
              </h3>
              <p className="text-start text-lg">
                Бүтэн чингэлэг дүүрэхгүй, агаарын тээврээр тээвэрлэхэд зардал
                өндөр, тээвэрлэлтийн богино хугацаа шаардсан ачааг цуглуулбар
                ачааны авто тээврээр тээвэрлэх боломжтой ба тухайн ачааг бусад
                жижиг ачаатай нийлүүлэн тээвэрлэлтийн шаардлагуудыг хангасан
                автомашинд ачин хугацаа алдалгүй тээвэрлэдэг. Манай компани
                Европын холбооны улсуудаас тээвэрлэх жижиг ачааны тээвэрлэлтэд
                зориулан Европ-Монголыг холбосон авто тээвэр, мөн Ази-Монголыг
                холбосон чингэлгийн тээврийн үйлчилгээг санал болгодог.
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
            from="left"
          >
            <div className="flex flex-col justify-center gap-2">
              <h3 className="text-2xl font-semibold uppercase mb-4 text-start">
                АЮУЛТАЙ АЧААНЫ ТЭЭВЭР
              </h3>
              <p className="text-start text-lg">
                Бид таны бараа бүтээгдэхүүний онцлог, шинж чанарт тохирсон
                тээвэрлэлтийн нөхцлөөр дамжин өнгөрүүлэх улс орнуудын болон
                Монгол улсын хилээр нэвтрүүлэхэд тавигдах шаардлага, дүрэм
                журам, стандартад нийцүүлэн тээвэрлэх химийн болон аюултай
                ачааны тээвэрлэлтийн үйлчилгээг зохион байгуулж байна.
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
                ТЕМПЕРАТУРЫН ГОРИМТОЙ АЧААНЫ ТЭЭВЭР
              </h3>
              <p className="text-start text-lg">
                Харилцагч таны ачаа түргэн мууддаг, хэмийн горимтой, тусгай
                нөхцөл шаарддаг бол бид тухайн ачаанд тохирсон температурын
                тохируулга бүхий хөргүүртэй болон дулаалгатай чингэлгээр
                тээвэрлэх үйлчилгээг үзүүлж байна.
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
            from="left"
          >
            <div className="flex flex-col justify-center gap-2">
              <h3 className="text-2xl font-semibold uppercase mb-4 text-start">
                ТУСГАЙ НӨХЦӨЛ ШААРДСАН АЧААНЫ ТЭЭВЭР
              </h3>
              <p className="text-start text-lg">
                Хэтрүү овортой, хүнд жинтэй, хурдны хязгаарлалттай гэх мэт
                онцлогтой ачаа тээвэрлэлтэд холбогдох хууль дүрэм, замын
                судалгаа, цагдаагийн болон цэрэгжүүлсэн хамгаалалттай тусгай
                график, маршрут, аврах баг, мэргэжилтнүүдийн хяналтанд
                зориулалтын техник, тоног төхөөрөмж ашиглан хийгддэг зэрэг
                тусгай нөхцлүүд шаарддаг. Хэрэв та бүхэнд онцгой нөхцөл
                шаардагдсан тээвэрлэлтийн үйлчилгээ хэрэгтэй бол бидэнд
                хандаарай.
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
                ТӨСЛИЙН АЧААНЫ ТЭЭВЭР
              </h3>
              <p className="text-start text-lg">
                Уул уурхай, аж үйлдвэрийн салбарын болон улс орны хөгжил бүтээн
                байгуулалттай холбогдсон томоохон төсөл хөтөлбөрийн тээврийг
                зохион байгуулна. Манай компани Оюу Толгойн төсөл, МАК-ийн
                цемент, шохойн чулууны үйлдвэрийн төсөл,
                УБ-Мандалговь-Тавантолгой-Оюу Толгой 220квт 2 хэлхээт цахилгаан
                дамжуулах агаарын шугам, дэд станцын төсөл,
                Мандалговь-Тавантолгой-Оюу Толгой 110квт дэд станцын төсөл зэрэг
                томоохон төслүүдийн тээврийг амжилттай гүйцэтгэж байсан
                туршлагатай.
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
            from="left"
          >
            <div className="flex flex-col justify-center gap-2">
              <h3 className="text-2xl font-semibold uppercase mb-4 text-start">
                ЭКСПОРТЫН АЧААНЫ ТЭЭВЭР
              </h3>
              <p className="text-start text-lg">
                Манай компани нь Монголоос таны хүссэн орон руу экспортын бараа
                бүтээгдэхүүнийг агаар, төмөр зам, авто зам, далайн гарцын
                боломжит хувилбарыг ашиглан тээвэрлэх оновчтой шийдлийг гарган
                өгч, бараа бүтээгдэхүүний онцлог болон тээвэрлэлтийн замналд
                нийцэхүйц экспортын ачаа тээврийн үйлчилгээг санал болгож байна.
              </p>
              <ul className="text-base list-disc ml-5">
                <li>Тоног төхөөрөмжийн экспорт</li>
                <li>Монгол гэрийн экспорт</li>
                <li>Түүхий эдийн экспорт</li>
                <li>Ноос, ноолууран бүтээгдэхүүний экспорт</li>
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
                АЧАА ТЭЭВРИЙН ДААТГАЛ
              </h3>
              <p className="text-start text-lg">
                Ачаа тээврийн даатгал Манай компани 2020 оноос эхлэн Номин
                Даатгал ХХК-тай Ачаа тээврийн даатгалын гэрээ байгуулснаар
                тээвэрлэлтийн явцад үүсэх аливаа эрсдлээс урьдчилан сэргийлж
                таны ачааг тээврийн даатгалд хамруулах боломжийг олгож байна. Та
                ачаа тээврийн даатгалд даатгуулснаар дараах эрсдлээс үүссэн
                хохирлыг даатгалын байгууллагаар нөхөн төлүүлэх боломжтой юм.
              </p>
              <ul className="text-base list-disc ml-5">
                <li>Галын аюул</li>
                <li>Байгалийн гамшиг</li>
                <li>Гуравдагч этгээдийн санамсаргүй болон санаатай үйлдэл</li>
                <li>Ажил мэргэжлийн</li>
                <li>Зам тээврийн хөдөлгөөний үеийн осол</li>
              </ul>
              <p className="text-start text-lg">
                Шаардлагатай тохиолдолд бид харилцагчийн хүсэлтээр ачаа тээврийн
                даатгалын гэрээт баталгааг даатгагчаас гаргуулах боломжтой.
                Хариуцлагын даатгал Манай компаний ажилтан ажил мэргэжлийн алдаа
                гаргаснаас үүдэн таны ачаа эвдэрч гэмтсэн, дутсан тохиолдолд
                хариуцлагын даатгалын журмын дагуу даатгалын байгууллагаас
                хохирлыг нөхөн төлнө.
              </p>
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
export default Data1;
