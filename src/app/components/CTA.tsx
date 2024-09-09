"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface CtaProps {
  color?: "primary" | "secondary";
  content?: string;
  header?: boolean;
  link?: string;
}

const Cta: React.FC<CtaProps> = ({
  color = "primary",
  content = "Prendre rendez-vous",
  header = false,
  link = "https://tidycal.com/houest-atelier",
}) => {
  const buttonRef = useRef(null);
  const router = useRouter();
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
      onClick={() => router.push(link)}
      className="flex items-center justify-center border-primary border-4 rounded-2xl"
      ref={divRef}
    >
      <button
        ref={buttonRef}
        className={`flex justify-center items-center rounded-xl ${bgColor} py-5 text-white h-[56px] m-1 p-2`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={buttonStyle}
      >
        <Link href={link}>{content}</Link>
      </button>
    </div>
  ) : (
    <button
      ref={buttonRef}
      className={`flex justify-center items-center rounded-xl ${bgColor} p-4 text-white h-[56px]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={buttonStyle}
    >
      <Link href={link}>{content}</Link>
    </button>
  );
};

export default Cta;
