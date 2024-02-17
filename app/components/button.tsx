export const Button = ({
  bgcolor,
  color,
  solid,
  text,
  radius,
  bordercolor
}: {
  bgcolor: string;
  color: string;
  solid?: boolean;
  text: string;
  radius?: string;
  bordercolor?: string
}) => {
  return (
    <button
      style={{
        backgroundColor:bgcolor,
        color:color,
        borderRadius: radius,
        borderColor: bordercolor
      }}
      className={`${
        solid ? "border-0" : "border-[1px]"
      } text-white text-2xl font-bold leading-[36px] px-[16px] font-mon w-[236px] min-h-[68px] flex items-center justify-center`}
    >{text}</button>
  );
};
