"use client";

import { Contrast, Menu, User } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function Header() {
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "/noticias", label: "Notícias" },
    { href: "/eventos", label: "Eventos" },
    { href: "/institucional", label: "Institucional" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header className="flex w-full bg-card border-b-2 border-border px-4 sm:px-6 py-4 items-center justify-between sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo-zanolli.svg"
          width={48}
          height={48}
          alt="Logo Instituto Zanolli"
        />
        <span className="text-base font-medium leading-tight">
          Instituto
          <br />
          Zanolli
        </span>
      </Link>

      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2">
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-2">
        <Button className="hidden md:flex items-center gap-2">
          <User className="h-4 w-4" /> Portal do Aluno
        </Button>

        <Button
          variant="ghost"
          className="hidden md:flex"
          size={"icon"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Contrast className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Mudar tema</span>
        </Button>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="gap-0
            "
            >
              <SheetHeader>
                <SheetTitle className="flex text-lg items-center justify-between mt-8">
                  Menu
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <Contrast className="h-4 w-4" />
                  </Button>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-normal hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <div>
                  <Button className="mt-4 flex items-center gap-2 w-full">
                    <User className="h-4 w-4" /> Portal do Aluno
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
