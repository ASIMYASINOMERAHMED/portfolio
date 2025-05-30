"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceFormStep1Props {
  formData: {
    name: string
    email: string
    phone: string
  }
  updateFormData: (data: Partial<ServiceFormStep1Props["formData"]>) => void
  nextStep: () => void
}


export default function ServiceFormStep1({ formData, updateFormData, nextStep }: ServiceFormStep1Props) {

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    updateFormData({ ...formData, [name]: value })

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const validateStep = () => {
    const newErrors = {
      name: formData.name ? "" : "Name is required" ,
      email: formData.email ? "" : "Email is required" ,
      phone: formData.phone ? "" :  "Phone is required" ,
    }

    // Basic email validation
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid" 
    }

    setErrors(newErrors)

    // Check if there are any errors
    return !Object.values(newErrors).some((error) => error)
  }

  const handleSubmit = () => {
    if (validateStep()) {
      nextStep()
    }
  }

  const labels = {
    title: "Personal Information",
    name: "Name" ,
    email: "Email",
    phone: "Phone",
    next: "Next",
  }

  return (
    <div className="space-y-4" style={{textAlign:"left"}}>
      <h3 className="text-lg font-medium">{labels.title}</h3>

      <div className="space-y-3">
        <div>
          <Label htmlFor="name">{labels.name}</Label>
          <Input style={{textAlign:"left"}}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="email">{labels.email}</Label>
          <Input style={{textAlign:"left"}}
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="phone">{labels.phone}</Label>
          <Input style={{textAlign:"left"}}
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="pt-4 flex justify-end">
        <Button onClick={handleSubmit}>{labels.next}   <ArrowRight className="mr-2 h-4 w-4" /></Button>
      </div>
    </div>
  )
}

