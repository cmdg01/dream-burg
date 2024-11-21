'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle2  } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Architecture",
    description: "Professional architectural design and planning services for your projects.",
    features: ["Custom Design", "3D Visualization", "Construction Documentation", "Project Planning"],
    slug: "architecture",
    icon: "📐"
  },
  {
    title: "Electrical",
    description: "Complete electrical installation and maintenance services for all types of buildings.",
    features: ["Wiring Installation", "Electrical Repairs", "Safety Inspections", "Lighting Systems"],
    slug: "electrical",
    icon: "⚡"
  },
  {
    title: "Plumbing",
    description: "Expert plumbing services for installation, maintenance, and repairs.",
    features: ["Pipe Installation", "Drainage Systems", "Water Heaters", "Leak Detection"],
    slug: "plumbing",
    icon: "🔧"
  },
  {
    title: "Roofing",
    description: "Professional roofing solutions for residential and commercial buildings.",
    features: ["Roof Installation", "Repairs & Maintenance", "Waterproofing", "Roof Inspections"],
    slug: "roofing",
    icon: "🏠"
  },
  {
    title: "Bill of Quantity",
    description: "Detailed cost estimation and quantity surveying services for construction projects.",
    features: ["Cost Estimation", "Material Quantities", "Labor Calculations", "Project Budgeting"],
    slug: "bill-of-quantity",
    icon: "📋"
  },
  {
    title: "Borehole Drilling",
    description: "Expert borehole drilling services for water access and geological surveys.",
    features: ["Site Assessment", "Well Installation", "Pump Systems", "Water Quality Testing"],
    slug: "borehole-drilling",
    icon: "💧"
  },
  {
    title: "Brickwork",
    description: "Expert bricklaying services for all types of construction projects.",
    features: ["Foundation Work", "Wall Construction", "Decorative Brickwork", "Repairs"],
    slug: "brickwork",
    icon: "🧱"
  },
  {
    title: "Plastering",
    description: "Professional plastering services for smooth, durable wall finishes.",
    features: ["Interior Plastering", "Exterior Rendering", "Patch Repairs", "Textured Finishes"],
    slug: "plastering",
    icon: "🏗️"
  },
  {
    title: "Floors",
    description: "Specialized in both rough and smooth floor installations.",
    features: ["Rough Concrete", "Smooth Finish", "Floor Leveling", "Surface Preparation"],
    slug: "floors",
    icon: "🏢"
  },
  {
    title: "Tiling",
    description: "Expert tiling services for floors and walls with precision installation.",
    features: ["Floor Tiling", "Wall Tiling", "Decorative Patterns", "Waterproofing"],
    slug: "tiling",
    icon: "🔲"
  },
  {
    title: "Wall Skimming",
    description: "Professional wall skimming for perfectly smooth surfaces.",
    features: ["Surface Preparation", "Smooth Finish", "Crack Repair", "Paint Ready Surfaces"],
    slug: "wall-skimming",
    icon: "🔨"
  },
  {
    title: "Painting",
    description: "Quality painting services for interior and exterior surfaces.",
    features: ["Interior Painting", "Exterior Painting", "Decorative Finishes", "Color Consulting"],
    slug: "painting",
    icon: "🎨"
  },
  {
    title: "Yard Paving",
    description: "Professional paving solutions for driveways and outdoor spaces.",
    features: ["Driveway Paving", "Walkways", "Patios", "Decorative Paving"],
    slug: "yard-paving",
    icon: "🛣️"
  },
  {
    title: "Renovations",
    description: "Comprehensive renovation services for residential and commercial properties.",
    features: ["Interior Renovations", "Exterior Updates", "Space Optimization", "Modern Upgrades"],
    slug: "renovations",
    icon: "🏠"
  },
  {
    title: "Epoxy Floor Designing",
    description: "Custom epoxy floor solutions for stunning and durable surfaces.",
    features: ["Custom Designs", "Industrial Floors", "Decorative Finishes", "Anti-Slip Coating"],
    slug: "epoxy-floor-designing",
    icon: "🎨"
  },
  {
    title: "Ceilings",
    description: "Professional ceiling installation and repair services.",
    features: ["Drop Ceilings", "Decorative Ceilings", "Repairs", "Lighting Integration"],
    slug: "ceilings",
    icon: "📐"
  },
  {
    title: "Furniture Fitting",
    description: "Expert furniture fitting and installation services.",
    features: ["Custom Fitting", "Built-in Furniture", "Assembly", "Kitchen Units"],
    slug: "furniture-fitting",
    icon: "🪑"
  }
]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }
  
  export default function ServicesPage() {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-1">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-black text-white py-20"
          >
            <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] opacity-30 bg-cover bg-center" />
            <div className="container mx-auto px-4 relative">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Comprehensive construction and development solutions tailored to your needs
              </p>
            </div>
          </motion.div>
  
          {/* Services Grid */}
          <div className="container mx-auto px-4 py-16">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service.slug}
                  variants={itemVariants}
                  className="group relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7A00]/10 rounded-bl-full transform translate-x-16 -translate-y-16" />
                  <div className="p-8">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#FF7A00] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#FF7A00]" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-[#FF7A00] font-semibold group-hover:gap-4 transition-all"
                    >
                      Learn More 
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
  
          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1E1E1E] text-white py-16"
          >
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your construction needs and discover how we can bring your vision to life.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#FF7A00] text-white px-8 py-3 rounded-lg hover:bg-[#FF7A00]/90 transition-colors"
              >
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    )
  }