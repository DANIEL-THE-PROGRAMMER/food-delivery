import Image from "next/image";
import { Button } from "../button";

export const Download = () => {
  return (
    <div className="min-h-[564px] md:min-h-[609px] relative mt-[10px] md:mt-[100px]">
      <div className="hidden md:flex absolute w-full h-full z-0">
        <div className="relative w-full h-full">
          <Image src="/assets/Rectangle 47.png" alt="" fill={true} />
        </div>
      </div>
      <div className="relative z-10 py-[150px] md:py-[200px] flex flex-col items-center bg-fdblue md:bg-transparent">
        <h4 className="text-fwhite text-2xl font-bold text-[40px] text-center md:text-start">
          Download the app now.
        </h4>
        <h6 className="text-2xl font-medium text-fwhite mt-[40px] mb-[50px] text-center">
          Available on your favorite store. Start your premium experience now
        </h6>
        <div className="flex flex-col md:flex-grow gap-[25px] item-center">
          <Button
            solid
            bgcolor="#FA4A0C"
            color="white"
            text="Playstore"
            radius="10px"
          />
          <Button
            bgcolor="transparent"
            color="white"
            text="App store"
            radius="10px"
          />
        </div>
      </div>
    </div>
  );
};
