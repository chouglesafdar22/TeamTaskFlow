"use client";
import ScrollWrapper from "./ScrollWrapper";

interface feature {
    title: string;
    text: string;
}

export function FeatureCard({ title, text }: feature) {
    return (
        <ScrollWrapper direction="down" ease="backInOut">
            <div className="flex flex-col border border-gray-200 shadow-xs shadow-black wrap-break-word px-2.5 py-3.5 gap-2 w-full sm:max-w-md max-w-sm rounded-2xl">
                <h4 className="text-center text-gray-800 xl:text-[27px] lg:text-[22px] md:text-[19px] sm:text-[17px] text-[15px] poppins-regular">{title}</h4>
                <p className="text-left text-gray-600 xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm leading-relaxed poppins-light">{text}</p>
            </div>
        </ScrollWrapper>
    )
};