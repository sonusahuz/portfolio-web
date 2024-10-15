import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Sonu Sahu - Software Developer',
  description:
    "I'm a Full-Stack Developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.",
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
  authors: [{ name: 'Sonu Sahu' }],
  creator: 'Sonu Sahu',
  publisher: 'Sonu Sahu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sonusahu.vercel.app',
    siteName: 'Sonu Sahu - Full-Stack Developer',
    title: 'Sonu Sahu - Full-Stack Developer Portfolio',
    description:
      'Full-Stack Developer focused on crafting clean & user-friendly experiences. Passionate about building excellent software that improves lives.',
    images: [
      {
        url: 'https://www.sonusahu.vercel.app/sonu.png',
        width: 1200,
        height: 630,
        alt: 'Sonu Sahu - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sonu Sahu - Full-Stack Developer',
    description:
      'Full-Stack Developer crafting clean & user-friendly experiences. Building software that improves lives.',
    images: ['https://www.sonusahu.com/twitter-image.jpg'],
    creator: '@sonusahu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="px-3 sm:px-4 md:px-20 lg:px-40">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
