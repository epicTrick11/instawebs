"use client"

import { useState } from "react"
import { ArrowDown, ArrowUp, Download, FileText, Info, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function BackupPage() {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isRestoring, setIsRestoring] = useState(false)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    if (!uploadedFile) return

    setIsUploading(true)
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
      alert("Backup file uploaded successfully!")
      setUploadedFile(null)
    }, 2000)
  }

  const handleRestore = (version) => {
    setIsRestoring(true)
    // Simulate restore process
    setTimeout(() => {
      setIsRestoring(false)
      alert(`Version ${version} restored successfully!`)
    }, 2000)
  }

  // Sample backup versions
  const backupVersions = [
    { id: 1, version: "v2.5.0", date: "2023-04-15", size: "45 MB" },
    { id: 2, version: "v2.4.2", date: "2023-03-10", size: "43 MB" },
    { id: 3, version: "v2.4.0", date: "2023-02-22", size: "42 MB" },
    { id: 4, version: "v2.3.5", date: "2023-01-18", size: "40 MB" },
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
                  Backup & Restore
                </h1>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Safely backup your InstaWiz data and restore previous versions when needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Backup & Restore Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="backup" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto">
                <TabsTrigger value="backup">Backup</TabsTrigger>
                <TabsTrigger value="restore">Restore</TabsTrigger>
              </TabsList>

              {/* Backup Tab */}
              <TabsContent value="backup" className="mt-6">
                <div className="mx-auto max-w-3xl">
                  <Alert className="mb-6">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Important</AlertTitle>
                    <AlertDescription>
                      Backing up your InstaWiz data regularly ensures you can restore your settings, preferences, and
                      account information if needed.
                    </AlertDescription>
                  </Alert>

                  <Card>
                    <CardHeader>
                      <CardTitle>Create a Backup</CardTitle>
                      <CardDescription>Upload your current InstaWiz backup file or create a new one.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="backup-file">Upload Backup File</Label>
                        <Input id="backup-file" type="file" onChange={handleFileChange} accept=".iwiz,.zip" />
                        {uploadedFile && <p className="text-sm text-gray-500">Selected file: {uploadedFile.name}</p>}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          onClick={handleUpload}
                          disabled={!uploadedFile || isUploading}
                          className="bg-black text-white hover:bg-gray-800"
                        >
                          {isUploading ? "Uploading..." : "Upload Backup"}
                          <Upload className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                          Create New Backup
                          <ArrowUp className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Your Recent Backups</h3>
                    <div className="space-y-4">
                      {backupVersions.slice(0, 2).map((backup) => (
                        <Card key={backup.id}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <FileText className="h-8 w-8" />
                                <div>
                                  <h4 className="font-medium">{backup.version}</h4>
                                  <p className="text-sm text-gray-500">
                                    Created on {backup.date} • {backup.size}
                                  </p>
                                </div>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-black text-black hover:bg-black hover:text-white"
                              >
                                Download
                                <Download className="ml-2 h-3 w-3" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Restore Tab */}
              <TabsContent value="restore" className="mt-6">
                <div className="mx-auto max-w-3xl">
                  <Alert className="mb-6">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Important</AlertTitle>
                    <AlertDescription>
                      Restoring a backup will replace your current InstaWiz settings and data. Make sure to backup your
                      current data before proceeding.
                    </AlertDescription>
                  </Alert>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Restore from File</CardTitle>
                      <CardDescription>Upload a backup file to restore your InstaWiz data.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="restore-file">Upload Backup File</Label>
                        <Input id="restore-file" type="file" onChange={handleFileChange} accept=".iwiz,.zip" />
                        {uploadedFile && <p className="text-sm text-gray-500">Selected file: {uploadedFile.name}</p>}
                      </div>
                      <Button disabled={!uploadedFile || isRestoring} className="bg-black text-white hover:bg-gray-800">
                        {isRestoring ? "Restoring..." : "Restore from File"}
                        <ArrowDown className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>

                  <h3 className="text-xl font-bold mb-4">Available Backup Versions</h3>
                  <div className="space-y-4">
                    {backupVersions.map((backup) => (
                      <Card key={backup.id}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <FileText className="h-8 w-8" />
                              <div>
                                <h4 className="font-medium">{backup.version}</h4>
                                <p className="text-sm text-gray-500">
                                  Created on {backup.date} • {backup.size}
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-black text-black hover:bg-black hover:text-white"
                              >
                                Download
                                <Download className="ml-2 h-3 w-3" />
                              </Button>
                              <Button
                                size="sm"
                                className="bg-black text-white hover:bg-gray-800"
                                onClick={() => handleRestore(backup.version)}
                              >
                                Restore
                                <ArrowDown className="ml-2 h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Instructions Section */}
        <section className="w-full py-12 md:py-24 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">Backup & Restore Instructions</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">How to Backup</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Open InstaWiz on your Android device</li>
                    <li>Go to Settings {">"} Backup & Restore</li>
                    <li>Tap on "Create Backup"</li>
                    <li>Choose a name for your backup file</li>
                    <li>Wait for the backup process to complete</li>
                    <li>Upload the backup file here for safekeeping</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">How to Restore</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Download the backup file you want to restore</li>
                    <li>Open InstaWiz on your Android device</li>
                    <li>Go to Settings {">"} Backup & Restore</li>
                    <li>Tap on "Restore Backup"</li>
                    <li>Select the downloaded backup file</li>
                    <li>Wait for the restore process to complete</li>
                    <li>Restart InstaWiz to apply the restored settings</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
