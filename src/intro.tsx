import React, { useState } from 'react';
import Ai from "./genai";

const VideoSearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    console.log('Searching for:', query);
  };

  return (
    <section className="bg-gradient-to-br from-pink-300 via-pink-400 to-purple-400 relative gradient-to-br from-purple-400 via-pink-300 to-red-300  inset-0 min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-black/20 dark:via-black/20 dark:to-black/20 flex flex-col items-center justify-center px-6 py-20 transition-colors duration-500">
      
      {/* Intro Text */}
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
          Upgrade Your Coding Skills with EduTechne
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Explore a world of curated study materials, previous year papers, and AI-powered doubt solving. Watch, Learn & Succeed with ease.
        </p>
      </div>

      {/* Video Box */}
      <div className="w-full max-w-4xl mb-10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <video
          className="w-full h-auto rounded-3xl"
          controls
          poster="https://via.placeholder.com/800x450.png?text=Your+Video"
          autoPlay
          muted
          loop
        >
          <source
            src="src/images/invideo-ai-1080_Upgrade_Your_Study_Game_with_EduTechne_2025-07-16.mp4_1752670352278.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-2xl flex items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full overflow-hidden shadow-lg">
        <input
          type="text"
          placeholder="Search topics, notes, or solutions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-6 py-3 text-gray-700 dark:text-white bg-transparent focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all"
        >
          Search
        </button>
      </div>

      {/* AI Component */}
      <div className="mt-10 w-full max-w-4xl">
        <Ai />
      </div>
      
    </section>
  );
};

export default VideoSearchPage;
