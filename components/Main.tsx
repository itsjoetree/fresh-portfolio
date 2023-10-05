import { ComponentChildren } from "preact";

const Main = ({ children }: { children: ComponentChildren }) => (<div className="flex flex-col gap-4 p-4 w-full max-w-md md:max-w-2xl">
  {children}
</div>);

export default Main;