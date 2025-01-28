import { imagesdata } from "../../data/index";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ListWorks = () => {
  const getLimitedDescription = (desc) => {
    const paragraphs = desc.split("\n"); // Memecah teks berdasarkan baris baru
    return paragraphs.slice(0, 3).join("\n"); // Mengambil 3 paragraf pertama dan menggabungkannya kembali
  };
  return (
    <div className="container ">
      <div className="space-y-12">
        {imagesdata.map((item) => (
          <Link to={`/detail/${item.id}`} key={item.id}>
            <motion.div
              className="cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12 mt-8">
                <div className="flex flex-col gap-4 md:col-span-4 ">
                  <div className="space-y-1">
                    <p className="text-gray-600 font-medium text-base sm:text-lg md:text-xl">
                      {item.tahunAwal}
                    </p>
                    <p className="text-gray-500 text-sm sm:text-base">
                      {item.bulanAwal}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:col-span-8 gap-4 ">
                  <div className="relative flex flex-col md:flex-row gap-4">
                    <motion.div
                      className="space-y-4 w-full"
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="hidden sm:block rounded-lg w-full h-60 object-cover shadow-md object-left"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2 absolute top-8 left-4 hidden md:block"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <h2 className="text-white font-noto-serif text-xl md:text-2xl font-medium">
                        {item.title}
                      </h2>
                    </motion.div>
                  </div>
                  <motion.div
                    className="md:hidden space-y-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-white font-noto-serif text-xl md:text-2xl font-medium">
                      {item.title}
                    </h2>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="sm hidden rounded-lg w-full h-60 object-cover shadow-md"
                    />
                  </motion.div>
                  <motion.div
                    className="text-sm flex flex-col justify-end"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-gray-500 text-justify">
                      {getLimitedDescription(item.desc)}{" "}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListWorks;
