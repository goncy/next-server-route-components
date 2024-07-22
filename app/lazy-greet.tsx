'use client'

import { useEffect, useState, cloneElement } from "react";

export default function LazyGreet({children, name}: {children: React.ReactNode, name: string}) {
  const [payload, setPayload] = useState<React.ReactElement>()

  useEffect(() => {
    // Get the RSC payload from a route handler
    fetch(`/defer?name=${name}`).then(res => res.json()).then(setPayload)
  }, [])

  if (!payload) return children

  return cloneElement(payload)
}
