import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutMe from "./Section/aboutme";
import CardExperience from "./Section/cardExperience";

const PageAbout = () => {
   gsap.registerPlugin(ScrollTrigger);
   return (
      <div className="bg-white text-black ">
         <AboutMe />
         {/* <CardExperience /> */}
         {/* <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
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
            </p> */}
      </div>
   );
};

export default PageAbout



// < div className = "container mx-auto w-screen h-[3000px]" >
//    {/* Pinned Section */ }
//    < div className = "about-pin flex flex-col items-center px-5 md:px-0 md:pt-56 xl:pt-80 relative" >
//          <h1 className="text-4xl font-bold mb-6 border-b pb-2">About Me</h1>

//          <p className="text-lg leading-relaxed mb-4">
//             Saya adalah lulusan Program Studi Teknik Informatika dari Universitas Esa Unggul pada tahun 2023, dengan minat mendalam dalam pengembangan web dan desain UI/UX. Selama masa studi, saya aktif sebagai anggota Dewan Perwakilan Mahasiswa, di mana saya mengembangkan keterampilan kepemimpinan dan manajemen acara yang memungkinkan saya untuk memberikan kontribusi yang signifikan dalam tim.
//          </p>

//          <p className="text-lg leading-relaxed mb-4">
//             Saya senang mengubah masalah yang kompleks menjadi desain yang sederhana, indah, dan intuitif. Saat tidak sedang menulis kode, saya menikmati belajar teknologi baru, berkontribusi dalam proyek open source, atau mengeksplorasi tren desain terkini.
//          </p>
//       </ >

// <div className="about-studi mt-32 px-5 md:px-0 absolute">
//    <h2 className="text-4xl font-bold mb-6 border-b pb-2">Universitas Indonusa Esa Unggul</h2>
// </div>

//    </div >