"use client";

interface feature {
    title: string;
    text: string;
}

export function FeatureCard({ title, text }: feature) {
    return (
        <div className="flex flex-col bg-white border border-gray-200 drop-shadow-md drop-shadow-black wrap-break-word px-2.5 py-3.5 gap-2 sm:w-[400px] w-[250px] lg:h-56 sm:h-44 h-30 rounded-2xl">
            <h4 className="text-center text-gray-800 xl:text-[27px] lg:text-[22px] md:text-[19px] sm:text-[17px] text-[15px] poppins-regular">{title}</h4>
            <p className="text-left text-gray-600 xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm leading-relaxed poppins-light">{text}</p>
        </div>
    )
};