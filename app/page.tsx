import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, Download, Layout, LineChart } from "lucide-react"
import AnimatedText from "@/components/animated-text"
import SectionHeading from "@/components/section-heading"
import ProjectCard from "@/components/project-card"
import ServiceCard from "@/components/service-card"
import AnimatedBackground from "@/components/animated-background"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Mail } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      
      <section className="relative py-20 md:py-5 overflow-hidden">
        <AnimatedBackground className="opacity-70" />
        <div className="container relative z-10">
          <AnimatedSection animation="fadeIn">
            
            <div className="flex flex-col items-center text-center">
               <div className="w-full md:w-1/3">
                         <div className="relative w-full aspect-square rounded-full overflow-hidden border-8 border-primary/10 hover-scale">
                           <Image src="/imags/5.jpg" alt="personal photo" fill className="object-cover" />
                         </div>
                       </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hello <AnimatedText text="I'm Asim Yasin" className="text-primary" />
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              I&apos;m an enthusiastic software developer with over three years of experience in building web and desktop applications.
              </p>
              <Card className="border-primary/20 overflow-hidden hover-scale">
            <div className="md:flex">
              {/* Left side - Career journey image */}
              <div className="md:w-1/3 relative min-h-[300px] bg-primary/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/imags/4.jpg"
                    alt="Career journey"
                    width={400}
                    height={400}
                    className="object-contain"
                    style={{borderRadius: "10px"}}
                  />
                </div>
              </div>

              {/* Right side - Text content */}
              <CardContent className="md:w-2/3 p-8">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-primary first-letter:mr-1">
                    I have been working in Software development for more than <span className="font-bold text-primary">3 years</span>،
 driven by a passion for building scalable and maintainable software products. My journey began with C++, where I developed a strong programming foundation. From there, I transitioned to C# and Windows Forms, creating simple desktop applications and gradually expanding my expertise.
