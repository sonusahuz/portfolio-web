import React from 'react';

function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      {/* About Heading */}
      <div className="text-center lg:mb-10 mb-6 lg:mt-4">
        <h1 id="about-heading" className="text-3xl font-semibold">
          About Me
        </h1>
      </div>

      {/* About Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-20">
        {/* Text Section */}
        <div className="h-auto lg:w-[60%] lg:order-1 order-2">
          <div className="flex items-center justify-center md:pt-10">
            <div className="flex items-center justify-center">
              <article className="mb-10 text-left leading-7 text-[16px] text-muted-foreground">
                <p>
                  Hello! My name is Sonu Sahu, a{' '}
                  <span className="font-semibold">software developer</span> with
                  a great passion for creating and designing websites and
                  applications from scratch. My journey in software development
                  began with a Bachelor&apos;s degree in Computer Science, which
                  provided me with a solid foundation in programming and
                  problem-solving skills.
                </p>
                <p className="mt-4">
                  Throughout my career, I have worked with various technologies
                  and programming languages, including JavaScript, Python, and
                  Java. I have also worked with frontend frameworks like
                  React.js, Next.js, and Vue.js, and have extensive experience
                  with databases such as PostgreSQL. I have a strong background
                  in web application development, and I am particularly
                  passionate about creating user-friendly, efficient, and
                  scalable solutions.
                </p>
                <p className="mt-4">
                  I am always eager to learn and grow. Apart from my project
                  work, I regularly engage in professional development
                  activities. This includes taking online courses to stay
                  updated with the latest technological trends, participating in
                  coding challenges, and contributing to open-source projects.
                </p>
                <p className="mt-4">
                  If you have a project or need a software developer, I would
                  love the opportunity to collaborate with you. Let’s work
                  together to bring your vision to life and create something
                  truly remarkable.
                </p>
              </article>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:order-2 order-1 my-6 lg:mb-0">
          <img
            src="./sonu.png"
            width={400}
            height={400}
            alt="Sonu Sahu, software developer"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
