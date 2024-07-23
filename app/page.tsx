import { Suspense } from "react";
import { Greet } from "./greet";
import Lazy from "./lazy";

export default function Home({searchParams}: {searchParams: Record<string, string>}) {
  return (
    <main>
      <h1>Next.js server islands</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Lazy as={Greet} name={searchParams.greet || "Something else"} />
      </Suspense>
    </main>
  );
}
