'use client'

import { unstable_postpone as postpone } from "react";

export default function Lazy<P>({as: Component, ...props}: P & {as: (props: P) => Promise<React.ReactElement>}) {
  if (typeof window === "undefined") postpone("Omit SSR")
  
  return <Component {...props as P} />
}
