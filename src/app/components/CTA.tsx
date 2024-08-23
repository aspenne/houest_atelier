import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Link from "next/link";
import { useRef } from "react";

interface CtaProps {
  color?: "primary" | "secondary";
  content?: string;
  header?: boolean;
}

const Cta: React.FC<CtaProps> = ({
  color = "primary",
  content = "Prendre rendez-vous",
  header = false,
}) => {
  const buttonRef = useRef(null);
  const divRef = useRef(null);
  const { contextSafe } = useGSAP();
  const bgColor = color === "secondary" ? "bg-secondary" : "bg-primary";

  const handleMouseEnter = contextSafe(() => {
    gsap.to(buttonRef.current, {
      duration: 0.7,
      backgroundPosition: "top",
      backgroundSize: "700%",
    });
    gsap.to(divRef.current, {
      duration: 1,
      backgroundPosition: "top",
      backgroundSize: "700%",
      borderColor: "#182A48",
    });
  });
  const handleMouseLeave = contextSafe(() => {
    gsap.to(buttonRef.current, {
      duration: 0.7,
      backgroundSize: "0%",
      backgroundPosition: "bottom",
    });
    gsap.to(divRef.current, {
      duration: 1,
      backgroundSize: "0%",
      backgroundPosition: "bottom",
      borderColor: "#E98123",
    });
  });

  const buttonStyle = {
    backgroundImage:
      color === "primary"
        ? "radial-gradient(circle at bottom, #182A48 20%, #E98123 20%)"
        : "radial-gradient(circle at bottom, #E98123 20%, #182A48 20%)",
    backgroundSize: "0%",
    backgroundRepeat: "no-repeat",
  };

  return header ? (
    <div
      className="flex items-center justify-center border-primary border-4 rounded-xl max-w-[220px]"
      ref={divRef}
    >
      <button
        ref={buttonRef}
        className={`flex justify-center items-center rounded-xl ${bgColor} py-5 text-white h-[56px] w-[200px] m-1`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={buttonStyle}
      >
        <Link href="https://tidycal.com/aspenne/rendez-vous-personnel">
          {content}
        </Link>
      </button>
    </div>
  ) : (
    <button
      ref={buttonRef}
      className={`flex justify-center items-center rounded-xl ${bgColor} p-4 text-white h-[56px] w-[200px]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={buttonStyle}
    >
      <Link href="https://tidycal.com/aspenne/rendez-vous-personnel">
        {content}
      </Link>
    </button>
  );
};

export default Cta;
