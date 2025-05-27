const Projects = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>

      <p className="text-gray-700 mb-6">
        Below is a showcase of my technical work, including personal projects, contributions to open-source software, and other applications I've built.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1: News Copilot */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-2">News Copilot</h3>
          <p className="text-gray-700 mb-4">
            A web application that curates the latest news articles based on user interests and preferences. The app uses machine learning algorithms to filter content and recommend relevant news.
          </p>
          <p className="text-gray-500 mb-4">
            <strong>Technologies:</strong> React, Node.js, Express, MongoDB, Machine Learning
          </p>
          <div className="flex justify-between">
            <a href="https://github.com/yourusername/news-copilot" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              GitHub
            </a>
            <a href="https://news-copilot-demo.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2: Ride-Matching App */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-2">Ride-Matching App</h3>
          <p className="text-gray-700 mb-4">
            A mobile app for users to find or offer rides. The app matches drivers and passengers based on location and timing preferences, helping to reduce traffic and carbon footprint.
          </p>
          <p className="text-gray-500 mb-4">
            <strong>Technologies:</strong> React Native, Firebase, Google Maps API
          </p>
          <div className="flex justify-between">
            <a href="https://github.com/yourusername/ride-matching" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              GitHub
            </a>
            <a href="https://ride-matching-app.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 3: 3D Modeling Software */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-2">3D Modeling Software</h3>
          <p className="text-gray-700 mb-4">
            A desktop application for creating and editing 3D models. Users can create objects, apply textures, and render scenes with realistic lighting and shadows.
          </p>
          <p className="text-gray-500 mb-4">
            <strong>Technologies:</strong> C++, OpenGL, 3D Graphics, Mathematics
          </p>
          <div className="flex justify-between">
            <a href="https://github.com/yourusername/3d-modeling-software" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              GitHub
            </a>
            <a href="https://3d-modeling-software-demo.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
