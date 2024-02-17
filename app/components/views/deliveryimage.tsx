
import Image from "next/image"

export const DeliveryImage = () => {
    return (
      <div className="flex justify-center">
        <div className="relative z-10 w-full h-[520px] md:w-[690px] md:min-h-[870px] mt-[-90px] ml-[-50px] md:ml-0 md:mt-[-280px] md:mr-[180px]">
          <Image src="/assets/Group 53.png" alt="" fill={true} />
        </div>
      </div>
    );
}