"use client"

import Image from "next/image"
import { ArrowLeft, Edit, Heart, MapPin, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function OrderContent() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1e21]">
      {/* Top Navigation Bar */}
      <header className="bg-[#b17d10] text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <ShoppingCart className="w-5 h-5 mr-2" />
          <span className="font-medium">browse.</span>
        </div>
        <div className="flex items-center gap-4">
          <Heart className="w-5 h-5" />
          <div className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-white text-[#b17d10] rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
              5
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#f1f1f1] flex items-center justify-center overflow-hidden">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="User avatar"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 text-white max-w-5xl mx-auto w-full">
        {/* Back Button */}
        <button className="flex items-center text-gray-400 mb-4">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Back to the Menu</span>
        </button>

        <h1 className="text-2xl font-bold mb-6">Order Summary</h1>

        <div className="grid md:grid-cols-[1fr_400px] gap-6">
          <div className="space-y-8">
            {/* Customization Options */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Customization Options</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Customize your order</p>
                  <Input placeholder="Customize" className="bg-[#2a2f33] border-[#3a3f43] text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Special Instructions</p>
                  <Input placeholder="Extra Spicy" className="bg-[#2a2f33] border-[#3a3f43] text-white" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Contact Number</p>
                  <Input placeholder="(+123) 456 789 000" className="bg-[#2a2f33] border-[#3a3f43] text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email Address</p>
                  <Input placeholder="feaneorders@email.com" className="bg-[#2a2f33] border-[#3a3f43] text-white" />
                </div>
              </div>
            </section>

            {/* Delivery Address */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Select Delivery Address</h2>
              <p className="text-sm text-gray-400 mb-1">Enter Address</p>
              <div className="flex items-center bg-[#2a2f33] border border-[#3a3f43] rounded-md p-3 mb-4">
                <MapPin className="w-5 h-5 text-[#b17d10] mr-2" />
                <span className="text-gray-400">Enter your delivery address...</span>
              </div>
              <p className="text-sm text-gray-400 mb-1">Special instructions for delivery</p>
              <Textarea
                placeholder="Leave a note for the delivery person..."
                className="bg-[#2a2f33] border-[#3a3f43] text-white resize-none h-24"
              />
            </section>

            {/* Delivery Time */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Choose Delivery Time</h2>
              <RadioGroup defaultValue="now" className="space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="now" id="now" className="border-[#b17d10] text-[#b17d10]" />
                  <Label htmlFor="now" className="text-white">
                    Now
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="select-time" id="select-time" className="border-[#b17d10] text-[#b17d10]" />
                  <Label htmlFor="select-time" className="text-white">
                    Select Time
                  </Label>
                </div>
              </RadioGroup>
            </section>

            {/* Payment Options */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Payment Options</h2>
              <RadioGroup defaultValue="credit-card" className="space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credit-card" id="credit-card" className="border-[#b17d10] text-[#b17d10]" />
                  <Label htmlFor="credit-card" className="text-white">
                    Credit Card
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cash" id="cash" className="border-[#b17d10] text-[#b17d10]" />
                  <Label htmlFor="cash" className="text-white">
                    Cash on Delivery
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="secure" id="secure" className="border-[#b17d10] text-[#b17d10]" />
                  <Label htmlFor="secure" className="text-white">
                    Secure Payment with Credit Card
                  </Label>
                </div>
              </RadioGroup>
            </section>

            <Button className="w-full bg-[#0275d8] hover:bg-[#0267be] text-white py-6 rounded-md">Confirm Order</Button>
          </div>

          <div className="space-y-6">
            {/* Spicy Fish Burger Card */}
            <div className="bg-[#2a2f33] rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#b17d10] rounded-full flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=24&width=24"
                      alt="Fish icon"
                      width={24}
                      height={24}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Spicy Fish Burger</h3>
                </div>
                <Button className="bg-[#b17d10] hover:bg-[#9a6c0e] text-white text-xs px-3 py-1 h-auto">Buy Now</Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <ShoppingCart className="w-4 h-4" />
                  <span className="text-gray-400">Min. Order</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">Discount</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">Estimated</span>
                </div>
              </div>
            </div>

            {/* Current Order */}
            <div className="bg-[#2a2f33] rounded-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Current Order</h3>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-400 mb-4">5 items in</p>
              <div className="flex gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=48&width=48&text=${item}`}
                      alt={`Food item ${item}`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Total</span>
                <span className="text-xl font-bold">$12.99</span>
              </div>
            </div>

            {/* Order Details */}
            <div className="bg-[#2a2f33] rounded-xl p-4">
              <h3 className="text-xl font-semibold mb-4">Order Details</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">3 Items</span>
                  <span>$12.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Delivery Fee</span>
                  <span>$2.50</span>
                </div>
              </div>
              <div className="flex justify-between pt-4 border-t border-[#3a3f43]">
                <span className="font-medium">Total Amount Due</span>
                <span className="text-xl font-bold">$15.49</span>
              </div>
            </div>
          </div>
        </div>

        {/* App Promotion */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get the Feane App for Easy Ordering!</h2>
            <p className="text-gray-400 mb-6">Discover more menu options and track your orders easily!</p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="bg-[#2a2f33] border-[#3a3f43] text-white hover:bg-[#3a3f43] flex items-center gap-2"
              >
                <Image src="/placeholder.svg?height=20&width=20" alt="Apple logo" width={20} height={20} />
                <div className="text-left">
                  <div className="text-xs">Download from</div>
                  <div className="font-medium">App Store</div>
                </div>
              </Button>
              <Button
                variant="outline"
                className="bg-[#2a2f33] border-[#3a3f43] text-white hover:bg-[#3a3f43] flex items-center gap-2"
              >
                <Image src="/placeholder.svg?height=20&width=20" alt="Google Play logo" width={20} height={20} />
                <div className="text-left">
                  <div className="text-xs">Download from</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </Button>
              <Button
                variant="outline"
                className="bg-[#2a2f33] border-[#3a3f43] text-white hover:bg-[#3a3f43] flex items-center gap-2"
              >
                <Image src="/placeholder.svg?height=20&width=20" alt="Website logo" width={20} height={20} />
                <div className="text-left">
                  <div className="text-xs">Download from</div>
                  <div className="font-medium">Feane Website</div>
                </div>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/placeholder.svg?height=300&width=400&text=Burger+and+Fries"
              alt="Food image"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#b17d10] text-white p-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShoppingCart className="w-5 h-5" />
                <span className="text-xl font-bold">Feane</span>
              </div>
              <p className="text-sm">Fast and reliable food delivery service!</p>
              <div className="flex gap-4 mt-4">
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                  <Image src="/placeholder.svg?height=20&width=20&text=IG" alt="Instagram" width={20} height={20} />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                  <Image src="/placeholder.svg?height=20&width=20&text=FB" alt="Facebook" width={20} height={20} />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                  <Image src="/placeholder.svg?height=20&width=20&text=TW" alt="Twitter" width={20} height={20} />
                </Button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm mb-1">Need Assistance?</p>
              <p className="text-sm mb-4">Contact our 24/7 customer support</p>
              <p className="font-bold mb-1">Customer Support: (+123)</p>
              <p className="font-bold">support@feane.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

