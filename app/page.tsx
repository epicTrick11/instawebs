import Link from "next/link"
import Image from "next/image"
import { ArrowDown, Download, Instagram, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    iOS Instagram Experience on Android
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    InstaWiz brings the sleek iOS Instagram interface and exclusive features to your Android device.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/download">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                      Download Now
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Explore Features
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[300px] aspect-[9/16]">
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    alt="InstaWiz App Preview"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Preview */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose InstaWiz?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience Instagram like never before on your Android device.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Clone Support</h3>
                <p className="text-gray-500">
                  Run multiple Instagram accounts simultaneously with the app in clone mode.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Ad-Free Experience</h3>
                <p className="text-gray-500">Enjoy Instagram without any advertisements interrupting your browsing.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
                  <ArrowDown className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Faster Updates</h3>
                <p className="text-gray-500">Get the latest features before they're available on the official app.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/features">
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
                  View All Features
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="w-full py-12 md:py-24 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">iOS-Inspired Design</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the sleek iOS interface on your Android device.
                </p>
              </div>
            </div>
            <div className="mx-auto flex max-w-5xl justify-center gap-6 py-12 overflow-x-auto">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative min-w-[200px] w-[200px] aspect-[9/16] rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={`/placeholder.svg?height=400&width=200&text=Screenshot ${i}`}
                    alt={`InstaWiz Screenshot ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

 


        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Instagram Experience?
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Download InstaWiz today and enjoy the iOS Instagram experience on your Android device.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/download">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    Download Now
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
