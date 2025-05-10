"use client"

import type React from "react"
import { Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { AnimatePresence, motion } from "framer-motion"
import ServiceRequestWrapper from "@/components/service-request"
import PageLoading from "@/components/page-loading"
import { useState, useEffect } from "react"
const cairo = Cairo({ subsets: ["arabic"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta property="og:title" content="Portfolio" />
<meta property="og:description" content="My personal profile, displays my skills, experiences, and projects" />
<meta property="og:image" content="https://github.com/user-attachments/assets/51b1d3c0-8f5a-42d4-bf95-147acd8a1093" />
<meta property="og:url" content="portfolio-asimyasinomerahmeds-projects.vercel.app" />
      </head>
      <body className={`${cairo.className} antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="english-profile-theme"
        >
            {mounted && <PageLoading />}
          <Navbar />
          <main className="min-h-screen">
            <AnimatePresence mode="wait">
              <motion.div
                key={Math.random()} // Force re-render on route change
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
          <ServiceRequestWrapper />
        </ThemeProvider>
      </body>
    </html>
  )
}

