import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

const projects = [
  
  {
    id: 5,
    title: "Custom Ceiling Installation",
    description: "Intricate ceiling design and installation for luxury home",
    image: "/ceiling.jpg",
    category: "Residential",
    location: "Masvingo, Zimbabwe"
  },
  {
    id: 6,
    title: "Industrial Drilling Project",
    description: "Precision drilling operations for commercial building",
    image: "/drilling.jpg",
    category: "Industrial",
    location: "Harare, Zimbabwe"
  },
  {
    id: 7,
    title: "Modern Kitchen Fitting",
    description: "Complete kitchen renovation and fitting with premium materials",
    image: "/kitchen-fitting.jpg",
    category: "Residential",
    location: "Bulawayo, Zimbabwe"
  },
  {
    id: 8,
    title: "Commercial Paving",
    description: "Large-scale paving project for shopping center parking",
    image: "/paving.jpg",
    category: "Commercial",
    location: "Gweru, Zimbabwe"
  },
  {
    id: 9,
    title: "Luxury House Construction",
    description: "Custom home build with modern architectural design",
    image: "/house-construction.jpg",
    category: "Residential",
    location: "Victoria Falls, Zimbabwe"
  },
  {
    id: 10,
    title: "Premium Tiling Project",
    description: "High-end tiling installation for luxury hotel",
    image: "/tiling-3.jpg",
    category: "Commercial",
    location: "Mutare, Zimbabwe"
  }
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-12">Our Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id}
                href={`/projects/${project.id}`}
                className="group"
              >
                <div className="border overflow-hidden">
                  <div className="relative h-[300px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-[#FF7A00]">{project.category}</span>
                      <span className="text-sm text-gray-500">{project.location}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}