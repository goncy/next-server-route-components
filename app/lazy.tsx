'use client'

import { unstable_postpone as postpone } from "react";

export default function Lazy<P>({as: Component, ...props}: P & {as: (props: P) => Promise<React.ReactElement>}) {
  if (typeof window === "undefined") postpone("Omit SSR")
  
  return <Component {...props as P} />
}

/*
Previous iterations of this idea:

## Using server action as a component

  ```jsx
  if (typeof window === "undefined") postpone("Omit SSR")
  
  return <Component {...props as P} />
  ```

> The tradeoff here is that this server action is called in every render, afaik server actions are not cached by default so that's a big issue.

## Using `use`

  ```jsx
  if (typeof window === "undefined") postpone("Omit SSR")
  
  return use(Component(props as P))
  ```

> The tradeoff here is that we don't use a component (a server action as a component) when we could. Not sure if `use` has some kind of caching that might help for this case.
*/