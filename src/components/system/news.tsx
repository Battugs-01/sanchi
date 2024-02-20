import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NewsData } from "@/lib/config";
import NewsCard from "./news_card";

const News = () => {
  return (
    <div className="bg-[#F9FAFB] overflow-hidden py-32">
      <div className="w-full text-center">
        <p className="pb-16 font-bold text-4xl uppercase">
          Бүтээгдэхүүн <span className=" font-medium">үйлчилгээ</span>
        </p>
      </div>
      <div className="container mx-auto ">
        <Carousel>
          <CarouselContent>
            {NewsData.map((item, index) => (
              <CarouselItem key={`news-${index}`} className="basis-1/4">
                <NewsCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default News;
