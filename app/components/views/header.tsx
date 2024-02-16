import { Wrapper } from "./wrapper";
import Image from "next/image";
import { Button } from "../button";

export const Header = () => {
  return (
    <div className="min-h-[619px] relative">
      <div className="hidden md:flex absolute w-full h-full z-0">
        <div className="w-full h-full relative">
          <Image src="/assets/Rectangle 48.png" alt="" fill={true} />
        </div>
      </div>
      <div className="z-10 relative">
        <Wrapper>
          <div className="pt-[70px] pb-[150px] flex flex-col items-center font-mon">
            <h4 className="text-fdblue md:text-fwhite text-base md:text-2xl font-bold">Food app</h4>
            <div className="leading-[46px]">
              <h1 className="text-[58px] text-fdblue md:text-fwhite font-bold mt-[35px] mb-[30px] text-center">
                Why stay hungry when
              </h1>
              <h1 className="text-[36px] md:text-[58px] text-fdblue md:text-fwhite font-bold mb-[40px] text-center">
                you can order form Bella Onojie
              </h1>
            </div>
            <h6 className="texxt-[24px] md:text-2xl font-medium text-fdblue md:text-fwhite">
              Download the bella onoje’s food app now on
            </h6>
            <div className="flex gap-[25px] item-center mt-[60px]">
              <Button
                solid
                bgcolor="#FA4A0C"
                color="white"
                text="Playstore"
                radius="30px"
              />
              <Button
                bgcolor="transparent"
                color="white"
                text="App store"
                radius="30px"
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};
