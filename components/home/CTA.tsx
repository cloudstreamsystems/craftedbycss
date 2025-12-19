"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import MotionToggle from "@/components/ui/MotionToggle";

export default function CTA() {
  return (
    <section className="relative pt-32 pb-16 bg-[#28236b] text-white overflow-hidden">
      {/* Animated background elements */}


      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10"
        >


          <div className="text-center max-w-4xl mx-auto mb-20">
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
                  className="w-full sm:w-auto bg-white text-[#28236b] hover:bg-white/90 font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
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

          {/* Footer */}
          <div className="border-t border-white/10 pt-16 mt-16">
            <div className="flex flex-col md:flex-row justify-between gap-12 mb-10 items-center">
              {/* Left - Branding */}
              <div className="max-w-sm">
                <Image
                  src="/logo.png"
                  alt="Cloudstream Systems"
                  width={160}
                  height={54}
                  className="h-20 w-auto brightness-0 invert mb-4"
                />
                <p className="text-white/60 text-sm leading-relaxed">
                  Transforming ideas into digital solutions.
                </p>
              </div>

              {/* Right - Contact & Social */}
              <div className="flex flex-col md:flex-row gap-12 md:gap-16">
                {/* Social */}
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">Follow</h5>
                  <div className="flex gap-5">
                    <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Facebook">
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Twitter">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram">
                      <Instagram size={18} />
                    </a>
                    <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="LinkedIn">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">Contact</h5>
                  <a
                    href="mailto:support@craftedbycss.com"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    support@craftedbycss.com
                  </a>
                </div>

                {/* Reduce Motion */}
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">Accessibility</h5>
                  <MotionToggle />
                </div>
              </div>
            </div>

            {/* Copyright - Centered */}
            <div className="text-center">
              <p className="text-sm text-white/40">
                &copy; {new Date().getFullYear()} Cloudstream Systems
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
