import React from 'react';
import ExperienceCard from '../layouts/ExperienceCard';
import flaskLogo from '../assets/images/flask.png';

const Experiences = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Experiences</h2>

      <p className="text-gray-700 mb-6">
        Below are some of my professional experiences, including internships, research roles, and fellowships.
      </p>

      <div className="flex flex-wrap gap-6 justify-center">
        {/* Placeholder TO FILL Cards */}
        <div className="w-full max-w-[700px]">
          <ExperienceCard 
            title="TO FILL"
            company=""
            logo={flaskLogo}
            duration=""
            place=""
            responsibilities={[]}
          />
        </div>

        <div className="w-full max-w-[700px]">
          <ExperienceCard 
            title="TO FILL"
            company=""
            logo={flaskLogo}
            duration=""
            place=""
            responsibilities={[]}
          />
        </div>

        {/* Updated/Added Experiences */}
        <div className="w-full max-w-[700px]">
          <ExperienceCard 
            title="Software Engineer Intern"
            company="Klear Inc."
            logo={flaskLogo}
            duration="May 2024 – August 2024"
            place="San Francisco, CA - Remote"
            responsibilities={[
              "Reduced page load times by 75% by programming and integrating a front-end architecture for a Python Flask backend.",
              "Developed a scalable prototype integrating Allianz's insurance API, used by 200+ clients for high-cost transactions.",
              "Delivered a complete API prototype 1 week ahead of schedule with a team of 4 SWE interns."
            ]}
          />
        </div>

        <div className="w-full max-w-[700px]">
          <ExperienceCard 
            title="AI Studio Fellow"
            company="Microsoft"
            logo={flaskLogo}
            duration="August 2024 – December 2024"
            place="Cambridge, MA - Hybrid"
            responsibilities={[
              "Developing News Copilot, an ML model to automate news categorization and reduce manual labeling by 80%.",
              "Collaborating with a team across 2 universities under the guidance of a Microsoft Principal Director of AI Engineering."
            ]}
          />
        </div>

        <div className="w-full max-w-[700px]">
          <ExperienceCard 
            title="Software Engineer and Research Assistant"
            company="Williams Robotics Lab"
            logo={flaskLogo}
            duration="May 2024 – August 2024"
            place="Williamstown, MA"
            responsibilities={[
              "Developed backend features for Conversation, a user-friendly 3D modeling tool.",
              "Integrated line/arc offset copying and division points as new modeling features."
            ]}
          />
        </div>

        <div className="w-full max-w-[700px]">
          <ExperienceCard 
            title="Backend Developer"
            company="Center for Learning in Action, Williams College"
            logo={flaskLogo}
            duration="April 2024 – August 2024"
            place="Williamstown, MA"
            responsibilities={[
              "Built scalable backend architecture in Golang, improving DB query performance by 35%.",
              "Created a Google Maps-powered ride-matching algorithm for campus transport."
            ]}
          />
        </div>

        <div className="w-full max-w-[700px]">
          <ExperienceCard 
            title="Content Tutor"
            company="Williams College Peer Tutoring Center"
            logo={flaskLogo}
            duration="May 2024 – Present"
            place="Williamstown, MA"
            responsibilities={[
              "Tutoring students in data structures, debugging, and core CS concepts.",
              "Providing direct hands-on support in courses such as CS and Linear Algebra."
            ]}
          />
        </div>

        <div className="w-full max-w-[700px]">
          <ExperienceCard 
            title="Teaching Assistant"
            company="Williams College CS Department"
            logo={flaskLogo}
            duration="May 2023 – Present"
            place="Williamstown, MA"
            responsibilities={[
              "Assisted 80+ students with Python and Java code debugging and problem-solving.",
              "Supported learning in foundational CS courses and data structure development."
            ]}
          />
        </div>

        <div className="w-full max-w-[700px]">
          <ExperienceCard 
            title="Causal Inference Research Assistant"
            company="Williams College CS Department"
            logo={flaskLogo}
            duration="May 2023 – May 2024"
            place="Williamstown, MA"
            responsibilities={[
              "Designed and implemented a Python algorithm to model biological contagion via causal chain graphs."
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Experiences;
