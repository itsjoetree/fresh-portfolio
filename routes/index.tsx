// import { useSignal } from "@preact/signals";

import Main from "../components/Main.tsx";

const HomeMap = {
  "Hero": {
    "Title": "Joe Salinas",
    "Text": "software engineer building for the web"
  },
  "About": {
    "Title": "About",
    "Text": [
      "Hey there, I'm Joe. I enjoy exploring nature, playing indie video games and building software. I've been building for the web professionally for the past few years.",
      "My experience thus far has primarily been building with C# and TypeScript. In the past year I have transitioned to a front-end focused role to form a specialization in building out user interfaces."
    ]
  },
  "Tech": {
    "Title": "What I've been using",
    "Items": [
      {
        "Title": "React",
        "Img": "",
        "Link": ""
      },
      {

      }
    ]
  }
};

export default function Home() {

  return (
    <Main>
      <div className="flex justify-between items-center">
        <img src="/me.jpeg" className="w-32 h-32 rounded-full inline-block md:hidden" />

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">{HomeMap.Hero.Title}</h1>
          {HomeMap.Hero.Text}
        </div>
        <img src="/me.jpeg" className="w-72 h-72 rounded-full hidden md:inline-block" />
      </div>

      <div>
        <h1 className="text-2xl">{HomeMap.About.Title}</h1>
        <div className="flex flex-col gap-2">
        {HomeMap.About.Text.map(t => <p key={t}>{t}</p>)}
        </div>
      </div>

      <div>
        <h1 className="text-2xl">{HomeMap.Tech.Title}</h1>
      </div>
    </Main>
  );
}
