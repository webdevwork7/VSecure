"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Building,
  Lock,
  Eye,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CommercialPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const industriesRef = useRef(null);
  const faqRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true });
  const industriesInView = useInView(industriesRef, { once: true });
  const faqInView = useInView(faqRef, { once: true });

  const services = [
    {
      title: "Access Control Systems",
      description:
        "Manage who enters your facility with advanced access control solutions including keycards, biometrics, and mobile credentials.",
      icon: Lock,
      features: [
        "Keycard and fob systems",
        "Biometric authentication",
        "Mobile credentials",
        "Time-based access restrictions",
        "Detailed access logs and reporting",
      ],
    },
    {
      title: "Video Surveillance",
      description:
        "Monitor your business with high-definition cameras, video analytics, and remote viewing capabilities.",
      icon: Eye,
      features: [
        "HD and 4K camera options",
        "Indoor and outdoor solutions",
        "Night vision capabilities",
        "Video analytics and AI detection",
        "Cloud and on-premise storage options",
      ],
    },
    {
      title: "Intrusion Detection",
      description:
        "Protect your assets with comprehensive intrusion detection systems including motion sensors, glass break detectors, and 24/7 monitoring.",
      icon: Shield,
      features: [
        "Motion and occupancy sensors",
        "Door and window contacts",
        "Glass break detection",
        "Silent and audible alarms",
        "24/7 professional monitoring",
      ],
    },
    {
      title: "Integrated Security Solutions",
      description:
        "Unify your security systems with our integrated platform that connects access control, video surveillance, and intrusion detection.",
      icon: Building,
      features: [
        "Single platform management",
        "Mobile app control",
        "Automated security protocols",
        "Business intelligence integration",
        "Scalable for business growth",
      ],
    },
  ];

  const industries = [
    {
      name: "Retail",
      description:
        "Protect merchandise, prevent theft, and ensure customer safety with tailored retail security solutions.",
      image:
        "https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Healthcare",
      description:
        "Secure sensitive areas, protect patient data, and ensure compliance with healthcare security regulations.",
      image:
        "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Manufacturing",
      description:
        "Safeguard facilities, equipment, and intellectual property with comprehensive industrial security systems.",
      image:
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Office Buildings",
      description:
        "Create a secure work environment with access control, visitor management, and integrated security solutions.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Education",
      description:
        "Protect students, staff, and facilities with school security systems designed for educational environments.",
      image:
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Warehousing & Logistics",
      description:
        "Secure inventory, monitor shipping areas, and control access to your distribution facilities.",
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const faqs = [
    {
      question: "How much does a commercial security system cost?",
      answer:
        "Commercial security system costs vary based on facility size, security requirements, and the specific solutions needed. We provide customized quotes after a thorough site assessment. Our flexible financing options make advanced security accessible for businesses of all sizes.",
    },
    {
      question:
        "Can I integrate a new security system with my existing equipment?",
      answer:
        "Yes, our systems are designed to integrate with many existing security components. During our assessment, we'll evaluate your current equipment and recommend the most cost-effective approach to upgrading your security while leveraging compatible existing infrastructure.",
    },
    {
      question: "How long does commercial installation take?",
      answer:
        "Installation timelines depend on system complexity and facility size. Small to medium installations typically take 1-3 days, while larger enterprise systems may require 1-2 weeks. We work around your schedule to minimize business disruption and can perform installations after hours if needed.",
    },
    {
      question: "Do you offer service and maintenance plans?",
      answer:
        "Yes, we offer comprehensive service and maintenance plans to ensure your security system remains operational and up-to-date. Our plans include regular inspections, preventative maintenance, priority service response, and software updates to protect against emerging threats.",
    },
    {
      question: "Can I monitor my business remotely?",
      answer:
        "Absolutely. All our commercial security systems include remote monitoring capabilities through our secure mobile and desktop applications. You can view live camera feeds, manage access control, receive real-time alerts, and generate security reports from anywhere.",
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
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
            alt="Commercial security system"
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
              Commercial Security Solutions
            </h1>
            <p className="text-xl text-zinc-200 mb-8">
              Protect your business, employees, and assets with enterprise-grade
              security systems tailored to your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-md">
                Request a Consultation
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
                Comprehensive Business Security
              </h2>
              <p className="text-lg text-muted-foreground">
                Our commercial security solutions are designed to protect your
                business while enhancing operational efficiency.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="p-0 h-auto font-medium">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        ref={industriesRef}
        className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900"
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                We understand that different industries have unique security
                challenges. Our tailored solutions address the specific needs of
                your business sector.
              </p>
            </motion.div>
          </div>

          <Tabs defaultValue="all" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">All Industries</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="specialized">Specialized</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="overflow-hidden h-full">
                      <div className="relative h-48">
                        <Image
                          src={industry.image || "/placeholder.svg"}
                          alt={industry.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-medium mb-2">
                          {industry.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {industry.description}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto font-medium"
                        >
                          View Solutions <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {industries.slice(0, 4).map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="overflow-hidden h-full">
                      <div className="relative h-48">
                        <Image
                          src={industry.image || "/placeholder.svg"}
                          alt={industry.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-medium mb-2">
                          {industry.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {industry.description}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto font-medium"
                        >
                          View Solutions <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="specialized" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {industries.slice(4, 6).map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="overflow-hidden h-full">
                      <div className="relative h-48">
                        <Image
                          src={industry.image || "/placeholder.svg"}
                          alt={industry.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-medium mb-2">
                          {industry.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {industry.description}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto font-medium"
                        >
                          View Solutions <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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
                Find answers to common questions about our commercial security
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
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl">
              Ready to Secure Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Contact us today for a free consultation and site assessment. Our
              security experts will design a custom solution for your business.
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
