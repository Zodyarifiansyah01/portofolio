import React, { useEffect, useState } from "react";
import { imagesdata } from "../../data/index";
import { motion } from "framer-motion";
import CaseWorkTop from "../../components/CaseWorkTop";
import PortofolioDisplay from "../../components/PortfolioDisplay";
import TechBadge from "../../components/TechBadge";

import { SiJavascript, SiTailwindcss } from 'react-icons/si';

const DetailMyWali = ({ dataId }) => {
   const [workItem, setWorkItem] = useState(null);

   useEffect(() => {
      const item = imagesdata.find((item) => item.slug === dataId);
      setWorkItem(item);
   }, [dataId]);

   if (!workItem) {
      return (
         <div className="text-center text-xl font-semibold text-black Helvetica-regular">
            Memuat atau Item tidak ditemukan!
         </div>
      );
   }

   const renderList = (items) => {
      return items.map((item, index) => (
         <li key={index} className="text-sm md:text-lg text-black Helvetica-regular">
            {item}
         </li>
      ));
   };

   return (
      <div className="text-black bg-white Helvetica-regular">
         <CaseWorkTop />
         <motion.div
            className="container mx-auto p-8 lg:p-12  "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
         >

            {/* <motion.div
               className="mb-8"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.6 }}
            >
               <div className="flex flex-wrap gap-2 text-sm md:text-lg">
                  <div className="w-full md:w-1/2">
                     <span className="font-semibold">Subtitle:</span>{" "}
                     {workItem.subtitle}
                  </div>
                  <div className="w-full md:w-1/2">
                     <span className="font-semibold">App Title:</span>{" "}
                     {workItem.titleApp}
                  </div>
                  <div className="w-full md:w-1/2">
                     <span className="font-semibold">Year Started:</span>{" "}
                     {workItem.bulanAwal} {workItem.tahunAwal}
                  </div>
                  <div className="w-full md:w-1/2">
                     <span className="font-semibold">Year End:</span>{" "}
                     {workItem.bulanAkhir} {workItem.tahunAkhir}
                  </div>
               </div>
            </motion.div> */}

            <motion.div
               className="mb-8 text-justify"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.8 }}
            >
               <strong className="block text-xl lg:text-2xl font-semibold mb-2">
                  My Wali: Aplikasi Pemantauan Pendidikan untuk Orang Tua
               </strong>
               <p className="text-sm md:text-lg">
                  Aplikasi <strong>My Wali</strong> adalah platform digital yang dirancang untuk membantu orang tua dalam
                  memantau berbagai aspek terkait pendidikan anak-anak mereka yang sedang berkuliah.
                  Dengan aplikasi ini, orang tua dapat dengan mudah mengakses informasi penting seperti pembayaran,
                  nilai akademik, dan transkrip dari anak mereka. Aplikasi ini bertujuan untuk memberikan transparansi
                  dan kemudahan bagi orang tua dalam mengikuti perkembangan pendidikan anak-anak mereka tanpa harus
                  terlibat langsung dalam setiap proses administratif di kampus.
               </p>
            </motion.div>

            <motion.div
               className="mb-8 text-justify"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1 }}
            >
               <strong className="text-xl"> Fitur yang dimiliki</strong><br />
               <ul className="list-decimal text-sm md:text-lg text-gray-700 ml-6">
                  {renderList([
                     "Pemantauan Pembayaran: Orang tua dapat melacak status pembayaran uang kuliah dan biaya lainnya dengan mudah. Aplikasi ini memberikan notifikasi atau pembaruan terkait tenggat waktu pembayaran dan saldo yang harus dibayar, sehingga orang tua dapat memastikan bahwa anak mereka tidak terhambat oleh masalah administrasi.",
                     "Laporan Nilai: Aplikasi ini menyediakan akses kepada orang tua untuk melihat nilai akademik anak mereka selama perkuliahan, baik nilai per mata kuliah maupun nilai keseluruhan. Ini memungkinkan orang tua untuk lebih terlibat dalam perkembangan akademik anak dan memberikan dukungan yang diperlukan.",
                     "Pantauan Kehadiran: Aplikasi ini memungkinkan orang tua untuk mengetahui tingkat kehadiran anak mereka dalam perkuliahan. Fitur ini berguna untuk memastikan anak tetap disiplin dalam mengikuti perkuliahan dan tidak ada masalah dengan absensi.",
                     "Transkrip Akademik: Aplikasi ini memungkinkan orang tua untuk mengakses transkrip akademik lengkap anak mereka, yang berisi catatan seluruh mata kuliah yang telah diambil, nilai yang diperoleh, serta status kelulusan dari berbagai mata kuliah tersebut. Ini berguna untuk melihat perkembangan akademik anak dalam jangka panjang.",
                  ])}
               </ul>
            </motion.div>

            <motion.div
               className="mb-8 text-justify"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1.2 }}
            >
               <strong className="text-xl"> Manfaat</strong><br />
               <ul className="list-decimal text-sm md:text-lg ml-6">
                  {renderList([
                     "Akses Real-Time: Orang tua bisa mendapatkan informasi yang akurat dan terkini tanpa perlu menunggu laporan dari anak mereka.",
                     "Peningkatan Komunikasi: Memudahkan komunikasi antara orang tua dan anak terkait masalah akademik dan administrasi pendidikan.",
                     "Pemantauan Prestasi: Orang tua dapat mengetahui apakah anak mereka membutuhkan dukungan tambahan di bidang akademik.",
                     "Pantauan Kehadiran: Orang tua dapat memantau kehadiran anak mereka di perkuliahan secara langsung.",
                  ])}
               </ul>
            </motion.div>

            <motion.div
               className="mb-8 text-justify"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1.2 }}
            >
               <strong className="text-xl"> Kontribusi</strong><br />
               <motion.div
                  className="text-lg  text-justify"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.4 }}
               >
                  {workItem.desc?.split("\n").map((paragraph, index) => (
                     <ul key={index} className="list-disc ml-6 mb-2">
                        {paragraph.split(". ").map((point, idx) => (
                           <li
                              key={idx}
                              className="text-sm md:text-lg "
                           >
                              {point.trim()}.
                           </li>
                        ))}
                     </ul>
                  ))}
               </motion.div>
            </motion.div>

            <motion.div
               className="mb-8 text-justify"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1.8 }}
            >
               <strong className="text-xl block mb-2">Teknologi yang Digunakan</strong>
               <div className="flex flex-wrap gap-4 mt-4">
                  <TechBadge icon={<SiJavascript />} name="JavaScript" />
                  <TechBadge icon={<SiTailwindcss />} name="Tailwind CSS" />
               </div>
            </motion.div>

            <PortofolioDisplay dataId={dataId} />
         </motion.div>
      </div>
   );
};

export default DetailMyWali;
