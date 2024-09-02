import { Passero_One } from "next/font/google";
import Link from "next/link";
import { NavBar } from "@/app/layouts/NavBar";
import { Button } from "@/app/components/ui/button";
import type { Metadata } from "next";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export const metadata: Metadata = {
    title: "Home",
};

const pasero_one = Passero_One({ weight: "400", subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <nav className="top-navbar absolute w-full top-0 bg-transparent">
                <NavBar />
            </nav>

            <header className="flex flex-col w-full h-dvh align-top custom-header bg-card">
                <div className="container flex flex-col h-full items-center justify-center">
                    <div role="figure" className="hero-figure h-2/5 w-1/2 z-0" />
                    <section
                        aria-labelledby="hero-section"
                        className="flex flex-1 flex-col items-center text-center justify-center gap-8 z-10"
                    >
                        <h1 id="hero-title">
                            App ideas <br />
                            with <em>React</em>
                        </h1>
                        <p>
                            A collection of web applications from
                            <Link
                                href="https://github.com/florinpop17/app-ideas"
                                target="_blank"
                                className="p-1 underline"
                            >
                                app-ideas
                            </Link>
                            GitHub.
                        </p>
                        <Button asChild variant="outline">
                            <Link href="/">
                                Explore Projects{" "}
                                <ChevronRightIcon className="ml-1 h-4 w-4" />
                            </Link>
                        </Button>
                    </section>
                </div>

                <section
                    aria-labelledby="frameworks-section"
                    className="py-12 font-extrabold"
                >
                    <div className="container flex flex-row justify-between">
                        <p></p>
                        <p>React</p>
                        <p>Next.js</p>
                        <p>shadcn/ui</p>
                        <p>Typescript</p>
                        <p></p>
                    </div>
                </section>
            </header>

            <main className="flex min-h-screen flex-col items-center justify-start p-0 m-0">
                <div className="container">
                    <section
                        aria-labelledby="about-section"
                        className="flex flex-col p-4"
                    >
                        <h2 id="about-section">About Project</h2>
                        <p>
                            I created this project to practice and mayster
                            Web-Development with React, Typescript, Next.js &
                            Other frameworks and tools.
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
}
