import { FC } from "react";
import { BookOpen, Brain, FileText, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "High-Quality Study Materials",
    icon: <BookOpen className="h-10 w-10 text-indigo-600" />,
    desc: "Access well-curated notes, textbooks, and resources for various subjects and universities.",
  },
  {
    title: "AI-Powered Doubt Solver",
    icon: <Brain className="h-10 w-10 text-green-600" />,
    desc: "Instant AI assistance to help you clarify doubts and guide your academic journey.",
  },
  {
    title: "Previous Year Papers",
    icon: <FileText className="h-10 w-10 text-red-500" />,
    desc: "Download previous year papers from IPU, AKTU and other universities for better exam prep.",
  },
  {
    title: "Community & Support",
    icon: <MessageSquare className="h-10 w-10 text-yellow-500" />,
    desc: "Get peer-to-peer help, contribute resources, and connect with fellow learners.",
  },
];

const KeyFeatures: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 sm:p-16">
      <h2 className="text-4xl font-semibold text-center text-gray-800 dark:text-white mb-12">
        Key Features
      </h2>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <AnimatedFeature key={index} feature={feature} delay={index * 0.1} />
        ))}
      </div>
    </div>
  );
};

interface FeatureProps {
  feature: { title: string; desc: string; icon: JSX.Element };
  delay: number;
}

const AnimatedFeature: FC<FeatureProps> = ({ feature, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition h-full flex flex-col justify-between"
    >
      <div className="flex justify-center mb-4">{feature.icon}</div>
      <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">{feature.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.desc}</p>
    </motion.div>
  );
};

export default KeyFeatures;
