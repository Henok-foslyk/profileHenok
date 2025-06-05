import { Stack, Box } from '@mui/material';
import ProjectCard from '../layouts/ProjectCard';
import flaskLogo from "../assets/images/flask.png"; // Replace with your actual images

const Projects = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>

      <p className="text-gray-700 mb-6">
        Below is a showcase of my technical work, including personal projects, contributions to open-source software, and other applications I've built.
      </p>

      <Stack
        direction="row"
        spacing={4}
        flexWrap="wrap"
        justifyContent="flex-start"  // Left align items in row
        alignItems="flex-start"      // Align items to top to fix row indentation
      >
        {/* Project 1 */}
        <Box sx={{ width: '320px' }}>
          <ProjectCard
            title="ArtScript"
            description="A Domain Specific Programming Language designed to produce SVG drawings. Created to help teach children programming concepts through fun, visual projects like drawing a bunny."
            image={flaskLogo}
            techStack={['JavaScript', 'SVG', 'Domain-Specific Language']}
            liveDemoLink="https://your-rtScript-demo-link.com"
            repoLink="https://github.com/yourusername/rtScript"
          />
        </Box>

        {/* Project 2 */}
        <Box sx={{ width: '320px' }}>
          <ProjectCard
            title="News Copilot"
            description="A web application that curates the latest news articles based on user interests. The app uses machine learning algorithms to filter and recommend relevant content."
            image={flaskLogo}
            techStack={['React', 'Node.js', 'Express', 'MongoDB', 'Machine Learning']}
            liveDemoLink="https://news-copilot-demo.com"
            repoLink="https://github.com/yourusername/news-copilot"
          />
        </Box>

        {/* Project 3 */}
        <Box sx={{ width: '320px' }}>
          <ProjectCard
            title="Ride-Matching App"
            description="A mobile app that matches drivers and passengers based on location and timing to reduce traffic and carbon footprint."
            image={flaskLogo}
            techStack={['React Native', 'Firebase', 'Google Maps API']}
            liveDemoLink="https://ride-matching-app.com"
            repoLink="https://github.com/yourusername/ride-matching"
          />
        </Box>

        {/* Project 4 */}
        <Box sx={{ width: '320px' }}>
          <ProjectCard
            title="3D Modeling Software"
            description="A desktop application for creating and editing 3D models with support for texturing, lighting, and rendering."
            image={flaskLogo}
            techStack={['C++', 'OpenGL', '3D Graphics', 'Mathematics']}
            liveDemoLink="https://3d-modeling-software-demo.com"
            repoLink="https://github.com/yourusername/3d-modeling-software"
          />
        </Box>
      </Stack>
    </section>
  );
};

export default Projects;
