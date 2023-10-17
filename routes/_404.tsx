import { Head } from "$fresh/runtime.ts";
import { Button } from "../components/Button.tsx";
import Main from "../components/Main.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <Main>
        UNKNOWN: Seems like you got lost... Let's take you back home.
        <div className="flex gap-4 justify-center w-full">
            <Button href="/">Ok!</Button>
        </div>
      </Main>
    </>
  );
}
