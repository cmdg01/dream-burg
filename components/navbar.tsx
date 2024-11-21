"use client"

import { Facebook, Instagram, MapPin, Menu, Phone, Youtube } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SOCIAL_LINKS } from "@/lib/constants"

export function Navbar() {
  return (
    <div className="flex flex-col w-full">
      {/* Top bar */}
      <div className="w-full bg-[#FF7A00] text-white px-4 py-2">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-center sm:text-left">222A duma Nyika, Masvingo</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>0783308833 / 0716899224</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <Link href={SOCIAL_LINKS.tiktok} className="hover:opacity-80">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="sr-only">TikTok</span>
            </Link>
            <Link href={SOCIAL_LINKS.youtube} className="hover:opacity-80">
              <Youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href={SOCIAL_LINKS.instagram} className="hover:opacity-80">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href={SOCIAL_LINKS.facebook} className="hover:opacity-80">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="w-full bg-[#1E1E1E] text-white px-4 py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-[#FF7A00] text-xl sm:text-2xl font-bold">
            Dreamburg
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="flex gap-6">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="text-white hover:text-[#FF7A00] transition-colors"
                    href="/"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="text-white hover:text-[#FF7A00] transition-colors"
                    href="/about"
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="text-white hover:text-[#FF7A00] transition-colors"
                    href="/services"
                  >
                    Services
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="text-white hover:text-[#FF7A00] transition-colors"
                    href="/projects"
                  >
                    Projects
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild className="hidden sm:flex bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white">
              <Link href="/contact">
                CONTACT US
              </Link>
            </Button>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#1E1E1E] text-white w-[80vw] sm:w-[60vw] max-w-md">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link href="/" className="text-lg hover:text-[#FF7A00] transition-colors">
                    Home
                  </Link>
                  <Link href="/about" className="text-lg hover:text-[#FF7A00] transition-colors">
                    About Us
                  </Link>
                  <Link href="/services" className="text-lg hover:text-[#FF7A00] transition-colors">
                    Services
                  </Link>
                  <Link href="/projects" className="text-lg hover:text-[#FF7A00] transition-colors">
                    Projects
                  </Link>
                  <Button asChild className="w-full bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white sm:hidden">
                    <Link href="/contact">
                      CONTACT US
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  )
}