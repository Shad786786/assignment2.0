import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, Code2, Layers, FileText, FolderGit2, Brain } from "lucide-react";

const StudyMaterials: FC = () => {
  const blocks = [
    { title: "IPU Previous Years", icon: BookOpen, desc: "Questions, Notes, and Materials." },
    { title: "DSA Sheets", icon: Code2, desc: "Top 400 Questions, Striver's 79, and Interview Problems." },
    { title: "AKTU Previous Years", icon: FileText, desc: "Questions, Notes, and Materials." },
    { title: "Top Projects", icon: FolderGit2, desc: "MERN Stack, AI, Machine Learning & Data Science Projects." },
    { title: "Top Interview Questions", icon: Layers, desc: "Programming, Web Development & AIML Essentials." },
    { title: "Coding Aptitude", icon: Brain, desc: "Reasoning, Aptitude, and Coding Problem Sets." },
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold mb-16 text-center text-gray-600 dark:text-white">
          Study Materials
        </h1>

        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blocks.map((block, index) => (
            <AnimatedBlock key={index} block={block} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface BlockProps {
  block: { title: string; desc: string; icon: any };
  delay: number;
}

const AnimatedBlock: FC<BlockProps> = ({ block, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative rounded-2xl overflow-hidden border dark:border-white/20 bg-white dark:bg-gradient-to-br dark:from-[#2D0555]/80 dark:via-[#3F0E90]/70 dark:to-[#00AEEF]/60 backdrop-blur-md shadow-md hover:shadow-xl transition-all cursor-pointer hover:scale-[1.03] p-8"
    >
      {/* Icon */}
      <div className="mb-6">
        <block.icon className="w-12 h-12 text-pink-600 dark:text-white group-hover:scale-110 transition-transform" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        {block.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-200 text-lg leading-relaxed">
        {block.desc}
      </p>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    </motion.div>
  );
};

export default StudyMaterials;
