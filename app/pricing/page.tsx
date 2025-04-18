import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simple, Transparent Pricing
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that's right for you and start growing your Instagram presence today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Starter Plan */}
              <Card className="flex flex-col">
                <CardHeader className="flex flex-col space-y-1.5">
                  <CardTitle className="text-2xl">Starter</CardTitle>
                  <CardDescription>Perfect for individuals and new creators</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$9</span>
                    <span className="text-gray-500 dark:text-gray-400">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="grid gap-3">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>1 Instagram account</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Basic analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Post scheduling (up to 30/month)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Hashtag suggestions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="flex flex-col border-2 border-black dark:border-white">
                <CardHeader className="flex flex-col space-y-1.5">
                  <div className="flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-2.5 py-0.5 text-xs font-semibold w-fit mx-auto mb-2">
                    Most Popular
                  </div>
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <CardDescription>For growing creators and small businesses</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-gray-500 dark:text-gray-400">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="grid gap-3">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>3 Instagram accounts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Unlimited post scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Auto-comments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Caption assistant</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Competitor analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Priority email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Business Plan */}
              <Card className="flex flex-col">
                <CardHeader className="flex flex-col space-y-1.5">
                  <CardTitle className="text-2xl">Business</CardTitle>
                  <CardDescription>For agencies and established brands</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$79</span>
                    <span className="text-gray-500 dark:text-gray-400">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="grid gap-3">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>10 Instagram accounts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Premium analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Unlimited post scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Advanced auto-comments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>AI content suggestions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>White-label reports</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>API access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>24/7 priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Enterprise */}
            <div className="mt-12 rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-gray-500 dark:text-gray-400">For large organizations with custom requirements</p>
                </div>
                <Link href="/contact">
                  <Button>
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Find answers to common questions about InstaWiz.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I cancel my subscription anytime?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Yes, you can cancel your subscription at any time. You'll continue to have access to your plan until
                  the end of your billing period.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Is there a free trial?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Yes, we offer a 7-day free trial on all plans. No credit card required to start.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I switch plans later?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
                  cycle.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Is InstaWiz compliant with Instagram's policies?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Yes, InstaWiz is designed to work within Instagram's terms of service and API guidelines to ensure
                  your account remains in good standing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
