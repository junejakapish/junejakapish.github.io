"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Import the component with SSR disabled
const OrderContent = dynamic(() => import("@/components/order-content"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#1a1e21] text-white flex items-center justify-center">Loading...</div>
  ),
})

export default function ClientWrapper() {
  return (
    <Suspense
      fallback={<div className="min-h-screen bg-[#1a1e21] text-white flex items-center justify-center">Loading...</div>}
    >
      <OrderContent />
    </Suspense>
  )
}

