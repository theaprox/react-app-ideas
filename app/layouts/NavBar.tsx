import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { Logo } from "@/app/components/icons/Logo";
import { Button } from "../components/ui/button";
import navLinks from "@/app/data/navLinks.json";

export function NavBar() {
    const { variant, pages } = navLinks;
    const defaultVariant = "default";
    let setVariant

    function isVariant(v: string): v is "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" {
      return ["default", "destructive", "outline", "secondary", "ghost", "link"].includes(v);
    }

    if (isVariant(variant)) {
      setVariant = variant;
    } else {
      setVariant = defaultVariant;
    }

    const createNavbarLinks = (linkKey: keyof typeof pages) => {
        const link = pages[linkKey];
        if (link.navbar) {
            return (
              //@ts-ignore
                <Button key={linkKey} asChild variant={setVariant}>
                    <Link href={link.url}>{link.label}</Link>
                </Button>
            );
        }
    };
    return (
        <div className="top-navbar">
            <div className="container flex flex-row py-4 items-center gap-4">
                <div role="logo" className="flex-0">
                    <div className="z-0 navbar-logo-figure"></div>
                    <Link href="/" className="relative top-0 left-0 z-10"><Logo /></Link>
                </div>

                <div className="flex flex-1 justify-end">
                    {
                    //@ts-ignore
                    Object.keys(pages).map(createNavbarLinks)}
                </div>

                <div className="flex-0">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
