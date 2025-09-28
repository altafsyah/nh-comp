import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MH3, MLi, MSpan } from "~/components/motion-wrapper";

interface FAQItemProps {
  question?: string;
  answer?: string;
  isOpen?: boolean;
  toggle?: () => void;
}

function FAQItem({
  question = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, voluptas.",
  answer = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto minus quibusdam culpa? Magnam, consequuntur repellendus.",
  isOpen = false,
  toggle,
}: FAQItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-slate-700 pb-4">
      <button
        onClick={toggle}
        className="w-full text-left flex items-center justify-between group"
      >
        <MH3 className="text-xl font-semibold group-hover:text-slate-200 transition-colors">
          {question}
        </MH3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-4 flex-shrink-0"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-slate-400"
          >
            <path
              d="M10 4V16M4 10H16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            ref={ref}
            initial={{ height: 0, opacity: 0.3, filter: "blur(5px)" }}
            animate={{
              height: ref.current?.scrollHeight ?? "auto",
              opacity: 1,
              filter: "blur(0px)",
            }}
            exit={{ height: 0, opacity: 0.3, filter: "blur(5px)" }}
            transition={{ ease: "easeOut" }}
            className="overflow-hidden "
          >
            <MSpan className="text-slate-400 text-lg block mt-3">
              {answer}
            </MSpan>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQs() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const faqItems = [
    {
      question: "How much does it cost to work with you?",
      answer:
        "Costs vary depending on your project’s scope and requirements. We provide transparent, detailed quotes after an initial consultation so you know exactly what to expect.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Timelines depend on each project’s complexity. After understanding your needs, we’ll give you a clear estimate while ensuring efficient, high-quality results.",
    },
    {
      question: "Can you help with my existing website or digital presence?",
      answer:
        "Yes! We can review your current digital presence and suggest improvements, updates, or a full refresh to help you get the most out of your online assets.",
    },
    {
      question: "Do you offer ongoing support after the project is complete?",
      answer:
        "Definitely. We offer support and maintenance packages to keep your platform secure, up-to-date, and running smoothly, so you can focus on your business.",
    },
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ul className="space-y-4">
      {faqItems.map((item, index) => (
        <MLi
          initial={{ filter: "blur(4px)", y: 12, opacity: 0 }}
          whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.125 * index }}
          key={`faq_${index}`}
        >
          <FAQItem
            question={item.question}
            answer={item.answer}
            isOpen={expandedIndex === index}
            toggle={() => handleToggle(index)}
          />
        </MLi>
      ))}
    </ul>
  );
}
