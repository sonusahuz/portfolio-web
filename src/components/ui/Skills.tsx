import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SkillsPage() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python'],
    },
    {
      title: 'Frameworks/Libraries',
      skills: ['React.js', 'Next.js', 'Redux', 'Zustand'],
    },
    {
      title: 'Styling Tools',
      skills: [
        'CSS',
        'TailwindCSS',
        'Bootstrap',
        'Material UI',
        'Shadcn UI',
        'Next UI',
      ],
    },
    {
      title: 'Databases/Version Control',
      skills: ['MongoDB', 'PostgreSQL', 'Git', 'Github', 'Linux'],
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl lg:ml-2">
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
