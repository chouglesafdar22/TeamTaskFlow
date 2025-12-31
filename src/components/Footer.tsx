"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col bottom-0 w-full relative bg-[#F3F4F6] pt-20 pb-10 px-6 gap-5">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                <div className="flex flex-col justify-start items-start gap-1">
                    <div className="flex justify-center items-center text-center gap-1">
                        <Image
                            src={"/images/ttf-logo.png"}
                            alt="teamTaskFlow-logo"
                            width={50}
                            height={50}
                            loading='eager'
                            unoptimized
                            className="object-cover rounded-full"
                        />
                        <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg text-[#8B1E3F] poppins-bold">
                            TeamTaskFlow
                        </h1>
                    </div>
                    <p className='items-start poppins-light text-gray-700 xl:text-lg lg:text-base sm:text-sm text-[12px]'>
                        A simple task and workflow management platform for modern teams.
                    </p>
                    <div className='flex flex-row gap-3 justify-center items-center'>
                        <div className="facebook flex items-center cursor-pointer justify-center text-center size-9 hover:bg-gray-400 text-gray-800 rounded-full poppins-extralight">
                            <Link href={"https://www.facebook.com/"}><FaFacebookF /></Link>
                        </div>
                        <div className="instagram flex items-center cursor-pointer justify-center text-center size-9 hover:bg-gray-400 text-gray-800 rounded-full poppins-extralight">
                            <Link href={"https://www.instagram.com/"}><FaInstagram /></Link>
                        </div>
                        <div className="twitter flex items-center cursor-pointer justify-center text-center size-9 hover:bg-gray-400 text-gray-800 rounded-full poppins-extralight">
                            <Link href={"https://www.x.com/"}><FaXTwitter /></Link>
                        </div>
                        <div className="twitter flex items-center cursor-pointer justify-center text-center size-9 hover:bg-gray-400 text-gray-800 rounded-full poppins-extralight">
                            <Link href={"https://www.linkedin.com/"}><FaLinkedin /></Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start md:justify-center items-start md:items-center gap-1">
                    <h3 className="text-[#8B1E3F] text-center poppins-medium xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm poppins-medium">Links</h3>
                    <Link href={"#features"} className="poppins-regular hover:text-violet-800 hover:underline text-gray-800 xl:text-base lg:text-sm base:text-sm sm:text-xs text-[10px]">Features</Link>
                    <Link href={"/about"} className="poppins-regular hover:text-violet-800 hover:underline text-gray-800 xl:text-base lg:text-sm base:text-sm sm:text-xs text-[10px]">About</Link>
                    <Link href={"/auth/login"} className="poppins-regular hover:text-violet-800 hover:underline text-gray-800 xl:text-base lg:text-sm base:text-sm sm:text-xs text-[10px]">Login</Link>
                    <Link href={"/auth/signup"} className="poppins-regular hover:text-violet-800 hover:underline text-gray-800 xl:text-base lg:text-sm base:text-sm sm:text-xs text-[10px]">Get Started</Link>
                </div>
                <div className="flex flex-col justify-start md:justify-center items-start md:items-center gap-1">
                    <h3 className="text-[#8B1E3F] text-center poppins-medium xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm poppins-medium">Legal</h3>
                    <Link href={"/privacy-policy"} className="poppins-regular hover:text-violet-800 hover:underline text-gray-800 xl:text-base lg:text-sm base:text-sm sm:text-xs text-[10px]">Privacy Policy</Link>
                    <Link href={"/terms-conditions"} className="poppins-regular hover:text-violet-800 hover:underline text-gray-800 xl:text-base lg:text-sm base:text-sm sm:text-xs text-[10px]">Terms & Conditions</Link>
                    <Link href={"/contact"} className="poppins-regular hover:text-violet-800 hover:underline text-gray-800 xl:text-base lg:text-sm base:text-sm sm:text-xs text-[10px]">Contact</Link>
                </div>
            </div>
            <div className="flex justify-start items-start text-left">
                <p className="text-gray-700 xl:text-lg lg:text-base sm:text-sm text-[12px] poppins-regular wrap-break-word">Copyright &copy;{currentYear} TeamTaskFlow. All Rights Reserved <Link href={"https://safdarchougle.vercel.app/"} className="hover:text-violet-900 hover:underline">ChougleSafdar</Link></p>
            </div>
        </footer>
    )
};