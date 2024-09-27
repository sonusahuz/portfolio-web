'use client';
import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import { handleNavigation } from '@/lib/utils';

export const socialMediaLink = [
  {
    id: '1',
    href: 'https://github.com/sonusahuz',
    title: 'Github',
    name: '@sonusahuz',
    icon: <Github size={23} strokeWidth={1.25} />,
  },

  {
    id: '3',
    href: 'https://twitter.com/sonusahuz',
    title: 'Twitter',
    name: '@sonusahuz',
    icon: <Twitter size={23} strokeWidth={1.25} />,
  },
  {
    id: '4',
    href: 'https://instagram.com/sonusahuz',
    title: 'Instagram',
    name: '@sonusahuz',
    icon: <Instagram size={23} strokeWidth={1.25} />,
  },
  {
    id: '2',
    href: 'https://linkedin.com/in/sonusahu',
    title: 'Linkedin',
    name: '@sonusahuz',
    icon: <Linkedin size={23} strokeWidth={1.25} />,
  },
];

const Footer = () => {
  return (
    <div>
      <div className="pt-4 sm:pt-10 lg:pt-12">
        <footer className="px-4 mx-auto max-w-screen-2xl">
          <div className="flex flex-col items-center pt-6 border-t">
            <nav className="flex flex-wrap justify-center mb-6 gap-x-4 gap-y-2 md:justify-start md:gap-6">
              <a
                onClick={() => handleNavigation('home')}
                className="text-muted-foreground cursor-pointer text-sm"
              >
                Home
              </a>
              <a
                onClick={() => handleNavigation('about')}
                className="text-muted-foreground cursor-pointer text-sm"
              >
                About
              </a>
              <a
                onClick={() => handleNavigation('skills')}
                className="text-muted-foreground cursor-pointer text-sm"
              >
                Skills
              </a>
              <a
                onClick={() => handleNavigation('projects')}
                className="text-muted-foreground cursor-pointer text-sm"
              >
                Projects
              </a>
              <a
                onClick={() => handleNavigation('blogs')}
                className="text-muted-foreground cursor-pointer text-sm"
              >
                Blogs
              </a>
            </nav>

            <div className="flex gap-4">
              {socialMediaLink.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  className="text-muted-foreground transition duration-100 hover:text-gray-500 active:text-muted-foreground"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="py-8 text-sm text-center text-muted-foreground">
            © 2024 - Developed by Sonu Sahu. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
