"use client";
import Link from "next/link";
import Image from "next/image";
import { PrimaryButton } from "@/components/Button";

export default function not_found() {
    return (
        <section className="flex flex-col justify-center h-screen w-screen items-center text-center px-10 md:px-20 py-10 md:py-20">
            {/* <div className="">
                <Link href="/" className="flex justify-center items-center text-center gap-1 px-0.5">
                    <Image
                        src={"/images/ttf-logo.png"}
                        alt="teamTaskFlow-logo"
                        width={50}
                        height={50}
                        loading='eager'
                        unoptimized
                        className="object-cover rounded-full"
                    />
                    <h1 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-[#8B1E3F] poppins-bold">
                        TeamTaskFlow
                    </h1>
                </Link>
            </div> */}
            <div className="flex flex-col justify-center items-center text-center gap-4 px-1">
                <h2 className="poppins-semibold text-[#1F2937] xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base">404 - Not Found</h2>
                <p className="poppins-medium text-center wrap-break-word text-[#4B5563] xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm">Sorry, the page you’re looking for doesn’t exist or has been moved.</p>
                <PrimaryButton href={"/"} text={"Home"} className={"bg-[#8B1E3F] text-white hover:bg-[#A23652] px-10"} />
            </div>
        </section>
    )
};