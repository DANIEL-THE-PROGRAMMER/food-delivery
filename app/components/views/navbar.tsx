import Image from "next/image";
import { Wrapper } from "./wrapper";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-white h-[140px] flex items-center">
      <Wrapper>
        <div className="flex justify-between items-center">
          <div className="relative w-[104px] h-[51px] md:w-[206px] md:h-[101px]">
            <Image
              src="/assets/logo.png"
              alt="logo"
              fill={true}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <ul className="hidden md:flex gap-[110px] text-base font-mon items-center font-semibold ">
            <li>
              <Link href="" className="text-forange">
                Home
              </Link>
            </li>
            <li>
              <Link href="" className="text-fdblue">
                Product
              </Link>
            </li>
            <li>
              <Link href="" className="text-fdblue">
                Faq
              </Link>
            </li>
            <li>
              <Link href="" className="text-fdblue">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </div>
  );
};
