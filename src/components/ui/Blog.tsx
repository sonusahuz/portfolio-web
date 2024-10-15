import { blogList } from '@/lib/constants';
import { Metadata } from 'next';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import { Button } from './button';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sonu Sahu - Blogs',
};

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="lg:my-28 my-20"
      aria-labelledby="blogs-heading"
    >
      <div className="text-center mb-10">
        <h1 id="blogs-heading" className="text-3xl font-semibold">
          Blogs
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogList.map(({ id, title, date, time, description, link }) => (
          <Card key={id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-2">
                {date} • {time}
              </p>
              <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View details of ${title} project`}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read More
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
