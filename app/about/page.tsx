"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Instagram, Mail, Send, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
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
      message: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About InstaWiz
                </h1>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn about our story and the team behind InstaWiz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    InstaWiz began in 2020 when a group of Android developers and Instagram enthusiasts noticed the
                    significant differences between the iOS and Android versions of Instagram.
                  </p>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    We believed Android users deserved the same sleek experience and exclusive features that iOS users
                    enjoyed. Our mission was simple: bring the best of Instagram's iOS experience to Android devices.
                  </p>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    What started as a small project quickly gained popularity as Android users discovered the enhanced
                    experience InstaWiz offered. Today, we're proud to serve millions of users worldwide who prefer our
                    mod over the official app.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex w-full max-w-[500px] aspect-video items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-2xl font-bold text-gray-500">Our Story</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <div className="flex w-full max-w-[500px] aspect-video items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-2xl font-bold text-gray-500">Our Mission</span>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    At InstaWiz, we believe in platform equality. Our mission is to ensure Android users have access to
                    the same premium Instagram experience that iOS users enjoy.
                  </p>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    We're committed to continuous innovation, regularly updating our mod to incorporate the latest
                    features and improvements from Instagram's iOS version while maintaining stability and security.
                  </p>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    We also value user privacy and experience, which is why we've developed features like ad blocking
                    and enhanced privacy controls that go beyond what the official app offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Developer</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The mind behind InstaWiz.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-6 mx-auto max-w-md">
              <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gray-200">
                <span className="text-4xl font-bold text-gray-500">AC</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">Alex Chen</h3>
                <p className="text-gray-500">Lead Developer & Founder</p>
              </div>
              <p className="text-center text-gray-500">
                Alex is an Android developer with over 10 years of experience in mobile app development. With a passion
                for creating seamless user experiences, Alex founded InstaWiz to bring the best of Instagram to Android
                users worldwide.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="w-full py-12 md:py-24 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>
                    Have questions, feedback, or need support? Send us a message and we'll get back to you as soon as
                    possible.
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
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      <Link href="mailto:support@instawiz.com" className="hover:underline">
                        support@instawiz.com
                      </Link>
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Instagram className="h-5 w-5" />
                      Social Media
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <Link
                        href="https://instagram.com/instawiz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                      <Link
                        href="https://twitter.com/instawiz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link
                        href="https://github.com/instawiz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Is InstaWiz safe to use?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      Yes, InstaWiz is safe to use. We prioritize user security and privacy. Our mod doesn't collect any
                      personal data beyond what's necessary for the app to function. We regularly update the app to
                      address any security concerns.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Will my Instagram account get banned for using InstaWiz?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      InstaWiz is designed to work within Instagram's terms of service. While we can't guarantee that
                      Instagram won't change their policies, we've had very few reports of account issues related to
                      using our mod. We recommend using the app responsibly and avoiding any activities that violate
                      Instagram's community guidelines.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>How often is InstaWiz updated?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      We typically release updates every 2-4 weeks, depending on changes to the official Instagram app
                      and new features we're developing. We prioritize stability and performance in our updates,
                      ensuring you always have the best experience.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Is InstaWiz free to use?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      Yes, InstaWiz is completely free to download and use. We're supported by donations from our
                      community of users who appreciate the enhanced Instagram experience we provide.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
