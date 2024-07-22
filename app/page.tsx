import { Greet } from "./greet";
import Lazy from "./lazy";

export default function Home() {
  return (
    <main>
      <h1>Next.js server islands</h1>
      <Lazy component={Greet} name="Something else">
        Loading...
      </Lazy>
    </main>
  );
}
