import React, { useEffect, useState } from "react";
import { imagesdata } from "../../data/index";
import { motion } from "framer-motion";
import CaseWorkTop from "../../components/CaseWorkTop";
import PortofolioDisplay from "../../components/PortfolioDisplay";
import { SiLaravel, SiTailwindcss, SiPostgresql } from 'react-icons/si';
import TechBadge from "../../components/TechBadge";

const DetailULT = ({ dataId }) => {
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
         <li key={index} className="text-base lg:text-lg leading-relaxed text-black  Helvetica-regular">
            {item}
         </li>
      ));
   };

   return (
      <div className="text-black bg-white Helvetica-regular">
         <CaseWorkTop />
         <motion.div
            className="container mx-auto p-8 lg:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
         >
            <motion.div
               className="mb-8 text-justify"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.8 }}
            >
               <strong className="text-lg block mb-2">Deskripsi Aplikasi Unit Layanan Terpadu</strong>
               <p className="text-base lg:text-lg leading-relaxed mb-4">
                  Aplikasi ini dirancang untuk mendukung mahasiswa dan dosen dalam proses bimbingan serta pendaftaran sidang secara digital.
                  Sistem ini memfasilitasi seluruh alur kegiatan mulai dari pengajuan pendaftaran sidang, proses bimbingan antara dosen dan mahasiswa,
                  hingga pencetakan surat kelulusan dan surat keterangan magang.
                  Dengan desain antarmuka yang intuitif, aplikasi ini membantu meningkatkan efisiensi administrasi akademik dan memastikan proses bimbingan serta sidang berjalan lebih terstruktur.
               </p>
            </motion.div>

            <motion.div
               className="mb-8 text-justify"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1 }}
            >
               <strong className="text-lg block mb-2">Fitur Utama yang Dikembangkan</strong>
               <ul className="list-decimal text-base lg:text-lg ml-6">
                  {renderList([
                     "Fitur bimbingan sidang yang memungkinkan mahasiswa dan dosen berinteraksi secara daring melalui sistem terpusat.",
                     "Fitur pendaftaran sidang yang dilengkapi validasi otomatis terhadap kelengkapan dokumen.",
                     "Fungsi pencetakan surat kelulusan dan surat keterangan magang secara otomatis setelah proses sidang selesai.",
                     "Modul pengaturan rubrik penilaian yang dapat dikunci setelah disetujui oleh dosen atau pihak berwenang.",
                     "Fitur pengaturan bobot penilaian sidang yang dapat disesuaikan sesuai kebijakan program studi."
                  ])}
               </ul>
            </motion.div>

            <motion.div
               className="mb-8 text-justify"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1.2 }}
            >
               <strong className="text-lg block mb-2">Manfaat</strong>
               <ul className="list-decimal text-base lg:text-lg ml-6">
                  {renderList([
                     "Mempermudah proses administrasi pendaftaran dan bimbingan sidang dengan sistem digital yang terintegrasi.",
                     "Meningkatkan efisiensi waktu dan mengurangi kesalahan administratif dalam proses pengajuan dan verifikasi dokumen.",
                     "Mendukung digitalisasi layanan akademik agar proses bimbingan dan sidang dapat diakses kapan saja dan di mana saja.",
                  ])}
               </ul>
            </motion.div>

            <motion.div
               className="mb-8 text-justify"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1.4 }}
            >
               <strong className="text-lg block mb-2">Kontribusi Teknis Utama</strong>
               <motion.div
                  className="text-lg text-justify"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.6 }}
               >
                  {workItem.desc?.split("\n").map((paragraph, index) => (
                     <ul key={index} className="list-disc ml-6 ">
                        {paragraph.split(". ").map((point, idx) => (
                           <li key={idx} className="text-base lg:text-lg leading-relaxed ">
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
               <strong className="text-lg block mb-2">Teknologi yang Digunakan</strong>
               <div className="flex flex-wrap gap-4 mt-4">
                  <TechBadge icon={<SiLaravel />} name="Laravel" />
                  <TechBadge icon={<SiTailwindcss />} name="Tailwind CSS" />
                  <TechBadge icon={<SiPostgresql />} name="PostgreSQL" />
               </div>
            </motion.div>

            <PortofolioDisplay dataId={dataId} />
         </motion.div>
      </div>
   );
};

export default DetailULT;
