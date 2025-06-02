import { div } from "framer-motion/client"

const PageAbout = () => {
   return (
      <div className="bg-white text-black py-12">
         <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6 border-b pb-2">About Me</h1>

            <p className="text-lg leading-relaxed mb-4">
               Hi! I'm <span className="font-semibold">Zody Arifiansyah</span>, a passionate front-end developer with a strong focus on building clean, responsive, and accessible web applications using modern technologies like React, Tailwind CSS, and more.
            </p>

            <p className="text-lg leading-relaxed mb-4">
               I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, I enjoy learning new technologies, contributing to open source, or exploring design trends.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
               <li>JavaScript (ES6+)</li>
               <li>React</li>
               <li>Tailwind CSS, </li>
               <li>Git & GitHub</li>
               <li>Responsive Web Design</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
            <p className="text-lg">
               Want to work together or have a question? Feel free to reach out via <a href="mailto:kamu@email.com" className="text-blue-600 underline">email</a> or connect with me on <a href="https://www.linkedin.com/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
            </p>
         </div>
      </div>
   );
};

export default PageAbout