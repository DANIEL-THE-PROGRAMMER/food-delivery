import Image from "next/image";

export const Step = ({
  image,
  title,
  subtitle,
  desc,
  right,
  left,
}: {
  image?: string;
  title?: string;
  subtitle?: string;
  desc?: string;
  right?: boolean;
  left?: boolean;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-end justify-between py-[50px] md:py-[80px]">
      {left && (
        <div className="relative w-[75%] h-[512px] md:w-[392px] md:h-[725px] order-1 md:order-0">
          <Image src={`${image}`} alt="" fill={true} />
        </div>
      )}
      <div className="flex flex-col pb-[30px] md:pb-[180px] md:px-0 px-[20px] items-center md:items-start font-mon md:w-[568px] order-0 md:order-1 ">
        <h3 className="text-2xl text-forange font-bold text-center md:text-start">{title}</h3>
        <h2 className="text-fdblue font-bold text-[40px] my-[20px] text-center md:text-start">
          {subtitle}
        </h2>
        <h4 className="text-[24px] md:text-2xl text-[#737373} leading-[38px] mt-[10px] md:mt-0 font-medium text-center md:text-start">
          {desc}
        </h4>
      </div>
      {right && (
        <div className="relative w-[75%] h-[512px] md:w-[392px] md:h-[725px] order-1 md:order-1">
          <Image src={`${image}`} alt="" fill={true} />
        </div>
      )}
    </div>
  );
};
