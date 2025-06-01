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
        <div className="w-full max-w-[700px]">
          <ExperienceCard 
            title="Software Engineering Intern"
            company="Klear"
            logo={flaskLogo}
            duration="June 2023 - August 2023"
            place="New York, New York (Remote)"
            responsibilities={[
              "Developed machine learning algorithms to personalize content recommendations.",
              "Collaborated with cross-functional teams to improve product features.",
              "Contributed to codebase improvements and bug fixes using Python and TensorFlow.",
              "Worked with technologies: Python, TensorFlow, Flask, AWS, Git"
            ]}
          />
        </div>

        <div className="w-full max-w-[700px]">
          <ExperienceCard 
            title="Research Assistant"
            company="Williams Robotics Lab"
            logo={flaskLogo}
            duration="September 2022 - May 2023"
            place="Williamstown, MA"
            responsibilities={[
              "Improved autonomous robot navigation and decision-making algorithms.",
              "Programmed robot control systems and collected test data.",
              "Worked with technologies: ROS, Python, C++, OpenCV, Machine Learning"
            ]}
          />
        </div>

        <div className="w-full max-w-[700px]">
          <ExperienceCard 
            title="AI Fellow"
            company="Microsoft"
            logo={flaskLogo}
            duration="Summer 2022"
            place="Remote"
            responsibilities={[
              "Researched and developed NLP models in a team-based project.",
              "Gained experience with Azure AI tools and large-scale cloud services.",
              "Worked with technologies: Python, PyTorch, Azure AI, NLP"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Experiences;
