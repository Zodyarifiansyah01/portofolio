import { imagesdata } from "../../data/index";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ListWorks = () => {
   const getLimitedDescription = (desc) => {
      const paragraphs = desc.split("\n");
      return paragraphs.slice(0, 3).join("\n");
   };

   const cardRef = useRef([]);
   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      cardRef.current.forEach((card) => {
         gsap.fromTo(
            card,
            {
               opacity: 0, // Mulai dari transparan
               y: 40, // Mulai dari posisi lebih rendah
            },
            {
               opacity: 1,
               y: 0,
               duration: 1.5,
               ease: "power4.out",
               scrollTrigger: {
                  trigger: card,
                  once: true,
                  toggleActions: "play none none none",
                  invalidateOnRefresh: true,
                  start: "top 95%", // Animasi mulai ketika card hampir muncul
               },
            }
         );
      });
   }, []);

   return (
      <div className=" mx-auto">
         <div className="grid grid-cols-12 gap-8">
            {imagesdata.map((item, index) => (
               <Link to={`/Detail-Works/${item.slug}`} key={item.id} className="col-span-12 md:col-span-6">
                  <div
                     className="cursor-pointer"
                     ref={(el) => (cardRef.current[index] = el)}
                  >
                     <div>
                        <img
                           src={item.img}
                           alt={item.titleApp}
                           className="rounded-3xl h-60 w-full object-cover "
                        />
                        <div className="flex flex-col gap-4 mt-4">
                           <h1>{item.title}</h1>
                           <p>{item.about}</p>
                           <div className="flex flex-wrap gap-1">
                              {item.tagList.map((tag, index) => (
                                 <span key={index} className="outline-1 flex-wrap outline-gray-300 rounded-full px-2 py-1 text-sm mr-2 mb-2 bg-gray-100 text-gray-700">
                                    {tag}
                                 </span>
                              ))}

                           </div>
                        </div>
                     </div>

                  </div>
               </Link>
            ))}
         </div>
      </div >
   );
};

export default ListWorks;



{/* <div className="flex flex-col gap-4 md:col-span-4">
                           <div className="space-y-1">
                              <p className="font-medium text-base sm:text-lg md:text-xl">
                                 {item.tahunAwal}
                              </p>
                              <p className="text-sm sm:text-base">
                                 {item.bulanAwal}
                              </p>
                              <p className="text-sm sm:text-base">
                                 {item.title}
                              </p>
                           </div>
                        </div>

                        <div className="flex flex-col md:col-span-8 gap-4">
                           <div className="relative flex flex-col md:flex-row gap-4">
                              <div className="space-y-4 w-full">
                                 <img
                                    src={item.img}
                                    alt={item.titleApp}
                                    className="hidden sm:block rounded-lg w-full h-60 object-cover object-center shadow-md"
                                 />
                              </div>
                              <div className="space-y-2 absolute top-8 left-4 hidden md:block">
                                 <h2 className=" font-noto-serif text-xl md:text-2xl font-medium">
                                    {item.titleApp}
                                 </h2>
                              </div>
                           </div>
                           <div className="md:hidden space-y-4">
                              <h2 className=" font-noto-serif text-xl font-medium">
                                 {item.titleApp}
                              </h2>
                              <img
                                 src={item.img}
                                 alt={item.titleApp}
                                 className="rounded-lg w-full h-60 object-cover object-center shadow-md"
                              />
                           </div>
                           <div className="text-sm flex flex-col justify-end mt-4">
                              <p className="text-justify">
                                 {getLimitedDescription(item.desc)}{" "}
                              </p>
                           </div>
                        </div> */}