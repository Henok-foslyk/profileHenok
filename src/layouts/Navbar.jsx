import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-white shadow-md py-4 px-8">

      <h2 className="text-xl font-bold mb-4">
        Henok's Portfolio
      </h2>
      <div>
        <Link to="/" className="hover:underline mx-2">Home</Link>
        <Link to="/about" className="hover:underline mx-2">About</Link>
        <Link to="/projects" className="hover:underline mx-2">Projects</Link>
        <Link to="/experiences" className="hover:underline mx-2">Experiences</Link>
        <Link to="/oncampus" className="hover:underline mx-2">OnCampus</Link>
        <Link to="/contact" className="hover:underline mx-2">Contact</Link>
        <button
          onClick={toggleMode}
          style={{ backgroundColor: 'var(--accent-color)', color: 'var(--bg-color)' }}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
  
    </nav>

  );
};

export default Navbar;