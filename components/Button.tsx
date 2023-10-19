import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className="border border-white rounded-full py-1 px-4 self-start hover:text-black hover:bg-white"
    />
  );
}
