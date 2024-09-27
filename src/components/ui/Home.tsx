import { Button } from '@/components/ui/button';
import { ModeToggle } from './dark-mode-toggle';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden" id="home">
      {/* Background pattern */}
      <div className="absolute grid w-16 h-8 grid-cols-8 gap-1 top-4 left-4">
        {[...Array(32)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-gray-700 rounded-full" />
        ))}
      </div>
      <div className="absolute grid w-16 h-8 grid-cols-8 gap-1 bottom-32 md:bottom-14 right-4">
        {[...Array(32)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-gray-700 rounded-full" />
        ))}
      </div>

      <div className="flex items-end justify-end pt-5">
        <ModeToggle />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Large background text */}
        <h1 className="absolute left-0 right-0 text-5xl font-bold text-center text-black pointer-events-none dark:text-muted-foreground lg:top-20 top-16 md:text-8xl dark:opacity-20 opacity-85">
          I AM A SOFTWARE
          <br />
          DEVELOPER
        </h1>

        {/* Design labels */}
        <div className="absolute z-30 px-3 py-1 text-center text-black transform bg-yellow-400 rounded md:top-[30%] top-1/4 right-4 rotate-3">
          INTERACTION &<br />
          MOTION DESIGN
        </div>
        <div className="absolute z-30 px-3 py-1 text-black text-center transform bg-blue-400 rounded bottom-[24%] left-4 -rotate-3">
          USER INTERFACE
          <br />
          DESIGN
        </div>

        {/* Circular logo */}
        <div className="absolute z-30 flex items-center justify-center w-24 h-24 border-2 border-green-400 rounded-full left-1 md:left-40 md:top-1/3 top-16 -rotate-6">
          <div className="text-xs text-center text-green-400">
            USER
            <br />
            EXPERIENCE
          </div>
        </div>

        {/* Bottom text and button */}
        <p className="z-20 mb-4 text-center text-black md:pt-32 md:w-[650px] w-text-sm dark:text-white">
          focused on crafting clean & user-friendly experiences. I am passionate
          about building excellent software that improves the lives of those
          around me.
        </p>
        <Button className="z-20 mt-2 bg-black border text-center dark:bg-white dark:text-black">
          <a href="https://linkedin.com/in/sonusahu" target="_blank">
            Let&apos;s Connect 👋
          </a>
        </Button>
      </div>
    </div>
  );
}
