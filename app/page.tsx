"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown, Code, Compass, Globe, Grid, Layers, Mail, MapPin, Menu, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResumeModal } from "@/components/resume-modal"
import { AnimatedGlobe } from "@/components/animated-globe"
import { AnimatedMap } from "@/components/animated-map"
import { AnimatedContour } from "@/components/animated-contour"
// Import the SocialLinks component at the top of the file
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")
  const [mounted, setMounted] = useState(false)

  // Prevent hydration errors with animations
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <Compass className="h-6 w-6 text-teal-600" />
              <span>Shekhraj Puri</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#about" className="text-sm font-medium hover:text-teal-600 transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Skills
              </Link>
              <Link href="#experience" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Button className="hidden md:flex">Get in Touch</Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col gap-6 py-6">
                    <Link href="#about" className="text-lg font-medium">
                      About
                    </Link>
                    <Link href="#projects" className="text-lg font-medium">
                      Projects
                    </Link>
                    <Link href="#skills" className="text-lg font-medium">
                      Skills
                    </Link>
                    <Link href="#experience" className="text-lg font-medium">
                      Experience
                    </Link>
                    <Link href="#contact" className="text-lg font-medium">
                      Contact
                    </Link>
                    <Button>Get in Touch</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10"></div>

        {/* Animated contour lines in background */}
        <div className="absolute inset-0 opacity-20">{mounted && <AnimatedContour />}</div>

        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 mb-6">
                Geomatics Engineering Student
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Shekhraj Puri</h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                A bright and ambitious Geomatics Engineering student with a special interest in geospatial analysis,
                land surveying, and remote sensing.
              </p>
              {/* Find the hero section with the buttons (View Projects and ResumeModal)
              Add the SocialLinks component after the buttons div: */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 animate-pulse-subtle">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <ResumeModal />
              </div>
              <SocialLinks />
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full opacity-20 blur-2xl animate-pulse-slow"></div>
                <div className="absolute inset-0 border-2 border-dashed border-teal-500/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-10 border border-blue-500/30 rounded-full animate-spin-reverse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/profile-photo.png"
                    width={400}
                    height={400}
                    alt="Shekhraj Puri"
                    className="rounded-full object-cover animate-float"
                  />
                </div>
                <div className="absolute -right-4 top-10 bg-white p-3 rounded-lg shadow-lg animate-float-delay-1">
                  <Globe className="h-8 w-8 text-teal-600" />
                </div>
                <div className="absolute -left-4 bottom-10 bg-white p-3 rounded-lg shadow-lg animate-float-delay-2">
                  <Layers className="h-8 w-8 text-blue-600" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-6 bg-white p-3 rounded-lg shadow-lg animate-float-delay-3">
                  <MapPin className="h-8 w-8 text-red-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <ChevronDown className="h-6 w-6 text-gray-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Animated map background */}
        <div className="absolute top-10 right-10 w-[300px] h-[200px] opacity-20 hidden lg:block">
          {mounted && <AnimatedMap />}
        </div>

        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative animate-fade-in-left">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  width={800}
                  height={600}
                  alt="Geomatics Engineer at work"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs animate-float">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                  <div className="text-sm font-medium">4th Year Student</div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <div className="text-sm font-medium">5+ Academic Projects</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <div className="text-sm font-medium">Kathmandu University</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 mb-6">
                About Me
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Professional Summary</h2>
              <p className="text-gray-600 mb-4">
                A bright and ambitious Geomatics Engineering student with a long-held special interest in geospatial
                analysis, land surveying, and remote sensing. Proficient in high standards related to the field,
                including AutoCAD, ArcGIS, and SDBMS, among others, during extensive hands-on experience in GIS mapping,
                data collection, and terrain modeling.
              </p>
              <p className="text-gray-600 mb-6">
                Showing the ability to apply engineering principles in order to solve complex spatial problems through
                coursework and field projects. The analytical mind, collaborator, and passionate team player; passionate
                about applying technology to enhance the accuracy of geographic data. Looking to contribute as a
                strategic and technical expert in the Geomatics engineering role.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                  <span className="text-sm">B.E. Geomatics Engineering (2021 - Present)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                  <span className="text-sm">Kathmandu University</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                  <span className="text-sm">GIS Enthusiast</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                  <span className="text-sm">Remote Sensing Intellect</span>
                </div>
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 animate-pulse-subtle">
                More About Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative overflow-hidden">
        {/* Animated globe in background */}
        <div className="absolute top-20 left-10 opacity-20 hidden lg:block">{mounted && <AnimatedGlobe />}</div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 mb-6">
              Featured Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Geospatial Excellence in Action</h2>
            <p className="text-gray-600">
              Explore a selection of my most impactful projects showcasing expertise across various domains of geomatics
              engineering.
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                  All Projects
                </TabsTrigger>
                <TabsTrigger value="surveying" onClick={() => setActiveTab("surveying")}>
                  Land Surveying
                </TabsTrigger>
                <TabsTrigger value="gis" onClick={() => setActiveTab("gis")}>
                  GIS & Mapping
                </TabsTrigger>
                <TabsTrigger value="modeling" onClick={() => setActiveTab("modeling")}>
                  3D Modeling
                </TabsTrigger>
                <TabsTrigger value="remote" onClick={() => setActiveTab("remote")}>
                  Remote Sensing
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="surveying" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.category === "Land Surveying")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="gis" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.category === "GIS & Mapping")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="modeling" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.category === "3D Modeling")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="remote" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.category === "Remote Sensing")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center">
            <Button variant="outline" size="lg" className="animate-pulse-subtle">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 mb-6">
              Technical Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Skills & Competencies</h2>
            <p className="text-gray-600">
              A comprehensive toolkit of technical skills and specialized knowledge in geomatics engineering.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Geomatics Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-500"></div>
                    <span>AutoCAD</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-500"></div>
                    <span>ArcGIS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-500"></div>
                    <span>SDBMS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-500"></div>
                    <span>GIS Mapping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-500"></div>
                    <span>Terrain Modeling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Programming Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    <span>HTML</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    <span>CSS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    <span>JavaScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    <span>JavaScript Intermediate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    <span>Python for Geospatial Analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-purple-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                    <span>Teamwork</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                    <span>Leadership</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                    <span>Creativity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                    <span>Problem-solving</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                    <span>Analytical Thinking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-orange-600"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                    <span>English</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                    <span>Hindi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                    <span>Nepali</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-green-600"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    <span>B.E. Geomatics Engineering, Kathmandu University (2021 - Present)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    <span>+2 Science, Shree Satyanarayan Secondary School (2018 - 2020)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-red-600"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <CardTitle>Hobbies & Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                    <span>Cartography and Map-Making</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                    <span>Hiking and Outdoor Activities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                    <span>Volunteering for Sports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                    <span>Playing Volleyball, Table Tennis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 mb-6">
              Work & Volunteering
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Experience & Leadership</h2>
            <p className="text-gray-600">My professional experience, apprenticeships, and leadership roles.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="animate-fade-in-left">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-teal-600"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <CardTitle>Work Experience & Apprenticeships</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <div className="font-medium">GIS Analysis and Mapping</div>
                    <div className="text-sm text-gray-600">Kathmandu University (Apprenticeship), Dhulikhel</div>
                  </li>
                  <li>
                    <div className="font-medium">Land Surveying and Field Data Collection</div>
                    <div className="text-sm text-gray-600">Kathmandu University (Apprenticeship), Dhulikhel</div>
                  </li>
                  <li>
                    <div className="font-medium">Sports Event Management</div>
                    <div className="text-sm text-gray-600">
                      Satyanarayan Secondary School (Apprenticeship), Biratnagar
                    </div>
                  </li>
                  <li>
                    <div className="font-medium">Running Shield Management</div>
                    <div className="text-sm text-gray-600">Kathmandu University (Apprenticeship), Dhulikhel</div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-right">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-blue-600"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <CardTitle>Leadership & Volunteering</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <div className="font-medium">President</div>
                    <div className="text-sm text-gray-600">ANNFSU Kathmandu University (SOE)</div>
                  </li>
                  <li>
                    <div className="font-medium">Volleyball</div>
                    <div className="text-sm text-gray-600">GE-Cup</div>
                  </li>
                  <li>
                    <div className="font-medium">Cricket</div>
                    <div className="text-sm text-gray-600">GE-Cup</div>
                  </li>
                  <li>
                    <div className="font-medium">NEPGEOM</div>
                    <div className="text-sm text-gray-600">Kathmandu University</div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="animate-fade-in-left">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 mb-6">
                Get In Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Let's Connect</h2>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to discuss potential opportunities, collaborations, or just to chat about
                geomatics and mapping technologies.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">9804320073</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-gray-600">puriaryan2003@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Location</h3>
                    <p className="text-gray-600">Kochakhal-6, Biratnagar, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-teal-600"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Date of Birth</h3>
                    <p className="text-gray-600">April 27, 2003</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-teal-600"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Social Media</h3>
                    <div className="flex gap-3">
                      <a
                        href="https://www.linkedin.com/in/shekhraj-puri-a66768363"
                        className="text-gray-600 hover:text-teal-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                      <span>•</span>
                      <a
                        href="https://www.instagram.com/aryan_puree?igsh=MXRsMTlmNnlscmd4eQ=="
                        className="text-gray-600 hover:text-teal-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                      <span>•</span>
                      <a
                        href="https://www.facebook.com/shekhraj.puri"
                        className="text-gray-600 hover:text-teal-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in-right">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                    placeholder="Project inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 animate-pulse-subtle">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-2 text-xl font-bold mb-4">
                <Compass className="h-6 w-6 text-teal-500" />
                <span>Shekhraj Puri</span>
              </div>
              <p className="text-gray-400 mb-6">
                Geomatics Engineering Student at Kathmandu University with a passion for spatial data analysis and
                mapping technologies.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/shekhraj.puri"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/aryan_puree?igsh=MXRsMTlmNnlscmd4eQ=="
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shekhraj-puri-a66768363"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-lg font-bold mb-4">About Me</h3>
              <p className="text-gray-400 mb-4">
                A 4th-year Geomatics Engineering student at Kathmandu University with a passion for GIS, remote sensing,
                and spatial data analysis.
              </p>
              <p className="text-gray-400">
                Date of Birth: April 27, 2003
                <br />
                Nationality: Nepalese
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Shekhraj Puri. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project, index }) {
  return (
    <Card className="overflow-hidden group animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg?height=400&width=600"}
            width={600}
            height={400}
            alt={project.title}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
          {project.category}
        </div>
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full group-hover:bg-teal-50 transition-colors">
          View Project Details
        </Button>
      </CardFooter>
    </Card>
  )
}

