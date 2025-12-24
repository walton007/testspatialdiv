"use client"

import { useEffect } from "react"

const ENABLE_SERVICE_WORKER = false

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (!ENABLE_SERVICE_WORKER) {
      // 开发模式：注销已有的 Service Worker
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          registrations.forEach((registration) => {
            registration.unregister()
            console.log("SW unregistered for development")
          })
        })
      }
      return
    }

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered:", registration.scope)
        })
        .catch((error) => {
          console.log("SW registration failed:", error)
        })
    }
  }, [])

  return null
}
