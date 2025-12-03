
export default function Home(){
    return(
        <>
      {/* <nav class="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md border-b border-white/30 shadow-md">
        <ul class="flex gap-6 justify-content-center  text-lg">
          <li class="hover:text-blue-500 cursor-pointer">Home</li>
          <li class="hover:text-blue-500 cursor-pointer">About</li>
          <li class="hover:text-blue-500 cursor-pointer">Project</li>
          <li class="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
      </nav>

        <section
      id="home"
      className="bg-gradient-to-b from-white via-gray-100 to-blue-50 min-h-screen flex items-center justify-center p-6"
    >
      <div className="max-w-3xl text-center bg-white/30 backdrop-blur-md rounded-xl p-10 shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I’m <span className="text-blue-500">Dilujan</span> 👋
        </h1>
        <p className="text-xl sm:text-2xl mb-6">
          Aspiring Full-Stack Developer (MERN Stack Enthusiast)
        </p>
        <p className="mb-6">
          I’m a passionate and self-driven developer, currently diving deep into full-stack development. 
          I love creating <span className="font-semibold text-gray-800">clean, responsive, and interactive web applications</span>.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">What I Do:</h2>
          <ul className="list-disc list-inside space-y-1 text-lg text-gray-800">
            <li>Web Development</li>
            <li>Frontend UI Design</li>
            <li>Backend & API Development</li>
            <li>Learning the MERN Stack (MongoDB, Express, React, Node.js)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">My Goal:</h2>
          <p className="text-lg text-gray-800">
            To grow as a full-stack developer and build real-world projects that make a positive impact.
          </p>
        </div>
      </div>
    </section>

     <section
      id="about"
      className="bg-gradient-to-b from-blue-50 via-white to-gray-100 py-20 px-6"
    >
      <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-md rounded-xl p-10 shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
          About Me
        </h2>
        <p className="text-lg sm:text-xl text-gray-800 mb-6">
          Hey! I’m <span className="font-semibold text-blue-500">Dilujan</span>, a full-stack development student focused on building websites and web apps using modern technologies. I love learning new tools, solving problems, and turning ideas into real projects.
        </p>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Current Skills:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-800 text-lg">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js (Learning)</li>
            <li>Node.js & Express (Learning)</li>
            <li>MongoDB (Learning)</li>
            <li>Git & GitHub</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">What I’m Working On Now:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-800 text-lg">
            <li>Improving my frontend UI skills</li>
            <li>Building full-stack MERN projects</li>
            <li>Learning APIs and backend logic</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">My Vision:</h3>
          <p className="text-lg text-gray-800">
            To become a professional full-stack developer and contribute to real industry-level applications.
          </p>
        </div>
      </div>
    </section>

    <section
      id="projects"
      className="bg-gradient-to-b from-gray-50 via-white to-blue-50 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          My Projects
        </h2>
        <p className="text-gray-700 mt-4 text-lg">
          Here are a few projects I’ve built or currently working on.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
        <div className="bg-white/30 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <img src="" alt="Portfolio Website" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Portfolio Website
            </h3>
            <p className="text-gray-800 text-sm sm:text-base">
              A clean and responsive personal portfolio built using HTML, CSS, and JavaScript. Features: smooth scrolling, responsive layout.
            </p>
          </div>
        </div>

        
        <div className="bg-white/30 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <img src="" alt="To-Do App" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              To-Do App
            </h3>
            <p className="text-gray-800 text-sm sm:text-base">
              A simple to-do application to add, edit, and delete tasks. Tech: HTML, CSS, JavaScript. Focus: DOM manipulation & basic CRUD actions.
            </p>
          </div>
        </div>

        
        <div className="bg-white/30 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <img src="" alt="Weather App" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Weather App
            </h3>
            <p className="text-gray-800 text-sm sm:text-base">
              Displays real-time weather using an external API. Tech: JavaScript, API (OpenWeather). Focus: API integration.
            </p>
          </div>
        </div>

        <div className="bg-white/30 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <img src="" alt="MERN Stack Project" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              MERN Stack Project (In Progress)
            </h3>
            <p className="text-gray-800 text-sm sm:text-base">
              Working on a small full-stack CRUD app to practice MongoDB, Express, React, and Node.js.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="contact"
      className="bg-gradient-to-b from-blue-50 via-white to-gray-100 py-20 px-6"
    >
      <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-md rounded-xl p-10 shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-gray-800 text-lg mb-6 text-center">
          I’d love to connect! If you have opportunities, collaborations, or just want to say hi — feel free to reach out.
        </p>

        
        <div className="mb-8 text-gray-800 space-y-2 text-center">
          <p><span className="font-semibold">Email:</span> your-email@example.com</p>
          <p><span className="font-semibold">Phone:</span> +94 XX XXX XXXX</p>
          <p><span className="font-semibold">Location:</span> Sri Lanka</p>
          <p><span className="font-semibold">GitHub:</span> <a href="#" className="text-blue-500 hover:underline">link</a></p>
          <p><span className="font-semibold">LinkedIn:</span> <a href="#" className="text-blue-500 hover:underline">link</a></p>
        </div>

        
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={5}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
 */}

 <nav class="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md border-b border-white/30 shadow-md">
  <ul class="flex gap-8 justify-center text-lg font-medium text-gray-800">
    <li class="hover:text-blue-500 cursor-pointer transition-colors duration-300">Home</li>
    <li class="hover:text-blue-500 cursor-pointer transition-colors duration-300">About</li>
    <li class="hover:text-blue-500 cursor-pointer transition-colors duration-300">Project</li>
    <li class="hover:text-blue-500 cursor-pointer transition-colors duration-300">Contact</li>
  </ul>
</nav>


<section
  id="home"
  class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-blue-50 text-gray-800 px-6"
>
  <h1 class="text-5xl sm:text-6xl font-extrabold mb-4 text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text">
    Hi, I’m <span class="text-blue-500">Dilujan</span> 👋
  </h1>
  <p class="text-xl sm:text-2xl mb-6 font-medium">
    Aspiring Full-Stack Developer (MERN Stack Enthusiast)
  </p>
  <p class="text-lg sm:text-xl mb-6 max-w-2xl text-center">
    I’m a passionate and self-driven developer, currently diving deep into full-stack development. 
    I love creating <span class="font-semibold text-blue-600">clean, responsive, and interactive web applications</span>.
  </p>

  <div class="mb-8 flex flex-col sm:flex-row gap-6 text-center">
    <div>
      <h2 class="text-2xl font-semibold mb-2 text-blue-500">What I Do:</h2>
      <ul class="list-disc list-inside space-y-1 text-lg">
        <li>Web Development</li>
        <li>Frontend UI Design</li>
        <li>Backend & API Development</li>
        <li>Learning MERN Stack</li>
      </ul>
    </div>
    <div>
      <h2 class="text-2xl font-semibold mb-2 text-purple-500">My Goal:</h2>
      <p class="text-lg max-w-xs">
        To grow as a full-stack developer and build real-world projects that make a positive impact.
      </p>
    </div>
  </div>
</section>


<section
  id="about"
  class="py-24 px-6 bg-gradient-to-r from-purple-50 via-white to-pink-50 text-gray-800"
>
  <div class="max-w-4xl mx-auto">
    <h2 class="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-purple-600">
      About Me
    </h2>
    <p class="text-lg sm:text-xl mb-6 text-center max-w-3xl mx-auto">
      Hey! I’m <span class="font-semibold text-pink-500">Dilujan</span>, a full-stack development student focused on building websites and web apps using modern technologies. I love learning new tools, solving problems, and turning ideas into real projects.
    </p>

    <div class="grid sm:grid-cols-2 gap-12 mt-12">
      <div>
        <h3 class="text-2xl font-semibold mb-3 text-blue-500">Current Skills:</h3>
        <ul class="list-disc list-inside space-y-2 text-lg">
          <li>HTML, CSS, JavaScript</li>
          <li>React.js (Learning)</li>
          <li>Node.js & Express (Learning)</li>
          <li>MongoDB (Learning)</li>
          <li>Git & GitHub</li>
          <li>Responsive Web Design</li>
        </ul>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-3 text-purple-500">What I’m Working On:</h3>
        <ul class="list-disc list-inside space-y-2 text-lg">
          <li>Improving my frontend UI skills</li>
          <li>Building full-stack MERN projects</li>
          <li>Learning APIs and backend logic</li>
        </ul>
      </div>
    </div>

    <div class="mt-12 text-center">
      <h3 class="text-2xl font-semibold mb-3 text-pink-500">My Vision:</h3>
      <p class="text-lg max-w-xl mx-auto">
        To become a professional full-stack developer and contribute to real industry-level applications.
      </p>
    </div>
  </div>
</section>


<section
  id="projects"
  class="bg-gradient-to-b from-gray-50 via-white to-blue-50 py-24 px-6"
>
  <div class="max-w-6xl mx-auto text-center mb-16">
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">
      My Projects
    </h2>
    <p class="text-gray-700 mt-4 text-lg">
      Here are a few projects I’ve built or currently working on.
    </p>
  </div>

  <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
    <div class="bg-white/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500 border border-white/20">
      <img src="" alt="Portfolio Website" class="w-full h-48 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-3">
          Portfolio Website
        </h3>
        <p class="text-gray-800 text-sm sm:text-base">
          A clean and responsive personal portfolio built using HTML, CSS, and JavaScript. Features: smooth scrolling, responsive layout.
        </p>
      </div>
    </div>

    <div class="bg-white/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500 border border-white/20">
      <img src="" alt="To-Do App" class="w-full h-48 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-3">
          To-Do App
        </h3>
        <p class="text-gray-800 text-sm sm:text-base">
          A simple to-do application to add, edit, and delete tasks. Tech: HTML, CSS, JavaScript. Focus: DOM manipulation & basic CRUD actions.
        </p>
      </div>
    </div>

    <div class="bg-white/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500 border border-white/20">
      <img src="" alt="Weather App" class="w-full h-48 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-3">
          Weather App
        </h3>
        <p class="text-gray-800 text-sm sm:text-base">
          Displays real-time weather using an external API. Tech: JavaScript, API (OpenWeather). Focus: API integration.
        </p>
      </div>
    </div>

    <div class="bg-white/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500 border border-white/20">
      <img src="" alt="MERN Stack Project" class="w-full h-48 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-3">
          MERN Stack Project (In Progress)
        </h3>
        <p class="text-gray-800 text-sm sm:text-base">
          Working on a small full-stack CRUD app to practice MongoDB, Express, React, and Node.js.
        </p>
      </div>
    </div>
  </div>
</section>


<section
  id="contact"
  class="bg-gradient-to-b from-blue-50 via-white to-gray-100 py-24 px-6"
>
  <div class="max-w-4xl mx-auto bg-white/30 backdrop-blur-md rounded-2xl p-12 shadow-xl border border-white/20 hover:shadow-2xl transition-shadow duration-500">
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
      Contact Me
    </h2>
    <p class="text-gray-800 text-lg mb-6 text-center">
      I’d love to connect! If you have opportunities, collaborations, or just want to say hi — feel free to reach out.
    </p>

    <div class="mb-8 text-gray-800 space-y-2 text-center">
      <p><span class="font-semibold">Email:</span> your-email@example.com</p>
      <p><span class="font-semibold">Phone:</span> +94 XX XXX XXXX</p>
      <p><span class="font-semibold">Location:</span> Sri Lanka</p>
      <p><span class="font-semibold">GitHub:</span> <a href="#" class="text-blue-500 hover:underline">link</a></p>
      <p><span class="font-semibold">LinkedIn:</span> <a href="#" class="text-blue-500 hover:underline">link</a></p>
    </div>

    <form class="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm transition-shadow duration-300"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm transition-shadow duration-300"
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm transition-shadow duration-300"
          rows={5}
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

      

        </>
    )
}
