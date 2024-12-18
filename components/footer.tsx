'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, MapPin, Phone, Mail, X } from "lucide-react"
import Link from "next/link"
import { COMPANY_EMAIL, COMPANY_ADDRESS, COMPANY_ADDRESS_2, COMPANY_PHONE, SOCIAL_LINKS } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#1E1E1E] text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12">
            {/* Company Info */}
            <div>
              <Link href="/" className="text-[#FF7A00] text-2xl font-bold block mb-4">
                DREAMBURG
              </Link>
              <p className="text-gray-400 mb-6">
                Building dreams into reality with innovation and excellence in construction.
              </p>
              <div className="flex gap-4">
                <Link 
                  href={SOCIAL_LINKS.facebook} 
                  className="text-gray-400 hover:text-[#FF7A00] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link 
                  href={SOCIAL_LINKS.instagram} 
                  className="text-gray-400 hover:text-[#FF7A00] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link 
                  href={SOCIAL_LINKS.tiktok} 
                  className="text-gray-400 hover:text-[#FF7A00] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </Link>
                <Link 
                  href="https://wa.me/263783308833" 
                  className="text-gray-400 hover:text-[#FF7A00] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-3">
                <Link href="/" className="text-gray-400 hover:text-[#FF7A00] transition-colors block">Home</Link>
                <Link href="/about" className="text-gray-400 hover:text-[#FF7A00] transition-colors block">About</Link>
                <Link href="/services" className="text-gray-400 hover:text-[#FF7A00] transition-colors block">Services</Link>
                <Link href="/projects" className="text-gray-400 hover:text-[#FF7A00] transition-colors block">Projects</Link>
                <Link href="/team" className="text-gray-400 hover:text-[#FF7A00] transition-colors block">Team</Link>
                <Link href="/contact" className="text-gray-400 hover:text-[#FF7A00] transition-colors block">Contact</Link>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <nav className="space-y-3">
                <Link href="/services/brickwork" className="text-gray-400 hover:text-[#FF7A00] transition-colors block">Brickwork</Link>
                <Link href="/services/plastering" className="text-gray-400 hover:text-[#FF7A00] transition-colors block">Plastering</Link>
                <Link href="/services/floors" className="text-gray-400 hover:text-[#FF7A00] transition-colors block">Floors</Link>
                <Link href="/services/tiling" className="text-gray-400 hover:text-[#FF7A00] transition-colors block">Tiling</Link>
                <Link href="/services/painting" className="text-gray-400 hover:text-[#FF7A00] transition-colors block">Painting</Link>
                <Link href="/services" className="text-gray-400 hover:text-[#FF7A00] transition-colors block">View All Services</Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#FF7A00] mt-1" />
                  <div>
                    <p className="text-gray-400">{COMPANY_ADDRESS}</p>
                    <p className="text-gray-400">{COMPANY_ADDRESS_2}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#FF7A00] mt-1" />
                  <p className="text-gray-400">{COMPANY_PHONE}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#FF7A00] mt-1" />
                  <p className="text-gray-400">{COMPANY_EMAIL}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#FF7A00] text-white py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p> Copyrighted © 2024  by Dreamburg</p>
        </div>
      </div>
    </footer>
  )
}