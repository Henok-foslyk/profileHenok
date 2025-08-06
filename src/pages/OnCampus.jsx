import React from 'react';
import CampusJobCard from '../layouts/CampusJobCard';
import flaskLogo from "../assets/images/flask.png"; // Replace with actual images as needed

const OnCampus = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-6">On Campus Positions</h2>
      <div className="flex flex-wrap justify-center gap-6">
      
        <CampusJobCard
          department="Computer Science Department"
          title="Computer Science Teaching Assistant"
          description="Assisted professors in grading, conducting office hours, and supporting students in CS courses."
          achievements={[
            "Assist 80+ students in writing efficient code and executing appropriate Python and Java debugging techniques that bolstered their understanding of common data structures and algorithms while enhancing their problem solving skills",
            "Provide individualized debugging assistance to resolve programming roadblocks and explain the concept behind algorithms"
          ]}
        />

        <CampusJobCard
          department="Computer Science Department"
          title="Computer Science Research Assistant"
          description="Collaborated on research projects focusing on Causal Inference and Chain Graphs"
          achievements={[
            
            "Designed and implemented a Python algorithm to emulate biological contagion by applying causal chain graph models",
            "Literature reviewed several papers on causal inference to understand appropriate steps to go from theory to code implementation",
          ]}
        />

        <CampusJobCard
          department="Academic Support Center"
          title="Peer STEM Tutor"
          description="Provided tutoring in STEM subjects including math, physics, and computer science."
          achievements={[
            "Helped students improve grades by an average of one letter grade.",
            "Created tutoring guides adopted by the STEM center."
          ]}
        />

        <CampusJobCard
          department="IT Services"
          title="Student Technology Consultant"
          description="Assisted faculty and students with technology troubleshooting and training."
          achievements={[
            "Streamlined tech onboarding process for new students.",
            "Led workshops on software tools and campus resources."
          ]}
        />

        <CampusJobCard
          department="Student Organizations"
          title="WEESA Club Vice-President"
          description="Served as Vice-President of the Williams Ethiopian and Eritrean Student Association."
          achievements={[
            "Organized cultural events attended by over 300 students.",
            "Expanded club membership by 40% during tenure."
          ]}
        />

        <CampusJobCard
          department="Career Services"
          title="Peer Career Advisor"
          description="Advised students on resumes, interviews, and career planning."
          achievements={[
            "Conducted over 100 one-on-one career advising sessions.",
            "Hosted career workshops with local industry professionals."
          ]}
        />

        <CampusJobCard
          department="Alumni Engagement Office"
          title="Reunion Ranger"
          description="DESCRIPTION"
          achievements={[
            "work 1.",
            "work 2."
          ]}
        />
      </div>
    </section>
  );
};

export default OnCampus;
