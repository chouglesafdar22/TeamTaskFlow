"use client";

interface feature {
    title: string;
    text: string;
}

export function FeatureCard({ title, text }: feature) {
    return (
        <div className="flex flex-col bg-gray-500 drop-shadow-lg drop-shadow-black wrap-break-word px-2 py-2.5 gap-2 sm:w-[390px] w-[225px] sm:h-52 h-28 rounded-[10px]">
            <h4 className="text-center text-white xl:text-2xl lg:text-xl md:text-base sm:text-sm text-xs">{title}</h4>
            <p className="text-left text-white xl:text-xl lg:text-base md:text-sm sm:text-xs text-[10px] ">{text}</p>
        </div>
    )
};