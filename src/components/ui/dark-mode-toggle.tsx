'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <span onClick={toggleTheme} className="cursor-pointer ">
      {theme === 'light' ? (
        <Sun
          strokeWidth={1.25}
          size={26}
          className="transition-all scale-100 rotate-0 text-gray-500"
        />
      ) : (
        <Moon
          strokeWidth={1.25}
          size={26}
          className="transition-all scale-100 rotate-0  text-gray-500"
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </span>
  );
}
