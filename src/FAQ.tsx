import { FC, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is Edutechne?",
    answer:
      "Edutechne is a modern educational platform designed to empower students with high-quality study materials, previous year question papers, and AI-powered academic support. Our mission is to simplify learning and help students succeed — anytime, anywhere.  We aim to bridge the gap between students and reliable academic content by offering well-organized, curriculum-based materials for various universities and competitive exams. Whether you're preparing for final exams, brushing up on technical interviews, or building real-world projects, EDUTECHNE ensures that you have the right tools at your fingertips.",
  },
  {
    question: "What study materials do you provide?",
    answer:
      "We provide previous year question papers, DSA sheets, project ideas, coding questions, and interview preparation content.",
  },
  {
    question: "Are the study materials free?",
    answer:
      "Yes, all study materials listed are completely free to access and download.",
  },
  {
    question: "Can I contribute my notes or questions?",
    answer:
      "Absolutely! We welcome contributions. Please contact us via the Contact section.",
  },
  {
    question: "How frequently are the materials updated?",
    answer:
      "We update materials monthly based on latest academic and industry trends.",
  },
  {
    question: "Is registration required to access materials?",
    answer: "No, you can access all content without registering.",
  },
];

const FaqSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <div className=" min-h-[120vh] bg-gray-100 dark:bg-gray-900 p-6 sm:p-12">
      <h1 className="py-5 text-4xl font-semibold text-center mb-10 text-gray-800 dark:text-white">
        FAQs
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {visibleFaqs.map((faq, index) => (
          <AnimatedFaq
            key={index}
            index={index}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
          />
        ))}

        {faqs.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-4 text-blue-600 dark:text-blue-400 font-medium"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

interface AnimatedFaqProps {
  faq: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const AnimatedFaq: FC<AnimatedFaqProps> = ({ faq, index, isOpen, onToggle }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 p-6 rounded-xl shadow-md transition-all"
    >
      <button
        onClick={onToggle}
        className="w-full text-left text-xl font-semibold text-gray-800 dark:text-white focus:outline-none"
      >
        {faq.question}
      </button>
      {isOpen && (
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-base">{faq.answer}</p>
      )}
    </motion.div>
  );
};

export default FaqSection;
