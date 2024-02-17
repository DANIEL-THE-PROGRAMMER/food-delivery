import { Wrapper } from "./wrapper";
import Image from "next/image";
import { Button } from "../button";

export const Header = () => {
  return (
    <div className="min-h-[619px] relative bg-[#FAFAFA] md:bg-transparent">
      <div className="hidden md:flex absolute w-full h-full z-0">
        <div className="w-full h-full relative">
          <Image src="/assets/Rectangle 48.png" alt="" fill={true} />
        </div>
      </div>
      <div className="z-10 relative">
        <Wrapper>
          <div className="pt-[70px] pb-[20px] md:pb-[150px] flex flex-col items-center font-mon">
            <h4 className="text-fdblue md:text-fwhite text-base md:text-2xl font-bold">
              Food app
            </h4>
            <div className="leading-[46px]">
              <h1 className="hidden md:flex justify-center text-[58px] text-fdblue md:text-fwhite font-bold mt-[35px] mb-[30px] text-center">
                Why stay hungry when
              </h1>
              <h1 className="hidden md:flex text-[58px] justify-center text-fdblue md:text-fwhite font-bold mb-[40px] text-center">
                you can order form Bella Onojie
              </h1>
              <h1 className="text-[36px] text-fdblue md:text-fwhite font-bold mb-[40px] text-center mt-[20px]">
                Why stay hungry when you can order form Bella Onojie
              </h1>
            </div>
            <h6 className="text-[24px] text-center md:text-2xl font-medium text-fdblue md:text-fwhite">
              Download the bella onoje’s food app now on
            </h6>
            <div className="flex flex-col md:flex-row gap-[25px] item-center mt-[60px]">
              <Button
                solid
                bgcolor="#FA4A0C"
                color="white"
                text="Playstore"
                radius="30px"
              />
              <span className="hidden md:inline-flex">
                <Button
                  bgcolor="transparent"
                  color="white"
                  text="App store"
                  radius="30px"
                  bordercolor="white"
                />
              </span>
              <span className="inline-flex md:hidden">
                <Button
                  bgcolor="transparent"
                  color="#FA4A0C"
                  text="App store"
                  radius="30px"
                  bordercolor="#FA4A0C"
                />
              </span>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};
