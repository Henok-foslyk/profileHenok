const Experiences = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Experiences</h2>
      
      <p className="text-gray-700 mb-6">
        Below are some of my professional experiences, including internships, research roles, and fellowships.
      </p>

      {/* Experience 1: Software Engineering Intern at Klear */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-2">Software Engineering Intern at Klear</h3>
        <p className="text-gray-500 mb-2">June 2023 - August 2023</p>
        <p className="text-gray-700 mb-4">
          During my internship at Klear, I contributed to the development of a machine learning-based recommendation system that personalizes content for users. I worked closely with the engineering team to implement new features and improve the performance of the system.
        </p>
        <p className="text-gray-500 mb-4">
          <strong>Technologies Used:</strong> Python, TensorFlow, Flask, AWS, Git
        </p>
      </div>

      {/* Experience 2: Research Assistant at Williams Robotics Lab */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-2">Research Assistant at Williams Robotics Lab</h3>
        <p className="text-gray-500 mb-2">September 2022 - May 2023</p>
        <p className="text-gray-700 mb-4">
          As a research assistant at the Williams Robotics Lab, I worked on a project focused on improving the navigation and decision-making capabilities of autonomous robots. I assisted with programming, data collection, and algorithm development.
        </p>
        <p className="text-gray-500 mb-4">
          <strong>Technologies Used:</strong> ROS, Python, C++, OpenCV, Machine Learning
        </p>
      </div>

      {/* Experience 3: AI Fellow at Microsoft */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-2">AI Fellow at Microsoft</h3>
        <p className="text-gray-500 mb-2">Summer 2022</p>
        <p className="text-gray-700 mb-4">
          As part of Microsoft's AI Fellowship program, I worked with a team to research and develop AI models for natural language processing (NLP). I gained hands-on experience in building and training NLP models and learned about cloud-based AI services.
        </p>
        <p className="text-gray-500 mb-4">
          <strong>Technologies Used:</strong> Python, PyTorch, Azure AI, NLP
        </p>
      </div>
    </section>
  );
};

export default Experiences;