To enhance my skills in database management, I learned SQL Server, gaining a solid foundation in writing complex SQL queries, Common Table Expressions (CTE), and stored procedures. This enabled me to build larger projects that effectively leveraged the power of SQL Server.
As my experience grew, I explored backend development, learning REST API principles and broadening my understanding of web technologies. I then delved into HTML, CSS, JavaScript, and TypeScript, followed by Node.js, Express.js, MongoDB, and React.js, allowing me to develop dynamic and interactive web applications.
Continuing my growth, I expanded my knowledge of modern frameworks such as React and Next.js, further refining my ability to build efficient, high-performance applications.

                  </p>

                  <div className="border-l-4 border-primary pr-4 py-2" style={{borderRadius: "5px"}}>
                    <p>
                         I always strive to develop my skills and keep up with the latest technologies in web development.
                    </p>
                  </div>

                  <p>
                    I believe that<span className="bg-primary/10 px-2 py-1 rounded">continuous learning is the key to success
                    </span> in the field of technology. That’s why I make sure to attend conferences and technical seminars and actively follow training courses to continuously develop my skills and already attend over 24 training courses.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    <AnimatedSection
                      delay={0.1}
                      className="bg-background shadow-sm rounded-lg p-4 text-center hover-lift"
                    >
                      <p className="text-3xl font-bold text-primary">+5</p>
                      <p className="text-sm text-muted-foreground">Projects Completed</p>
                    </AnimatedSection>
                
                    <AnimatedSection
                      delay={0.3}
                      className="bg-background shadow-sm rounded-lg p-4 text-center hover-lift"
                    >
                      <p className="text-3xl font-bold text-primary">+3</p>
                      <p className="text-sm text-muted-foreground">Years of Experience</p>
                    </AnimatedSection>
                  </div>
                </div>
              </CardContent>
              
            </div>
    
          </Card>
          <br />
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton size="lg" className="hover-lift" />
                <Button size="lg" variant="outline" asChild className="hover-lift">
                  <Link href="/projects">View my projects</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="py-5" id="services">
        <div className="container">
          <SectionHeading title="Services Offered" subtitle="I specialize in comprehensive web development solutions, covering both backend and frontend development to build dynamic and responsive applications. Additionally, I have expertise in database development, ensuring efficient data management and storage solutions, as well as data analysis, transforming raw data into actionable insights" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Frontend Development",
                description:
                  "I can help you build modern and responsive user interfaces using the latest technologies like React and Next.js",
                icon: Layout,
                delay: 0,
              },
              {
                title: "Backend Development",
                description: "I can help you build scalable and maintainable backend services using C# .net and Node.js and Express.js",
                icon: Code,
                delay: 0.1,
              },
              {
                title: "Database Design",
                description: "I can help you design and manage databases using SQL and NoSQL technologies (SQL Server, MongoDB, PostgreSQL)",
                icon: Database,
                delay: 0.3,
              },
              {
                title: "Data Analysis",
                description: "I can help you analyze data and create interactive information dashboards to help you make better decisions",
                icon: LineChart,
                delay: 0.4,
              }
            ].map((service, index) => (
              <AnimatedSection key={index} delay={service.delay} className="hover-scale">
                <ServiceCard title={service.title} description={service.description} icon={service.icon} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection className="py-20 bg-muted/50" id="projects">
        <div className="container">
          <SectionHeading title="Projects" subtitle="Here are some projects I have developed" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
               {
                id: "project1",
                title: "Car Rental Admin Side",
                description: "Car Rental System is a full stack application that allows users to rent cars.",
                image: "/imags/CarRental.jpg",
                tags: ["Next.js","Shadcn UI", "Tailwind CSS", ".NET Core", "SQL Server", "Rest API", "JWT", "HttpOnly Cookies", "ngrok"],
                githubLink: "https://car-rental-admin-jb1w.vercel.app/",
                delay: 0.1,
              },
               {
                id: "project2",
                title: "Weather app",
                description: "Weather app is a simple and user-friendly app to check the weather.",
                image: "/imags/Weather.jpg",
                tags: ["React","Material UI", "axios API", "i18next"],
                githubLink: "https://weather-app-eight-tan-36.vercel.app/",
                delay: 0.1,
              },
               {
                id: "project3",
                title: "Tasky app",
                description: "Tasky app is a simple and user-friendly tasks and notes tracker.",
                image: "/imags/todo.jpg",
                tags: ["React","Material UI", "Tailwind CSS"],
                githubLink: "https://tasky-drab.vercel.app/",
                delay: 0.2,
              },
              {
                id: "project4",
                title: "Ecommerce Store",
                description: "Full stack Ecommerce Store with inventory, orders management, Prediction system for Total sales & Revenue",
                image: "/imags/3.jpg",
                githubLink: "https://github.com/ASIMYASINOMERAHMED/E-commerce-website",
                tags: ["SQL Server", "C# .net", "Rest Api", "HTML","CSS","Javascript"],
                delay: 0.2,
              },
            
             
            ].map((project) => (
              <AnimatedSection key={project.id} delay={project.delay} className="hover-scale">
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  githubLink={project.githubLink}
                  tags={project.tags}
                />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Button asChild className="hover-lift gap-1 hover:gap-2 transition-all">
              <Link href="/projects">
              View all projects <ArrowRight className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </AnimatedSection>

   
      {/* Technologies Used Section */}
      <AnimatedSection className="py-20 bg-muted/50" id="technologies" animation="fadeIn">
        <div className="container">
          <SectionHeading title="Technologies" subtitle="Tools and technologies I use in my projects" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "SQL Server",
              "PostgreSQL",
              "Rest Api",
              "C# .net",
              "Windows Forms",
              "Tailwind CSS",
              "Bootstrap",
              "Git",
              "PostMan"
            ].map((tech, index) => (
              <AnimatedSection
                key={tech}
                delay={index * 0.05}
                className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                 {(tech === "JavaScript"||tech === "TypeScript"||tech === "React"
                 ||tech === "Next.js"||tech === "Node.js"||tech === "Express"||
                 tech === "C# .net"||tech === "Rest Api" || tech === "Git")? 
                 <Code className="h-8 w-8 text-primary" />
                 :
                 (tech === "MongoDB"||tech === "SQL Server"||tech === "PostgreSQL")?
                  <Database className="h-8 w-8 text-primary" />
                 :
                 (tech === "Windows Forms"|| tech ==="Tailwind CSS"||tech === "Bootstrap")? 
                 <Layout className="h-8 w-8 text-primary" />
                 :
                 (tech === "PostMan")? <LineChart className="h-8 w-8 text-primary" />: <Code className="h-8 w-8 text-primary" />}
                </div>
                <h3 className="font-medium">{tech}</h3>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
{/* highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mr-6 ml-6">
            <AnimatedSection delay={0.1} className="hover-scale">
              <Card className="p-6 bg-gradient-to-br from-background to-muted/30 border-primary/10 hover:shadow-md transition-shadow hover-lift">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                Passion
                  <span className="bg-primary/10 p-2 rounded-full mr-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </span>
                 
                </h3>
                <p>
                  I love converting ideas into effective digital solutions. I enjoy technical challenges and finding innovative solutions to complex problems.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="hover-scale">
              <Card className="p-6 bg-gradient-to-br from-background to-muted/30 border-primary/10 hover:shadow-md transition-shadow hover-lift">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                Learning
                  <span className="bg-primary/10 p-2 rounded-full mr-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </span>
         
                </h3>
                <p>
                  I dedicate a weekly time to learn new technologies. I believe that the technology industry evolves quickly, and I always strive to keep up with this development.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="hover-scale">
              <Card className="p-6 bg-gradient-to-br from-background to-muted/30 border-primary/10 hover:shadow-md transition-shadow hover-lift" >
                <h3 className="text-xl font-bold mb-3 flex items-center">
                Communication
                  <span className="bg-primary/10 p-2 rounded-full mr-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </span>
          
                </h3>
                <p>I believe in effective communication with clients and understanding their needs to deliver the best solutions that meet their aspirations.</p>
              </Card>
            </AnimatedSection>
          </div>
  
<br />

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-primary text-light-foreground" animation="scaleIn">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="text-light-foreground/80 mb-8">Let&apos;s work together to turn your ideas into a digital reality</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton size="lg" className="hover-lift" />
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary hover-lift"
                asChild
              >
                {/* Put your Resume link here */}
                <Link href="/imags/Asim Yasin CV.pdf" download target="_blank" rel="noopener noreferrer">
                  <Download className="ml-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

