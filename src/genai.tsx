import React from 'react';

const PromptGenerator: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl shadow-lg p-10 text-center max-w-4xl mx-auto mt-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Ask your Doughts to Ai 
      </h1>
      <p className="text-gray-600 mb-8">
        Ask anything that make sence and Instantly get answers to your academic queries
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
        <div className="relative flex-1 w-full">
          <input
            type="text"
            placeholder="Write a prompt to generate"
            className="text-gray-900 w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <div className="absolute left-4 top-3.5 text-gray-400">
            <i className="fas fa-magic" /> {/* Optional icon placeholder */}
          </div>
        </div>

        <button className="bg-purple-600 text-white  px-6 py-3 rounded-full hover:bg-purple-700 transition-all">
          + 
        </button>
      </div>
    </div>
  );
};

export default PromptGenerator;
