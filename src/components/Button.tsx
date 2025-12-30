"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdArrowDropupCircle } from "react-icons/io";

interface LinkButtonProps {
    href: string;
    text: string;
    className?: string;
    icon?: React.ReactNode;
};

export function PrimaryButton({ href, text, className = "" }: LinkButtonProps) {
    return (
        <Link href={href}>
            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", duration: 0.3, ease: "linear" }}
                className={`${className} text-center cursor-pointer poppins-light items-center xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base w-auto h-auto py-1.5 px-3.5 rounded-2xl transition-all duration-500 ease-linear`}
            >
                {text}
            </motion.button>
        </Link>
    )
};

export function ArrowButton({ href, text, className = "", icon }: LinkButtonProps) {
    return (
        <Link href={href}>
            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", duration: 0.3, ease: "linear" }}
                className={`${className} flex flex-row gap-1 text-center cursor-pointer poppins-light items-center xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base w-auto h-auto py-1.5 px-3.5 rounded-2xl transition-all duration-500 ease-linear`}
            >
                {text}
                <span className="">{icon}</span>
            </motion.button>
        </Link>
    )
};

export function UpButton() {
    return (
        <a href="#home" className="flex fixed z-40 top-[90%] right-8 cursor-pointer rounded-full bg-white/30 backdrop-blur-xs xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-[#8B1E3F] poppins-regular">
            <IoMdArrowDropupCircle />
        </a>
    )
};