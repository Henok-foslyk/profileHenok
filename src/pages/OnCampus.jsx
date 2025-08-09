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
          description="Provided tutoring in STEM subjects including Linear Algebra and Data Structures & Algorithms."
          achievements={[
            "Conducted personalized one-on-one sessions to explain STEM concepts, work through diverse problem sets, and demonstrate applications of data structures and algorithms.",
            "Taught exam preparation strategies and study techniques that helped students grasp complex material more easily and improve academic confidence."
          ]}
        />

        <CampusJobCard
          department="Office of Information Technology"
          title="Student Technology Consultant Manager"
          description="Assisted faculty and students with technology troubleshooting and training."
          achievements={[
            "Resolved authentication, device networking, and software deployment issues while coordinating with IT team members to enhance service efficiency.",  
            "Worked with academic professors to troubleshoot technology setups, ensuring seamless classroom learning experiences."
          ]}
        />

        <CampusJobCard
          department="Student Organizations"
          title="WEESA Club Vice-President"
          description="Served as Vice-President of the Williams Ethiopian and Eritrean Student Association."
          achievements={[
            "Organized cultural events to encourage community engagment and teach about various Ethiopian and Eritrean cultures.",
            "Coordinated with club leadership to ensure the club's vitality and growth."
          ]}
        />

        <CampusJobCard
          department="Career Services"
          title="Peer Career Advisor"
          description="Advised students on resumes, interviews, and career planning."
          achievements={[
            "Provided tailored career guidance on resumes, interview techniques, and job search strategies, empowering students to confidently navigate their career paths.",
            "Facilitated events featuring industry clusters, enhancing students’ networking abilities and bridging the gap between academic experience and professional opportunities."
          ]}
        />

        <CampusJobCard
          department="Alumni Engagement Office"
          title="Reunion Ranger"
          description="DESCRIPTION"
          achievements={[
            "Assisted Engagement Office during Reunion week by staffing various events to welcome and assist college alumni."
          ]}
        />
      </div>
    </section>
  );
};

export default OnCampus;
