import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission, e.g., send an email or store the data
    console.log('Form submitted:', formData);
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>

      <p className="text-gray-700 mb-6">
        Feel free to reach out to me via email, or fill out the form below, and I'll get back to you as soon as possible.
      </p>

      {/* Contact Info */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
        <ul className="text-gray-700">
          <li>
            <strong>Email:</strong> <a href="mailto:henok@example.com" className="text-accent hover:underline">henok@example.com</a>
          </li>
          <li>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/henok" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">linkedin.com/in/henok</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href="https://github.com/henok" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">github.com/henok</a>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="6"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent-dark focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Optional: Social Media Links */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4">Connect with Me</h3>
        <ul className="flex space-x-6">
          <li>
            <a href="https://twitter.com/henok" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/henok" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
