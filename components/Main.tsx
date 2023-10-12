import { ComponentChildren } from "preact";

const Main = ({ children }: { children: ComponentChildren }) => (<div className="border border-blue-400 rounded-lg p-4 flex flex-col gap-4 my-2 w-full max-w-md md:max-w-2xl lg:max-w-5xl">
  <div className="text-lg flex gap-1 text-blue-400 select-none">
    {Array(3).fill(<>&#x2022;</>).map((dot, i) => <span key={i}>{dot}</span>)}
  </div>
  {children}
</div>);

export default Main;