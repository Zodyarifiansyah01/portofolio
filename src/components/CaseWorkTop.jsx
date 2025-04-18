import { useLocation } from "react-router-dom";

const CaseWorkTop = () => {
   let location = useLocation().pathname
   const path = location.split("/").slice(1).join(" > ");


   return (
      <>
         <div className="bg-gray-300 h-[30%]">
            <p className="text-[#0d0d0d]">{path}</p>
         </div>
      </>
   )
}

export default CaseWorkTop;