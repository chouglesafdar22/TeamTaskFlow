"use client";
import { Navbar } from "@/components/Navbar";
import { FeatureCard } from "@/components/FeatureCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="header xl:pt-40 lg:pt-36 md:pt-32 sm:pt-28 pt-24 xl:pb-20 lg:pb-16 md:py-14 sm:py-12 py-11 xl:px-6 lg:px-5 md:px-4 sm:px-3 px-1.5">
        <div className="flex flex-col justify-center container items-center gap-4 py-2.5 md:px-5 px-2.5 mx-auto">
          <h2 className="text-white text-center poppins-semibold xl:text-3xl lg:text-2xl md:text-xl base:text-lg text-sm">GemAi — Your Ultimate Personal AI Assistant</h2>
          <span className="text-white md:text-center text-left line-clamp-4 poppins-regular xl:text-xl lg:text-lg md:text-base base:text-sm text-xs wrap-break-word">GemAi empowers you with the intelligence of Google’s Gemini API, delivering fast, accurate, and deeply intuitive responses to everything you need. Write, code, learn, analyze, and create effortlessly with an AI assistant designed to boost your productivity and help you achieve more every single day.
          </span>
        </div>
      </section>

      <section className="features xl:px-6 lg:px-5 md:px-4 sm:px-3 px-1.5">
        <div className="flex flex-col sm:gap-7 gap-4 xl:justify-center py-2.5 md:px-5 px-2.5">
          <h3 className="text-white text-center poppins-medium xl:text-3xl lg:text-2xl md:text-xl base:text-lg text-sm">Features</h3>
          <div className="flex sm:flex-row flex-col justify-center items-center gap-3.5">
            <FeatureCard title={"Smart Responses Powered"} text={"Get fast, accurate, and deeply contextual answers for anything you ask. GemAi uses the Gemini API to deliver intelligent results instantly."} />
            <FeatureCard title={"Write & Create Effortlessly"} text={"From emails and blogs to ideas and summaries — GemAi helps you write and create high-quality content in seconds."} />
            <FeatureCard title={"Code, Debug & Learn Faster"} text={"Whether you're a beginner or an experienced developer, GemAi assists with coding, debugging, explanations, and problem-solving with clarity."} />
            <FeatureCard title={"Analyze Anything Instantly"} text={"Break down complex topics, understand data, or get quick insights. GemAi helps you learn and make smarter decisions effortlessly."} />
          </div>
        </div>
      </section>
    </>
  )
};
