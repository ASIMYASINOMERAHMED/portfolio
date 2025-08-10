"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SectionHeading from "@/components/section-heading"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import AnimatedText from "@/components/animated-text"

// Sample projects data
const projects = [
  {
    id: "project1",
    title: "Car Rental Client Side",
    description: "A sleek React Native application that allows users to browse available cars, select rental dates, and complete bookings with Stripe. It features JWT-based authentication. You can try it out using Expo Go:Launch Mobile App",
    image: "/imags/CarRental.jpg",
    tags: ["React Native","Expo Go", "Stripe", "JWT",".NET Core", "SQL Server", "Rest API"],
    githubLink: "exp://u.expo.dev/84eddfd1-8ee0-4291-a4d0-062083ca6df5/group/9800dd21-58e4-4354-a31e-2167443b4aec",
    delay: 0.1,
    },
   {
    id: "project2",
    title: "Car Rental Admin Side",
    description: "A responsive web dashboard for managing vehicles, bookings, and user data. Built with a focus on usability and backend integration, it streamlines operations for rental administrators. enter credentials: username: Asim123 password: As93im for login",
    image: "/imags/CarRentalAdmin.png",
    tags: ["Next.js","Shadcn UI", "Tailwind CSS", ".NET Core", "SQL Server", "Rest API", "JWT", "HttpOnly Cookies"],
    githubLink: "https://car-rental-admin-jb1w.vercel.app/",
    delay: 0.1,
  },
  {
    id: "project3",
    title: "Weather app",
    description: "Weather app is a simple and user-friendly app to check the weather.",
    image: "/imags/Weather.jpg",
    tags: ["React","Material UI", "axios API", "i18next"],
    githubLink: "https://weather-app-eight-tan-36.vercel.app/",
    delay: 0.2,
  },
  {
    id: "project4",
    title: "Tasky app",
    description: "Tasky app is a simple and user-friendly tasks and notes tracker.",
    image: "/imags/todo.jpg",
    tags: ["React","Material UI", "Tailwind CSS"],
    githubLink: "https://tasky-drab.vercel.app/",
    delay: 0.2,
  },
  {
    id: "project5",
    title: "Ecommerce Store",
    description: "Full stack Ecommerce Store with inventory, orders management, Prediction system for Total sales & Revenue",
    image: "/imags/3.jpg",
    tags: ["SQL Server", "C# .net", "Rest Api", "HTML","CSS","Javascript"],
    githubLink: "https://github.com/ASIMYASINOMERAHMED/E-commerce-website",
    delay: 0.3,
  },
  {
    id: "project6",
    title: "Online Store",
    description: "Full stack Online Store with inventory, orders management, Prediction system for Total sales & Revenue",
    image: "/imags/8.png",
    tags: ["SQL Server", "C# .net", "windows forms"],
    githubLink: "https://github.com/ASIMYASINOMERAHMED/Online-Store-",
    delay: 0.3,
  },
  {
    id: "project7",
    title: "Spoken Gloves",
    description: "Spoken Gloves Translate sign language to text for deaf people",
    image: "/imags/1.jpeg",
    tags: ["C# .net","Arduino","Windows Forms","flex sensor","speaker", "SQL Server"],
    githubLink: "https://github.com/ASIMYASINOMERAHMED/Spoken-Glove-Project",
    delay: 0.4,
  },
  {
    id: "project8",
    title: "Driving Licenses Managment Project (DVLD)",
    description: "The system was designed to incorporate a range of management functionalities including user, people, application types, tests types, and license types, offering a holistic solution for departmental needs. It was specifically customized to feature vision, written, and practical tests, optimizing license procedures and improving overall user satisfaction.",
    image: "/imags/2.jpeg",
    tags: ["SQL Server", "C# .net", "windows forms"],
    githubLink: "https://github.com/ASIMYASINOMERAHMED/Driving-Licenses-Managment-Project",
    delay: 0.4,
  },
  {
    id: "project9",
    title: "Math Game",
    description: " Constructed an interactive Math Game in C# with customizable question count, operation types, and time limits. Designed an intuitive and visually appealing user interface for seamless gameplay. Created detailed quiz reports, providing results and correct answers for enhanced learning and feedback.",
    image: "/imags/1.avif",
    tags: ["C# .net", "windows forms"],
    githubLink: "https://github.com/ASIMYASINOMERAHMED/Math-Game-Project",
    delay: 0.5,
  },
  {
    id: "project10",
    title: "Simple Banking System",
    description: " Developed a Banking System Project independently, featuring user management and transaction processing capabilities. Established secure login tracking, SQL database storage for critical data.",
    image: "/imags/1.webp",
    tags: ["C# .net", "windows forms", "SQL Server"],
    githubLink: "https://github.com/ASIMYASINOMERAHMED/Bank-system-Project",
    delay: 0.5,
  }
]


// All unique tags from projects
const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)))

export default function ProjectsPage() {
  // State for search and filter
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  // Filter projects based on search query and selected tag
  useEffect(() => {
    let result = projects

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Filter by tag
    if (selectedTag !== "All") {
      result = result.filter((project) => project.tags.includes(selectedTag))
    }

    setFilteredProjects(result)
  }, [searchQuery, selectedTag])
  useEffect(() => {
    // Check window width after component mounts
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    // Initial check
    handleResize()
    // Add resize listener
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  // Toggle filter menu on mobile
  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen)
  }

  return (
    <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-12" animation="fadeIn">
          <h1 className="text-4xl font-bold mb-4"><AnimatedText text="Projects Gallery" className="text-primary" /></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I have developed using the latest technologies
          </p>
        </AnimatedSection>

        {/* Search and Filter */}
        <AnimatedSection className="mb-12" animation="fadeInUp" delay={0.1}>
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full md:w-1/3 relative">
              <Input
                type="search"
                placeholder="Search projects..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <div className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-auto" onClick={toggleFilterMenu}>
                <Filter className="h-4 w-4 ml-2" />
                Filter by technology
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Tags Filter */}
        <AnimatedSection
             className={`mb-8 ${isFilterMenuOpen || isDesktop ? "block" : "hidden md:block"}`}
             animation="fadeInUp"
             delay={0.2}
        >
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedTag === "All" ? "default" : "outline"}
              size="sm"
              className="hover-lift"
              onClick={() => setSelectedTag("All")}
            >
              All
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                className="hover-lift"
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={0.1 + index * 0.05} className="hover-scale">
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  githubLink={project.githubLink}
                  tags={project.tags}
                />
              </AnimatedSection>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-muted-foreground">No projects found matching search criteria</p>
              <Button
                variant="link"
                onClick={() => {
                  setSelectedTag("All")
                  setSearchQuery("")
                }}
                className="mt-2"
              >
                Show all projects
              </Button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <AnimatedSection className="mt-16 bg-muted/50 rounded-lg p-8 text-center" animation="scaleIn" delay={0.4}>
          <SectionHeading title="Do you have a project in mind?" subtitle="Let's talk about how to turn your idea into reality" />
          <div className="max-w-md mx-auto mt-8">
            <WhatsAppButton
              message="Hello, I want to talk to you about a new project..."
              size="lg"
              className="w-full md:w-auto mx-auto"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

