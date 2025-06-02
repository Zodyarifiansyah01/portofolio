
import { useEffect } from "react";
const OverflowBody = ({ OverflowBody }) => {
   useEffect(() => {
      if (OverflowBody) {
         const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
         document.body.classList.add('overflow-hidden');
         document.body.style.paddingRight = `${scrollBarWidth}px`;
      } else {
         document.body.classList.remove('overflow-hidden');
         document.body.style.paddingRight = '0px';
      }

      return () => {
         document.body.classList.remove('overflow-hidden');
         document.body.style.paddingRight = '0px';
      };
   }, [OverflowBody]);

}

export default OverflowBody