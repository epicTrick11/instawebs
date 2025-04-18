"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    subject: "",
    message: "",
    inquiryType: "general",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: "general",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Get in Touch
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have questions or need help? We're here for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select onValueChange={handleSelectChange} value={formData.subject}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="billing">Billing Question</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>What are you interested in?</Label>
                        <RadioGroup
                          defaultValue="general"
                          value={formData.inquiryType}
                          onValueChange={handleRadioChange}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="general" id="general" />
                            <Label htmlFor="general">General Information</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="demo" id="demo" />
                            <Label htmlFor="demo">Request a Demo</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="pricing" id="pricing" />
                            <Label htmlFor="pricing">Pricing Information</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="min-h-[120px]"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Reach out to us directly using the information below.
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-500 dark:text-gray-400">support@instawiz.com</p>
                      <p className="text-gray-500 dark:text-gray-400">sales@instawiz.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
                      <p className="text-gray-500 dark:text-gray-400">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        123 Social Media Lane
                        <br />
                        San Francisco, CA 94107
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Preview */}
                <div className="mt-8 rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="font-medium">How quickly can I expect a response?</h4>
                      <p className="text-gray-500 dark:text-gray-400">
                        We typically respond to all inquiries within 24 hours during business days.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Do you offer custom solutions?</h4>
                      <p className="text-gray-500 dark:text-gray-400">
                        Yes, we offer custom solutions for enterprise clients. Contact our sales team to learn more.
                      </p>
                    </div>
                    <Link href="/pricing" className="inline-flex items-center text-sm font-medium">
                      View all FAQs
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
