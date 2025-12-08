"use client";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/Button"

export function Navbar() {
    return (
        <nav className="navbar z-40 bg-gray-700/30 backdrop-blur-xs flex flex-col border-b-2 border-b-gray-400 top-0 w-full md:py-4 py-2.5 md:px-5 px-3 fixed">
            <div className="navbarLinks flex flex-row justify-between items-center text-center">
                <div className="logoLeftSides flex justify-center items-center text-center gap-1 px-0.5">
                    <Image
                        src={"/images/gemai-logo.png"}
                        alt="gemai-logo"
                        width={50}
                        height={50}
                        loading='eager'
                        unoptimized
                        className="object-contain rounded-full"
                    />
                    <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-White hover:text-gray-400 poppins-bold">
                        <Link href="/">GemAi</Link>
                    </h1>
                </div>
                <div className="rightSides flex justify-center items-center text-center gap-3.5 px-2.5">
                    <PrimaryButton href={"/auth/signup"} text={"Signup"} className={"sm:block hidden bg-gray-500 text-white hover:bg-black hover:text-white "} />
                    <PrimaryButton href={"/auth/login"} text={"Login"} className={"sm:block hidden bg-white text-black hover:bg-black hover:text-white"} />
                </div>
            </div>
        </nav>
    )
};