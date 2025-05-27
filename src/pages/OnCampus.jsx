const OnCampus = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-4">On-Campus Involvement</h2>

      <p className="text-gray-700 mb-6">
        I am actively involved in several activities at Williams College, where I contribute to the Computer Science department, mentor my peers, and participate in various tech-related clubs and events.
      </p>

      {/* Mentoring */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Peer Mentoring</h3>
        <p className="text-gray-700 mb-4">
          As a peer mentor, I assist fellow students in the Computer Science department with coursework, provide guidance on projects, and offer advice on internships and career paths. I enjoy helping others navigate their academic journey and grow their skills.
        </p>
        <p className="text-gray-500">
          <strong>Skills Developed:</strong> Leadership, Communication, Problem-Solving, Teaching
        </p>
      </div>

      {/* Tech Clubs */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Tech Clubs & Organizations</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Williams College ACM Chapter</strong>: Actively involved in organizing workshops, hackathons, and coding events for students.
          </li>
          <li>
            <strong>Women in Tech</strong>: A mentor for underrepresented students in tech, where I help organize meetups, discussions, and skill-building sessions.
          </li>
          <li>
            <strong>AI & Robotics Club</strong>: Participating in building and programming autonomous robots and working on AI-related projects with a team.
          </li>
        </ul>
      </div>

      {/* Events & Hackathons */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Tech Events & Hackathons</h3>
        <p className="text-gray-700 mb-4">
          I frequently participate in hackathons and tech-related events at Williams College. These events allow me to collaborate with fellow students, solve complex problems, and build innovative solutions within tight time constraints.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>HackWilliams 2023</strong>: Participated in a 24-hour hackathon, where my team built a social platform for local events.
          </li>
          <li>
            <strong>AI Expo 2023</strong>: Presented a project on AI-based recommendation systems, which received positive feedback from faculty and industry guests.
          </li>
        </ul>
      </div>

      {/* Volunteering */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Volunteering</h3>
        <p className="text-gray-700">
          I am also involved in volunteering within the local community by offering coding workshops to high school students and promoting STEM education in underrepresented communities.
        </p>
      </div>

    </section>
  );
};

export default OnCampus;
