import { blogList } from '@/lib/constants';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';

export const metadata: Metadata = {
  title: 'Sonu Sahu - Blogs',
};
const Blogs = () => {
  return (
    <div id="blogs" className="mb-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Blogs </h1>
        <p className="py-2 text-sm">Here are some of my blogs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogList.map((blog) => (
          <Card key={blog.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{blog.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-2">
                {blog.date} • {blog.time}
              </p>
              <CardDescription>{blog.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Read More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
