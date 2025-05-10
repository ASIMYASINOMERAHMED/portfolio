import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  githubLink: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, githubLink, tags }: ProjectCardProps) {

  return (
    <Card className="overflow-hidden group hover-lift">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
            <p className="text-muted-foreground whitespace-normal">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4" >
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end p-6 pt-0">
        <Link
          href={`${githubLink}`}
          className="text-primary font-medium flex items-center hover-lift gap-1 hover:gap-2 transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
         View project <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}

