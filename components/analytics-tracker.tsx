"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { trackPageView } from "@/app/actions/analytics"

export default function AnalyticsTracker() {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const trackView = async () => {
      try {
        // Double check we're in browser environment
        if (typeof window === "undefined" || typeof document === "undefined") {
          return
        }

        // Get or create visitor ID
        let visitorId: string
        try {
          visitorId = localStorage.getItem("visitor_id") || ""
          if (!visitorId) {
            visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
            localStorage.setItem("visitor_id", visitorId)
          }
        } catch (storageError) {
          // Fallback if localStorage is not available
          visitorId = `temp_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
        }

        // Check session tracking
        let hasViewedInSession = false
        try {
          const sessionKey = `viewed_${pathname}`
          hasViewedInSession = sessionStorage.getItem(sessionKey) === "true"
          if (!hasViewedInSession) {
            sessionStorage.setItem(sessionKey, "true")
          }
        } catch (sessionError) {
          // If sessionStorage fails, just track the view
          console.warn("SessionStorage not available, tracking all views")
        }

        if (!hasViewedInSession) {
          const pageViewData = {
            path: pathname,
            timestamp: Date.now(),
            referrer: document.referrer || "",
            userAgent: visitorId,
          }

          const result = await trackPageView(pageViewData)
          if (!result.success) {
            console.warn("Analytics tracking failed:", result.error)
          }
        }
      } catch (error) {
        // Silently fail analytics to not break the user experience
        console.warn("Analytics tracking error:", error)
      }
    }

    // Use requestAnimationFrame to ensure DOM is ready
    const rafId = requestAnimationFrame(() => {
      setTimeout(trackView, 0)
    })

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [pathname, isClient])

  // This component doesn't render anything
  return null
}
