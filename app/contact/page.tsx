"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "residential",
    message: "",
    budget: "",
    timeframe: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Form submitted successfully",
      description: "We'll be in touch with you shortly.",
    })

    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "residential",
      message: "",
      budget: "",
      timeframe: "",
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-heading text-4xl md:text-5xl mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground">
                Have questions or ready to enhance your security? Our team is here to help.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(123) 456-7890"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>I'm interested in</Label>
                        <RadioGroup
                          defaultValue="residential"
                          value={formData.interest}
                          onValueChange={(value) => handleSelectChange("interest", value)}
                          className="flex space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="residential" id="residential" />
                            <Label htmlFor="residential">Residential</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="commercial" id="commercial" />
                            <Label htmlFor="commercial">Commercial</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                          <SelectTrigger id="budget">
                            <SelectValue placeholder="Select a budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-1000">Under $1,000</SelectItem>
                            <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                            <SelectItem value="over-10000">Over $10,000</SelectItem>
                            <SelectItem value="not-sure">Not sure yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeframe">Timeframe</Label>
                        <Select
                          value={formData.timeframe}
                          onValueChange={(value) => handleSelectChange("timeframe", value)}
                        >
                          <SelectTrigger id="timeframe">
                            <SelectValue placeholder="Select a timeframe" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate (ASAP)</SelectItem>
                            <SelectItem value="1-month">Within 1 month</SelectItem>
                            <SelectItem value="3-months">Within 3 months</SelectItem>
                            <SelectItem value="future">Future planning</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your security needs or questions"
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-4">Contact Information</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted-foreground">{siteConfig.contact.email}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-muted-foreground">{siteConfig.contact.address}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                        <div>
                          <p className="font-medium">Hours</p>
                          <p className="text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                          <p className="text-muted-foreground">Saturday: 9am - 2pm</p>
                          <p className="text-muted-foreground">Sunday: Closed</p>
                          <p className="text-muted-foreground mt-2">24/7 Emergency Support Available</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-4">Emergency Support</h3>
                    <p className="text-muted-foreground mb-4">
                      For urgent assistance with your security system, please call our 24/7 support line.
                    </p>
                    <Button variant="outline" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Emergency Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">Visit Our Office</h2>
            <p className="text-lg text-muted-foreground">Stop by our showroom to see our security systems in action.</p>
          </div>

          <div className="aspect-video w-full max-w-5xl mx-auto rounded-xl overflow-hidden border">
            <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
              <p className="text-muted-foreground">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
