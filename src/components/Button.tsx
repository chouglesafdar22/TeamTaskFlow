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
        <Link href={href}>
            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", duration: 0.3, ease: "linear" }}
                className={`${className} text-center cursor-pointer poppins-light items-center xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm w-auto h-auto py-1.5 px-3.5 rounded-2xl transition-all duration-500 ease-linear`}
            >
                {text}
            </motion.button>
        </Link>
    )
};