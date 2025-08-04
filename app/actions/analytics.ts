"use server"

// Simple in-memory storage that's more resilient
const analyticsStore: {
  totalViews: number
  pathViews: Record<string, number>
  dailyVisitors: Record<string, string[]>
} = {
  totalViews: 0,
  pathViews: {},
  dailyVisitors: {},
}

type PageView = {
  path: string
  timestamp: number
  referrer: string
  userAgent: string
  country?: string
}

export async function trackPageView(data: PageView) {
  try {
    // Validate required fields
    if (!data.path || !data.timestamp || !data.userAgent) {
      return { success: false, error: "Missing required fields" }
    }

    // Increment total views
    analyticsStore.totalViews = (analyticsStore.totalViews || 0) + 1

    // Increment path-specific views
    if (!analyticsStore.pathViews[data.path]) {
      analyticsStore.pathViews[data.path] = 0
    }
    analyticsStore.pathViews[data.path] += 1

    // Track unique visitors by day
    const today = new Date().toISOString().split("T")[0]
    if (!analyticsStore.dailyVisitors[today]) {
      analyticsStore.dailyVisitors[today] = []
    }

    // Add visitor if not already tracked today
    if (!analyticsStore.dailyVisitors[today].includes(data.userAgent)) {
      analyticsStore.dailyVisitors[today].push(data.userAgent)
    }

    return { success: true }
  } catch (error) {
    console.error("Error in trackPageView:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

export async function getAnalytics() {
  try {
    // Get total views
    const totalViews = analyticsStore.totalViews || 0

    // Get views for each section
    const sections = ["", "about", "skills", "projects", "experience", "contact"]
    const sectionViews = sections.map((section) => {
      const path = section ? `/${section}` : "/"
      const views = analyticsStore.pathViews[path] || 0
      return { path: section || "home", views }
    })

    // Get visitor counts for the last 7 days
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - i)
      return date.toISOString().split("T")[0]
    })

    const dailyVisitors = last7Days
      .map((day) => {
        const visitors = analyticsStore.dailyVisitors[day] || []
        return { day, count: visitors.length }
      })
      .reverse()

    return {
      totalViews,
      sectionViews,
      dailyVisitors,
    }
  } catch (error) {
    console.error("Error in getAnalytics:", error)
    return {
      totalViews: 0,
      sectionViews: [],
      dailyVisitors: [],
    }
  }
}
