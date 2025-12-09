import Flower from '/home/uki-dsa-01/LESSONS/REACT/Portfolio/src/components/assets/Flower.png';
import Movie from '/home/uki-dsa-01/LESSONS/REACT/Portfolio/src/components/assets/Movie.png';
import Login from '/home/uki-dsa-01/LESSONS/REACT/Portfolio/src/components/assets/Login.png';
import Todo from '/home/uki-dsa-01/LESSONS/REACT/Portfolio/src/components/assets/Todo.png';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Modern Glass Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Dilujan
            </div>
            <ul className="flex gap-8 text-lg font-medium">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === section
                        ? 'text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    {activeSection === section && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section with Dark Gradient */}
      <section
        id="home"
        className="min-h-screen relative flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-white/10">
            <span className="text-cyan-300 font-semibold">Full-Stack Developer</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Dilujan
            </span>
            <span className="block text-4xl sm:text-5xl mt-4 text-gray-300">Crafting Digital Experiences</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about building <span className="font-semibold text-cyan-300">scalable web applications</span> with modern technologies. Specializing in MERN stack development and <span className="font-semibold text-purple-300">interactive UI/UX</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold text-lg hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:border-white/20"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section with Glass Cards */}
      <section
        id="about"
        className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">About Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Full-stack developer passionate about creating efficient, scalable solutions with cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Glass Card 1 */}
            <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Current Journey</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm diving deep into full-stack development, focusing on building real-world applications with the MERN stack. Every project is an opportunity to learn and grow.
              </p>
              <div className="space-y-3">
                {['React.js & Next.js', 'Node.js & Express', 'MongoDB & PostgreSQL', 'REST APIs & GraphQL'].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Glass Card 2 */}
            <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 group-hover:-rotate-12 transition-transform duration-300">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Goals & Vision</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My vision is to contribute to innovative projects that solve real problems while continuously expanding my technical expertise and collaborating with amazing teams.
              </p>
              <div className="space-y-3">
                {['Build Scalable Applications', 'Learn Modern Architecture', 'Contribute to Open Source', 'Mentor Aspiring Developers'].map((goal, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Interactive Cards */}
      <section id="skills" className="py-24 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Technical Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Frontend',
                color: 'from-cyan-500 to-blue-500',
                skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
                icon: '💻'
              },
              {
                title: 'Backend',
                color: 'from-purple-500 to-pink-500',
                skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
                icon: '⚙️'
              },
              {
                title: 'DevOps',
                color: 'from-green-500 to-teal-500',
                skills: ['Git & GitHub', 'Docker', 'AWS Basics', 'CI/CD', 'Vercel'],
                icon: '🚀'
              },
              {
                title: 'UI/UX',
                color: 'from-orange-500 to-red-500',
                skills: ['Figma', 'Prototyping', 'User Research', 'Wireframing', 'Responsive Design'],
                icon: '🎨'
              }
            ].map((category, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                <div className={`absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-2xl transform group-hover:rotate-12 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${category.color} rounded-full mr-3`}></div>
                      {skill}
                    </li>
                  ))}
                </ul>
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Modern Cards */}
      <section id="projects" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing my journey through practical applications and real-world solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: Flower,
                title: 'Flower Web Page',
                description: 'Aesthetic e-commerce platform with modern UI/UX principles and responsive design',
                tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
                gradient: 'from-green-500 to-teal-500'
              },
              {
                image: Todo,
                title: 'To-Do App',
                description: 'Productivity application with real-time updates and local storage integration',
                tags: ['React', 'Tailwind', 'CRUD', 'Local Storage'],
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                image: Movie,
                title: 'Movie Platform',
                description: 'Cinema ticket booking system with movie listings and showtime management',
                tags: ['API', 'React', 'State Management', 'Responsive'],
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                image: Login,
                title: 'Auth System',
                description: 'Secure authentication pages with form validation and user management',
                tags: ['React', 'Formik', 'Validation', 'Security'],
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Glass Form */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and create something amazing together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: '📧',
                title: 'Email',
                value: 'dilujan@example.com',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: '📍',
                title: 'Location',
                value: 'Sri Lanka',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: '💼',
                title: 'Status',
                value: 'Available for work',
                color: 'from-green-500 to-teal-500'
              }
            ].map((info, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-gray-300">{info.value}</p>
              </div>
            ))}
          </div>

          {/* Glass Contact Form */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="group relative w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold text-lg text-white hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0">
              Dilujan
            </div>
            <div className="flex gap-6 mb-4 md:mb-0">
              {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  {platform}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dilujan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

