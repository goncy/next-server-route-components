import Lazy from "./lazy";

export default function Home() {
  return (
    <main>
      <h1>Next.js server islands</h1>
      <Lazy name="Something else">
        Loading...
      </Lazy>
    </main>
  );
}
