import { Passero_One } from "next/font/google";
import Link from "next/link";
import { NavBar } from "@/app/layouts/NavBar";

const pasero_one = Passero_One({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div className="content-grid">
      <header className="flex flex-col w-full">
        <NavBar />
        <section
          aria-labelledby="hero-section"
          className="flex flex-col py-32 items-center text-center"
        >
          <h1
            id="hero-title"
            className="p-4 bg-gradient-to-r from-brand-start to-brand-end w-fit text-transparent bg-clip-text"
          >
            react app ideas
          </h1>
          <p>
            A collection of React and Next.js apps from
            <Link
              href="https://github.com/florinpop17/app-ideas"
              target="_blank"
              className="p-1 underline"
            >
              app-ideas
            </Link>
            github page.
          </p>
        </section>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-start p-0 m-0">
        <section aria-labelledby="about-section" className="flex flex-col p-4">
          <h2 id="about-section">About Project</h2>
          <p>
            I created this project to practice and mayster Web-Development with
            React, Typescript, Next.js & Other frameworks and tools.
          </p>
        </section>
      </main>
    </div>
  );
}
