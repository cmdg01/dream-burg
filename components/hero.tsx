'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-img.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}
      </div>

      {/* Pattern Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-repeat opacity-10 z-10"
      />

      {/* Content Container */}
      <div className="container relative z-20 mx-auto px-4 py-20">
        <div className="max-w-2xl space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            INNOVATING THE
            <br />
            CONSTRUCTION LANDSCAPE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="text-lg text-gray-300 max-w-xl"
          >
            Through groundbreaking techniques and visionary approaches, we redefine construction norms for a sustainable and
            progressive future.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button
              asChild
              className="bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white rounded-none px-8 hover:scale-105 transition-transform duration-300"
            >
              <Link href="/services">
                OUR SERVICES
              </Link>
            </Button>
          
            <Button
              asChild
              variant="outline"
              className="text-[#FF7A00] border-[#FF7A00] hover:bg-[#FF7A00]/10 rounded-none px-8 hover:scale-105 transition-transform duration-300"
            >
              <Link href="/projects">
                VIEW PROJECTS
              </Link>
            </Button>

          </motion.div>
        </div>
      </div>
    </div>
  )
}