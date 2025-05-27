const About = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>

      {/* Introduction */}
      <p className="text-gray-700 mb-6">
        I’m Henok, a Computer Science major at Williams College. I’m passionate about building impactful software that solves real-world problems and fosters collaborative growth. I thrive in environments that encourage learning, creativity, and team-driven solutions.
      </p>

      {/* Educational Background */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Educational Background</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Bachelor's in Computer Science, Williams College (Expected Graduation: 2025)</li>
          <li>Relevant Coursework: Data Structures, Algorithms, Software Engineering, Web Development, Machine Learning</li>
        </ul>
      </div>

      {/* Where I'm From */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Where I'm From</h3>
        <p className="text-gray-700">
          Originally from <strong>Boston, MA</strong>, I have always been surrounded by a vibrant tech community that fostered my curiosity for technology from a young age. Being from a diverse city, I have developed an appreciation for different cultures and perspectives, which I carry into both my personal and professional life.
        </p>
      </div>

      {/* Passions */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">What I'm Passionate About</h3>
        <p className="text-gray-700">
          I’m passionate about using technology to make a positive impact on society. Whether it’s building software that helps communities, collaborating with others to bring creative ideas to life, or constantly improving my skills, I aim to work on projects that align with my values and make a difference.
        </p>
        <p className="text-gray-700 mt-4">
          In my free time, I enjoy exploring open-source projects, learning new programming languages, and staying up-to-date with the latest trends in technology. I also love teaching and mentoring others, which is something I am actively involved in at my university.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Skills</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Programming Languages: JavaScript, Python, Java, C++</li>
          <li>Web Development: React, Node.js, HTML, CSS</li>
          <li>Software Engineering: Agile methodologies, Git, Testing</li>
          <li>Machine Learning: TensorFlow, Scikit-learn, Pandas</li>
          <li>Database: MySQL, MongoDB</li>
          <li>Cloud Computing: AWS, Firebase</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
