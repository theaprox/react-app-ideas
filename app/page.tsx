import Image from "next/image"
import { ModeToggle } from "./components/ModeToggle"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "React App Ideas",
  description: "React and Next.js apps from app-ideas github page.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col items-center justify-center">
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight p-8">
        <Image src="/landing-header.png" alt="React App Ideas" width={320} height={100} />
      </h1>
      <p className="leading-7">
        A collection of React and Next.js apps from
        <a href="https://github.com/florinpop17/app-ideas"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-primary underline underline-offset-4 px-1">
          app-ideas
        </a>
        github page.
      </p>
      </section>
    </main>
  );
}
