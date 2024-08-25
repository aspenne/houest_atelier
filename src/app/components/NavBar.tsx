"use client";

import Logo from "@/app/assets/Logo.svg";
import CTA from "@/app/components/CTA";
import { gsap } from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const topLine = useRef(null);
  const middleLine = useRef(null);
  const bottomLine = useRef(null);
  const burgerMenu = useRef(null);
  const burgerMenuContent = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(burgerMenu.current, { height: "auto", duration: 0.5 });
      gsap.to(burgerMenuContent.current, { opacity: 1, duration: 1 });
      gsap.to(topLine.current, { y: 11, rotate: 45, duration: 0.15 });
      gsap.to(middleLine.current, { width: 0, duration: 0.15 });
      gsap.to(bottomLine.current, { y: -11, rotate: -45, duration: 0.15 });
    } else {
      gsap.to(topLine.current, { y: 0, rotate: 0, duration: 0.15 });
      gsap.to(bottomLine.current, { y: 0, rotate: 0, duration: 0.15 });
      gsap.to(middleLine.current, { width: "auto", duration: 0.3 });
    }
  }, [isOpen]);

  const toggleMenu = () => {
    if (isOpen === true) {
      gsap.to(burgerMenu.current, { height: 0, duration: 0.5 });
      gsap.to(burgerMenuContent.current, { opacity: 0, duration: 0.2 });
      gsap.to(topLine.current, { y: 0, rotate: 0, duration: 0.15 });
      gsap.to(bottomLine.current, { y: 0, rotate: 0, duration: 0.15 });
      gsap.to(middleLine.current, { width: "auto", duration: 0.5 });
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 1000);
    } else {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    windowSize();
    window.addEventListener("resize", windowSize);
    return () => {
      window.removeEventListener("resize", windowSize);
    };
  }, []);

  const windowSize = () => {
    if (window.innerWidth < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <div className="w-full sticky top-0">
      {!isMobile && (
        <nav className="w-full py-4 px-28 flex flex-row justify-between items-center h-24 bg-white shadow-navbar">
          <Image
            src={Logo}
            alt="logo image"
            className="bg-white p-4 rounded-b-3xl mt-10 shadow-navbar cursor-pointer"
            onClick={() => router.push("/")}
          ></Image>

          <ul className="flex flex-row items-center w-4/12 min-w-[350px] justify-around">
            <li>
              <a href="#prices" className="text-secondary sub-p">
                Tarifs
              </a>
            </li>
            <li>
              <a href="#services" className="text-secondary sub-p">
                Services
              </a>
            </li>
            <CTA color="primary" header></CTA>
          </ul>
        </nav>
      )}

      <div>
        {isMobile && (
          <div className="flex flex-row items-center justify-between px-4 bg-white shadow-navbar">
            <Image
              src={Logo}
              alt="logo image"
              className="bg-white p-4 rounded-b-3xl  cursor-pointer"
              width={150}
              onClick={() => router.push("/")}
            ></Image>

            <div
              className="flex flex-col justify-between w-6 h-6 cursor-pointer"
              onClick={toggleMenu}
            >
              <span
                ref={topLine}
                className="block w-full h-0.5 bg-secondary transition-transform duration-300 ease-in-out"
              ></span>
              <span
                ref={middleLine}
                className="block w-full h-0.5 bg-secondary transition-transform duration-300 ease-out"
              ></span>
              <span
                ref={bottomLine}
                className="block w-full h-0.5 bg-secondary transition-transform duration-300 ease-in-out"
              ></span>
            </div>
          </div>
        )}
        <nav className="shadow-navbar bg-white h-0" ref={burgerMenu}>
          <ul
            className="flex flex-col gap-4 py-6 justify-between items-center border-t-2 border-secondary opacity-0"
            ref={burgerMenuContent}
          >
            <li>
              <a
                href="#prices"
                onClick={toggleMenu}
                className="text-secondary sub-p"
              >
                Tarifs
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={toggleMenu}
                className="text-secondary sub-p"
              >
                Services
              </a>
            </li>
            <li>
              <CTA color="primary"></CTA>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
