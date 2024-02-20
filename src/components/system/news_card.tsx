import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="w-full ">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className=" object-cover w-full min-h-[200px] bg bg-right z-[2]"
          />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button>Дэлгэрэнгүй</Button>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
