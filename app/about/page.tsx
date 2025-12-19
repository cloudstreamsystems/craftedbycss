import { Metadata } from "next";
import Container from "@/components/ui/Container";
import ScrollObserver from "@/components/ScrollObserver";
import { Target, Eye, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Cloudstream Systems",
  description: "Learn about Cloudstream Systems - our mission, vision, and approach to building exceptional digital experiences.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <ScrollObserver mode="chaos">
        <section className="relative bg-gradient-to-br from-[#28236b] to-[#28236b] text-white py-24">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                ...just build
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                We&apos;re a creative digital agency focused on building exceptional brands and digital experiences that drive real results.
              </p>
            </div>
          </Container>
        </section>
      </ScrollObserver>

      {/* Mission & Vision */}
      <ScrollObserver mode="drift">
        <section className="py-20">
          <Container>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-[#F4F5FF] rounded-[32px] p-10">
                <div className="w-16 h-16 bg-[#28236b] rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#28236b]">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower businesses with innovative digital solutions that combine stunning design with powerful functionality. We believe in creating experiences that not only look beautiful but drive measurable business growth.
                </p>
              </div>

              <div className="bg-[#F4F5FF] rounded-[32px] p-10">
                <div className="w-16 h-16 bg-[#28236b] rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#28236b]">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the go-to partner for businesses seeking to transform their digital presence. We envision a future where every brand we touch becomes a leader in their industry through exceptional design and development.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </ScrollObserver>

      {/* Our Story */}
      <ScrollObserver mode="drift">
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-[#28236b] text-center">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Cloudstream Systems was born from a simple belief: great design and powerful technology should work together seamlessly. We started as a small team of passionate designers and developers who were frustrated with the disconnect between beautiful designs and functional implementations.
                </p>
                <p>
                  Today, we&apos;ve grown into a full-service digital agency, but our core philosophy remains the same. We don&apos;t just build websites and brands—we create digital experiences that tell stories, engage audiences, and drive real business results.
                </p>
                <p>
                  Our approach is collaborative and transparent. We work closely with our clients to understand their unique challenges and goals, then craft solutions that exceed expectations. Every project is an opportunity to push boundaries and create something exceptional.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </ScrollObserver>

      {/* Values */}
      <ScrollObserver mode="drift">
        <section className="py-20 bg-[#F4F5FF]">
          <Container>
            <h2 className="text-4xl font-bold mb-12 text-[#28236b] text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-[32px] p-8 text-center">
                  <div className="w-16 h-16 bg-[#28236b] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#28236b]">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </ScrollObserver>

      {/* Team Section */}
      <ScrollObserver mode="drift">
        <section className="py-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Users className="w-16 h-16 text-[#28236b] mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6 text-[#28236b]">Our Team</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We&apos;re a diverse team of designers, developers, strategists, and creative thinkers united by our passion for exceptional digital experiences. Each member brings unique expertise and perspective, allowing us to tackle any challenge with creativity and precision.
              </p>
              <p className="text-lg text-gray-600">
                From brand identity to full-stack development, our team has the skills and experience to bring your vision to life.
              </p>
            </div>
          </Container>
        </section>
      </ScrollObserver>

      {/* CTA Section */}
      <ScrollObserver mode="warning">
        <section className="py-20 bg-gradient-to-br from-[#28236b] to-[#28236b] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
              <p className="text-xl mb-8 text-white/90">
                Let&apos;s create something exceptional. Get in touch to discuss your project.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-[#28236b] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </Container>
        </section>
      </ScrollObserver>
    </>
  );
}

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We're committed to delivering the highest quality in everything we do, from design to code to client service.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best results come from working closely with our clients as true partners.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Beautiful design is just the start—we focus on creating solutions that drive real business outcomes.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "We stay ahead of trends and technologies to deliver cutting-edge solutions that stand the test of time.",
  },
];
