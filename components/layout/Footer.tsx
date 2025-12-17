"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import MotionToggle from "@/components/ui/MotionToggle";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#3730a3] to-[#1e1b4b] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image 
                src="/logo.png" 
                alt="Cloudstream Systems" 
                width={175}
                height={59}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-3">
              Transforming ideas into digital solutions.
            </p>
            <p className="text-[#7177C7] font-bold text-lg">...just build</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Brand Identities</li>
              <li>Website Design</li>
              <li>App Development</li>
              <li>Art Direction</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold mb-4">Get In Touch</h4>
            <div className="flex items-center gap-2 text-gray-300 mb-4">
              <Mail size={18} />
              <a href="mailto:contact@cssbuilds.tech" className="hover:text-white transition-colors">
                contact@cssbuilds.tech
              </a>
            </div>
            <h4 className="font-bold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Cloudstream Systems. All rights reserved.</p>
            <MotionToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
