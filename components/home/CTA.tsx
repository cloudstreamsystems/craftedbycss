"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 gradient-bg text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Decorative element */}
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </motion.div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Let's Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
                Extraordinary
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-2xl mx-auto">
              Ready to transform your vision into reality? Let's create a digital experience that sets you apart.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-white text-[#7076C6] hover:bg-white/90 font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
                >
                  Start Your Project <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/projects">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-10 py-6 rounded-full transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Available for new projects</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/30" />
              <div>Response within 24 hours</div>
              <div className="hidden sm:block w-px h-4 bg-white/30" />
              <div>Free consultation</div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
