"use client";
import ScrollWrapper from "./ScrollWrapper";

interface CardProps {
    no: number;
    title: string;
    text: string;
};

export function Card({ no, title, text }: CardProps) {
    return (
        <ScrollWrapper direction="left" ease="backInOut">
            <div className="flex flex-col items-center w-full max-w-md border border-gray-200 bg-white rounded-xl px-6 py-8 gap-4 shadow-sm">
                <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#8B1E3F]">
                    <span className="text-center text-white xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] poppins-light">Step {no}</span>
                </div>
                <h4 className="text-center text-gray-800 xl:text-[27px] lg:text-[22px] md:text-[19px] sm:text-[17px] text-[15px] poppins-regular">{title}</h4>
                <p className="text-left text-gray-600 xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm leading-relaxed poppins-light wrap-break-word">{text}</p>
            </div>
        </ScrollWrapper>
    )
};