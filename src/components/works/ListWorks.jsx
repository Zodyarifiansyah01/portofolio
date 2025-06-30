import { imagesdata } from "../../data/index";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const ListWorks = () => {
   // const getLimitedDescription = (desc) => {
   //    const paragraphs = desc.split("\n");
   //    return paragraphs.slice(0, 3).join("\n");
   // };

   const cardRef = useRef([]);
   useEffect(() => {
      // Buat context GSAP

      if (!cardRef.current || cardRef.current.length === 0) return;

      const ctx = gsap.context(() => {
         cardRef.current.forEach(card => {
            if (!card) return;
            gsap.fromTo(card,
               { opacity: 0, y: 40 },
               {
                  opacity: 1,
                  y: 0,
                  duration: 1.5,
                  scrollTrigger: {
                     trigger: card,
                     once: true,
                     start: "top bottom",
                     end: "bottom 80%",
                  }
               }
            );
         });
      });

      // Auto-cleanup
      return () => {
         ctx.revert()
         ScrollTrigger.killAll();
      };
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
                           <h1 className="font-bold text-2xl">{item.titleApp}</h1>
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