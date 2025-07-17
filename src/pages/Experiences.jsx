import React from 'react';
import ExperienceCard from '../layouts/ExperienceCard';
import microsoft from '../assets/logos/microsoft.png'
import williams from '../assets/logos/williams.png';
import clia from '../assets/logos/clia.png'
import klear from '../assets/logos/klearlogo.png'
import ensco from '../assets/logos/enscologo.png'
import worldcare from '../assets/logos/worldcare.png'

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
            title="Algorithm Engineering Intern"
            company="ENSCO Rail"
            logo={ensco}
            duration=""
            place=""
            responsibilities={[]}
          />
        </div>

        <div className="w-full max-w-[700px]">
          <ExperienceCard 
            title="Data Science Intern"
            company="WorldCare"
            logo={worldcare}
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
            logo={klear}
            duration="May 2024 – August 2024"
            place="San Francisco, CA - Remote"
            responsibilities={[
              "Engineered a full-stack insurance integration prototype using Python Flask (back end) and Jinja2 (front end), enabling Allianz’s API services within Klear Inc.’s flagship financial platform for 200+ enterprise clients",
              "Implemented asynchronous job polling and token-based authentication using threading and timed refresh strategies to manage secure, long-lived API sessions",
              "Optimized front-end performance by 25% by restructuring Flask route handling, minimizing redundant API calls, and leveraging lightweight JSON payloads for dynamic template rendering"
            ]}
          />
        </div>

        <div className="w-full max-w-[700px]">
          <ExperienceCard 
            title="AI Studio Fellow"
            company="Microsoft"
            logo={microsoft}
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
            logo={williams}
            duration="May 2024 – August 2024"
            place="Williamstown, MA"
            responsibilities={[
              "Engineered core backend components of Conversation, a 3D modeling application designed for classroom use, later deployed in a classroom setting",
              "Implemented geometric drawing rules in C++, applying vector mathematics and 3D coordinate transformations to support interactive sketching features",
              {
                text: "Contributed 300+ lines of code to an established codebase via Git, including:",
                subpoints: [
                  "Offset Copy Tool - Enabled duplication of lines/arcs by a specified vector offset",
                  "Division Point Tool - Added equidistant division points on lines and arcs"
                ]
              }
            ]}
            
          />
        </div>

        <div className="w-full max-w-[700px]">
          <ExperienceCard 
            title="Backend Developer"
            company="Center for Learning in Action, Williams College"
            logo={clia}
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
            logo={williams}
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
            logo={williams}
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
            logo={williams}
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
