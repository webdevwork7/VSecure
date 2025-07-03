"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Users,
  Building,
  Clock,
  Award,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomePage() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, { once: true });

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "VSecure transformed how I feel about my home's security. The smart integration with my existing devices was seamless, and their 24/7 monitoring gives me peace of mind when I'm away.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      content:
        "As a retail store owner, security is paramount. VSecure provided a comprehensive solution that includes surveillance, access control, and intrusion detection at a price that worked for my budget.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      content:
        "Managing multiple properties requires reliable security systems. VSecure's scalable solutions and excellent customer service have made them our go-to provider for all our security needs.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const stats = [
    { value: "10k+", label: "Protected Homes", icon: Users },
    { value: "5k+", label: "Business Clients", icon: Building },
    { value: "24/7", label: "Monitoring", icon: Clock },
    { value: "15+", label: "Years Experience", icon: Award },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Modern security control panel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-ping" />
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-white/60 rounded-full animate-ping" />
        </div>

        <motion.div
          className="container relative z-10 py-20"
          style={{ opacity }}
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Shield className="h-4 w-4 text-primary mr-2" />
                  <span className="text-primary font-medium text-sm">
                    Advanced Security Solutions
                  </span>
                </div>

                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                  Protect What
                  <span className="block text-primary">Matters Most</span>
                </h1>

                <p className="text-xl text-zinc-200 mb-8 leading-relaxed max-w-lg">
                  Experience next-generation security with AI-powered
                  monitoring, smart home integration, and 24/7 professional
                  support.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-primary text-white hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {siteConfig.contact.phone}
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center space-x-8 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center text-zinc-300">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm">24/7 Monitoring</span>
                </div>
                <div className="flex items-center text-zinc-300">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm">Smart Integration</span>
                </div>
                <div className="flex items-center text-zinc-300">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm">Expert Installation</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative lg:block hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative">
                {/* Main security panel */}
                <div className="relative z-10 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-lg rounded-2xl p-8 border border-zinc-700/50 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-semibold text-lg">
                      Security Status
                    </h3>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                      <span className="text-green-400 text-sm font-medium">
                        ARMED
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/30">
                      <div className="text-zinc-400 text-xs mb-1">Cameras</div>
                      <div className="text-white text-xl font-bold">8/8</div>
                      <div className="text-green-400 text-xs">Online</div>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/30">
                      <div className="text-zinc-400 text-xs mb-1">Sensors</div>
                      <div className="text-white text-xl font-bold">12/12</div>
                      <div className="text-green-400 text-xs">Active</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-zinc-300 text-sm">Front Door</span>
                      <span className="text-green-400 text-sm">Secured</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-zinc-300 text-sm">
                        Motion Sensors
                      </span>
                      <span className="text-green-400 text-sm">Active</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-zinc-300 text-sm">Perimeter</span>
                      <span className="text-green-400 text-sm">Protected</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-primary/20 backdrop-blur-lg rounded-full p-4 border border-primary/30"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Shield className="h-6 w-6 text-primary" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-lg rounded-full p-3 border border-white/20"
                  animate={{ y: [5, -5, 5] }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Eye className="h-5 w-5 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="h-4 w-4 rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900">
        <div ref={featuresRef} className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Security Solutions Designed for You
              </h2>
              <p className="text-lg text-muted-foreground">
                Our comprehensive security systems adapt to your unique needs,
                providing protection that evolves with your life.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
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

      {/* Services Tabs Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our range of services tailored for homes and businesses.
            </p>
          </div>

          <Tabs defaultValue="residential" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="residential">Residential Systems</TabsTrigger>
              <TabsTrigger value="commercial">Commercial Systems</TabsTrigger>
            </TabsList>

            <TabsContent value="residential" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                    alt="Comprehensive home security system"
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
                    Our residential security systems provide comprehensive
                    protection for your home and family. From smart cameras to
                    motion sensors and 24/7 monitoring, we ensure your peace of
                    mind.
                  </p>
                  <ul className="space-y-3">
                    {siteConfig.services.residential.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-medium">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Button>Explore Residential Solutions</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                    alt="Business security system"
                    width={800}
                    height={600}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="font-heading text-2xl">
                    Secure Your Business
                  </h3>
                  <p className="text-muted-foreground">
                    Our commercial security solutions are designed to protect
                    your business assets, employees, and customers. We offer
                    customized systems that meet your specific industry
                    requirements.
                  </p>

                  <ul className="space-y-3">
                    {siteConfig.services.commercial.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-medium">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <Button>Explore Commercial Solutions</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-16 md:py-24 bg-primary text-primary-foreground"
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-10 w-10" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900"
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Hear from homeowners and businesses who trust our security
                solutions.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Meet Our Expert Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Our experienced security professionals are dedicated to keeping
                you safe and secure.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "CEO & Founder",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
                bio: "20+ years in security systems",
              },
              {
                name: "Jamie Chen",
                role: "Chief Technology Officer",
                image: "https://randomuser.me/api/portraits/men/65.jpg",
                bio: "Expert in smart security tech",
              },
              {
                name: "Taylor Williams",
                role: "Head of Operations",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
                bio: "Installation & monitoring specialist",
              },
              {
                name: "Jordan Smith",
                role: "Customer Success Director",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
                bio: "Dedicated to client satisfaction",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-medium mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl mb-6">
                Why Choose VSecure?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're not just another security company. We're your partners in
                protection, committed to delivering exceptional service and
                cutting-edge technology.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Industry Leading Technology",
                    description:
                      "We use the latest AI-powered security systems and smart home integration.",
                    icon: Shield,
                  },
                  {
                    title: "24/7 Professional Monitoring",
                    description:
                      "Our certified monitoring center never sleeps, ensuring round-the-clock protection.",
                    icon: Eye,
                  },
                  {
                    title: "Local Expertise, National Reach",
                    description:
                      "Trusted local service backed by nationwide support and resources.",
                    icon: Users,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Security monitoring center"
                  width={800}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Floating stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-lg rounded-lg p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          99.9%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Uptime
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          {"<"}30s
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Response
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          15k+
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Protected
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Serving Your Community
              </h2>
              <p className="text-lg text-muted-foreground">
                We proudly serve homes and businesses across multiple cities and
                regions.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "New York",
              "Los Angeles",
              "Chicago",
              "Houston",
              "Phoenix",
              "Philadelphia",
              "San Antonio",
              "San Diego",
              "Dallas",
              "San Jose",
              "Austin",
              "Jacksonville",
            ].map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-primary/5 transition-colors duration-300"
              >
                <span className="font-medium text-sm">{city}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">
              View All Service Areas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
            alt="Secure home at night"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-5">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <div className="absolute top-40 right-40 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
          <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20">
                <Shield className="h-5 w-5 text-white mr-3" />
                <span className="text-white font-medium">
                  Trusted by 10,000+ Families
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Ready to Secure What
                <span className="block text-white/90">Matters Most?</span>
              </h2>

              {/* Description */}
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Join thousands of satisfied customers who trust VSecure to
                protect their homes and businesses. Get started with a free
                consultation today.
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-6 py-4">
                <div className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-white mr-2" />
                  <span>Free Installation</span>
                </div>
                <div className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-white mr-2" />
                  <span>No Long-term Contracts</span>
                </div>
                <div className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-white mr-2" />
                  <span>24/7 Support</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="text-lg px-8 py-4 bg-primary text-white hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {siteConfig.contact.phone}
                  </Button>
                </motion.div>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 border-t border-white/20">
                <p className="text-white/70 text-sm mb-4">
                  Trusted by leading companies
                </p>
                <div className="flex justify-center items-center space-x-8 opacity-60">
                  <div className="text-white font-semibold">ACME Corp</div>
                  <div className="text-white font-semibold">TechStart</div>
                  <div className="text-white font-semibold">SecureHome</div>
                  <div className="text-white font-semibold">SafeGuard</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
