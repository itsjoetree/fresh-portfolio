import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="globals.css" />
      </Head>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Retro inspired site developed by Joe Salinas" />
        <title>Joe Salinas</title>
      </head>
      <body className="lg:h-screen bg-black text-white leading-8 font-mono">
        <div className="h-full flex flex-col items-center justify-center">
          <Component />
        </div>
      </body>
    </html>
  );
}
