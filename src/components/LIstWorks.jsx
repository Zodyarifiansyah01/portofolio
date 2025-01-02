import { imagesdata } from "../data/index";
import { motion } from "framer-motion";

const ListWorks = () => {
  const handleClick = () => {
    alert("Hello");
  };
  return (
    <div className="container py-12">
      <div className="space-y-12">
        {imagesdata.map((item) => (
          <motion.div
            key={item.id}
            onClick={handleClick}
            className="cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="grid grid-1 gap-4 md:gap-8">
              <div className="flex gap-8">
                <div className="col-span-3 md:col-span-2 flex flex-col">
                  <div className="space-y-1">
                    <p className="text-gray-600 font-medium">
                      {item.tahunAwal}
                    </p>
                    <p className="text-gray-500">{item.bulanAwal}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="relative">
                    <motion.div
                      className="col-span-9 md:col-span-5 space-y-4"
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="rounded-lg w-full min-w-96 md:min-w-[500px] h-60 object-cover shadow-md object-left"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2 absolute top-[100px] right-[-50px]"
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
                    className="text-sm items-end flex justify-end"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minima in laborum.
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ListWorks;
