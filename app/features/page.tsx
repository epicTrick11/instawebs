import Image from "next/image"
import Link from "next/link"
import { Download, Smartphone, Shield, Zap, Clock, Lock, Paintbrush, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  InstaWiz Features
                </h1>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover all the iOS-inspired features that make InstaWiz the ultimate Instagram mod for Android.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              {/* Clone Support */}
              <div className="flex flex-col gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Clone Support</h2>
                  <p className="mt-2 text-gray-500 md:text-lg">
                    Run multiple Instagram accounts simultaneously without the hassle of logging in and out.
                  </p>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src="/placeholder.svg?height=450&width=800&text=Clone+Feature"
                    alt="Clone Support Feature"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                      <span className="text-xs">1</span>
                    </div>
                    <p className="text-gray-500">Create multiple instances of Instagram on a single device</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                      <span className="text-xs">2</span>
                    </div>
                    <p className="text-gray-500">Switch between accounts with a single tap</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                      <span className="text-xs">3</span>
                    </div>
                    <p className="text-gray-500">Receive notifications from all accounts simultaneously</p>
                  </li>
                </ul>
              </div>

              {/* Ad-Free Experience */}
              <div className="flex flex-col gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Ad-Free Experience</h2>
                  <p className="mt-2 text-gray-500 md:text-lg">
                    Enjoy a clean, distraction-free Instagram experience without any advertisements.
                  </p>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src="/placeholder.svg?height=450&width=800&text=Ad-Free+Experience"
                    alt="Ad-Free Experience"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                      <span className="text-xs">1</span>
                    </div>
                    <p className="text-gray-500">No sponsored posts in your feed</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                      <span className="text-xs">2</span>
                    </div>
                    <p className="text-gray-500">No ads between stories</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                      <span className="text-xs">3</span>
                    </div>
                    <p className="text-gray-500">Ad-free Explore page for uninterrupted discovery</p>
                  </li>
                </ul>
              </div>

              {/* Faster Updates */}
              <div className="flex flex-col gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Faster Updates</h2>
                  <p className="mt-2 text-gray-500 md:text-lg">
                    Stay ahead with the latest features before they're available on the official Instagram app.
                  </p>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src="/placeholder.svg?height=450&width=800&text=Faster+Updates"
                    alt="Faster Updates"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                      <span className="text-xs">1</span>
                    </div>
                    <p className="text-gray-500">Early access to new Instagram features</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                      <span className="text-xs">2</span>
                    </div>
                    <p className="text-gray-500">Regular updates with performance improvements</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                      <span className="text-xs">3</span>
                    </div>
                    <p className="text-gray-500">Quick bug fixes and stability enhancements</p>
                  </li>
                </ul>
              </div>

              {/* iOS Interface */}
              <div className="flex flex-col gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
                  <Paintbrush className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">iOS Interface</h2>
                  <p className="mt-2 text-gray-500 md:text-lg">
                    Experience the clean, sleek iOS design language on your Android device.
                  </p>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src="/placeholder.svg?height=450&width=800&text=iOS+Interface"
                    alt="iOS Interface"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                      <span className="text-xs">1</span>
                    </div>
                    <p className="text-gray-500">iOS-style navigation and animations</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                      <span className="text-xs">2</span>
                    </div>
                    <p className="text-gray-500">Clean, minimalist UI elements</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                      <span className="text-xs">3</span>
                    </div>
                    <p className="text-gray-500">iOS-exclusive visual effects and transitions</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="w-full py-12 md:py-24 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Additional Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  InstaWiz comes packed with even more features to enhance your Instagram experience.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Lock className="h-8 w-8" />
                  <div>
                    <CardTitle>Enhanced Privacy</CardTitle>
                    <CardDescription>Control who sees your activity</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Hide your online status, read receipts, and typing indicators. Download stories and posts without
                    notifying the creator.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Clock className="h-8 w-8" />
                  <div>
                    <CardTitle>Auto-Save Media</CardTitle>
                    <CardDescription>Never lose important content</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Automatically save stories, posts, and reels from accounts you follow or specific users you select.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Sparkles className="h-8 w-8" />
                  <div>
                    <CardTitle>Custom Themes</CardTitle>
                    <CardDescription>Personalize your experience</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Choose from a variety of themes or create your own custom color scheme to personalize your Instagram
                    experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Experience InstaWiz?
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Download now and transform your Instagram experience on Android.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/download">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    Download Latest Version
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/backup">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Backup & Restore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
