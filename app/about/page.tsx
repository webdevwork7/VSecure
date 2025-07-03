"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Users, Award, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true });
  const teamInView = useInView(teamRef, { once: true });
  const valuesInView = useInView(valuesRef, { once: true });

  const team = [
    {
      name: "Alex Morgan",
      role: "CEO & Founder",
      bio: "With over 20 years in security systems, Alex founded VSecure to bring cutting-edge protection to homes and businesses.",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      name: "Jamie Chen",
      role: "Chief Technology Officer",
      bio: "Jamie leads our technology development, ensuring our systems stay ahead of emerging security threats and integrate with the latest smart home technologies.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Taylor Williams",
      role: "Head of Operations",
      bio: "Taylor oversees our installation teams and monitoring center, ensuring every client receives exceptional service and support.",
      image: "https://randomuser.me/api/portraits/women/43.jpg",
    },
    {
      name: "Jordan Smith",
      role: "Customer Success Director",
      bio: "Jordan ensures our clients receive ongoing support and training to maximize the effectiveness of their security systems.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  ];

  const values = [
    {
      title: "Customer-First Approach",
      description:
        "We prioritize your security needs and provide personalized solutions that address your specific concerns.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We continuously research and implement the latest security innovations to provide superior protection.",
    },
    {
      title: "Reliability & Responsiveness",
      description:
        "Our systems and monitoring services are designed for maximum uptime and rapid response to security events.",
    },
    {
      title: "Integrity & Transparency",
      description:
        "We provide honest recommendations and clear pricing without hidden fees or unnecessary upsells.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
            alt="Team working on security systems"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              About VSecure
            </h1>
            <p className="text-xl text-zinc-200 mb-8">
              We're on a mission to provide advanced security solutions that
              protect what matters most to you.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative rounded-xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
                alt="Our mission"
                width={800}
                height={800}
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-3xl md:text-4xl">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                At VSecure, we believe everyone deserves to feel safe and secure
                in their homes and businesses. Our mission is to provide
                innovative, reliable, and user-friendly security solutions that
                give our clients peace of mind.
              </p>
              <p className="text-lg text-muted-foreground">
                Founded in 2010, we've grown from a small local provider to a
                trusted security partner serving thousands of clients across the
                country. Our team of security experts brings decades of combined
                experience to every installation.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">10,000+</div>
                    <div className="text-muted-foreground">
                      Clients Protected
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900"
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground">
                These principles guide everything we do, from product
                development to customer service.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1" />
                      <div>
                        <h3 className="text-xl font-medium mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Our experienced team is dedicated to providing the best security
                solutions for our clients.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="text-center">
                  <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl">
              Join the VSecure Family
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Experience the difference of working with a security provider that
              truly cares about your protection and peace of mind.
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary">
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
