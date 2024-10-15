import { project } from '@/lib/constants';
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
import { Badge } from './badge';
import { Button } from './button';
import { ExternalLink, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sonu Sahu - Projects',
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="lg:my-28 my-20"
      aria-labelledby="projects-heading"
    >
      <div className="text-center mb-10">
        <h1 id="projects-heading" className="text-3xl font-semibold">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.map(
          ({ id, title, description, technologies, link, github }) => (
            <Card key={id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="mb-2 text-xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View details of ${title} project`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code of ${title} project`}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
