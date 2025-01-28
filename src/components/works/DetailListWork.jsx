import { useParams } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import DetailUIUX from "./detailWorks/DetailUIUX";
import DetailSiris from "./detailWorks/DetailSiris";

const DetailListWork = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-6">
      <div>
        {id === "1" && (
          <motion.div
            className="mb-6 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <DetailUIUX dataId={id} />
          </motion.div>
        )}
      </div>
      <div>
        {id === "2" && (
          <motion.div
            className="mb-6 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <DetailSiris dataId={id} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DetailListWork;
