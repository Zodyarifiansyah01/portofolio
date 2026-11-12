import { useParams } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import DetailUIUX from "../../pages/detailWorks/DetailUIUX";
import DetailSiris from "../../pages/detailWorks/DetailSiris";
import DetaiMyWali from "../../pages/detailWorks/DetailMyWali";
import DetailULT from "../../pages/detailWorks/DetailULT";

const DetailListWork = () => {
   const { slug } = useParams();

   const detailPages = {
      "UIUX-Course-Binary": DetailUIUX,
      "LPPM-Universitas": DetailSiris,
      "My-Wali": DetaiMyWali,
      "Unit-Layanan-Terpadu": DetailULT,
   };
   const DetailPage = detailPages[slug];

   return (
      <div className=" mx-auto">
         {DetailPage ? (
            <motion.div
               className="text-justify"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.8 }}
            >
               <DetailPage dataId={slug} />
            </motion.div>
         ) : (
            <div className="py-16 text-center text-xl font-semibold">
               Proyek tidak ditemukan.
            </div>
         )}
      </div>
   );
};

export default DetailListWork;
