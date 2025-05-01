"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg">
          View Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Shekhraj Puri - Resume</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="resume-content space-y-6 p-4">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">SHEKHRAJ PURI</h1>
            <div className="flex flex-wrap justify-center gap-3 mt-2 text-sm text-gray-600">
              <span>Phone: 9804320073</span>
              <span>•</span>
              <span>Email: puriaryan2003@gmail.com</span>
              <span>•</span>
              <span>Kochakhal-6, Biratnagar, Nepal</span>
            </div>
          </div>

          <section>
            <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
            <p className="text-sm">
              A bright and ambitious Geomatics Engineering student with a long-held special interest in geospatial
              analysis, land surveying, and remote sensing. Proficient in high standards related to the field, including
              AutoCAD, ArcGIS, and SDBMS, among others, during extensive hands-on experience in GIS mapping, data
              collection, and terrain modeling. Showing the ability to apply engineering principles in order to solve
              complex spatial problems through coursework and field projects. The analytical mind, collaborator, and
              passionate team player; passionate about applying technology to enhance the accuracy of geographic data.
              Looking to contribute as a strategic and technical expert in the Geomatics engineering role.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">WORK EXPERIENCE</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>GIS Analysis and Mapping, Kathmandu University (Apprenticeship), Dhulikhel</li>
              <li>Land Surveying and Field Data Collection, Kathmandu University (Apprenticeship), Dhulikhel</li>
              <li>Sports Event Management, Satyanarayan Secondary School (Apprenticeship), Biratnagar</li>
              <li>Running shield Management, Kathmandu University (Apprenticeship), Dhulikhel</li>
              <li>President, ANNFSU Kathmandu university(SOE)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">EDUCATION</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>+2, Shree Satyanarayan Secondary School (2018 - 2020)</li>
              <li>Bachelors, Geomatics Engineering, Kathmandu University (2021 - Present)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">COURSES</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Science, Shree Satyanarayan Secondary School</li>
              <li>Geomatics Engineering, Kathmandu University</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>JS Intermediate (https://www.codecademy.com/learn?page=learning)</li>
            </ul>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">SKILLS</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Teamwork</li>
                <li>Leadership</li>
                <li>Creativity</li>
                <li>Problem-solving</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">LANGUAGES</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>English</li>
                <li>Hindi</li>
                <li>Nepali</li>
              </ul>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">VOLUNTEERING</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Volleyball, GE-Cup</li>
                <li>Cricket, GE-Cup</li>
                <li>NEPGEOM, KU(Kathmandu University)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">HOBBIES</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Cartography and Map-Making</li>
                <li>Hiking and Outdoor Activities</li>
                <li>Volunteering for Sports</li>
                <li>Playing Volleyball, Table Tennis</li>
              </ul>
            </div>
          </section>

          <div className="flex justify-center mt-6">
            <Button onClick={handlePrint}>Print Resume</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
