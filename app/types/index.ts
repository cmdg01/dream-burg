export interface Project {
    id: number
    title: string
    description: string
    image: string
    category: string
    location: string
    details?: string
    features?: string[]
    gallery?: string[]
  }
  
  export interface Service {
    title: string
    description: string
    features: string[]
    slug: string
    icon?: string
    image?: string
  }
  
  export interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
  }