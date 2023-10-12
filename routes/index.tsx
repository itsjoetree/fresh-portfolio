import Main from "../components/Main.tsx";
import Section from "../components/Section.tsx";
import BlueSnail from "../islands/BlueSnail.tsx";

const HomeMap = {
  "Hero": {
    "Title": "Joe Salinas",
    "Text": "software engineer building for the web"
  },

  "Socials": {
    "Title": "Socials",
    "Items": [
      {
        "Text": "GitHub",
        "Link": "https://github.com/itsjoetree/"
      },
      {
        "Text": "Instagram",
        "Link": "https://instagram.com/itsjoetree/"
      },
      {
        "Text": "Music",
        "Link": "https://joetreemusic.com/"
      }
    ]
  },
  "About": {
    "Title": "About",
    "Text": [
      "Hey there, I'm Joe. I enjoy exploring nature, playing indie video games and building software. I've been building for the web professionally for the past few years.",
      "My experience thus far has primarily been with C# and TypeScript. In the past year I have transitioned to a front-end focused role to form a specialization in building out user interfaces."
    ]
  },
  "Tech": {
    "Title": "What I've been using",
    "Items": [
      {
        "Title": "React",
        "Img": "/react.png",
        "Link": "https://react.dev/",
        "ClassNames": "animate-spin-slow",
        "Height": 83.4
      },
      {
        "Title": "Vite",
        "Img": "/vite.png",
        "Link": "https://vitejs.dev/",
        "ClassNames": "h-full",
      },
      {
        "Title": "Astro",
        "Img": "/astro.png",
        "Link": "https://astro.build/",
        "ClassNames": "h-full w-20",
      },
      {
        "Title": "Tailwind",
        "Img": "/tailwind.png",
        "Link": "https://tailwindcss.com/",
        "ClassNames": "animate-pulse",
        "Height": 58.8
      },
      {
        "Title": "C#",
        "Img": "/csharp.png",
        "Link": "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
        "ClassNames": "",
        "Height": 96
      }
    ]
  },
  "Catching": {
    "Title": "What's been catching my eye",
    "Items": [
      {
        "Title": "Bun",
        "Img": "/bun.png",
        "Link": "https://bun.sh/",
        "ClassNames": "",
        "Height": 84
      },
      {
        "Title": "GO",
        "Img": "/gopher.png",
        "Link": "https://go.dev/",
        "ClassNames": "animate-bounce",
        "Height": 130.8
      },
      {
        "Title": "Deno",
        "Img": "/deno.png",
        "Link": "https://deno.com/",
        "ClassNames": "",
        "Height": 96
      },
    ]
  },
  "UpTo": {
    "Title": "What I've been up to",
    "Text": [
      "During the day, work has mainly been building out the UI for our company's web applications and creating microsites from time to time.",
      "I've recently been trying to re-spark my backend abilities by studying GO. Although I spent a couple of years developing with C# I think having a compiled language in my tool belt could be useful.",
      "I decided recently to revamp this site as well. I want to have fun with it and keep adding content; perhaps make this a web game that goes beyond a single page portfolio site."
    ]
  }
};



export default function Home() {

  return (
    <Main>
      <div className="flex gap-4 justify-between items-center lg:justify-center lg:gap-12">
        <img alt="Photo of me" src="/me-sm.jpg" className="select-none pointer-events-none w-32 h-32 rounded-full inline-block md:hidden" />

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">{HomeMap.Hero.Title}</h1>
          {HomeMap.Hero.Text}
        </div>
        <img alt="Photo of me" src="/me.jpg" className="select-none pointer-events-none w-60 h-60 rounded-full hidden md:inline-block" />
      </div>

      <Section>
        <h1 className="text-2xl font-bold">{HomeMap.Socials.Title}</h1>
        <div className="flex flex-wrap gap-4">
        {HomeMap.Socials.Items.map(i => <a className="border border-white rounded-full py-1 px-4 self-start hover:text-black hover:bg-white" href={i.Link} target="_blank">
          {i.Text}
        </a>)}
        </div>
      </Section>

      <Section>
        <h1 className="text-2xl font-bold">{HomeMap.About.Title}</h1>
        <div className="flex flex-col gap-2">
        {HomeMap.About.Text.map(t => <p key={t}>{t}</p>)}
        </div>
      </Section>

      <Section>
        <h1 className="text-2xl font-bold">{HomeMap.Tech.Title}</h1>
        <div className="flex gap-4 flex-wrap items-center">
          {
            HomeMap.Tech.Items.map(t => <a href={t.Link} target="_blank" key={t.Title}>
              <img style={{ height: t.Height }} loading="lazy" alt={t.Title} src={t.Img} className={`w-24 h-auto inline-block hover:cursor-pointer ${t.ClassNames}`} />
            </a>)
          }
        </div>
      </Section>

      <Section>
        <h1 className="text-2xl font-bold">{HomeMap.Catching.Title}</h1>
        <div className="flex gap-4 items-center">
          {
            HomeMap.Catching.Items.map(t => <a href={t.Link} target="_blank" key={t.Title}>
              <img style={{ height: t.Height }} loading="lazy" alt={t.Title} src={t.Img} className={`w-24 h-auto inline-block hover:cursor-pointer ${t.ClassNames}`} />
            </a>)
          }
        </div>
      </Section>

      <Section>
        <h1 className="text-2xl font-bold">{HomeMap.UpTo.Title}</h1>
        <div className="flex flex-wrap gap-4">
          {
            HomeMap.UpTo.Text.map(t => <p key={t}>
              {t}
            </p>)
          }
        </div>
      </Section>

      <div className="pt-5 flex flex-col">
        <BlueSnail maxSteps={190} />
        <span className="text-blue-400">Last Updated: 10/11/2023</span>
      </div>
    </Main>
  );
}
