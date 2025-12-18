"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks from initial consultation to launch. We'll provide you with a detailed timeline during our discovery phase and keep you updated throughout the process."
  },
  {
    question: "What is your design process?",
    answer: "Our process includes four key phases: Discovery (understanding your needs and goals), Design (creating mockups and prototypes), Development (building your solution), and Launch (testing and deployment). We maintain close communication throughout each phase to ensure the final product exceeds your expectations."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes! We offer comprehensive maintenance packages that include regular updates, security monitoring, performance optimization, and technical support. We're committed to ensuring your digital presence continues to perform at its best long after launch."
  },
  {
    question: "What platforms and technologies do you work with?",
    answer: "We specialize in modern web technologies including React, Next.js, WordPress, Shopify, and custom solutions. Our team stays current with the latest tools and frameworks to deliver cutting-edge solutions that are both powerful and maintainable."
  },
  {
    question: "Can you help with branding and visual identity?",
    answer: "Absolutely! We offer complete brand identity services including logo design, brand guidelines, color palettes, typography selection, and marketing materials. We ensure your brand is consistent and memorable across all touchpoints."
  },
  {
    question: "What is the cost of your services?",
    answer: "Every project is unique, so we provide custom quotes based on your specific needs and goals. After our initial consultation, we'll provide a detailed proposal outlining scope, timeline, and investment. We offer flexible payment plans to accommodate different budgets."
  },
  {
    question: "Do you work with clients remotely?",
    answer: "Yes! We work with clients worldwide. Through video calls, project management tools, and regular communication, we ensure seamless collaboration regardless of location. Many of our best partnerships are with remote clients."
  },
  {
    question: "What makes Cloudstream Systems different?",
    answer: "We combine technical excellence with creative innovation. Our team doesn't just build websites – we create digital experiences that drive results. We're committed to understanding your business, delivering on time, and providing ongoing support to ensure your success."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#28236b]/5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#28236b] font-semibold text-sm uppercase tracking-wider mb-4">
            Got Questions?
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#111827]">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and how we can help transform your digital presence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white rounded-2xl p-6 text-left shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#28236b]/20"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-[#111827] pr-8">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                      ? 'bg-[#28236b] text-white'
                      : 'bg-[#28236b]/5 text-[#28236b]'
                    }`}>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom of FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-block bg-transparent border-2 border-[#28236b] text-[#28236b] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#28236b] hover:text-white hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
