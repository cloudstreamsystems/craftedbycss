"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Check } from "lucide-react";
import { useMotion } from "@/contexts/MotionContext";

export default function ContactFormEnhanced() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { isMotionReduced } = useMotion();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 2000);
  };

  const isFieldActive = (field: string) => {
    return focusedField === field || formData[field as keyof typeof formData] !== "";
  };

  const FloatingLabelInput = ({
    id,
    name,
    type = "text",
    label,
    required = false,
  }: {
    id: string;
    name: string;
    type?: string;
    label: string;
    required?: boolean;
  }) => (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        value={formData[name as keyof typeof formData]}
        onChange={handleChange}
        onFocus={() => setFocusedField(name)}
        onBlur={() => setFocusedField(null)}
        required={required}
        className="w-full px-4 pt-6 pb-2 rounded-2xl border-2 border-gray-200 focus:border-[#7076C6] focus:outline-none transition-colors peer"
      />
      <motion.label
        htmlFor={id}
        className="absolute left-4 text-gray-500 pointer-events-none origin-left"
        initial={false}
        animate={
          isMotionReduced
            ? {}
            : isFieldActive(name)
            ? { top: "0.5rem", fontSize: "0.75rem", color: "#7076C6" }
            : { top: "1rem", fontSize: "1rem", color: "#6B7280" }
        }
        transition={{ duration: 0.2 }}
      >
        {label} {required && "*"}
      </motion.label>
    </div>
  );

  const FloatingLabelTextarea = ({
    id,
    name,
    label,
    required = false,
    rows = 6,
  }: {
    id: string;
    name: string;
    label: string;
    required?: boolean;
    rows?: number;
  }) => (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        value={formData[name as keyof typeof formData]}
        onChange={handleChange}
        onFocus={() => setFocusedField(name)}
        onBlur={() => setFocusedField(null)}
        required={required}
        rows={rows}
        className="w-full px-4 pt-6 pb-2 rounded-2xl border-2 border-gray-200 focus:border-[#7076C6] focus:outline-none transition-colors resize-none peer"
      />
      <motion.label
        htmlFor={id}
        className="absolute left-4 text-gray-500 pointer-events-none origin-left"
        initial={false}
        animate={
          isMotionReduced
            ? {}
            : isFieldActive(name)
            ? { top: "0.5rem", fontSize: "0.75rem", color: "#7076C6" }
            : { top: "1rem", fontSize: "1rem", color: "#6B7280" }
        }
        transition={{ duration: 0.2 }}
      >
        {label} {required && "*"}
      </motion.label>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FloatingLabelInput
        id="name"
        name="name"
        type="text"
        label="Name"
        required
      />

      <FloatingLabelInput
        id="email"
        name="email"
        type="email"
        label="Email"
        required
      />

      <FloatingLabelInput
        id="subject"
        name="subject"
        type="text"
        label="Subject"
        required
      />

      <FloatingLabelTextarea
        id="message"
        name="message"
        label="Message"
        required
        rows={6}
      />

      <AnimatePresence mode="wait">
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-2xl flex items-center gap-2"
          >
            <Check className="w-5 h-5" />
            Thank you! We'll get back to you soon.
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-2xl"
          >
            Something went wrong. Please try again.
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={isSubmitting || submitStatus === "success"}
        className="w-full bg-[#7076C6] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4B3A5E] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden relative"
      >
        <AnimatePresence mode="wait">
          {isSubmitting ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-2"
            >
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </motion.div>
          ) : submitStatus === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-2"
            >
              <Check className="w-5 h-5" />
              Sent!
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-2"
            >
              Send Message
              <Send className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </form>
  );
}
