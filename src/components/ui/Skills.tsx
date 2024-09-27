import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Server } from 'lucide-react';

export default function SkillsPage() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
        'JavaScript',
        'Redux',
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: [
        'Node.js',
        'Express',
        'Python',
        'Django',
        'PostgreSQL',
        'MongoDB',
      ],
    },
  ];

  return (
    <div className="mb-20" id="skills">
      <h1 className="text-3xl font-bold mb-6 text-center">My Skills</h1>
      <p className="text-sm text-center mb-12 max-w-2xl mx-auto">
        As a passionate developer, I&apos;ve honed my skills across various
        technologies and frameworks. Here&apos;s an overview of my technical
        expertise.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[22px]">
                {category.icon}
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
