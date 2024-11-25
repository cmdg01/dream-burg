import { COMPANY_EMAIL } from "@/lib/constants"

interface MailtoData {
  name: string
  email: string
  message: string
  service?: string
}

export function generateMailtoLink(data: MailtoData) {
  const subject = data.service 
    ? `Service Inquiry: ${data.service}`
    : 'Website Contact Form'
    
  const body = `
Name: ${data.name}
Email: ${data.email}

${data.message}
`
  return `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}