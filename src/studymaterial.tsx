import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const studyMaterials = [
  {
    title: "React Notes",
    description: "Complete guide to React fundamentals.",
    file: "/pdfs/react-notes.pdf",
  },
  {
    title: "DSA Cheatsheet",
    description: "Quick reference for Data Structures & Algorithms.",
    file: "/pdfs/dsa-cheatsheet.pdf",
  },
  {
    title: "React Notes",
    description: "Complete guide to React fundamentals.",
    file: "/pdfs/react-notes.pdf",
  },
  {
    title: "DSA Cheatsheet",
    description: "Quick reference for Data Structures & Algorithms.",
    file: "/pdfs/dsa-cheatsheet.pdf",
  },
  {
    title: "React Notes",
    description: "Complete guide to React fundamentals.",
    file: "/pdfs/react-notes.pdf",
  },
  {
    title: "DSA Cheatsheet",
    description: "Quick reference for Data Structures & Algorithms.",
    file: "/pdfs/dsa-cheatsheet.pdf",
  },{
    title: "React Notes",
    description: "Complete guide to React fundamentals.",
    file: "/pdfs/react-notes.pdf",
  },
  {
    title: "DSA Cheatsheet",
    description: "Quick reference for Data Structures & Algorithms.",
    file: "/pdfs/dsa-cheatsheet.pdf",
  },{
    title: "React Notes",
    description: "Complete guide to React fundamentals.",
    file: "/pdfs/react-notes.pdf",
  },
  {
    title: "DSA Cheatsheet",
    description: "Quick reference for Data Structures & Algorithms.",
    file: "/pdfs/dsa-cheatsheet.pdf",
  },
  {
    title: "React Notes",
    description: "Complete guide to React fundamentals.",
    file: "/pdfs/react-notes.pdf",
  },
  {
    title: "DSA Cheatsheet",
    description: "Quick reference for Data Structures & Algorithms.",
    file: "/pdfs/dsa-cheatsheet.pdf",
  },
  // Add more materials here...
];

export default function StudyMaterials() {
  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-center text-blue-700 mb-10">
        📘 Study Materials
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {studyMaterials.map((material, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader>
              <CardTitle>{material.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{material.description}</p>
              <a href={material.file} download target="_blank" rel="noopener noreferrer">
                <Button className="w-full flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
