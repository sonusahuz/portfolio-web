import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Sonu Sahu - Home',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'Frontend',
    'Full Stack Developer',
    'Full-stack Developer',
    'Sonu Sahu',
    'Frontend Engineer',
    'Full-Stack Software Engineer',
    'Sonu Sahu Portfolio',
    'Sonu Sahu Projects',
    'Sonu Sahu Blogs',
  ],
  description:
    "I'm a Full-Stack Developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="px-3 mt-5 mb-16 sm:px-4 md:px-20 lg:px-40">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
