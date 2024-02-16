import Image from "next/image";
import { Wrapper } from "./wrapper";

export const Footer = () => {
  return (
    <div className="h-[200px] flex items-center">
      <Wrapper>
        <div className="flex px-[80px] items-center justify-between">
          <div className="relative w-[206px] h-[101px]">
            <Image
              src="/assets/logo.png"
              alt="logo"
              fill={true}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex items-center gap-[20px]">
            <Image
              src="/assets/ant-design_twitter-outlined.png"
              alt="twitter"
              width={32}
              height={32}
            />
            <Image
              src="/assets/ant-design_facebook-filled.png"
              alt="facebook"
              width={32}
              height={32}
            />
            <Image
              src="/assets/instagram.png"
              alt="instagram"
              width={32}
              height={32}
            />
          </div>
          <div
            className="text-[12px] font-mon text-[#5C5C5C]"
          >
            <span>Copywright 2020 Bella Onojie.com</span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
