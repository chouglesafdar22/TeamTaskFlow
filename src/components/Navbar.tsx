"use client";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/Button"

export function Navbar() {
    return (
        <nav className="navbar z-40 bg-gray-600/30 flex flex-col border-b-2 border-b-gray-300 top-0 w-full md:py-5 py-3 md:px-6 px-3.5 gap-3.5 fixed">
            <div className="navbarLinks flex flex-row justify-between items-center text-center">
                <div className="logoLeftSides flex justify-center items-center text-center gap-3.5">
                    <Image
                        src={"/images/gemai-logo.png"}
                        alt="gemai-logo"
                        width={50}
                        height={50}
                        className="object-cover rounded-full"
                    />
                    <h1 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-black hover:text-gray-500 poppins-extrabold">
                        <Link href="/">GemAi</Link>
                    </h1>
                </div>
                <div className="rightSides flex justify-center items-center text-center gap-3.5">
                    <PrimaryButton href={"/auth/signup"} text={"Signup"} className={"bg-gray-400 text-white hover:bg-white hover:text-black "} />
                    <PrimaryButton href={"/auth/login"} text={"Login"} className={"hover:bg-gray-400 hover:text-white"} />
                </div>
            </div>
        </nav>
    )
};