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
        "ClassNames": "",
        "Height": 96
      },
      {
        "Title": "Astro",
        "Img": "/astro.png",
        "Link": "https://astro.build/",
        "ClassNames": "",
        "Height": 96
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
  }
};

export default function Home() {

  return (
    <Main>
      <div className="flex gap-4 justify-between items-center">
        <img alt="Photo of me" src="/me-sm.jpg" className="w-32 h-32 rounded-full inline-block md:hidden" />

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">{HomeMap.Hero.Title}</h1>
          {HomeMap.Hero.Text}
        </div>
        <img alt="Photo of me" src="/me.jpg" className="w-60 h-60 rounded-full hidden md:inline-block" />
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{HomeMap.About.Title}</h1>
        <div className="flex flex-col gap-2">
        {HomeMap.About.Text.map(t => <p key={t}>{t}</p>)}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{HomeMap.Tech.Title}</h1>
        <div className="flex flex-wrap gap-2 items-center">
          {
            HomeMap.Tech.Items.map(t => <a href={t.Link} target="_blank" key={t.Title}>
              <img style={{ height: t.Height }} loading="lazy" alt={t.Title} src={t.Img} className={`w-24 h-auto inline-block hover:cursor-pointer ${t.ClassNames}`} />
            </a>)
          }
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{HomeMap.Catching.Title}</h1>
        <div className="flex gap-4 items-center">
          {
            HomeMap.Catching.Items.map(t => <a href={t.Link} target="_blank" key={t.Title}>
              <img style={{ height: t.Height }} loading="lazy" alt={t.Title} src={t.Img} className={`w-24 h-auto inline-block hover:cursor-pointer ${t.ClassNames}`} />
            </a>)
          }
        </div>
      </div>

      <div className="flex pt-4 gap-4 items-center self-end">
        <a role="button" target="_blank" href="https://instagram.com/itsjoetree">
          <img loading="lazy" alt="Instagram" src="/instagram.png" className="w-8 h-8" />
        </a>

        <a role="button" target="_blank" href="https://github.com/itsjoetree">
         <img loading="lazy" alt="GitHub" src="/github.png" className="w-8 h-8" />
        </a>
      </div>
    </Main>
  );
}
