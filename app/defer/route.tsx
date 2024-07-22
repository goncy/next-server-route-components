import { NextRequest } from "next/server";
import { type ComponentProps } from "react";

// Sample RSC
const Hello = ({name}) => <div>Hello {name}</div>;

export async function GET(req: NextRequest) {
  // Get props from query string
  const props = Object.fromEntries(req.nextUrl.searchParams.entries()) as unknown as ComponentProps<typeof Hello>

  // Get RSC output
  const output = JSON.stringify(
    // TODO: Get the component to render from a map or something
    Hello(props)
  )

  // Return RSC payload
  return new Response(output)
}