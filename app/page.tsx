import LazyGreet from "./lazy-greet";

export default function Home() {
  return (
    <main>
      <h1>Next.js server islands</h1>
      <LazyGreet name="Something else">
        Loading...
      </LazyGreet>
    </main>
  );
}
