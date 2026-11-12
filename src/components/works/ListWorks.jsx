import { imagesdata } from "../../data/index";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSound } from "../../context/SoundContext";

gsap.registerPlugin(ScrollTrigger);
const ListWorks = () => {
  // const getLimitedDescription = (desc) => {
  //    const paragraphs = desc.split("\n");
  //    return paragraphs.slice(0, 3).join("\n");
  // };

  const { handleHover, handleClick } = useSound();

  const cardRef = useRef([]);
  useEffect(() => {
    // Buat context GSAP

    if (!cardRef.current || cardRef.current.length === 0) return;

    const ctx = gsap.context(() => {
      cardRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
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
            },
          },
        );

        gsap.fromTo(
          card.querySelectorAll(".work-tag"),
          { opacity: 0, y: 10, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: 0.07,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              once: true,
              start: "top bottom",
            },
          },
        );
      });
    });

    // Auto-cleanup
    return () => {
      ctx.revert();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className=" mx-auto">
      <div className="grid grid-cols-12 gap-8">
        {imagesdata.map((item, index) => (
          <Link
            to={`/Detail-Works/${item.slug}`}
            key={item.id}
            className="col-span-12 md:col-span-6"
          >
            <div
              className="cursor-pointer"
              onMouseEnter={handleHover}
              onClick={handleClick}
              ref={(el) => (cardRef.current[index] = el)}
            >
              <div className="w-full flex justify-center gap-4">
                <div className="w-full aspect-[16/9] md:aspect-[16/9]">
                  <img
                    src={item.img}
                    alt={item.titleApp}
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>

                <div className="w-full flex flex-col gap-4 mt-4">
                  <h1 className="font-bold text-2xl">{item.titleApp}</h1>
                  <p>{item.about}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tagList.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="work-tag group inline-flex items-center gap-2 rounded-full border border-[#171717]/15 bg-white/35 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#171717]/65 transition-colors duration-300 hover:border-[#d45d3f]/50 hover:bg-[#d45d3f]/10 hover:text-[#d45d3f] sm:text-xs"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-[#d45d3f]/60 transition-transform duration-300 group-hover:scale-150 group-hover:bg-[#d45d3f]"
                        />
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
    </div>
  );
};

export default ListWorks;
