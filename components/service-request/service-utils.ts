export function formatServiceType(type: string): string {
  // Service type translations (Arabic only)
  const serviceTypes: Record<string, string> = {
    "web-development": "Web Development",
    "desktop-development": "Desktop Development",
    "ui-ux-design": "UI/UX Design",
    ecommerce: "E-commerce",
    seo: "SEO",
    other: "Other",
  }

  return serviceTypes[type] || type
}

interface ServiceFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  description: string;
}
export function prepareWhatsAppMessage(formData: ServiceFormData): string {
  const serviceType = formatServiceType(formData.serviceType);

  return `Hello, I am ${formData.name}.

New service request:
Service type: ${serviceType}
Description: ${formData.description}

Contact information:
Email: ${formData.email}
Phone: ${formData.phone}`;
}

