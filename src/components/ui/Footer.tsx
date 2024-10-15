'use client';

import React from 'react';
import { Instagram, Twitter, Linkedin, Github, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './button';
import { useTheme } from 'next-themes';

const socialMediaLinks = [
  {
    id: '1',
    href: 'https://github.com/sonusahuz',
    title: 'Github',
    icon: Github,
  },
  {
    id: '2',
    href: 'https://linkedin.com/in/sonusahu',
    title: 'Linkedin',
    icon: Linkedin,
  },
  {
    id: '3',
    href: 'https://twitter.com/sonusahuz',
    title: 'Twitter',
    icon: Twitter,
  },
  {
    id: '4',
    href: 'https://instagram.com/sonusahuz',
    title: 'Instagram',
    icon: Instagram,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const { theme, setTheme } = useTheme();

  return (
    <footer className="pt-4 sm:pt-10 lg:pt-12 px-4 mx-auto max-w-screen-2xl">
      <div className="flex flex-col items-center pt-6 border-t">
        <div className="flex gap-2">
          {socialMediaLinks.map(({ id, href, title, icon: Icon }) => (
            <Link
              key={id}
              href={href}
              target="_blank"
              aria-label={`Visit ${title}`}
              className="text-muted-foreground transition hover:text-gray-500 active:text-muted-foreground"
            >
              <Button variant="ghost" size="icon">
                <Icon className="h-5 w-5 text-muted-foreground" aria-label={title} />
              </Button>
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 transition-transform dark:rotate-90 dark:scale-0 text-muted-foreground" />
            <Moon className="h-5 w-5 absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100 text-muted-foreground" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
      <div className="text-sm text-center text-muted-foreground py-6">
        © {year} - Developed by Sonu Sahu.
      </div>
    </footer>
  );
};

export default Footer;
