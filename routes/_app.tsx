import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Joe Salinas</title>
      </head>
      <body className="flex flex-col items-center bg-black text-white">
        <Component />
      </body>
    </html>
  );
}
