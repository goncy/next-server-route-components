'use client'

import { useEffect, useState, cloneElement } from "react";

export default function Lazy({children, ...props}: {children: React.ReactElement}) {
  const [payload, setPayload] = useState<React.ReactElement>()

  useEffect(() => {
    // Get the RSC payload from a route handler
    fetch(`/defer?${new URLSearchParams(props).toString()}`).then(res => res.json()).then(setPayload)
  }, [])

  if (!payload) return children

  return cloneElement(payload)
}
