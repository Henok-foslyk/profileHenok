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
            "Led weekly review sessions for 50+ students.",
            "Developed supplementary materials to improve student understanding."
          ]}
        />

        <CampusJobCard
          department="Computer Science Department"
          title="Computer Science Research Assistant"
          description="Collaborated on research projects focusing on machine learning and data analysis."
          achievements={[
            "Co-authored a research paper published at XYZ Conference.",
            "Designed experiments that improved algorithm accuracy by 15%."
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
      </div>
    </section>
  );
};

export default OnCampus;
