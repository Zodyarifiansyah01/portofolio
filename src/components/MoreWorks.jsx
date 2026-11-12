import ListWorks from "./works/ListWorks";

const MoreWorks = () => {
   return (
      <div id="works" className="text-[#171717]">
         <div className="grid grid-cols-1 gap-6 overflow-hidden pt-6 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
               <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d45d3f] sm:text-xs">
                  Portfolio / Selected work
               </p>
               <p className="max-w-xs text-sm leading-relaxed text-[#171717]/60 md:text-base">
                  More experience I&apos;ve worked on
               </p>
            </div>
            <div className="md:col-span-8">
               <h2 className="font-bold text-4xl leading-[0.95] tracking-[-0.02em] sm:text-6xl md:text-7xl">
                  MORE <span className="font-noto-serif font-normal">WORKS</span>
               </h2>
            </div>
         </div>

         <div className="my-6 h-px w-full bg-[#171717]/25 md:my-8" />
         <div className="my-8 md:my-12">
            <ListWorks />
         </div>
      </div>
   );
};

export default MoreWorks;
