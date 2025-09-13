import { useState } from "react";
import { Rocket, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Toggle from "./toggle";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500 ">
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
        {/* 🌐 Navbar */}
        <nav className="bg-white dark:bg-gray-200 sticky top-0 z-50 shadow-sm transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="text-4xl font-bold text-blue-700 dark:text-blue-700 tracking-tight">
                EDU<span className="text-gray-500 dark:text-gray-500">TECHNE</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-700 dark:text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Home
                </a>
                <a href="#" className="text-gray-700 dark:text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Materials
                </a>
                <a href="#highlights" className="text-gray-700 dark:text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Highlights
                </a>
                <a href="#" className="text-gray-700 dark:text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  About us
                </a>
                <Button className="text-sm px-7 py-2 rounded-md">Login</Button>
                <Toggle />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                  {isOpen ? (
                    <X className="w-6 h-6 text-blue-700 dark:text-white" />
                  ) : (
                    <Menu className="w-6 h-6 text-blue-700 dark:text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 shadow-md transition-colors duration-500">
              <div className="px-4 py-4 space-y-2">
                <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Home</a>
                <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Materials</a>
                <a href="#highlights" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Highlights</a>
                <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Chatbot</a>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium transition">
                  Login
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* 🏠 Hero Section */}
        <div className="flex flex-col items-center justify-center px-6 py-56 text-center">
          <h1 className="text-5xl font-bold text-blue-700 dark:text-blue-400 mb-4">
            Welcome to <span className="text-black dark:text-white">EduTechne</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
            Your all-in-one platform for study materials, previous year question papers, and an AI-powered chatbot for your doubts.
          </p>
          <Button className="text-base px-6 py-4 rounded-xl shadow-md flex gap-2 items-center">
            <Rocket className="w-5 h-5" />
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
