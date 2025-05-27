import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Personal Website</h1>
      <p className="text-lg text-gray-600 mb-8">Software Engineer | Student at Williams College</p>

      {/* Cards Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        {/* About Card */}
        <Link to="/about" className="card">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-2">About Me</h3>
            <p className="text-gray-600">Learn more about my education background, interests, and experiences.</p>
          </div>
        </Link>

        {/* Projects Card */}
        <Link to="/projects" className="card">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-2">Projects</h3>
            <p className="text-gray-600">Explore my software development projects and contributions.</p>
          </div>
        </Link>

        {/* Experiences Card */}
        <Link to="/experiences" className="card">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-2">Experiences</h3>
            <p className="text-gray-600">Find out about my work experiences and internships.</p>
          </div>
        </Link>

        {/* OnCampus Card */}
        <Link to="/oncampus" className="card">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-2">On Campus</h3>
            <p className="text-gray-600">Learn about my on-campus activities and involvement at Williams College.</p>
          </div>
        </Link>

        {/* Contact Card */}
        <Link to="/contact" className="card">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-2">Contact</h3>
            <p className="text-gray-600">Get in touch with me for collaborations or inquiries.</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
