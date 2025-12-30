"use client";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, ArrowButton } from "@/components/Button";
import { FaArrowRight } from "react-icons/fa6";

export function Navbar() {
    return (
        <nav className="navbar flex justify-center z-40 sm:top-7 top-4 fixed w-full items-center">
            <div className="navbarLinks bg-white/30 backdrop-blur-sm border-2  border-gray-300 flex flex-row justify-between items-center text-center rounded-r-full rounded-l-full md:min-w-[60%] w-[94%] md:py-5 py-3 md:px-8 px-3.5">
                <div className="logoLeftSides">
                    <Link href="/" className="flex justify-center items-center text-center gap-1 px-0.5">
                        <Image
                            src={"/images/ttf-logo.png"}
                            alt="teamTaskFlow-logo"
                            width={50}
                            height={50}
                            loading='eager'
                            unoptimized
                            className="object-contain rounded-full"
                        />
                        <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg text-[#8B1E3F] poppins-bold">
                            TeamTaskFlow
                        </h1>
                    </Link>
                </div>
                <div className="rightSides flex justify-center items-center text-center gap-3.5 px-1">
                    <PrimaryButton href={"/auth/login"} text={"Login"} className={"sm:block hidden border-2 border-solid border-gray-300 text-gray-700 hover:bg-gray-50 xl:text-base lg:text-sm md:text-xs sm:text-[10px] px-5"} />
                    <ArrowButton href={"/auth/signup"} text={"Get Started"} icon={<FaArrowRight />} className={"sm:block hidden bg-[#8B1E3F] text-white hover:bg-[#A23652] xl:text-sm lg:text-xs md:text-[10px] sm:text-[9px]"} />
                </div>
            </div>
        </nav>
    )
};