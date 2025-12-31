"use client";
import ScrollWrapper from "./ScrollWrapper";
import { TiTick } from "react-icons/ti";
import { PrimaryButton } from "./Button";

export function FreeCard() {
    return (
        <ScrollWrapper direction="fade" ease="anticipate">
            <div className="border-2 w-auto h-auto border-gray-200 rounded-2xl p-8 bg-white">
                <h4 className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm poppins-medium mb-2 text-gray-800 text-center">Free</h4>
                <p className="text-center text-gray-600 mb-6 xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] poppins-regular">For small teams getting started</p>
                <ul className="space-y-3 text-gray-600 mb-8 ">
                    <li className="flex flex-col xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] poppins-regular"><TiTick /> 1 WorkSpace</li>
                    <li className="flex flex-col xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] poppins-regular"><TiTick /> Up to 3 Projects</li>
                    <li className="flex flex-col xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] poppins-regular"><TiTick /> Up to 5 Members</li>
                    <li className="flex flex-col xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] poppins-regular"><TiTick /> Basic Kanban Board</li>
                </ul>
                <PrimaryButton className={"w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-100 transition xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs"} href={"/auth/signup"} text={"Start Free"} />
            </div>
        </ScrollWrapper>
    )
};

export function PriceCard() {
    return (
        <ScrollWrapper direction="fade" ease="anticipate">
            <div className="border-2 border-[#8B1E3F] w-auto h-auto rounded-2xl p-8 bg-white relative">
                <span className="absolute -top-3 right-6 bg-[#8B1E3F] text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                </span>
                <h4 className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm poppins-medium mb-2 text-gray-800 text-center">Pro</h4>
                <p className="text-center text-gray-600 mb-6 xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] poppins-regular">For growing teams</p>
                <ul className="space-y-3 text-gray-600 mb-8 ">
                    <li className="flex flex-col xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] poppins-regular"><TiTick /> Unlimited Projects</li>
                    <li className="flex flex-col xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] poppins-regular"><TiTick /> Unlimited Members</li>
                    <li className="flex flex-col xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] poppins-regular"><TiTick /> Activity Logs</li>
                    <li className="flex flex-col xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] poppins-regular"><TiTick /> Advanced Dashboard</li>
                </ul>
                <PrimaryButton className={"w-full border border-gray-300 bg-[#8B1E3F] text-white py-3 rounded-lg hover:bg-[#A23652]  transition xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs"} href={"/auth/signup"} text={"Start Pro"} />
                {/* <p className="text-center text-sm text-gray-500 mt-1">
                Pricing coming soon
            </p> */}
            </div>
        </ScrollWrapper>
    )
};