"use client"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/Button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FcGoogle } from "react-icons/fc"

// Hook for intersection observer
function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return [ref, isInView] as const
}

export default function AnimatedAboutPage() {
  const [heroRef, heroInView] = useInView(0.2)
  const [howItWorksRef, howItWorksInView] = useInView(0.2)
  const [shopperInfoRef, shopperInfoInView] = useInView(0.2)
  const [downloadRef, downloadInView] = useInView(0.2)

  return (
    <div>
      <div className="bg-[#FFF5D3] overflow-hidden">
        {/* Navbar placeholder */}
        <Navbar/>
        <div className="h-16 bg-transparent"></div>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="lg:mx-[3em] px-[1em] py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          <div
            className={`transition-all duration-1000 ease-out ${
              heroInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            <Image
              src="/about-us-hero.png"
              alt="about us"
              width={656}
              height={512}
              className="w-full max-w-[656px] h-auto mx-auto hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div
            className={`space-y-6 text-base md:text-lg transition-all duration-1000 ease-out delay-300 ${
              heroInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <h1
              className={`font-semibold text-4xl md:text-6xl transition-all duration-700 delay-500 ${
                heroInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              About Us
            </h1>
            <div className="space-y-4">
              <p
                className={`transition-all duration-700 delay-700 ${
                  heroInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                ShopperHunt is a tool used to connect shoppers to local businesses through high powered technology and
                artificial intelligence.
              </p>
              <p
                className={`transition-all duration-700 delay-900 ${
                  heroInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                ShopperHunt offers services to shoppers and vendors through a mobile application which provides
                real-time updates for shoppers on nearby stores, the items sold and the availability of stock and for
                vendors, the ability to increase their customer reach, display their catalog of products and offer
                promotions/ sales.
              </p>
              <p
                className={`transition-all duration-700 delay-1100 ${
                  heroInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                We exist to make your experience better, whether you are an avid shopper or a vendor.
              </p>
            </div>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 transition-all duration-700 delay-1300 ${
                heroInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Button
                type="submit"
                className="w-full hover:scale-105 transition-all duration-200 hover:shadow-lg animate-bounce-in delay-1500"
              >
                Sign Up
              </Button>
              <Button className="w-full bg-transparent border border-black text-black flex items-center gap-x-2 justify-center hover:scale-105 transition-all duration-200 hover:shadow-lg  animate-bounce-in delay-1700">
                <FcGoogle size={20} />
                Sign Up with Google
              </Button>
            </div>

            <p
              className={`text-center text-sm text-muted-foreground pt-4 transition-all duration-700 delay-1500 ${
                heroInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              By creating an account, you agree to our{" "}
              <Link href="#" className="font-bold underline hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="font-bold underline hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>
      </div>

      {/* How it works */}
      <section ref={howItWorksRef} className="lg:mx-[3em] px-[1em] py-12 md:py-20">
        <div
          className={`pb-10 transition-all duration-700 ${
            howItWorksInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="bg-black text-white font-semibold text-2xl md:text-3xl px-5 py-2 rounded-[12px] inline-block hover:bg-gray-800 transition-colors duration-200 hover:scale-105 transform">
            How ShopperHunt Works
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <AnimatedImageCard
            title="Step 1"
            description="Lorem ipsum dilor"
            delay="delay-200"
            inView={howItWorksInView}
          />
          <AnimatedImageCard
            title="Step 2"
            description="Lorem ipsum dilor"
            delay="delay-400"
            inView={howItWorksInView}
          />
          <AnimatedImageCard
            title="Step 3"
            description="Lorem ipsum dilor"
            delay="delay-600"
            inView={howItWorksInView}
          />
        </div>
      </section>

      {/* Divider */}
      <section className="lg:mx-[3em]">
        <div
          className={`w-full h-[3px] bg-black transition-all duration-1000 ${
            howItWorksInView ? "scale-x-100" : "scale-x-0"
          } origin-left`}
        ></div>
      </section>

      {/* Shopper Info */}
      <section ref={shopperInfoRef} className="lg:mx-[3em] px-[1em] py-12 md:py-20 space-y-20">
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10">
          <div
            className={`space-y-4 transition-all duration-1000 ease-out ${
              shopperInfoInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            <h1 className="font-bold text-3xl md:text-4xl">Extra Shopper Info</h1>
            <p className="text-base md:text-lg max-w-xl">
              USP copy Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultrices quam. Fusce rutrum
              mauris quis urna semper lacinia.
            </p>
          </div>
          <div
            className={`w-full max-w-[464px] h-[300px] md:h-[464px] rounded-lg bg-gray-200 flex items-center justify-center transition-all duration-1000 ease-out delay-300 hover:shadow-xl hover:scale-105 ${
              shopperInfoInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <span className="text-gray-500 font-medium">Image goes here</span>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10">
          <div
            className={`w-full max-w-[464px] h-[300px] md:h-[464px] rounded-lg bg-gray-200 flex items-center justify-center transition-all duration-1000 ease-out hover:shadow-xl hover:scale-105 ${
              shopperInfoInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            <span className="text-gray-500 font-medium">Image goes here</span>
          </div>
          <div
            className={`space-y-4 transition-all duration-1000 ease-out delay-300 ${
              shopperInfoInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <h1 className="font-bold text-3xl md:text-4xl">Extra Shopper Info</h1>
            <p className="text-base md:text-lg max-w-xl">
              USP copy Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultrices quam. Fusce rutrum
              mauris quis urna semper lacinia.
            </p>
          </div>
        </div>
      </section>

      {/* Download Banner */}
      <section ref={downloadRef} className="lg:mx-[3em] px-[1em] py-12 md:py-20">
        <div
          className={`bg-[#F2DA10] p-8 lg:p-16 rounded-[18px] flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-1000 ease-out hover:shadow-2xl hover:-translate-y-2 ${
            downloadInView ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <p
            className={`font-extrabold text-3xl md:text-3xl lg:text-5xl tracking-wider text-center md:text-left transition-all duration-700 delay-200 ${
              downloadInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Download Now!
          </p>
          <div
            className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-400 ${
              downloadInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="hover:scale-110 transition-transform duration-200">
              <Image
                src="/About-us-App-Store.png"
                alt="app store logo"
                width={158}
                height={36}
                className="cursor-pointer"
              />
            </div>
            <div className="hover:scale-110 transition-transform duration-200">
              <Image
                src="/About-Us-Google-Play.png"
                alt="google play logo"
                width={158}
                height={36}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer placeholder */}
      <Footer/>
      {/* <div className="h-32 bg-gray-900"></div> */}
    </div>
  )
}

export function AnimatedImageCard({
  title,
  description,
  delay,
  inView,
}: {
  title: string
  description: string
  delay: string
  inView: boolean
}) {
  return (
    <div
      className={`space-y-4 text-center md:text-left w-full transition-all duration-700 ease-out ${delay} group ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div className="w-full h-[300px] md:h-[319px] rounded-lg bg-gray-200 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 group-hover:bg-gray-100">
        <span className="text-gray-500 font-medium">Image goes here</span>
      </div>
      <h1 className="font-bold text-xl md:text-2xl group-hover:text-blue-600 transition-colors duration-200">
        {title}
      </h1>
      <p className="text-base">{description}</p>
    </div>
  )
}

// Floating elements component for extra visual interest
export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-300 rounded-full animate-float opacity-20"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-300 rounded-full animate-float delay-1000 opacity-20"></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-green-300 rounded-full animate-float delay-2000 opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-purple-300 rounded-full animate-float delay-1500 opacity-20"></div>
    </div>
  )
}
