"use client";
import { Navbar } from "@/components/Navbar";
import { FeatureCard } from "@/components/FeatureCard";
import { PrimaryButton } from "@/components/Button";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="header xl:pt-42 lg:pt-38 md:pt-34 sm:pt-28 pt-24 xl:pb-20 lg:pb-16 md:py-14 sm:py-12 py-11 xl:px-8 lg:px-7 md:px-5 sm:px-4 px-2">
        <div className="flex flex-col justify-center container sm:gap-5 gap-4 py-2.5 md:px-5 px-2.5 mx-auto">
          <h2 className="text-gray-800 text-center poppins-semibold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl wrap-break-word">Manage Team Tasks Clearly — From Todo to Done</h2>
          <span className="text-gray-600 md:text-center text-left line-clamp-2 poppins-regular xl:text-xl lg:text-lg md:text-base base:text-sm text-xs wrap-break-word">TeamTaskFlow helps teams organize work, assign tasks, and track progress using a simple Kanban workflow.</span>
          <div className="flex md:flex-row flex-col md:gap-5 gap-3.5 justify-center items-center">
            <PrimaryButton href={"/auth/login"} text={"Login"} className={"bg-[#8B1E3F] text-white hover:bg-[#A23652] px-9"} />
            <PrimaryButton href={"/auth/signup"} text={"Get Started"} className={"border-2 border-solid border-gray-300 text-gray-700 hover:bg-gray-100"} />
          </div>
          <div></div>
        </div>
      </section>

      {/* <section className="features xl:pt-5 lg:pt-4 md:pt-3 sm:pt-2 pt-1.5 xl:px-6 lg:px-5 md:px-4 sm:px-3 px-1.5">
        <div className="flex flex-col sm:gap-8 gap-5 xl:justify-center py-2.5 md:px-5 px-2.5">
          <h3 className="text-white text-center poppins-medium xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base">Features</h3>
          <div className="flex sm:flex-row flex-col justify-center items-center gap-5">
            <FeatureCard title={"Smart Responses Powered"} text={"Get fast, accurate, and deeply contextual answers for anything you ask. GemAi uses the Gemini API to deliver intelligent results instantly."} />
            <FeatureCard title={"Write & Create Effortlessly"} text={"From emails and blogs to ideas and summaries — GemAi helps you write and create high-quality content in seconds."} />
            <FeatureCard title={"Code, Debug & Learn Faster"} text={"Whether you're a beginner or an experienced developer, GemAi assists with coding, debugging, explanations, and problem-solving with clarity."} />
            <FeatureCard title={"Analyze Anything Instantly"} text={"Break down complex topics, understand data, or get quick insights. GemAi helps you learn and make smarter decisions effortlessly."} />
          </div>
        </div>
      </section> */}
    </>
  )
};
