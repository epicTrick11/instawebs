import Link from "next/link"
import { Instagram, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Instagram className="h-6 w-6" />
              <span className="text-lg font-bold">InstaWiz</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500 max-w-xs">
              InstaWiz brings the iOS Instagram experience to Android devices with enhanced features and ad-free
              browsing.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-gray-500 hover:text-black">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-black">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-black">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Pages</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-500 hover:text-black">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-gray-500 hover:text-black">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/backup" className="text-gray-500 hover:text-black">
                  Backup
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 hover:text-black">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-black">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-black">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-black">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="text-gray-500 hover:text-black">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} InstaWiz. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-black">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-black">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-black">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
