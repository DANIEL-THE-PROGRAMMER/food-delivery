import Image from "next/image";
import { Button } from "../button";

export const Download = () => {
  return (
    <div className="min-h-[609px] relative mt-[100px]">
      <div className="absolute w-full h-full z-0">
        <div className="relative w-full h-full">
          <Image src="/assets/Rectangle 47.png" alt="" fill={true} />
        </div>
      </div>
      <div className="relative z-10 py-[200px] flex flex-col items-center">
        <h4 className="text-fwhite text-2xl font-bold text-[40px]">
          Download the app now.
        </h4>
        <h6 className="text-2xl font-medium text-fwhite mt-[40px] mb-[50px]">
          Available on your favorite store. Start your premium experience now
        </h6>
        <div className="flex gap-[25px] item-center">
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
