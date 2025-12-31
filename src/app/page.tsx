"use client";
import { Navbar } from "@/components/Navbar";
import { FeatureCard } from "@/components/FeatureCard";
import { PrimaryButton, ArrowButton } from "@/components/Button";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { UpButton } from "@/components/Button";
import SocialProofBadge from "@/components/SocialProofBadge";
import ScrollWrapper from "@/components/ScrollWrapper";
import { Card } from "@/components/Card";
import { FreeCard, PriceCard } from "@/components/PricingCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <UpButton />

      <ScrollWrapper direction="fade" ease="linear" delay={0.2}>
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
              <p className="text-sm sm:text-base lg:text-lg text-red-700 text-center">*/Dummy image/*</p>
              <Image
                src={"/images/dashboard-image.avif"}
                alt="dashboard-image"
                width={1200}
                height={800}
                loading='eager'
                unoptimized
                className="w-full h-auto rounded-xl drop-shadow-xl drop-shadow-gray-500"
              />
            </div>
          </div>
        </section>
      </ScrollWrapper>

      <section id="features" className="features xl:pt-5 lg:pt-4 md:pt-3 sm:pt-2 pt-1.5 xl:pb-20 lg:pb-16 md:pb-14 sm:pb-12 pb-11 xl:px-8 lg:px-7 md:px-5 sm:px-4 px-2">
        <div className="max-w-6xl mx-auto flex flex-col gap-14 xl:justify-center py-2.5 md:px-5 px-2.5">
          <ScrollWrapper direction="fade">
            <h3 className="text-[#8B1E3F] text-center poppins-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl">Features</h3>
          </ScrollWrapper>
          <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-10">
            <FeatureCard title={"Project & Task Management"} text={"Create projects, add tasks, and assign work to your team with clear ownership."} />
            <FeatureCard title={"Kanban Workflow"} text={"Visualize work using Todo, In Progress, and Done boards to track progress easily."} />
            <FeatureCard title={"Team Roles & Permissions"} text={"Owners, members, and viewers each get the right level of access and control."} />
            <FeatureCard title={"Progress Dashboard"} text={"Get a clear overview of completed tasks, pending work, and team productivity."} />
          </div>
        </div>
      </section>

      <section className="workingexpcard bg-gray-100 xl:pt-5 lg:pt-4 md:pt-3 sm:pt-2 pt-1.5 xl:pb-20 lg:pb-16 md:pb-14 sm:pb-12 pb-11 xl:px-8 lg:px-7 md:px-5 sm:px-4 px-2">
        <div className="flex flex-col gap-14 xl:justify-center py-2.5 md:px-5 px-2.5">
          <ScrollWrapper direction="fade">
            <h3 className="text-[#8B1E3F] text-center poppins-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl">How TeamTaskFlow Works?</h3>
          </ScrollWrapper>
          <div className="flex lg:flex-row flex-wrap justify-center items-center gap-10">
            <Card no={1} title={"Create a Workspace"} text={"Set up your team workspace in seconds and invite members to collaborate."} />
            <Card no={2} title={"Add Projects & Tasks"} text={"Create projects, assign tasks, and organize work with clear priorities."} />
            <Card no={3} title={"Track Progress"} text={"Move tasks across the Kanban board and monitor progress in real time."} />
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing xl:pt-5 lg:pt-4 md:pt-3 sm:pt-2 pt-1.5 xl:pb-20 lg:pb-16 md:pb-14 sm:pb-12 pb-11 xl:px-8 lg:px-7 md:px-5 sm:px-4 px-2">
        <div className=" max-w-6xl mx-auto flex flex-col gap-14 xl:justify-center py-2.5 md:px-5 px-2.5">
          <ScrollWrapper direction="fade">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#8B1E3F] text-center poppins-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl">Pricing</h3>
              <p className="mt-2.5 text-center poppins-light xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] text-gray-600">
                Start free. Upgrade when your team grows.
              </p>
            </div>
          </ScrollWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FreeCard/>
            <PriceCard/>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
};
