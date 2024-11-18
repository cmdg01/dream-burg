import { notFound } from 'next/navigation'
import Image from 'next/image'

// Define TypeScript interfaces for our project data
interface Project {
  id: number
  title: string
  description: string
  detailedDescription: string
  image: string
  category: string
  location: string
  technologies: string[]
  specifications: {
    completionDate: string
    projectArea: string
    duration: string
    clientType: string
  }
  highlights: string[]
}

interface ProjectPageProps {
  params: {
    id: string
  }
}

async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.id)

  if (!project) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-[400px]">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-[#FF7A00] text-white rounded-full text-sm">
                {project.category}
              </span>
              <span className="text-gray-600">{project.location}</span>
            </div>
            <p className="text-gray-600 mb-6">{project.detailedDescription}</p>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Project Specifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500">Completion Date</p>
                    <p className="font-medium">{project.specifications.completionDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Project Area</p>
                    <p className="font-medium">{project.specifications.projectArea}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Duration</p>
                    <p className="font-medium">{project.specifications.duration}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Client Type</p>
                    <p className="font-medium">{project.specifications.clientType}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Technologies & Materials</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Project Highlights</h2>
                <ul className="list-disc list-inside space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-600">{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Enhanced project data fetching function
async function getProject(id: string): Promise<Project | null> {
  const projects: Record<string, Project> = {
    "5": {
      id: 5,
      title: "Custom Ceiling Installation",
      description: "Intricate ceiling design and installation for luxury home",
      detailedDescription: "A sophisticated ceiling installation project featuring custom-designed cornices, detailed moldings, and integrated lighting systems. This project showcases our expertise in creating luxurious living spaces that combine aesthetic appeal with practical functionality.",
      image: "/ceiling.jpg",
      category: "Residential",
      location: "Masvingo, Zimbabwe",
      technologies: [
        "Custom Moldings",
        "LED Integration",
        "Acoustic Panels",
        "Decorative Plaster",
        "Smart Lighting Controls"
      ],
      specifications: {
        completionDate: "March 2024",
        projectArea: "280 sq meters",
        duration: "6 weeks",
        clientType: "Private Residence"
      },
      highlights: [
        "Bespoke cornice designs with hand-crafted details",
        "Integrated smart lighting system with mobile control",
        "Superior acoustic treatment for optimal sound quality",
        "Climate-controlled installation process",
        "Custom color matching to existing interior design"
      ]
    },
    "6": {
      id: 6,
      title: "Industrial Drilling Project",
      description: "Precision drilling operations for commercial building",
      detailedDescription: "Large-scale industrial drilling project utilizing state-of-the-art equipment and advanced techniques. Our team executed complex drilling operations while maintaining strict safety protocols and minimal disruption to surrounding facilities.",
      image: "/drilling.jpg",
      category: "Industrial",
      location: "Harare, Zimbabwe",
      technologies: [
        "Diamond Core Drilling",
        "Hydraulic Systems",
        "Precision Equipment",
        "Safety Monitoring",
        "Dust Control Systems"
      ],
      specifications: {
        completionDate: "February 2024",
        projectArea: "1,200 sq meters",
        duration: "3 months",
        clientType: "Commercial"
      },
      highlights: [
        "Zero safety incidents throughout project duration",
        "Implementation of advanced dust control measures",
        "Completion ahead of scheduled timeline",
        "Minimal vibration impact on surrounding structures",
        "100% compliance with industrial standards"
      ]
    },
    "7": {
      id: 7,
      title: "Modern Kitchen Fitting",
      description: "Complete kitchen renovation and fitting with premium materials",
      detailedDescription: "A comprehensive kitchen renovation project incorporating high-end appliances, custom cabinetry, and premium finishing materials. This project demonstrates our ability to combine functionality with contemporary design aesthetics.",
      image: "/kitchen-fitting.jpg",
      category: "Residential",
      location: "Bulawayo, Zimbabwe",
      technologies: [
        "Custom Cabinetry",
        "Smart Appliance Integration",
        "Stone Countertops",
        "LED Lighting Systems",
        "Ventilation Solutions"
      ],
      specifications: {
        completionDate: "January 2024",
        projectArea: "45 sq meters",
        duration: "4 weeks",
        clientType: "Private Residence"
      },
      highlights: [
        "Custom-built cabinets with soft-close mechanisms",
        "Integration of smart home technology",
        "Premium granite countertop installation",
        "Energy-efficient appliance setup",
        "Optimized workflow design"
      ]
    },
    "8": {
      id: 8,
      title: "Commercial Paving",
      description: "Large-scale paving project for shopping center parking",
      detailedDescription: "An extensive commercial paving project for a major shopping center, incorporating sustainable materials and advanced drainage systems. The project focused on durability and environmental consciousness while maintaining aesthetic appeal.",
      image: "/paving.jpg",
      category: "Commercial",
      location: "Gweru, Zimbabwe",
      technologies: [
        "Permeable Paving",
        "Storm Water Management",
        "Heavy-duty Materials",
        "Line Marking",
        "Erosion Control"
      ],
      specifications: {
        completionDate: "December 2023",
        projectArea: "5,000 sq meters",
        duration: "2 months",
        clientType: "Commercial Retail"
      },
      highlights: [
        "Sustainable drainage solution implementation",
        "High-traffic durability design",
        "Efficient water management system",
        "Enhanced safety features",
        "Low-maintenance finishing"
      ]
    },
    "9": {
      id: 9,
      title: "Luxury House Construction",
      description: "Custom home build with modern architectural design",
      detailedDescription: "A prestigious residential project featuring contemporary architecture and luxury amenities. This custom-built home showcases our capability to deliver high-end construction while incorporating sustainable building practices.",
      image: "/house-construction.jpg",
      category: "Residential",
      location: "Victoria Falls, Zimbabwe",
      technologies: [
        "Smart Home Integration",
        "Solar Power Systems",
        "Green Building Materials",
        "Climate Control",
        "Security Systems"
      ],
      specifications: {
        completionDate: "April 2024",
        projectArea: "450 sq meters",
        duration: "12 months",
        clientType: "Private Residence"
      },
      highlights: [
        "Energy-efficient design implementation",
        "Custom architectural features",
        "High-end finishing materials",
        "Integrated home automation",
        "Sustainable landscaping"
      ]
    },
    "10": {
      id: 10,
      title: "Premium Tiling Project",
      description: "High-end tiling installation for luxury hotel",
      detailedDescription: "A sophisticated tiling project for an upscale hotel, featuring imported materials and intricate patterns. This project demonstrates our expertise in large-scale precision installation and artistic design implementation.",
      image: "/tiling-3.jpg",
      category: "Commercial",
      location: "Mutare, Zimbabwe",
      technologies: [
        "Precision Cutting",
        "Waterproofing Systems",
        "Pattern Mapping",
        "Anti-slip Treatment",
        "Grout Innovation"
      ],
      specifications: {
        completionDate: "March 2024",
        projectArea: "2,500 sq meters",
        duration: "3 months",
        clientType: "Hospitality"
      },
      highlights: [
        "Complex pattern implementation",
        "Custom-cut decorative features",
        "Seamless transitions between spaces",
        "Superior waterproofing system",
        "Extended durability treatment"
      ]
    }
  }

  return projects[id] || null
}

export default ProjectPage