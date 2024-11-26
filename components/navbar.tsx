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
              <span>0783308833 / 0716899224 / 0773682892</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <Link 
              href={SOCIAL_LINKS.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link 
              href={SOCIAL_LINKS.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link 
              href={SOCIAL_LINKS.tiktok}
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="sr-only">TikTok</span>
            </Link>
            <Link 
              href="https://wa.me/263783308833" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="sr-only">WhatsApp</span>
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