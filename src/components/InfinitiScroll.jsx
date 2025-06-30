// filepath: /E:/Pemerograman/Reactjs/WebsitePortofolio/src/components/InfinitiScroll.jsx
import React from "react";

const InfinitiScroll = () => {
   return (
      <div className="tag-list">
         <div className="fade fade-left"></div>
         <div
            className="loop-slider"
            style={{ "--duration": "15951ms", "--direction": "normal" }}
         >
            <div className="inner">
               <div className="tag">
                  <span>#</span> JavaScript
               </div>
               <div className="tag">
                  <span>#</span> webdev
               </div>

               <div className="tag">
                  <span>#</span> UI/UX
               </div>
               <div className="tag">
                  <span>#</span> JavaScript
               </div>
               <div className="tag">
                  <span>#</span> webdev
               </div>

               <div className="tag">
                  <span>#</span> UI/UX
               </div>
            </div>
         </div>
         <div
            className="loop-slider"
            style={{ "--duration": "19260ms", "--direction": "reverse" }}
         >
            <div className="inner">
               <div className="tag">
                  <span>#</span> webdev
               </div>
               <div className="tag">
                  <span>#</span> Gatsby
               </div>
               <div className="tag">
                  <span>#</span> JavaScript
               </div>
               <div className="tag">
                  <span>#</span> Tailwind
               </div>
               <div className="tag">
                  <span>#</span> webdev
               </div>

               <div className="tag">
                  <span>#</span> JavaScript
               </div>
               <div className="tag">
                  <span>#</span> Tailwind
               </div>
            </div>
         </div>
         <div className="fade fade-right"></div>
      </div>
   );
};

export default InfinitiScroll;
