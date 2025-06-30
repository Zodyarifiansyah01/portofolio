import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
   const aboutRef = useRef(null);
   const studiRef = useRef(null);

   useEffect(() => {
      const ctx = gsap.context(() => {
         gsap.fromTo(
            aboutRef.current,
            { opacity: 0, y: 50 },
            {
               opacity: 1,
               y: 0,
               duration: 1.2,
               ease: 'power3.out',
               scrollTrigger: {
                  trigger: aboutRef.current,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse',
               }
            }
         );

         gsap.fromTo(
            studiRef.current,
            { opacity: 0, y: 100 },
            {
               opacity: 1,
               y: 0,
               duration: 1,
               ease: 'power2.out',
               scrollTrigger: {
                  trigger: studiRef.current,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse',
               }
            }
         );
      })

      return () => ctx.revert();
   }, []);

   return (
      <div className="w-screen bg-[url(https://sdmntprwestus3.oaiusercontent.com/files/00000000-e168-61fd-9f2a-c8a8fe8fa7c1/raw?se=2025-06-16T16%3A18%3A58Z&sp=r&sv=2024-08-04&sr=b&scid=4c374839-f8a8-5530-8fb4-1dba1716c928&skoid=732f244e-db13-47c3-bcc7-7ee02a9397bc&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-15T23%3A20%3A08Z&ske=2025-06-16T23%3A20%3A08Z&sks=b&skv=2024-08-04&sig=6VnCpALX528YKiS5FN00o10ktaVwz%2BOJlmvSkeoRuBs%3D)]">
         {/* Section 1 */}
         <section ref={aboutRef} className="h-screen flex flex-col justify-center items-center px-5 md:px-0">
            <h1 className="text-4xl font-bold mb-6 border-b pb-2">About Me</h1>
            <p className="text-lg text-center max-w-2xl mb-4">
               Saya adalah lulusan Program Studi Teknik Informatika dari Universitas Esa Unggul pada tahun 2023, dengan minat mendalam dalam pengembangan web dan desain UI/UX.
            </p>
            <p className="text-lg text-center max-w-2xl">
               Saya senang mengubah masalah yang kompleks menjadi desain yang sederhana, indah, dan intuitif.
            </p>
         </section>

         {/* Section 2 */}
         <section ref={studiRef} className="h-screen flex flex-col justify-center items-center px-5 md:px-0 bg-[url(https://sdmntprwestus2.oaiusercontent.com/files/00000000-3418-61f8-8f3a-28980062fbf7/raw?se=2025-06-16T16%3A20%3A30Z&sp=r&sv=2024-08-04&sr=b&scid=0ceb685d-f0d0-5702-b032-94a3603dc4fc&skoid=732f244e-db13-47c3-bcc7-7ee02a9397bc&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-16T07%3A08%3A46Z&ske=2025-06-17T07%3A08%3A46Z&sks=b&skv=2024-08-04&sig=TeE6mzqs4aG9OhTRW9hmHa3AZIbKPaMeNAbXc85bpzM%3D)]">
            <h2 className="text-4xl font-bold mb-6 border-b pb-2">Universitas Esa Unggul</h2>
            <p className="text-lg text-center max-w-2xl">
               Di sini saya menempuh pendidikan dan mengembangkan banyak keterampilan yang mendukung karier saya di dunia teknologi.
            </p>
         </section>
      </div>
   );
};

export default About;