// Project Data
const projects = [
  {
    title: "Groundwater Potential Zone Mapping",
    description:
      "Identification of potential groundwater zones using Analytical Hierarchy Process (AHP) and Multi-Influencing Factor (MIF) techniques.",
    category: "GIS & Mapping",
    technologies: ["ArcGIS", "Remote Sensing", "AHP/MIF Analysis", "Spatial Modeling"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Watershed Delineation and Morphometric Analysis",
    description:
      "Comprehensive delineation and analysis of watershed characteristics to understand hydrological processes and drainage patterns.",
    category: "GIS & Mapping",
    technologies: ["QGIS", "HEC-HMS", "DEM Analysis", "Hydrological Modeling"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Thematic Mapping of Dhulikhel City",
    description:
      "Creation of detailed thematic maps for Dhulikhel City, highlighting various urban features and infrastructure elements.",
    category: "GIS & Mapping",
    technologies: ["ArcGIS", "Cartography", "Spatial Database", "Urban Planning"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Topographic Mapping from UAV Survey",
    description:
      "Generation of high-resolution topographic maps using data collected from Unmanned Aerial Vehicle (UAV) surveys.",
    category: "3D Modeling",
    technologies: ["Drone Mapping", "Photogrammetry", "Pix4D", "AutoCAD Civil 3D"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "LULC (Land Use/Land Cover) Mapping",
    description:
      "Classification and mapping of land use and land cover patterns to support environmental monitoring and urban planning.",
    category: "Remote Sensing",
    technologies: ["Sentinel-2 Imagery", "Supervised Classification", "ERDAS IMAGINE", "Change Detection"],
    image: "/placeholder.svg?height=400&width=600",
  },
]

// Services Data
const services = [
  {
    title: "Land Surveying",
    description: "Precise measurement and mapping of land boundaries and features.",
    icon: <MapPin className="h-6 w-6 text-teal-600" />,
    features: [
      "Boundary Surveys",
      "Topographic Surveys",
      "ALTA/NSPS Land Title Surveys",
      "Construction Stakeout",
      "As-Built Surveys",
    ],
  },
  {
    title: "GIS & Mapping",
    description: "Creation and analysis of spatial data for informed decision-making.",
    icon: <Globe className="h-6 w-6 text-teal-600" />,
    features: [
      "Custom Map Creation",
      "Spatial Analysis",
      "Web GIS Development",
      "Database Design & Management",
      "Thematic Mapping",
    ],
  },
  {
    title: "3D Modeling & Visualization",
    description: "Detailed 3D representations of terrain, structures, and environments.",
    icon: <Layers className="h-6 w-6 text-teal-600" />,
    features: [
      "Digital Terrain Models",
      "Building Information Modeling",
      "3D Visualization",
      "Virtual Reality Applications",
      "Point Cloud Processing",
    ],
  },
  {
    title: "Remote Sensing",
    description: "Collection and analysis of data from satellite and aerial imagery.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-teal-600"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    features: [
      "Satellite Imagery Analysis",
      "UAV/Drone Mapping",
      "LiDAR Data Processing",
      "Change Detection",
      "Image Classification",
    ],
  },
  {
    title: "Cadastral Surveying",
    description: "Legal surveys for property boundaries and land registration.",
    icon: <Grid className="h-6 w-6 text-teal-600" />,
    features: [
      "Property Boundary Surveys",
      "Subdivision Planning",
      "Legal Descriptions",
      "Easement Surveys",
      "Right-of-Way Mapping",
    ],
  },
  {
    title: "Consulting & Training",
    description: "Expert advice and training on geospatial technologies and applications.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-teal-600"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    features: [
      "GIS Implementation Strategy",
      "Technical Training",
      "Software Selection",
      "Workflow Optimization",
      "Quality Assurance",
    ],
  },
]
