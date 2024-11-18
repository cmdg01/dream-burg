export function generateMailtoLink(formData: {
    name: string
    email: string
    subject?: string
    message: string
    service?: string
  }) {
    const { name, email, subject, message, service } = formData
    
    let emailSubject = subject || 'Contact Form Submission'
    if (service) {
      emailSubject = `Service Request: ${service}`
    }
  
    const emailBody = `
  Name: ${name}
  Email: ${email}
  ${message}
  
  ---
  Sent from Dreamburg website
    `.trim()
  
    return `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@dreamburg.com'}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
  }