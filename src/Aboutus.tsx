import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="py-40 w-full min-h-screen bg-[url('/src/images/reddesign.gif')] bg-cover bg-center bg-no-repeat text-gray-800 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-400 mb-12">
          About Us
        </h1>

       
        {/* ✅ Main Description Section */}
        <p className=" text-white text-lg text-center max-w-3xl mx-auto mb-12">
          <span className="font-semibold text-purple-600">EDUTECHNE</span> is a modern educational platform
          designed to empower students with high-quality study resources, previous year question papers,
          and AI-powered academic support. Our mission is to simplify learning and help students succeed —
          anytime, anywhere.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Quality Resources</h2>
            <p className="text-sm text-gray-700">
              Curated study materials created and reviewed by subject experts to help you excel in exams
              and projects.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-purple-800 mb-2"> AI Chatbot</h2>
            <p className="text-sm text-gray-700">
              Instantly get answers to your academic queries 24/7 using our intelligent AI-powered chatbot.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Accessible Anywhere</h2>
            <p className="text-sm text-gray-700">
              Study from any device like desktop, tablet, or mobile with a responsive and fast user
              experience.
            </p>
          </div>
        </div>

         {/* ✅ Vision and Mission */}
    <div className="py-16 flex flex-col md:flex-row justify-between gap-10">
      {/* Vision */}
      <div className="md:w-1/2 bg-transparent border border-indigo-400 p-8 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-indigo-400 mb-4"> Our Vision</h3>
        <p className="text-white/70 leading-relaxed">
          To revolutionize the way students learn by providing seamless access to curated content,
          intuitive learning experiences, and AI-powered academic assistance. We envision a future
          where quality education is not a privilege, but a universally accessible right — simple,
          smart, and inclusive for every learner, regardless of background or location.
        </p>
      </div>

      {/* Mission */}
      <div className="md:w-1/2 bg-transparent border border-purple-400 p-8 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-purple-400 mb-4"> Our Mission</h3>
        <p className="text-white/70 leading-relaxed">
          Our mission is to empower students with the tools they need to succeed by delivering
          high-quality study materials, previous year papers, and real-time AI support. We aim to
          foster curiosity, confidence, and continuous growth in every learner by combining
          technology, innovation, and accessibility in education.
        </p>
      </div>
    </div>
      </div>
     


    </div>
  );
};

export default AboutUs;     