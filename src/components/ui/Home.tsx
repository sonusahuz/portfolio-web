'use client';

import { Menu, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { handleNavigation } from '@/lib/utils';
import { useState } from 'react';
import Drawer from './Drawer';
import { useTheme } from 'next-themes';

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const items = [
    { id: '1', title: 'Home', href: 'home' },
    { id: '2', title: 'About', href: 'about' },
    { id: '3', title: 'Projects', href: 'projects' },
    { id: '4', title: 'Blogs', href: 'blogs' },
    { id: '5', title: 'Contact', href: 'contact' },
  ];

  return (
    <section
      id="home"
      className="lg:h-screen w-full overflow-hidden relative flex flex-col bg-background text-foreground"
    >
      <header className="w-full mx-auto flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-medium">{'{ S }'}</span>
          <span className="sr-only">Sonu Sahu</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {['Home', 'About', 'Projects', 'Blogs', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item.toLowerCase())}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`Go to ${item}`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="md:hidden flex items-center justify-between gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Menu
            className="h-7 w-7 cursor-pointer"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          />
        </div>
        <Drawer
          content={
            <ul className="mt-10">
              {items.map(({ id, title, href }) => (
                <li key={id}>
                  <a
                    onClick={() => handleNavigation(href.toLowerCase())}
                    aria-label={`Go to ${title}`}
                    className="block font-light text-xl px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          }
          isOpen={open}
          width="200px"
          setIsOpen={() => setOpen(false)}
        />
      </header>

      <main className="flex-grow flex items-center justify-center py-20 lg:text-center mb-24 lg:mb-0">
        <div className="max-w-5xl flex flex-col gap-3">
          <h1 className="text-5xl sm:text-5xl md:text-6xl font-medium">
            Sonu Sahu.
          </h1>
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl lg:font-medium font-light text-muted-foreground">
            Building Engaging Web Applications that Retain Users.
          </h2>
          <p className="text-lg max-w-[900px] mx-auto sm:text-xl font-light text-muted-foreground leading-relaxed lg:mt-2">
            I&apos;m Sonu Sahu, a software developer focused on crafting clean &
            user-friendly experiences. Passionate about building excellent
            software that improves lives.
          </p>
          <div className="flex gap-4 text-center mt-2 lg:mx-auto">
            <Button
              size="lg"
              aria-label="View Projects"
              className="w-36"
              onClick={() => handleNavigation('projects')}
            >
              Projects
            </Button>
            <Link
              href="https://linkedin.com/in/sonusahu"
              target="_blank"
              passHref
            >
              <Button
                size="lg"
                variant="outline"
                className="w-36"
                aria-label="Connect on LinkedIn"
              >
                Connect 👋
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}
