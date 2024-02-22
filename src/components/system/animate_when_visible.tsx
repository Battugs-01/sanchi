import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
  show?: boolean;
  from?: "left" | "right" | "top" | "bottom";
  delay?: number;
}

const SlideUpWhenVisible: React.FC<Props> = ({
  children,
  className,
  threshold,
  from,
  delay,
}) => {
  const { ref, inView } = useInView({
    threshold: threshold || 0.6,
    // triggerOnce: true,
    delay: delay || 0,
  });

  const getTransform = () => {
    switch (from) {
      case "left":
        return "translate-x-10";
      case "right":
        return "-translate-x-10";
      case "top":
        return "translate-y-10";
      case "bottom":
        return "-translate-y-10";
      default:
        return "translate-y-10";
    }
  };

  const getInitialTransform = () => {
    switch (from) {
      case "left":
        return "translate-x-0";
      case "right":
        return "translate-x-0";
      case "top":
        return "translate-y-0";
      case "bottom":
        return "translate-y-0";
      default:
        return "translate-y-0";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        className,
        "transform transition-opacity delay-300 duration-500 ease-in-out",
        !inView ? "opacity-0" : "opacity-100  "
      )}
    >
      <div
        className={cn(
          "transform transition-transform delay-300 duration-500",
          !inView ? " opacity-0" : " opacity-100 ",
          inView ? getInitialTransform() : getTransform()
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideUpWhenVisible;

export const ControlledSlideUpWhenVisible: React.FC<Props> = ({
  children,
  className,
  show,
}: Props) => {
  return (
    <div
      className={cn(
        className,
        "transform transition-opacity delay-300 duration-500 ease-in-out",
        !show ? "opacity-0" : "opacity-100  "
      )}
    >
      <div
        className={cn(
          "transform transition-transform delay-300 duration-500",
          !show ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100 "
        )}
      >
        {children}
      </div>
    </div>
  );
};
