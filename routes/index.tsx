import { Handlers, PageProps } from "$fresh/server.ts";
import { VNode } from "preact";
import { HomeMap } from "./HomeMap.ts";
import Main from "../components/Main.tsx";
import Section from "../components/Section.tsx";

type ContentProps = {
  musicIcon: VNode;
  treeIcon: VNode;
}

export const handler: Handlers<ContentProps | null> = {
  GET(_, ctx) {

   const musicIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
      <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
      <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
      <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
    </svg>)

   const treeIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" fill="currentColor" class="bi bi-tree-fill" viewBox="0 0 16 16">
      <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5z"/>
    </svg>)
    
   return ctx.render({
    musicIcon,
    treeIcon
   });
 },
};

export default function Home({ data: { musicIcon, treeIcon } }: PageProps<ContentProps>) {

  return (<div className="flex flex-col gap-2">
    <Main id="main" accentColor="blue-500" className="text-white">
      <article className="flex flex-col gap-4 sm:items-center sm:flex-row md:justify-between md:justify-center md:gap-12">
        <img alt="Photo of me" src="/me-sm.jpg" className="self-center select-none pointer-events-none w-32 h-32 rounded-full inline-block md:hidden" />

        <div className="flex flex-col gap-2 lg:text-center">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">{HomeMap.Hero.Title}</h1>
          {HomeMap.Hero.Text}
        </div>
        <img alt="Photo of me" src="/me.jpg" className="select-none pointer-events-none w-60 h-60 rounded-full hidden md:inline-block" />
      </article>

      <Section>
        <h2 className="text-2xl lg:text-3xl font-bold">{HomeMap.Socials.Title}</h2>
        <div className="flex flex-wrap gap-4">
          {HomeMap.Socials.Items.map(i => <a className="border border-white rounded-full py-1 px-4 self-start hover:text-black hover:bg-white" href={i.Link} target="_blank">
            {i.Text}
          </a>)}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl lg:text-3xl font-bold">{HomeMap.About.Title}</h2>
        <div className="flex flex-col gap-2">
          {HomeMap.About.Text.map(t => <p key={t}>{t}</p>)}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl lg:text-3xl font-bold">{HomeMap.Tech.Title}</h2>
        <div className="flex gap-4 flex-wrap items-center">
          {
            HomeMap.Tech.Items.map(t => <a href={t.Link} target="_blank" key={t.Title}>
              <img style={{ height: t.Height }} loading="lazy" alt={t.Title} src={t.Img} className={`w-24 h-auto inline-block hover:cursor-pointer ${t.ClassNames}`} />
            </a>)
          }
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl lg:text-3xl font-bold">{HomeMap.Catching.Title}</h2>
        <div className="flex flex-wrap gap-4 items-center">
          {
            HomeMap.Catching.Items.map(t => <a href={t.Link} target="_blank" key={t.Title}>
              <img style={{ height: t.Height }} loading="lazy" alt={t.Title} src={t.Img} className={`w-24 h-auto inline-block hover:cursor-pointer ${t.ClassNames}`} />
            </a>)
          }
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl lg:text-3xl font-bold">{HomeMap.UpTo.Title}</h2>
        <div className="flex flex-wrap gap-4">
          {
            HomeMap.UpTo.Text.map(t => <p key={t}>
              {t}
            </p>)
          }
        </div>
      </Section>
    </Main>

    {/* <div className="flex flex-col gap-2 md:max-h-screen">
      <Main id="music" accentColor="purple-500" className="md:h-1/2 md:max-h-1/2 text-purple-500">
          <section className="flex flex-col gap-4 items-center justify-center h-full">
            <div class="animate-pulse">{musicIcon}</div>
            <h2 className="text-center text-xl">Coming Soon</h2>
          </section>
      </Main>

      <Main id="nature" accentColor="green-500" className="md:h-1/2 md:max-h-1/2 text-green-600">
        <section className="flex flex-col gap-4 items-center justify-center h-full">
            <div class="animate-pulse">{treeIcon}</div>
            <h2 className="text-center text-xl">Coming Soon</h2>
        </section>
      </Main>
    </div> */}
  </div>);
}
