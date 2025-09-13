import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import "./index.css";

interface VideoItem {
  title: string;
  description: string;
  url: string;
}

const videos: VideoItem[] = [
  {
    title: "Learn React in 10 Minutes",
    description: "This video gives a quick overview of React fundamentals including components, props, and state.",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },
  {
    title: "Tailwind CSS Crash Course",
    description: "Get started with Tailwind CSS, utility-first framework that helps you build beautiful UI fast.",
    url: "https://www.youtube.com/embed/dFgzHOX84xQ",
  },
  {
    title: "JavaScript Full Tutorial",
    description: "A comprehensive guide to JavaScript covering variables, loops, functions, and modern ES6+ features.",
    url: "https://www.youtube.com/embed/PkZNo7MFNFg",
  },
];

const ExploreMore: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-150 dark:from-gray-900 dark:to-black p-6 pb-20 transition-colors duration-500">
      <h1 className="py-2 text-4xl text-center mb-10 text-gray-600 dark:text-white">
        Explore More
      </h1>
      <div className="space-y-20">
        {videos.map((video, index) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`relative group bg-white dark:bg-blue-950 backdrop-blur-md border dark:border-white/10 rounded-3xl shadow-2xl hover:shadow-3xl transform transition-all p-8 flex flex-col gap-10 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Floating Background Glow */}
              <div className="absolute inset-0 rounded-3xl group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 blur-2xl opacity-20"></div>

              {/* Video */}
              <div className="relative w-full lg:w-2/5 z-10">
                <div className="overflow-hidden rounded-2xl shadow-lg group-hover:rotate-[1.5deg] group-hover:scale-105 transition-transform duration-500">
                  <iframe
                    className="w-full h-72 rounded-2xl"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center z-10 text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{video.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">{video.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
