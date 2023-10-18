import { ComponentChildren } from "preact";

const Main = ({ children }: { children: ComponentChildren }) => (<main className="border border-blue-400 rounded-lg px-4 pb-6 flex flex-col gap-6 w-full max-w-md md:max-w-2xl lg:max-w-5xl lg:max-h-screen overflow-y-auto">
  <div className="pt-2 pb-2 text-lg flex gap-1 text-blue-400 select-none sticky top-0 w-full bg-black">
    {Array(3).fill(<>&#x2022;</>).map((dot, i) => <span key={i}>{dot}</span>)}
  </div>
  {children}
</main>);

export default Main;