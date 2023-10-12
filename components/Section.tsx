import { ComponentChildren } from "preact";

const Section = ({ children }: { children: ComponentChildren }) => (<section className="flex flex-col gap-3">
    {children}
</section>)

export default Section;