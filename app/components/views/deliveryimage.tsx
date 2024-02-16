
import Image from "next/image"

export const DeliveryImage = () => {
    return (
        <div className="flex justify-center">
            <div className="relative w-[690px] min-h-[870px] mt-[-280px] md:mr-[180px]">
                <Image src="/assets/Group 53.png" alt=""   fill={true} />
            </div>
        </div>
    )
}