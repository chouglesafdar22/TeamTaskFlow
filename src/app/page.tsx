"use client";
import { Navbar } from "@/components/Navbar";
import { FeatureCard } from "@/components/FeatureCard";
import { PrimaryButton, ArrowButton } from "@/components/Button";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { UpButton } from "@/components/Button";
import SocialProofBadge from "@/components/SocialProofBadge";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <UpButton/> */}

      <section id="home" className="header xl:pt-48 lg:pt-44 md:pt-40 sm:pt-36 pt-32 xl:pb-20 lg:pb-16 md:pb-14 sm:pb-12 pb-11 xl:px-8 lg:px-7 md:px-5 sm:px-4 px-2">
        <div className="flex flex-col justify-center container sm:gap-5 gap-4 py-2.5 md:px-5 px-2.5 mx-auto">
          <div className=" flex justify-center items-center">
            <SocialProofBadge />
          </div>
          <h2 className="text-gray-800 text-center poppins-semibold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl wrap-break-word">Manage Team Tasks Clearly — From Todo to Done</h2>
          <span className="text-gray-600 md:text-center text-left line-clamp-2 poppins-regular xl:text-xl lg:text-lg md:text-base base:text-sm text-xs wrap-break-word">TeamTaskFlow helps teams organize work, assign tasks, and track progress using a simple Kanban workflow.</span>
          <div className="sm:hidden flex flex-col md:gap-5 gap-3.5 justify-center items-center">
            <PrimaryButton href={"/auth/login"} text={"Login"} className={"bg-[#8B1E3F] text-white hover:bg-[#A23652] px-9"} />
            <ArrowButton href={"/auth/signup"} text={"Get Started"} icon={<FaArrowRight />} className={"border-2 border-solid border-gray-300 text-gray-700 hover:bg-gray-100"} />
          </div>
          <div className="mx-auto max-w-6xl px-2.5">
            <p className="text-sm text-gray-400 text-center">*/Dummy image/*</p>
            <Image
              src={"/images/dashboard-image.avif"}
              alt="dashboard-image"
              width={1200}
              height={750}
              loading='eager'
              unoptimized
              className="w-full h-auto rounded-xl drop-shadow-xl drop-shadow-gray-500"
            />
          </div>
        </div>
      </section>

      <section className="features xl:pt-5 lg:pt-4 md:pt-3 sm:pt-2 pt-1.5 xl:pb-20 lg:pb-16 md:pb-14 sm:pb-12 pb-11 xl:px-8 lg:px-7 md:px-5 sm:px-4 px-2">
        <div className="max-w-6xl mx-auto flex flex-col sm:gap-10 gap-7 xl:justify-center py-2.5 md:px-5 px-2.5">
          <h3 className="text-[#8B1E3F] text-center poppins-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl">Features</h3>
          <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-8">
            <FeatureCard title={"Project & Task Management"} text={"Create projects, add tasks, and assign work to your team with clear ownership."} />
            <FeatureCard title={"Kanban Workflow"} text={"Visualize work using Todo, In Progress, and Done boards to track progress easily."} />
            <FeatureCard title={"Team Roles & Permissions"} text={"Owners, members, and viewers each get the right level of access and control."} />
            <FeatureCard title={"Progress Dashboard"} text={"Get a clear overview of completed tasks, pending work, and team productivity."} />
          </div>
        </div>
      </section>
    </>
  )
};
