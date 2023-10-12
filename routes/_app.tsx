import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Retro inspired site developed by Joe Salinas" />
        <title>Joe Salinas</title>
      </head>
      <body className="flex flex-col items-center bg-black text-white leading-8 font-mono">
        <Component />
      </body>
    </html>
  );
}
