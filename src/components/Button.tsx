"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface LinkButtonProps {
    href: string;
    text: string;
    className?: string
};

export function PrimaryButton({ href, text, className = "" }: LinkButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", duration: 0.3, ease: "linear" }}
            className={`${className} text-center bg-white text-black cursor-pointer poppins-light items-center xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm w-auto h-auto py-2 px-2.5 rounded-md hover:rounded-lg transition-all duration-500 ease-linear`}
        >
            <Link href={href}>{text}</Link>
        </motion.button>
    )
}