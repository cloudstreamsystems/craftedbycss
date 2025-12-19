import { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactFormEnhanced from "@/components/ui/ContactFormEnhanced";
import ScrollObserver from "@/components/ScrollObserver";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Cloudstream Systems",
  description: "Get in touch with Cloudstream Systems. Let&apos;s discuss your project and bring your vision to life.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <ScrollObserver mode="chaos">
        <section className="relative bg-gradient-to-br from-[#28236b] to-[#28236b] text-white py-24">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Ready to start your project? We&apos;d love to hear from you. Let&apos;s create something amazing together.
              </p>
            </div>
          </Container>
        </section>
      </ScrollObserver>

      {/* Contact Section */}
      <ScrollObserver mode="drift">
        <section className="py-20">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-[#28236b]">
                  Send us a Message
                </h2>
                <ContactFormEnhanced />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-[#28236b]">
                    Contact Information
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Have a question or want to work together? Feel free to reach out through any of the channels below.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#28236b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#28236b] mb-1">Email</h3>
                      <a
                        href="mailto:contact@cssbuilds.tech"
                        className="text-gray-700 hover:text-[#28236b] transition-colors"
                      >
                        contact@cssbuilds.tech
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#28236b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#28236b] mb-1">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-700 hover:text-[#28236b] transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#28236b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#28236b] mb-1">Location</h3>
                      <p className="text-gray-700">
                        Remote & Available Worldwide
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-[#28236b] mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[#F4F5FF] rounded-xl flex items-center justify-center hover:bg-[#28236b] hover:text-white transition-colors text-[#28236b]"
                        aria-label={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-[#F4F5FF] rounded-[32px] p-8">
                  <h3 className="font-semibold text-[#28236b] mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </ScrollObserver>

      {/* FAQ Section */}
      <ScrollObserver mode="drift">
        <section className="py-20 bg-[#F4F5FF]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-[#28236b] text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-[32px] p-8">
                    <h3 className="text-xl font-bold mb-3 text-[#28236b]">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </ScrollObserver>
    </>
  );
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "#" },
  { name: "Twitter", icon: Twitter, url: "#" },
  { name: "Instagram", icon: Instagram, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A typical website project takes 4-8 weeks from kickoff to launch, while branding projects usually take 2-4 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes! We offer various maintenance and support packages to keep your website running smoothly. This includes updates, security monitoring, content changes, and technical support.",
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and depends on your specific requirements. We provide detailed quotes after understanding your needs. Contact us for a free consultation and custom quote.",
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer: "Absolutely! We're experienced in working within existing brand guidelines and can seamlessly integrate with your current brand identity while bringing fresh ideas to the table.",
  },
];
