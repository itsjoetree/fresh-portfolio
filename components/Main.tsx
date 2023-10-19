import { ComponentChildren } from "preact";

type MainProps = {
  id?: string,
  className?: string;
  accentColor?: string;
  children: ComponentChildren
}

const Main = ({ id, className, children, accentColor }: MainProps) => {
  const colors = ["border-" + accentColor, "text-" + accentColor]
  return (<main id={id} className={"border rounded-lg pb-6 flex flex-col gap-6 w-full max-w-md md:max-w-2xl lg:max-w-6xl lg:max-h-screen overflow-y-auto " + className + " " + colors[0]}>
    <div className={"px-2 py-1 z-10 text-lg flex gap-1 select-none sticky top-0 w-full bg-black border-b " + colors.join(" ") }>
      {Array(3).fill(<>&#x2022;</>).map((dot, i) => <span key={i}>{dot}</span>)}
    </div>
    <div className="flex flex-col gap-6 px-4 h-full">
    {children}
    </div>
  </main>);
};

export default Main;