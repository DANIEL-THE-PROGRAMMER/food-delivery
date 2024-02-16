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
    <div className="flex items-end justify-between py-[80px]">
      {left && (
        <div className="relative w-[392px] h-[725px]">
          <Image src={`${image}`} alt="" fill={true} />
        </div>
      )}
      <div className="flex flex-col pb-[180px] font-mon w-[568px]">
        <h3 className="text-2xl text-forange font-bold">{title}</h3>
        <h2 className="text-fdblue font-bold text-[40px] my-[20px]">
          {subtitle}
        </h2>
        <h4 className="text-2xl text-[#737373} leading-[38px] font-bold">
          {desc}
        </h4>
      </div>
      {right && (
        <div className="relative w-[392px] h-[725px]">
          <Image src={`${image}`} alt="" fill={true} />
        </div>
      )}
    </div>
  );
};
