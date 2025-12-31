"use client";
import Image from "next/image";

export default function SocialProofBadge() {
    return (
        <div className="inline-flex w-fit justify-center items-center gap-2.5 sm:px-5 px-2.5 py-2.5 rounded-full border-2 border-solid border-gray-300 shadow-sm shadow-gray-400">
            <div className="flex -space-x-2">
                {["/images/u1.png", "/images/u2.png", "/images/u4.png"].map((img, i) => (
                    <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-lime-200 overflow-hidden"
                    >
                        <Image
                            src={img}
                            alt="user-image"
                            width={40}
                            height={40}
                            loading='eager'
                            unoptimized
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
            <p className="xl:text-base lg:text-sm sm:text-xs text-[10px] poppins-regular text-gray-500">
               Where teams manage tasks effortlessly.
            </p>
        </div>
    )
}