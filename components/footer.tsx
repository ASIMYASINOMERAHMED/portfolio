import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Linkedin, Twitter } from "lucide-react"
import WhatsAppButton from "./whatsapp-button"

export default function Footer() {
  return (
    <footer className="bg-background border-t" id="contact">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ textAlign: "left" }}>About Me</h3>
            <p className="text-muted-foreground mb-4" style={{ textAlign: "left" }}>My personal profile, displays my skills, experiences, and projects</p>
            <div className="flex gap-4" style={{ justifyContent: "left" }}>
          
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/Asim_Yasin_Omer?t=BkKJX4NJ6Onzi0RjsD_BdA&s=09" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.instagram.com/3sim_y3sin?igsh=eXo2OXFpNHlhd2Vx
" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/asim-yasin?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn"  target="_blank" 
    rel="noopener noreferrer"
>
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ textAlign: "left" }}>Quick Links</h3>
            <ul className="space-y-2" style={{ textAlign: "left" }}>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Main
                </Link>
              </li>
            
            
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ textAlign: "left" }}>Contact Me</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground" style={{ textAlign: "left" }}>You can contact me directly via WhatsApp or through the form below</p>
              <WhatsAppButton message="Hello, I want to contact you about a project..." />
              <form className="space-y-4 mt-4">
                <Input type="email" placeholder="Email" style={{ textAlign: "left" }} />
                <Input type="text" placeholder="Subject" style={{ textAlign: "left" }} />
                <textarea
                  className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Message"
                  style={{ textAlign: "left" }}
                ></textarea>
                <Button type="submit" className="w-full hover-lift">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

