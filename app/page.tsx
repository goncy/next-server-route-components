import { Greet } from "./greet";
import Lazy from "./lazy";

export default function Home({searchParams}: {searchParams: Record<string, string>}) {
  return (
    <main>
      <h1>Next.js server islands</h1>
      <Lazy component={Greet} name={searchParams.greet || "Something else"}>
        <p>Loading...</p>
      </Lazy>
    </main>
  );
}
