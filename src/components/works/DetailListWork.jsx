import { useParams } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import DetailUIUX from "./detailWorks/DetailUIUX";
import DetailSiris from "./detailWorks/DetailSiris";
import DetaiMyWali from "./detailWorks/DetailMyWali";

const DetailListWork = () => {
  const { slug } = useParams();

  const detailComponents = {
    "UIUX-Course-Binary": <DetailUIUX dataId={slug} />,
    "LPPM-Universitas": <DetailSiris dataId={slug} />,
    "My-Wali": <DetaiMyWali dataId={slug} />
  };

  return (
    <div className=" mx-auto">

      {detailComponents[slug] && (
        <motion.div
          className="text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {detailComponents[slug]}
        </motion.div>
      )}
    </div>
  );
};

export default DetailListWork;
