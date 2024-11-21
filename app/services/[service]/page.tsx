'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { generateMailtoLink } from "@/lib/utils/mailto"

// Reference the services array from services/page.tsx
const services = [
    {
      title: "Architecture",
      description: "Professional architectural design and planning services for your projects.",
      features: ["Custom Design", "3D Visualization", "Construction Documentation", "Project Planning"],
      slug: "architecture",
      icon: "📐",
      image: "/architecture-services.jpg",
      longDescription: "Our architectural services combine creative design with practical functionality. We offer comprehensive planning, detailed 3D visualization, and complete construction documentation to bring your vision to life. Our team works closely with clients to ensure every design meets both aesthetic and functional requirements."
    },
    {
      title: "Electrical",
      description: "Complete electrical installation and maintenance services for all types of buildings.",
      features: ["Wiring Installation", "Electrical Repairs", "Safety Inspections", "Lighting Systems"],
      slug: "electrical",
      icon: "⚡",
      image: "/electrical.jpg",
      longDescription: "Our comprehensive electrical services cover everything from initial installation to maintenance and repairs. We prioritize safety and efficiency in all our electrical work, ensuring your property meets all required codes and standards. Our experienced technicians handle both residential and commercial electrical needs with expertise."
    },
    {
      title: "Plumbing",
      description: "Expert plumbing services for installation, maintenance, and repairs.",
      features: ["Pipe Installation", "Drainage Systems", "Water Heaters", "Leak Detection"],
      slug: "plumbing",
      icon: "🔧",
      image: "/plumbing.jpg",
      longDescription: "Our professional plumbing services ensure your water systems function perfectly. From installation of new plumbing systems to emergency repairs, we handle all aspects of residential and commercial plumbing. We use the latest technology for leak detection and provide efficient solutions for all plumbing needs."
    },
    {
      title: "Roofing",
      description: "Professional roofing solutions for residential and commercial buildings.",
      features: ["Roof Installation", "Repairs & Maintenance", "Waterproofing", "Roof Inspections"],
      slug: "roofing",
      icon: "🏠",
      image: "/roofing.jpg",
      longDescription: "We provide comprehensive roofing services that protect your property from the elements. Our experienced team handles everything from new roof installations to repairs and maintenance. We work with various roofing materials and ensure proper waterproofing for long-lasting protection."
    },
    {
      title: "Bill of Quantity",
      description: "Detailed cost estimation and quantity surveying services for construction projects.",
      features: ["Cost Estimation", "Material Quantities", "Labor Calculations", "Project Budgeting"],
      slug: "bill-of-quantity",
      icon: "📋",
      image: "/quantity-survey.jpg",
      longDescription: "Our quantity surveying services provide accurate cost estimations and detailed material calculations for construction projects. We help optimize your project budget by providing comprehensive bills of quantities, material takeoffs, and labor cost analysis. Our detailed reports ensure transparency and efficient project planning."
    },
  {
    title: "Borehole Drilling",
    description: "Expert borehole drilling services for water access and geological surveys.",
    features: ["Site Assessment", "Well Installation", "Pump Systems", "Water Quality Testing"],
    slug: "borehole-drilling",
    icon: "💧",
    image: "/borehole-drill.jpg",
    longDescription: "Our professional borehole drilling services provide reliable water access solutions for residential and commercial properties. We conduct thorough site assessments, implement efficient drilling techniques, and install high-quality pump systems. Each project includes comprehensive water quality testing to ensure safe and sustainable water supply."
  },
  
  {
    title: "Brickwork",
    description: "Expert bricklaying services for all types of construction projects.",
    features: ["Foundation Work", "Wall Construction", "Decorative Brickwork", "Repairs"],
    slug: "brickwork",
    icon: "🧱",
    image: "/brickwork-services.jpg",
    longDescription: "Our expert bricklaying services cover all aspects of construction, from foundational work to decorative features. We ensure precise installation and lasting durability for all brick structures."
  },
  {
    title: "Plastering",
    description: "Professional plastering services for smooth, durable wall finishes.",
    features: ["Interior Plastering", "Exterior Rendering", "Patch Repairs", "Textured Finishes"],
    slug: "plastering",
    icon: "🏗️",
    image: "/plastering-services.jpg",
    longDescription: "We provide high-quality plastering services that ensure smooth, durable surfaces for both interior and exterior walls. Our skilled team delivers flawless finishes that stand the test of time."
  },
  {
    title: "Floors",
    description: "Specialized in both rough and smooth floor installations.",
    features: ["Rough Concrete", "Smooth Finish", "Floor Leveling", "Surface Preparation"],
    slug: "floors",
    icon: "🏢",
    image: "/flooring-services.jpg",
    longDescription: "From rough concrete to perfectly smooth finishes, our flooring services cover all your needs. We ensure proper leveling and preparation for long-lasting, beautiful floors."
  },
  {
    title: "Tiling",
    description: "Expert tiling services for floors and walls with precision installation.",
    features: ["Floor Tiling", "Wall Tiling", "Decorative Patterns", "Waterproofing"],
    slug: "tiling",
    icon: "🔲",
    image: "/tiling-services.jpg",
    longDescription: "Our professional tiling services ensure precise installation for both floors and walls. We work with all types of tiles and create stunning patterns that enhance your space."
  },
  {
    title: "Wall Skimming",
    description: "Professional wall skimming for perfectly smooth surfaces.",
    features: ["Surface Preparation", "Smooth Finish", "Crack Repair", "Paint Ready Surfaces"],
    slug: "wall-skimming",
    icon: "🔨",
    image: "/wall-skimming.jpg",
    longDescription: "Our wall skimming service provides the perfect smooth finish for your walls. We repair imperfections and prepare surfaces for a flawless paint application."
  },
  {
    title: "Painting",
    description: "Quality painting services for interior and exterior surfaces.",
    features: ["Interior Painting", "Exterior Painting", "Decorative Finishes", "Color Consulting"],
    slug: "painting",
    icon: "🎨",
    image: "/painting.jpg",
    longDescription: "We deliver exceptional painting services for both interior and exterior surfaces. Our team ensures proper preparation and perfect application for lasting results."
  },
  {
    title: "Yard Paving",
    description: "Professional paving solutions for driveways and outdoor spaces.",
    features: ["Driveway Paving", "Walkways", "Patios", "Decorative Paving"],
    slug: "yard-paving",
    icon: "🛣️",
    image: "paving-services.jpg",
    longDescription: "Transform your outdoor spaces with our professional paving services. We create beautiful and durable surfaces for driveways, walkways, and patios."
  },
  {
    title: "Renovations",
    description: "Comprehensive renovation services for residential and commercial properties.",
    features: ["Interior Renovations", "Exterior Updates", "Space Optimization", "Modern Upgrades"],
    slug: "renovations",
    icon: "🏠",
    image: "/renovations.jpg",
    longDescription: "Our renovation services breathe new life into your property. We handle both residential and commercial projects with attention to detail and quality craftsmanship."
  },
  {
    title: "Epoxy Floor Designing",
    description: "Custom epoxy floor solutions for stunning and durable surfaces.",
    features: ["Custom Designs", "Industrial Floors", "Decorative Finishes", "Anti-Slip Coating"],
    slug: "floor-design",
    icon: "🎨",
    image: "/images/services/epoxy-floors.jpg",
    longDescription: "Create unique and durable floors with our epoxy floor designing service. Perfect for both residential and commercial spaces, combining beauty with functionality."
  },
  {
    title: "Ceilings",
    description: "Professional ceiling installation and repair services.",
    features: ["Drop Ceilings", "Decorative Ceilings", "Repairs", "Lighting Integration"],
    slug: "ceilings",
    icon: "📐",
    image: "/ceiling-services.jpg",
    longDescription: "Our ceiling services cover everything from installation to repairs. We create beautiful ceiling designs that complement your space while integrating modern lighting solutions."
  },
  {
    title: "Furniture Fitting",
    description: "Expert furniture fitting and installation services.",
    features: ["Custom Fitting", "Built-in Furniture", "Assembly", "Kitchen Units"],
    slug: "furniture-fitting",
    icon: "🪑",
    image: "/furnishings.jpg",
    longDescription: "We provide professional furniture fitting services for all your needs. From custom built-ins to kitchen units, we ensure perfect installation and alignment."
  }
]

interface Props {
  params: {
    service: string
  }
}

export default function ServicePage({ params }: Props) {
  const service = services.find(s => s.slug === params.service)
  
  if (!service) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-black">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">About This Service</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.longDescription}
              </p>
              <div className="bg-neutral-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[#FF7A00] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 border rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Request This Service</h2>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault()
                const formData = {
                  name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
                  email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
                  message: (e.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value,
                  service: service.title
                }
                const mailtoLink = generateMailtoLink(formData)
                window.location.href = mailtoLink
              }}>
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="w-full p-3 border rounded-md"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="w-full p-3 border rounded-md"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    className="w-full p-3 border rounded-md h-32"
                    placeholder="Tell us about your project"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF7A00] text-white py-3 rounded-md hover:bg-[#FF7A00]/90 transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
