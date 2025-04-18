import Link from "next/link"
import Image from "next/image"
import { Download, FileText, Info, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DownloadPage() {
  // Sample version data
  const versions = [
    {
      version: "v2.5.0",
      date: "April 15, 2023",
      size: "45 MB",
      changes: [
        "Added iOS 16 style interface",
        "Improved clone feature stability",
        "Fixed story viewer bug",
        "Enhanced ad blocking capabilities",
      ],
    },
    {
      version: "v2.4.2",
      date: "March 10, 2023",
      size: "43 MB",
      changes: [
        "Fixed login issues on some devices",
        "Improved performance on older Android versions",
        "Added new theme options",
        "Updated translations",
      ],
    },
    {
      version: "v2.4.0",
      date: "February 22, 2023",
      size: "42 MB",
      changes: [
        "Added support for multiple clone instances",
        "New privacy features",
        "Improved media download quality",
        "Fixed notification issues",
      ],
    },
    {
      version: "v2.3.5",
      date: "January 18, 2023",
      size: "40 MB",
      changes: [
        "Compatibility with latest Instagram API",
        "Enhanced story viewing experience",
        "Fixed DM notification bug",
        "Performance improvements",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Download InstaWiz
                </h1>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get the latest version or download previous releases of InstaWiz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Version */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <Card className="border-2 border-black">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Latest Version</CardTitle>
                      <CardDescription>InstaWiz {versions[0].version}</CardDescription>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                      <Smartphone className="h-6 w-6" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>{versions[0].size}</span>
                      </div>
                      <div>Released: {versions[0].date}</div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">What's New:</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {versions[0].changes.map((change, index) => (
                          <li key={index}>{change}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Download Latest Version
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Alert className="mt-6">
                <Info className="h-4 w-4" />
                <AlertTitle>Installation Instructions</AlertTitle>
                <AlertDescription>
                  After downloading, you'll need to enable "Install from Unknown Sources" in your Android settings
                  before installing the APK file.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Previous Versions */}
        <section className="w-full py-12 md:py-24 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">Previous Versions</h2>

              <div className="space-y-4">
                {versions.slice(1).map((version, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>InstaWiz {version.version}</CardTitle>
                          <CardDescription>Released: {version.date}</CardDescription>
                        </div>
                        <div className="text-sm">{version.size}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h3 className="font-medium mb-2">Changes:</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          {version.changes.map((change, idx) => (
                            <li key={idx}>{change}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-black text-black hover:bg-black hover:text-white"
                      >
                        Download {version.version}
                        <Download className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Installation Guide */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">Installation Guide</h2>

              <Tabs defaultValue="standard" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto">
                  <TabsTrigger value="standard">Standard Installation</TabsTrigger>
                  <TabsTrigger value="clone">Clone Mode</TabsTrigger>
                </TabsList>

                <TabsContent value="standard" className="mt-6 space-y-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-gray-200">
                      <Image
                        src="/placeholder.svg?height=600&width=300&text=Installation+Step+1"
                        alt="Installation Step 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Standard Installation</h3>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Download the latest version of InstaWiz APK</li>
                        <li>Open Settings on your Android device</li>
                        <li>Go to Security or Privacy settings</li>
                        <li>Enable "Install from Unknown Sources" or "Install Unknown Apps"</li>
                        <li>Open the downloaded APK file</li>
                        <li>Tap "Install" when prompted</li>
                        <li>Wait for the installation to complete</li>
                        <li>Tap "Open" to launch InstaWiz</li>
                      </ol>
                      <Alert>
                        <Info className="h-4 w-4" />
                        <AlertDescription>
                          If you already have the official Instagram app installed, you may need to uninstall it first.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="clone" className="mt-6 space-y-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-gray-200">
                      <Image
                        src="/placeholder.svg?height=600&width=300&text=Clone+Mode+Setup"
                        alt="Clone Mode Setup"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Clone Mode Installation</h3>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Download the latest version of InstaWiz APK</li>
                        <li>Open Settings on your Android device</li>
                        <li>Go to Security or Privacy settings</li>
                        <li>Enable "Install from Unknown Sources" or "Install Unknown Apps"</li>
                        <li>Open the downloaded APK file</li>
                        <li>Tap "Install" when prompted</li>
                        <li>Wait for the installation to complete</li>
                        <li>Open InstaWiz and go to Settings</li>
                        <li>Tap on "Clone Mode" and follow the instructions</li>
                        <li>Create as many clones as you need (up to 5)</li>
                      </ol>
                      <Alert>
                        <Info className="h-4 w-4" />
                        <AlertDescription>
                          Clone mode allows you to run multiple instances of InstaWiz simultaneously, each with a
                          different Instagram account.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="w-full py-12 md:py-24 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Installation Failed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      If you're having trouble installing InstaWiz, try these solutions:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Make sure you have enough storage space on your device</li>
                      <li>Uninstall the official Instagram app first</li>
                      <li>Check that you've enabled "Install from Unknown Sources"</li>
                      <li>Try downloading the APK file again</li>
                      <li>Restart your device and try installing again</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Login Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">If you're having trouble logging in to your Instagram account:</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Make sure you're using the correct username and password</li>
                      <li>Check your internet connection</li>
                      <li>Try clearing the app data and cache</li>
                      <li>Update to the latest version of InstaWiz</li>
                      <li>If you're using a VPN, try disabling it temporarily</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Need More Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">If you're still experiencing issues, you can:</p>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Link href="/about#contact">
                        <Button className="w-full bg-black text-white hover:bg-gray-800">Contact Support</Button>
                      </Link>
                      <Link href="#">
                        <Button
                          variant="outline"
                          className="w-full border-black text-black hover:bg-black hover:text-white"
                        >
                          Visit FAQ
                        </Button>
                      </Link>
                    </div>
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
