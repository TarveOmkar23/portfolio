import{ motion } from "framer-motion";
import { useEffect, useState } from "react";
//import CountUp from "react-countup"
import { FaGithub, FaLinkedin, FaEnvelope, FaBrain, FaChartBar,
  FaGlobe,
  FaTools,
  FaBuilding,
  FaRobot,
  FaRocket,
  FaShieldAlt,
  FaNetworkWired,
  FaClipboardList,
  FaSchool, } from "react-icons/fa"

import { TypeAnimation } from "react-type-animation";
import { FiMoon, FiSun } from "react-icons/fi"

import profile from "./assets/profile.jpeg"
import SLTS from "./assets/SLTS.png"
import CPP from "./assets/CPP.jpeg"
import { FaR } from "react-icons/fa6";

// import resume from "./resume/resume.pdf"

// import {
//   SiPython,
//   SiReact,
//   SiFlask,
//   SiPowerbi,
//   SiNumpy,
//   SiPandas,
//   SiHtml5,
//   SiGithub,
// } from "react-icons/si"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])
  useEffect(() => {

    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }

  }, [])

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-gray-900 dark:text-white dark:bg-black transition duration-300">
      <div
        className="fixed w-72 h-72 rounded-full pointer-events-none z-0 blur-3xl opacity-20 dark:opacity-30 bg-blue-300 dark:bg-blue-500 transition duration-300"
        style={{
          left: position.x - 150,
          top: position.y - 150,
        }}
      ></div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 bg-white dark:bg-[#111111] dark:bg-black/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 transition duration-300">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white transition duration-300">
          Omkar
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-600 dark:text-gray-300 font-medium">
          <li>
            <a href="#home" className="hover:text-black dark:hover:text-white transition duration-300 hover:underline underline-offset-8">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-black dark:hover:text-white transition duration-300 hover:underline underline-offset-8">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-black dark:hover:text-white transition duration-300 hover:underline underline-offset-8">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-black dark:hover:text-white transition duration-300 hover:underline underline-offset-8">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-black dark:hover:text-white transition duration-300 hover:underline underline-offset-8">
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl text-gray-700 hover:scale-110 transition duration-300"
        >

          {darkMode ? <FiSun /> : <FiMoon />}

        </button>
        <button
          className="md:hidden text-3xl text-gray-800 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white dark:bg-[#111111] transition duration-300 backdrop-blur-md shadow-xl border-t border-gray-200 md:hidden">

            <ul className="flex flex-col items-center gap-8 py-10 text-gray-700 font-semibold text-lg">

              <li>
                <a href="#home" className="hover:text-black transition duration-300" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-black transition duration-300" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-black transition duration-300" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>

              <li>
                <a href="#experience" className="hover:text-black transition duration-300" onClick={() => setMenuOpen(false)}>
                  Experience
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-black transition duration-300" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>

            </ul>

          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden px-6 md:px-12 py-20 md:py-28 flex flex-col-reverse md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        <div className="absolute top-32 left-10 w-72 h-72 bg-gray-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gray-400 rounded-full blur-3xl opacity-20"></div>
        {/* Left Content */}
        <motion.div className="max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-gray-500 dark:text-gray-300 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent dark:text-white">
            Omkar Tarve
          </h1>

          <TypeAnimation
            sequence={[
              "Machine Learning Enthusiast",
              2000,
              "Data Visualization Specialist",
              2000,
              "AI Project Developer",
              2000,
              "Python Developer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-3xl text-gray-600 dark:text-gray-300 mt-6 font-semibold"
          />

          <p className="text-gray-500 dark:text-gray-300 mt-6 leading-8 text-lg">
            Passionate about Machine Learning, AI applications,
            and data visualization. I enjoy building practical
            projects using Python, Flask, and modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mt-10">

            <a
              href="#projects"
              className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

           <a
              href="/Omkar_Tarve.pdf"
              download
              className="border border-gray-400 px-6 py-3 rounded-xl hover:bg-gray-100 hover:scale-105 transition duration-300"
            >
              Download Resume
            </a>

          </div>
          <div className="flex gap-5 mt-8 text-2xl text-gray-600 dark:text-gray-300">

            <a
              href="https://github.com/TarveOmkar23"
              target="_blank"
              className="hover:text-black hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/omkarshaniltarve"
              target="_blank"
              className="hover:text-black hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=omkartarve23@gmail.com"
              className="hover:text-black hover:scale-110 transition duration-300"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
        className="mt-16 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        >

          <div className="w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-300 rounded-[40px] shadow-2xl overflow-hidden border border-gray-200">
            <img
              src={profile}
              alt="Omkar"
              className="w-full h-full object-cover rounded-[40px] hover:scale-105 transition duration-500"
            />

          </div>

        </motion.div>
      </section>
      {/* Stats Section */}
      {/* <section className="px-6 md:px-12 py-16">

        <motion.div
          className="max-w-7xl  mx-auto grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="bg-white dark:bg-[#111111] transition duration-300 p-8 rounded-3xl shadow-sm text-center border border-gray-100">

            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              2+
            </h3>

            <p className="text-gray-500">
              Major Projects
            </p>

          </div>

          <div className="bg-white dark:bg-[#111111] transition duration-300 p-8 rounded-3xl shadow-sm text-center border border-gray-100">

            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              10+
            </h3>

            <p className="text-gray-500">
              Technologies
            </p>

          </div>

          <div className="bg-white dark:bg-[#111111] transition duration-300 p-8 rounded-3xl shadow-sm text-center border border-gray-100">

            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              100+
            </h3>

            <p className="text-gray-500">
              Learning Hours
            </p>

          </div>

          <div className="bg-white dark:bg-[#111111] transition duration-300 p-8 rounded-3xl shadow-sm text-center border border-gray-100">

            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              5+
            </h3>

            <p className="text-gray-500">
              Tools & Platforms
            </p>

          </div>

        </motion.div>

      </section> */}
      {/* About Section */}
      <section id="about" className="px-6 md:px-12 py-20 md:py-24 border-t border-gray-200">

        <div className="max-w-7xl mx-auto">

          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="bg-white dark:bg-[#111111] transition duration-300 p-10 rounded-3xl shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-9">

              I am an Information Technology student passionate about
              Machine Learning, Artificial Intelligence, and modern
              web technologies. I enjoy building intelligent systems
              that solve real-world problems through data-driven solutions.

              <br /><br />

              My technical interests include Machine Learning,
              Data Visualization, AI-powered applications,
              and responsive frontend development. I have worked on
              projects such as Sign Language Translation Systems
              and Car Price Prediction platforms using Python,
              Flask, Scikit-learn, and modern development tools.

              <br /><br />

                Along with academic learning, I have completed
                industrial training and internship programs focused on
                AI/ML technologies, where I gained practical exposure
                to real-world development workflows and problem-solving.
              
              <br /><br />

              Currently, I am focused on improving my skills in
              Machine Learning, Data Analytics, and modern
              full-stack technologies while continuously building
              impactful and user-focused applications.
            </p>

          </motion.div>

        </div>

      </section>
      {/* Skills Section */}
      <section id="skills" className="px-6 md:px-12 py-20 md:py-24 bg-white dark:bg-[#111111] transition duration-300">

        <div className="max-w-7xl mx-auto">

          <motion.h2
            className="text-4xl  font-bold text-gray-900  dark:text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="bg-gray-50 dark:bg-[#111827] p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-transparent dark:border-gray-800">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black text-white shadow-md flex items-center justify-center text-xl">
                  <FaBrain />
                </div>

                <h3 className="font-semibold text-2xl text-gray-800 dark:text-white transition duration-300">
                  Machine Learning
                </h3>

              </div>

              <div className="space-y-3 text-gray-500 dark:text-gray-300 transition duration-300">
                <p>• Model Training</p>
                <p>• Prediction Systems</p>
                <p>• Scikit-learn</p>
                <p>• NumPy</p>
                <p>• Pandas</p>
                <p>• Data Preprocessing</p>
                <p>• Model Evaluation</p>
                <p>• Feature Engineering</p>
              </div>

            </div>

            <div className="bg-gray-50 dark:bg-[#111827] p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-transparent dark:border-gray-800">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black text-white shadow-md flex items-center justify-center text-xl">
                  <FaChartBar />
                </div>

                <h3 className="font-semibold text-2xl text-gray-800 dark:text-white transition duration-300">
                  Data Visualization
                </h3>

              </div>

              <div className="space-y-3 text-gray-500 dark:text-gray-300 transition duration-300">
                <p>• Power BI</p>
                <p>• Matplotlib</p>
                <p>• Interactive Dashboards</p>
              </div>

            </div>

            <div className="bg-gray-50 dark:bg-[#111827] p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-transparent dark:border-gray-800">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black text-white shadow-md flex items-center justify-center text-xl">
                  <FaGlobe />
                </div>

                <h3 className="font-semibold text-2xl text-gray-800 dark:text-white transition duration-300">
                  Web Development
                </h3>

              </div>

              <div className="space-y-3 text-gray-500 dark:text-gray-300 transition duration-300">
                <p>• React.js</p>
                <p>• HTML</p>
                <p>• CSS</p>
                <p>• Flask</p>
                <p>• Tailwind CSS</p>
                <p>• Responsive UI Design</p>
              </div>

            </div>

            <div className="bg-gray-50 dark:bg-[#111827] p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-transparent dark:border-gray-800">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black text-white shadow-md flex items-center justify-center text-xl">
                  <FaTools />
                </div>

                <h3 className="font-semibold text-2xl text-gray-800 dark:text-white transition duration-300">
                  Tools & Platforms
                </h3>

              </div>

              <div className="space-y-3 text-gray-500 dark:text-gray-300 transition duration-300">
                <p>• Git</p>
                <p>• GitHub</p>
                <p>• VS Code</p>
                <p>• Jupyter Notebooks</p>
                <p>• Google Colab</p>
              </div>

            </div>

          </motion.div>

        </div>

      </section>
      {/* Experience Section */}
    <section
      id="experience"
      className="px-6 md:px-12 py-20 md:py-24 border-t border-gray-200 bg-white dark:bg-[#111111] transition duration-300"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education & Learning Journey
        </motion.h2>

        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Education Card */}
          <div className="bg-white dark:bg-[#111111] transition duration-300 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 border border-gray-100 dark:border-gray-800">

            <p className="text-sm text-gray-400 mb-3">
              Academic Journey
            </p>

            <div className="flex items-center gap-4 mb-5">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-black to-gray-700 text-white flex items-center justify-center text-2xl shadow-md">
                <FaSchool />
              </div>

              <div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Bachelor of Engineering in Information Technology
                </h3>

                <p className="text-gray-500">
                  BE Information Technology Graduate
                </p>

              </div>

            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">
              Completed Bachelor of Engineering in Information Technology
              with strong interest in Machine Learning,
              Artificial Intelligence, Data Visualization,
              and modern software development.
            </p>

          </div>

          {/* Learning Card */}
          <div className="bg-white dark:bg-[#111111] transition duration-300 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 border border-gray-100 dark:border-gray-800">

            <p className="text-sm text-gray-400 mb-3">
              Technical Learning
            </p>

            <div className="flex items-center gap-4 mb-5">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-black to-gray-700 text-white flex items-center justify-center text-2xl shadow-md">
                <FaBrain />
              </div>

              <div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Machine Learning & AI Development
                </h3>

                <p className="text-gray-500">
                  AI/ML Learning Journey
                </p>

              </div>

            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">
              Learned Machine Learning concepts, prediction systems,
              data analysis, and AI application development using
              Python, Scikit-learn, Flask, and visualization tools.
            </p>

          </div>

          {/* Industry Card */}
          <div className="bg-white dark:bg-[#111111] transition duration-300 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 border border-gray-100 dark:border-gray-800">

            <p className="text-sm text-gray-400 mb-3">
              Industry Exposure
            </p>

            <div className="flex items-center gap-4 mb-5">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-black to-gray-700 text-white flex items-center justify-center text-2xl shadow-md">
                <FaRocket />
              </div>

              <div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Internships & Industrial Training
                </h3>

                <p className="text-gray-500">
                  Real-World Learning Experience
                </p>

              </div>

            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">
              Completed AI/ML internship programs and industrial
              training with practical exposure to real-world
              development workflows, analytics, and intelligent systems.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
      {/* Internship Section */}
      <section
        id="internships"
        className="px-6 md:px-12 py-20 md:py-24 border-t border-gray-200 bg-gray-50 dark:bg-[#111111] transition duration-300"
      >

        <div className="max-w-7xl mx-auto">

          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white  mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Internships & Training
          </motion.h2>

          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Internship Card */}
            <div className="bg-white dark:bg-[#111111] transition duration-300 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 border border-gray-100">

              <p className="text-sm text-gray-400 mb-3">
                Jun 2025
              </p>

              <div className="flex items-center gap-4 mb-5">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-black to-gray-700 text-white flex items-center justify-center text-2xl shadow-md">
                  <FaBuilding />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Machine Learning Internship
                  </h3>

                  <p className="text-gray-500">
                    Sunbeam Infotech Pvt. Ltd., Pune
                  </p>

                </div>

              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">
                Completed Industrial Training and Internship Program
                focused on Machine Learning concepts, AI applications,
                and practical exposure to intelligent systems.
              
              </p>
              <br />

              <a
                href="https://drive.google.com/file/d/1oIhkeKywA8FZXpPyHADJqZ5IQD9lZuhv/view?usp=drive_link"
                target="_blank"
                className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
              >
                View Certificate
              </a>

            </div>

            {/* Internship Card */}
            <div className="bg-white dark:bg-[#111111] transition duration-300 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 border border-gray-100">

              <p className="text-sm text-gray-400 mb-3">
                June 2024 – July 2024
              </p>

              <div className="flex items-center gap-4 mb-5">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-black to-gray-700 text-white flex items-center justify-center text-2xl shadow-md">
                  <FaRobot />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    IBM SkillBuild AI/ML Internship
                  </h3>

                  <p className="text-gray-500">
                    IBM SkillBuild × CSRBOX
                  </p>

                </div>

              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">
                Participated in an online AI/ML Internship Program
                hosted by IBM SkillBuild in collaboration with CSRBOX,
                gaining exposure to machine learning workflows and AI concepts.
              </p>
              <br />

              <a
                href="https://drive.google.com/file/d/1BN_jS6903Fwva9SUjolq1WWOSVPP7XWF/view?usp=sharing"
                target="_blank"
                className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
              >
                View Certificate
              </a>

            </div>

            {/* Internship Card */}
            <div className="bg-white dark:bg-[#111111] transition duration-300 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 border border-gray-100">

              <p className="text-sm text-gray-400 mb-3">
                July 2025
              </p>

              <div className="flex items-center gap-4 mb-5">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-black to-gray-700 text-white flex items-center justify-center text-2xl shadow-md">
                  <FaRocket />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    IBM SkillBuild Agentic AI Program
                  </h3>

                  <p className="text-gray-500">
                    IBM SkillBuild × CSRBOX × Learnovate
                  </p>

                </div>

              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">
                Successfully completed a 4-week project-based learning
                program on Agentic AI focused on becoming an
                AI Agent Architect through hands-on AI learning.

                
              </p>
              <br />

              <a
                href="https://drive.google.com/file/d/1Tb8vtCmVniP2w9NLl70lCr9GswS8LZdX/view?usp=sharing"
                target="_blank"
                className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
              >
                View Certificate
              </a>

            </div>

          </motion.div>

        </div>

      </section>
      {/* Certifications Section */}
      <section
        id="certifications"
        className="px-6 md:px-12 py-20 md:py-24 border-t border-gray-200 bg-gray-50 dark:bg-[#111111] transition duration-300"
      >

        <div className="max-w-7xl mx-auto">

          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Certificate Card */}
            <div
              // onClick={() =>
              //   setSelectedProject({
              //     title: "Sign Language Translation System",
              //     image: SLTS,
              //     description:
              //       "AI-powered system designed to recognize and translate sign language gestures using Machine Learning and computer vision techniques.",
              //     technologies: ["Python", "Machine Learning", "Flask"],
              //     github: "https://github.com/TarveOmkar23/Sign-Language-Translation-System",
              //     demo: "https://drive.google.com/file/d/1NJjJhHAAaqlRLwiYlML3YVd2Y73Haw1u/view?usp=drive_link",
              //   })
              // }
              className="bg-white dark:bg-[#111827] cursor-pointer p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition duration-300 border border-gray-100 dark:border-gray-800"
            >

              <p className="text-sm text-gray-400 mb-3">
                MasterCard × Forage
              </p>

              <div className="flex items-center gap-4 mb-5">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-black to-gray-700 text-white flex items-center justify-center text-2xl shadow-md">
                  <FaShieldAlt />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Cybersecurity Job Simulation
                </h3>

              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg mb-6">
                Completed practical cybersecurity simulation tasks including
                phishing awareness, security analysis, and real-world
                cybersecurity workflow understanding through Forage.
              </p>

              <a
                href="https://drive.google.com/file/d/1i9Vzk1DhZ8BgBth9qiRNdfzbrWJZkydR/view?usp=sharing"
                target="_blank"
                className="inline-block bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
              >
                View Certificate
              </a>

            </div>

            {/* Certificate Card */}
            <div
              // onClick={() =>
              //   setSelectedProject({
              //     title: "Car Price Prediction System",
              //     image: CPP,
              //     description:
              //       "Machine Learning web application that predicts car prices based on user inputs using trained Random Forest models and Flask integration.",
              //     technologies: ["Python", "Flask", "Random Forest"],
              //     github: "#",
              //     demo: "https://drive.google.com/file/d/1oT8eUEWbiXdrhI5AD9utK81jrRIQSJL2/view?usp=sharing",
              //   })
              // }
              className="bg-white dark:bg-[#111827] cursor-pointer p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition duration-300 border border-gray-100 dark:border-gray-800"
            >
              <p className="text-sm text-gray-400 mb-3">
                Cisco Networking Academy
              </p>

              <div className="flex items-center gap-4 mb-5">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-black to-gray-700 text-white flex items-center justify-center text-2xl shadow-md">
                  <FaGlobe />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Networking Basics
                </h3>

              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg mb-6">
                Learned networking fundamentals including IPv4/IPv6,
                router configuration, connectivity troubleshooting,
                and core networking concepts through Cisco Networking Academy.
              </p>

              <a
                href="https://drive.google.com/file/d/1i9Vzk1DhZ8BgBth9qiRNdfzbrWJZkydR/view?usp=sharing"
                target="_blank"
                className="inline-block bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
              >
                View Certificate
              </a>

            </div>
            {/* Certificate Card */}
            <div className="bg-white dark:bg-[#111827] p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100 dark:border-gray-800">

              <p className="text-sm text-gray-400 mb-3">
                The Digital Adda
              </p>

              <div className="flex items-center gap-4 mb-5">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-black to-gray-700 text-white flex items-center justify-center text-2xl shadow-md">
                  <FaShieldAlt />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Ethical Hacking & Cyber Security Professional
                </h3>

              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg mb-6">
                Gained knowledge of cybersecurity practices, ethical hacking,
                vulnerability assessment, and security fundamentals through
                professional-level cyber security training.
              </p>

              <a
                href="https://drive.google.com/file/d/1J_8KHk1a8WVWzLZNgqATB3kF-5iiPpmm/view?usp=sharing"
                target="_blank"
                className="inline-block bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
              >
                View Certificate
              </a>

            </div>
            {/* Certificate Card */}
            <div className="bg-white dark:bg-[#111827] p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100 dark:border-gray-800">

              <p className="text-sm text-gray-400 mb-3">
                IBM SkillsBuild
              </p>

              <div className="flex items-center gap-4 mb-5">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-black to-gray-700 text-white flex items-center justify-center text-2xl shadow-md">
                  <FaClipboardList />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Project Management Fundamentals
                </h3>

              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg mb-6">
                Learned project planning, workflow management,
                team coordination, and organizational fundamentals
                through IBM SkillsBuild professional learning modules.
              </p>

              <a
                href="https://drive.google.com/file/d/1L4zcM-rHZu6yJ3O5wZ8Fg9Qa6oZEd2FU/view?usp=drive_link"
                target="_blank"
                className="inline-block bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
              >
                View Certificate
              </a>

            </div>

          </motion.div>

        </div>

      </section>
      {/* Tech Stack Section */}
      {/* Tech Stack Section */}
      <section
        id="tech"
        className="px-6 md:px-12 py-20 border-t border-gray-200 bg-white"
      >

        <div className="max-w-7xl mx-auto">

          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-16 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tech Stack
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {[
              "🐍 Python",
              "⚛️ React",
              "🌐 HTML & CSS",
              "🎨 Tailwind",
              "🔥 Flask",
              "🗄️ SQL",
              "📊 Power BI",
              "📓 Jupyter",
              "🤖 Scikit-learn",
              "📈 Matplotlib",
              "🧠 Machine Learning",
              "💻 VS Code",
              "🔧 Git" ,
              "⚙️ GitHub",
              "☁️ Google Colab",
            ].map((tech, index) => (

              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center text-gray-600 text-lg"
              >
                <div className="text-4xl mb-4">
                  {tech.split(" ")[0]}
                </div>

                <p className="font-semibold text-gray-700 text-lg">
                  {tech.substring(2)}
                </p>
              </div>

            ))}

          </motion.div>

        </div>

      </section>
      {/* Projects Section */}
      <section id="projects" className="px-6 md:px-12 py-20 md:py-24 border-t border-gray-200">

        <div className="max-w-7xl mx-auto">

          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>

          <motion.div
            className="grid lg:grid-cols-2 gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Project Card */}
            <div className="bg-white dark:bg-[#111827] p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition duration-300 border border-gray-100 dark:border-gray-800">

              <div className="relative w-full h-44 rounded-2xl mb-5 overflow-hidden group">

                <img
                  src={SLTS}
                  alt="SLTS Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>

              </div>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
                Sign Language Translation System
              </h3>

              <p className="text-gray-500 dark:text-gray-300 leading-7 text-lg">
                AI-powered system designed to recognize and translate
                sign language gestures using Machine Learning and
                computer vision techniques.
              </p>

              <div className="flex gap-3 mt-6 flex-wrap">

                <span className="bg-gray-100 dark:bg-[#1f2937] dark:text-gray-300 px-4 py-2 rounded-full text-sm transition duration-300">
                  Python
                </span>

                <span className="bg-gray-100 dark:bg-[#1f2937] dark:text-gray-300 px-4 py-2 rounded-full text-sm transition duration-300">
                  Machine Learning
                </span>

                <span className="bg-gray-100 dark:bg-[#1f2937] dark:text-gray-300 px-4 py-2 rounded-full text-sm transition duration-300">
                  Flask
                </span>

              </div>
              <div className="flex gap-4 mt-8">

                <a
                  href="https://github.com/TarveOmkar23/Sign-Language-Translation-System"
                  target="_blank"
                  className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
                >
                  GitHub
                </a>

                <a
                  href="https://drive.google.com/file/d/1NJjJhHAAaqlRLwiYlML3YVd2Y73Haw1u/view?usp=drive_link"
                  target="_blank"
                  className="border border-gray-300 px-5 py-2 rounded-xl hover:bg-gray-100 hover:scale-105 transition duration-300"
                >
                  Live Demo
                </a>

              </div>

            </div>
            {/* Project Card */}
            <div className="bg-white dark:bg-[#111827] p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition duration-300 border border-gray-100 dark:border-gray-800">

              <div className="relative w-full h-44 rounded-2xl mb-5 overflow-hidden group">

                <img
                  src={CPP}
                  alt="Car Price Prediction Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>

              </div>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
                Car Price Prediction System
              </h3>

              <p className="text-gray-500 dark:text-gray-300 leading-7 text-lg">
                Machine Learning web application that predicts
                car prices based on user inputs using trained
                Random Forest models and Flask integration.
              </p>

              <div className="flex gap-3 mt-6 flex-wrap">

                <span className="bg-gray-100 dark:bg-[#1f2937] dark:text-gray-300 px-4 py-2 rounded-full text-sm transition duration-300">
                  Python
                </span>

                <span className="bg-gray-100 dark:bg-[#1f2937] dark:text-gray-300 px-4 py-2 rounded-full text-sm transition duration-300">
                  Flask
                </span>

                <span className="bg-gray-100 dark:bg-[#1f2937] dark:text-gray-300 px-4 py-2 rounded-full text-sm transition duration-300">
                  Random Forest
                </span>

              </div>
              <div className="flex gap-4 mt-8">

                <a
                  href="#"
                  target="_blank"
                  className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
                >
                  GitHub
                </a>

                <a
                  href="https://drive.google.com/file/d/1oT8eUEWbiXdrhI5AD9utK81jrRIQSJL2/view?usp=sharing"
                  target="_blank"
                  className="border border-gray-300 px-5 py-2 rounded-xl hover:bg-gray-100 hover:scale-105 transition duration-300"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </section>
      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-12 py-20 md:py-24 bg-white dark:bg-[#111111] transition duration-300 border-t border-gray-200">

        <div className="max-w-7xl mx-auto">

          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>

          <div className="bg-gray-50 dark:bg-[#111827] p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 transition duration-300">

            <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300 break-words">

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=omkartarve23@gmail.com"
                className="block hover:text-black dark:hover:text-white transition duration-300"
              >
                <FaEnvelope />Email: omkartarve23@gmail.com
              </a>

              <a
                href="https://github.com/TarveOmkar23"
                target="_blank"
                className="block hover:text-black dark:hover:text-white transition duration-300"
              >
                <FaGithub /> GitHub: github.com/TarveOmkar23
              </a>

              <a
                href="https://linkedin.com/in/omkarshaniltarve"
                target="_blank"
                className="block hover:text-black dark:hover:text-white transition duration-300"
              >
                <FaLinkedin /> LinkedIn: linkedin.com/in/omkarshaniltarve
              </a>

            </div>

          </div>

        </div>

      </section>
      {/* Project Modal */}
      {selectedProject && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6">

          <div className="bg-white dark:bg-[#111827] max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl relative">

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-3xl text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300"
            >
              ×
            </button>

            {/* Project Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-72 object-cover"
            />

            {/* Content */}
            <div className="p-8">

              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-5">
                {selectedProject.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg mb-6">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-8">

                {selectedProject.technologies.map((tech, index) => (

                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-[#1f2937] dark:text-gray-300 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-300"
                >
                  GitHub
                </a>

                <a
                  href={selectedProject.demo}
                  target="_blank"
                  className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#1f2937] transition duration-300"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </div>

        </div>

      )}
      {/* Footer */}
      <footer className="px-6 md:px-12 py-10 border-t border-gray-200 bg-white dark:bg-[#111111] transition duration-300">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Omkar Tarve
            </h3>

            <p className="text-gray-500 dark:text-gray-300 transition duration-300">
              Machine Learning Enthusiast • AI Developer • Data Visualization
            </p>

          </div>

          <div className="flex gap-5 text-2xl text-gray-600 dark:text-gray-300">

            <a
              href="https://github.com/TarveOmkar23"
              target="_blank"
              className="hover:text-black dark:hover:text-white hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/omkarshaniltarve"
              target="_blank"
              className="hover:text-black dark:hover:text-white hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=omkartarve23@gmail.com"
              className="hover:text-black dark:hover:text-white hover:scale-110 transition duration-300"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="text-center mt-10 text-gray-400 dark:text-gray-500 text-sm transition duration-300">

          © 2026 Omkar Tarve. Built with React & Tailwind CSS.

        </div>

      </footer>

    </div>
  )
}

export default App