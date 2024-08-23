import Logo from "@/app/assets/Logo.svg";
import CTA from "@/app/components/CTA";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="w-full py-4 px-28 flex flex-row justify-between items-center h-24 sticky top-0 bg-white shadow-navbar">
      <Image
        src={Logo}
        alt="logo image"
        className="bg-white p-4 rounded-b-3xl mt-10 shadow-navbar cursor-pointer"
        onClick={() => router.push("/")}
      ></Image>
      <ul className="flex flex-row items-center w-4/12 min-w-[350px] justify-around">
        <li>
          <a href="#prices" className="text-black sub-p">
            Tarifs
          </a>
        </li>
        <li>
          <a href="#services" className="text-black sub-p">
            Services
          </a>
        </li>
        <CTA color="primary" header></CTA>
      </ul>
    </nav>
  );
};

export default NavBar;
