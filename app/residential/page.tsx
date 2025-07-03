"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { CheckCircle, ArrowRight, Phone, Shield } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ResidentialPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true });
  const processInView = useInView(processRef, { once: true });
  const faqInView = useInView(faqRef, { once: true });

  const services = [
    {
      title: "Smart Home Security",
      description:
        "Comprehensive protection with smart sensors, cameras, and 24/7 monitoring that integrates with your existing smart home devices.",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: [
        "Motion sensors and door/window contacts",
        "Indoor and outdoor HD cameras",
        "Smart doorbell with video",
        "Mobile app control and alerts",
        "Voice assistant integration",
      ],
    },
    {
      title: "Video Surveillance",
      description:
        "Keep an eye on your property with high-definition cameras that provide clear footage day and night, accessible from anywhere.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: [
        "HD cameras with night vision",
        "Motion-activated recording",
        "Cloud storage options",
        "Live viewing from mobile devices",
        "Advanced video analytics",
      ],
    },
    {
      title: "Environmental Monitoring",
      description:
        "Protect your home from environmental threats with sensors that detect smoke, carbon monoxide, water leaks, and temperature changes.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: [
        "Smoke and carbon monoxide detection",
        "Water leak sensors",
        "Temperature monitoring",
        "Instant alerts to your phone",
        "Professional monitoring response",
      ],
    },
    {
      title: "Access Control",
      description:
        "Control who enters your home with smart locks, keypads, and access systems that provide convenience without compromising security.",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: [
        "Smart locks with keyless entry",
        "Temporary access codes for guests",
        "Access logs and history",
        "Remote locking and unlocking",
        "Integration with security system",
      ],
    },
    {
      title: "Comprehensive Security Solutions",
      description:
        "Our all-in-one security packages provide everything you need for peace of mind, including monitoring, cameras, and smart home integration.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      features: [
        "24/7 monitoring",
        "HD cameras",
        "Smart home integration",
        "Mobile alerts",
        "Professional installation",
      ],
    },
  ];

  const process = [
    {
      title: "Free Consultation",
      description:
        "We start with a thorough assessment of your home and security needs to understand your specific concerns.",
    },
    {
      title: "Custom Design",
      description:
        "Our security experts design a tailored system that addresses your unique requirements and budget.",
    },
    {
      title: "Professional Installation",
      description:
        "Our trained technicians install your system with minimal disruption to your home and daily routine.",
    },
    {
      title: "System Setup & Training",
      description:
        "We configure your system and provide comprehensive training so you can use all features confidently.",
    },
    {
      title: "Ongoing Support",
      description:
        "Our team is available 24/7 to answer questions, troubleshoot issues, and provide assistance.",
    },
  ];

  const faqs = [
    {
      question: "How much does a home security system cost?",
      answer:
        "The cost of a home security system varies based on your specific needs, home size, and the features you choose. We offer flexible packages starting at $29.99/month with various equipment options. We provide free consultations and quotes tailored to your requirements.",
    },
    {
      question: "Do I need professional monitoring?",
      answer:
        "While self-monitoring is an option, professional monitoring provides 24/7 protection even when you're unable to respond to alerts. Our monitoring center can dispatch emergency services immediately when threats are detected, providing peace of mind and potentially faster response times.",
    },
    {
      question: "Can I control my security system remotely?",
      answer:
        "Yes, all our security systems come with a mobile app that allows you to arm/disarm your system, view camera feeds, receive alerts, and control connected devices from anywhere using your smartphone or tablet.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Most residential installations are completed in a single day. The exact time depends on the system complexity and your home's size. Our technicians work efficiently to minimize disruption while ensuring everything is properly installed and tested.",
    },
    {
      question: "What happens during a power outage?",
      answer:
        "Our security systems include backup batteries that keep your system operational during power outages. For extended outages, our cellular communication backup ensures your system stays connected to our monitoring center without requiring Wi-Fi or landline connections.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 md:py-28 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
            alt="Home security system"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Residential Security Solutions
            </h1>
            <p className="text-xl text-zinc-200 mb-8">
              Protect your home and loved ones with advanced security systems
              designed for modern living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-md">
                Get a Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-md text-white border-white hover:bg-white/10"
              >
                <Phone className="mr-2 h-4 w-4" />
                {siteConfig.contact.phone}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Comprehensive Home Security
              </h2>
              <p className="text-lg text-muted-foreground">
                Our residential security solutions are designed to protect what
                matters most while integrating seamlessly with your lifestyle.
              </p>
            </motion.div>
          </div>
          <Tabs defaultValue="residential" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 mb-8">
              <TabsTrigger value="residential">
                Residential Solutions
              </TabsTrigger>
            </TabsList>
            <TabsContent value="residential" className="space-y-8">
              <div className="space-y-16">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <div className="relative rounded-xl overflow-hidden">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          width={600}
                          height={400}
                          className="object-cover w-full h-auto"
                        />
                      </div>
                    </div>
                    <div
                      className={`space-y-6 ${
                        index % 2 === 1 ? "md:order-1" : ""
                      }`}
                    >
                      <h3 className="font-heading text-2xl">{service.title}</h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section
        ref={processRef}
        className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900"
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Our Simple Process
              </h2>
              <p className="text-lg text-muted-foreground">
                From consultation to installation, we make securing your home
                easy and stress-free.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block" />

            <div className="space-y-12">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="relative"
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"
                    }`}
                  >
                    <Card className="relative">
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 hidden md:flex
                  bg-primary text-white rounded-full h-10 w-10 items-center justify-center font-bold z-10
                  ${index % 2 === 0 ? "-left-5" : "-right-5"}`}
                      >
                        {index + 1}
                      </div>
                      <CardHeader>
                        <div className="flex items-center md:hidden">
                          <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-3">
                            {index + 1}
                          </div>
                          <CardTitle>{step.title}</CardTitle>
                        </div>
                        <div className="hidden md:block">
                          <CardTitle>{step.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our residential security
                systems.
              </p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
            alt="Secure home"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-6">
                <Shield className="h-5 w-5 text-white mr-3" />
                <span className="text-white font-medium">
                  Residential Security Experts
                </span>
              </div>

              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
                Ready to Secure Your Home?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Contact us today for a free consultation and quote. Our security
                experts are ready to design a custom solution for your home.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {siteConfig.contact.phone}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TabsContent value="residential" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={
                services.find(
                  (s) => s.title === "Comprehensive Security Solutions"
                )?.image || "/placeholder.svg"
              }
              alt="Comprehensive Security Solutions"
              width={800}
              height={600}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-heading text-2xl">
              Comprehensive Security Solutions
            </h3>
            <p className="text-muted-foreground">
              {
                services.find(
                  (s) => s.title === "Comprehensive Security Solutions"
                )?.description
              }
            </p>
            <ul className="space-y-3">
              {services
                .find((s) => s.title === "Comprehensive Security Solutions")
                ?.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
            </ul>
            <Button>Explore Residential Solutions</Button>
          </div>
        </div>
      </TabsContent>
    </div>
  );
}
