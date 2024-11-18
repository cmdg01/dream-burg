import Hero from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Services Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#FF7A00] font-semibold mb-2 block">WHAT WE OFFER</span>
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We provide comprehensive construction solutions tailored to meet your specific needs and requirements, 
                with over 20 years of industry experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.title} 
                  className="group bg-white p-8 border border-gray-200 hover:border-[#FF7A00] hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF7A00]/10 rounded-bl-full transform translate-x-12 -translate-y-12" />
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#FF7A00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-[#FF7A00] font-semibold group-hover:gap-4 transition-all"
                  >
                    Learn more 
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#FF7A00] font-semibold mb-2 block">WHY CHOOSE US</span>
                <h2 className="text-4xl font-bold mb-6">Building Excellence, Delivering Trust</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  With decades of experience in the construction industry, we've built our reputation on quality, 
                  reliability, and exceptional customer service.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="border border-gray-200 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-[#FF7A00] mb-2">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/construction-site.jpg"
                  alt="Construction expertise"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 bg-neutral-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#FF7A00] font-semibold mb-2 block">OUR WORK</span>
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Explore our portfolio of successful projects that showcase our commitment to excellence 
                and attention to detail.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.title} className="relative group">
                  <div className="relative h-[300px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="mb-4">{project.description}</p>
                      <Link 
                        href={`/projects/${project.slug}`}
                        className="inline-block bg-[#FF7A00] px-6 py-2 hover:bg-[#FF7A00]/90"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#FF7A00] font-semibold mb-2 block">TESTIMONIALS</span>
              <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author} className="bg-gray-50 p-8 rounded-lg">
                  <div className="text-[#FF7A00] mb-4">★★★★★</div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.position}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-[#1E1E1E] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/cta-pattern.jpg')] opacity-10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="mb-8 max-w-2xl mx-auto text-gray-300 leading-relaxed">
              Let's work together to bring your construction vision to life. Our team of experts 
              is ready to help you achieve your goals.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-block bg-[#FF7A00] px-8 py-3 text-white hover:bg-[#FF7A00]/90 transition-colors"
              >
                Get in Touch
              </Link>
              <Link 
                href="/projects"
                className="inline-block bg-white text-[#1E1E1E] px-8 py-3 hover:bg-gray-100 transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

const services = [
  {
    title: "Construction Management",
    description: "Expert oversight and coordination of construction projects from inception to completion.",
    slug: "construction-management",
    icon: "🏗️"
  },
  {
    title: "Design & Planning",
    description: "Comprehensive architectural design and strategic planning services for your project.",
    slug: "design-planning",
    icon: "🎨"
  },
  {
    title: "Renovation",
    description: "Professional renovation services to transform and modernize existing structures.",
    slug: "renovation",
    icon: "🔧"
  }
]

const projects = [
  {
    title: "Modern Office Complex",
    description: "A state-of-the-art office building with sustainable features",
    image: "/project-one.jpg",
    slug: "modern-office-complex"
  },
  {
    title: "Luxury Residential Tower",
    description: "High-end residential development with premium amenities",
    image: "/project-two.jpg",
    slug: "luxury-residential-tower"
  }
]

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "20+", label: "Expert Team Members" }
]

const testimonials = [
  {
    content: "Exceptional quality and professionalism throughout the entire project. Highly recommended!",
    author: "Tanaka",
    position: "Resident, Masvingo"
  },
  {
    content: "Their attention to detail and commitment to deadlines made our project a great success.",
    author: "Terrence",
    position: "Property Developer"
  },
  {
    content: "Outstanding service and communication. They exceeded all our expectations.",
    author: "Courtney",
    position: "Resident, Aspindale"
  }
]