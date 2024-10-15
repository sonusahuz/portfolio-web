import React from 'react';
import { Button } from './button';
import Link from 'next/link';

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-[70vh] text-center flex items-center justify-center bg-background text-foreground"
    >
      <div className="w-full max-w-3xl px-4 py-8">
        <h1
          id="about-heading"
          className="text-3xl font-semibold text-center mb-4"
        >
          Get In Touch
        </h1>
        <p className="text-center text-lg text-muted-foreground font-thin">
          Although I&apos;m not currently looking for any new opportunities, my
          inbox is always open. Whether you have a question or just want to say
          hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="flex justify-center mt-6">
          <Button variant={'outline'} size={"lg"}>
            <Link href={'mailto:sonusahu8930@gmail.com'}>Say hello!</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
