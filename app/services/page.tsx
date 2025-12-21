import { Metadata } from "next";
import Container from "@/components/ui/Container";
import ScrollObserver from "@/components/ScrollObserver";
import { services } from "@/lib/data/services";
import { Palette, Monitor, Shield, Code, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Cloudstream Systems",
  description: "Explore our comprehensive digital services including brand identities, web design, art direction, and development.",
};

const iconMap: Record<string, any> = {
  palette: Palette,
  monitor: Monitor,
  shield: Shield,
  code: Code,
};

import Image from "next/image";
import RotatingImage from "@/components/services/RotatingImage";
import ProcessStackedServices from "@/components/services/ProcessStackedServices";
import CybersecurityDemo from "@/components/services/CybersecurityDemo";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <ScrollObserver mode="chaos">
        <section className="relative bg-gradient-to-br from-[#28236b] to-[#28236b] text-white py-12 md:py-24">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Comprehensive digital solutions tailored to elevate your brand and drive business growth.
              </p>
            </div>
          </Container>
        </section>
      </ScrollObserver>

      {/* Services Grid */}
      <ScrollObserver mode="drift">
        <section className="py-12 md:py-20">
          <Container>
            <div className="grid gap-8 md:gap-12">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon];
                return (
                  <div
                    key={service.id}
                    className={`flex flex-col-reverse ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      } gap-8 items-center`}
                  >
                    {/* Icon/Visual Side */}
                    <div className="w-full md:w-1/3">
                      {service.id === "brand-identities" ? (
                        <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] md:ml-[calc(min(-1rem,_(1280px_-_100vw)_/_2_-_1rem))] md:w-[calc(100%_-_min(-1rem,_(1280px_-_100vw)_/_2_-_1rem))] rounded-[32px] md:rounded-l-none md:rounded-r-[32px] overflow-hidden">
                          <Image
                            src="/images/Bag.png"
                            alt="Brand Identities"
                            fill
                            className="object-contain md:object-cover mix-blend-multiply object-left"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      ) : service.id === "web-design" ? (
                        <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] md:mr-[calc(min(-1rem,_(1280px_-_100vw)_/_2_-_1rem))] md:w-[calc(100%_-_min(-1rem,_(1280px_-_100vw)_/_2_-_1rem))] rounded-[32px] md:rounded-r-none md:rounded-l-[32px] overflow-hidden p-4 md:p-0">
                          <RotatingImage
                            src="/images/abou_res.png"
                            alt="Website / App Design"
                          />
                        </div>
                      ) : service.id === "cybersecurity" ? (
                        <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] rounded-[32px] overflow-hidden bg-[#0f172a] shadow-2xl">
                          <CybersecurityDemo />
                        </div>
                      ) : service.id === "development" ? (
                        <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] md:mr-[calc(min(-1rem,_(1280px_-_100vw)_/_2_-_1rem))] md:w-[calc(100%_-_min(-1rem,_(1280px_-_100vw)_/_2_-_1rem))] rounded-[32px] md:rounded-r-none md:rounded-l-[32px] overflow-hidden bg-[#F4F5FF] p-4 md:p-0">
                          <Image
                            src="/images/dashboard-demo.png"
                            alt="Development Dashboard"
                            fill
                            className="object-contain md:object-cover object-left-top"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      ) : (
                        <div className="bg-gradient-to-br from-[#28236b] to-[#28236b] rounded-[32px] p-12 flex items-center justify-center aspect-square">
                          <Icon className="w-32 h-32 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Content Side */}
                    {service.id === "web-design" ? (
                      <div className="w-full md:w-2/3 relative md:pr-16">
                        {/* Background Shape */}
                        <div className="absolute -top-[20%] -bottom-[20%] -right-[10%] w-[150vw] z-0 hidden md:block">
                          <Image
                            src="/images/web-design-bg.png"
                            alt="Background Shape"
                            fill
                            className="object-cover object-right"
                          />
                        </div>
                        {/* Mobile Background (simplified or same) */}
                        <div className="absolute inset-0 w-full h-full z-0 md:hidden bg-[#28236b] rounded-[32px]"></div>

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-16">
                          <h2 className="text-4xl font-bold mb-4 text-white">
                            {service.title}
                          </h2>
                          <p className="text-xl text-white/90 mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                  <Check className="w-4 h-4 text-[#28236b]" />
                                </div>
                                <span className="text-lg text-white">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : service.id === "cybersecurity" ? (
                      <div className="w-full md:w-2/3 relative md:pl-16">
                        {/* Background Shape */}
                        <div className="absolute -top-[20%] -bottom-[20%] -left-[10%] w-[150vw] z-0 hidden md:block">
                          <Image
                            src="/images/cybersecurity-bg.png"
                            alt="Background Shape"
                            fill
                            className="object-cover object-left"
                          />
                        </div>
                        {/* Mobile Background */}
                        <div className="absolute inset-0 w-full h-full z-0 md:hidden bg-[#28236b] rounded-[32px]"></div>

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-16">
                          <h2 className="text-4xl font-bold mb-4 text-white">
                            {service.title}
                          </h2>
                          <p className="text-xl text-white/90 mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                  <Check className="w-4 h-4 text-[#28236b]" />
                                </div>
                                <span className="text-lg text-white">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : service.id === "development" ? (
                      <div className="w-full md:w-2/3 relative md:pr-16">
                        {/* Background Shape (reusing web-design-bg as requested) */}
                        <div className="absolute -top-[20%] -bottom-[20%] -right-[10%] w-[150vw] z-0 hidden md:block">
                          <Image
                            src="/images/web-design-bg.png"
                            alt="Background Shape"
                            fill
                            className="object-cover object-right"
                          />
                        </div>
                        {/* Mobile Background */}
                        <div className="absolute inset-0 w-full h-full z-0 md:hidden bg-[#28236b] rounded-[32px]"></div>

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-16">
                          <h2 className="text-4xl font-bold mb-4 text-white">
                            {service.title}
                          </h2>
                          <p className="text-xl text-white/90 mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                  <Check className="w-4 h-4 text-[#28236b]" />
                                </div>
                                <span className="text-lg text-white">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={`w-full md:w-2/3 ${service.id === "brand-identities" ? "md:pl-16" : ""}`}>
                        <h2 className="text-4xl font-bold mb-4 text-[#28236b]">
                          {service.title}
                        </h2>
                        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-[#28236b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-lg text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      </ScrollObserver>

      {/* Process Section */}
      <ScrollObserver mode="drift">
        <ProcessStackedServices />
      </ScrollObserver>

      {/* Why Choose Us */}
      <ScrollObserver mode="drift">
        <section className="py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-[#28236b] text-center">
                Why Choose Cloudstream Systems?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#28236b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#28236b]">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </ScrollObserver>

      {/* CTA Section */}
      <ScrollObserver mode="warning">
        <section className="py-20 bg-gradient-to-br from-[#28236b] to-[#28236b] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Let&apos;s discuss how we can help bring your vision to life with our comprehensive digital services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-white text-[#28236b] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="/projects"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </Container>
        </section>
      </ScrollObserver>
    </>
  );
}



const benefits = [
  {
    title: "Full-Service Expertise",
    description: "From strategy to execution, we handle every aspect of your digital presence.",
  },
  {
    title: "Proven Track Record",
    description: "Years of experience delivering successful projects across diverse industries.",
  },
  {
    title: "Collaborative Approach",
    description: "We work closely with you as partners, ensuring your vision is realized.",
  },
  {
    title: "Cutting-Edge Technology",
    description: "We use the latest tools and frameworks to build future-proof solutions.",
  },
  {
    title: "Results-Focused",
    description: "Every decision is driven by data and focused on achieving measurable outcomes.",
  },
  {
    title: "Ongoing Support",
    description: "We're here for the long haul with maintenance, updates, and continuous optimization.",
  },
];
