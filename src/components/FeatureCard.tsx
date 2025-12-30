"use client";

interface feature {
    title: string;
    text: string;
}

export function FeatureCard({ title, text }: feature) {
    return (
        <div className="flex flex-col bg-white border border-gray-200 drop-shadow-md drop-shadow-black wrap-break-word px-2.5 py-3.5 gap-2 sm:w-[390px] w-[225px] sm:h-44 h-24 rounded-2xl">
            <h4 className="text-center text-gray-800 xl:text-2xl lg:text-xl md:text-base sm:text-sm text-xs poppins-regular">{title}</h4>
            <p className="text-left text-gray-600 xl:text-xl lg:text-base md:text-sm sm:text-xs text-[10px] leading-relaxed poppins-light">{text}</p>
        </div>
    )
};