"use client"

import type React from "react"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, ArrowLeft } from "lucide-react"

interface ServiceFormStep2Props {
  formData: {
    serviceType: string
    description: string
  }
  updateFormData: (data: Partial<ServiceFormStep2Props["formData"]>) => void
  prevStep: () => void
  nextStep: () => void
}


export default function ServiceFormStep2({
  formData,
  updateFormData,
  prevStep,
  nextStep,
}: ServiceFormStep2Props) {
  const [errors, setErrors] = useState({
    serviceType: "",
    description: "",
  })

  const handleSelectChange = (value: string) => {
    updateFormData({ ...formData, serviceType: value })
    if (errors.serviceType) {
      setErrors({ ...errors, serviceType: "" })
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateFormData({ ...formData, description: e.target.value })
    if (errors.description) {
      setErrors({ ...errors, description: "" })
    }
  }

  const validateStep = () => {
    const newErrors = {
      serviceType: formData.serviceType ? "" : "Service type is required",
      description: formData.description ? "" : "Description is required",
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleSubmit = () => {
    if (validateStep()) {
      nextStep()
    }
  }

  const labels = {
    title: "Service Details",
    serviceType: "Service Type",
    webDev: "Web Development",
    desktopDev: "Desktop Development",
    uiUxDesign: "UI/UX Design",
    ecommerce: "E-commerce",
    seo: "SEO",
    other: "Other",
    description: "Description",
    descriptionPlaceholder: "...Please describe your project and its requirements",
    back: "Back",
    next: "Next",
  }

  return (
    <div className="space-y-4" style={{textAlign:"left"}}>
      <h3 className="text-lg font-medium">{labels.title}</h3>

      <div className="space-y-3">
        <div>
          <Label htmlFor="serviceType">{labels.serviceType}</Label>
          <Select value={formData.serviceType} onValueChange={handleSelectChange}>
            <SelectTrigger className={errors.serviceType ? "border-red-500" : ""}>
              <SelectValue placeholder={labels.serviceType} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web-development">{labels.webDev}</SelectItem>
              <SelectItem value="desktop-development">{labels.desktopDev}</SelectItem>
              <SelectItem value="ui-ux-design">{labels.uiUxDesign}</SelectItem>
              <SelectItem value="ecommerce">{labels.ecommerce}</SelectItem>
              <SelectItem value="seo">{labels.seo}</SelectItem>
              <SelectItem value="other">{labels.other}</SelectItem>
            </SelectContent>
          </Select>
          {errors.serviceType && <p className="text-sm text-red-500 mt-1">{errors.serviceType}</p>}
        </div>

        <div>
          <Label htmlFor="description">{labels.description}</Label>
          <Textarea style={{textAlign: "left"}}
            id="description"
            value={formData.description}
            onChange={handleTextareaChange}
            placeholder={labels.descriptionPlaceholder}
            className={`min-h-[120px] ${errors.description ? "border-red-500" : ""}`}
          />
          {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
        </div>
      </div>

      <div className="pt-4 flex justify-between">
        <Button variant="outline" onClick={prevStep}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        {labels.back}
   
        </Button>
        <Button onClick={handleSubmit}>{labels.next} <ArrowRight className="mr-2 h-4 w-4" /></Button>
      </div>
    </div>
  )
}
