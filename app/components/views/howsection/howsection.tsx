import { Step } from "./step";

export const HowAppWorks = () => {
  return (
    <div className="">
      <div className="w-[1200px] mx-auto">
        <div className="flex flex-col gap-[50px]">
          <div className="h-[3px] bg-[#E4E4E4] w-full grow"></div>
          <h4 className="text-[44px] font-semibold font-mon text-center">
            How the app works
          </h4>
          <div className="">
            <Step
              left={true}
              image="/assets/Rectangle.png"
              title="Create an account"
              subtitle="Create/login to an existing account to get started"
              desc="An account is created with your email and a desired password"
            />
            <Step
              right={true}
              image="/assets/Rectangle (1).png"
              title="Explore varieties"
              subtitle="Shop for your favorites
              meal as e dey hot."
              desc="Shop for your favorite meals or drinks and enjoy while doing it."
            />
            <Step
              left={true}
              image="/assets/Rectangle (2).png"
              title="Checkout"
              subtitle="When you done check out and get it delivered."
              desc="When you done check out and get it delivered with ease."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
