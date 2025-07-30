import React, { useEffect, useState } from "react";
import { imagesdata } from "../../data/index";
import { motion } from "framer-motion";
import CaseWorkTop from "../../components/CaseWorkTop";
import PortofolioDisplay from "../../components/PortfolioDisplay";
import { SiLaravel, SiTailwindcss, SiPostgresql } from 'react-icons/si';
import TechBadge from "../../components/TechBadge";

const DetailSiris = ({ dataId }) => {
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
               <strong className="text-lg block mb-2">Deskripsi Aplikasi LPPM Universitas</strong>
               <p className="text-base lg:text-lg leading-relaxed mb-4">
                  Sebagai pengembang utama, saya merancang dan mengimplementasikan sistem terintegrasi untuk Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) yang mengoptimalkan seluruh siklus kegiatan akademik. Platform ini menyediakan solusi end-to-end mulai dari pengajuan proposal, evaluasi peer-review, manajemen pendanaan, hingga pelaporan hasil penelitian. Aplikasi dibangun dengan arsitektur modular yang memungkinkan skalabilitas untuk menampung lebih dari 500 proyek penelitian aktif per tahun, dengan fitur khusus untuk memenuhi standar akreditasi perguruan tinggi.
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
                     "Sistem pengajuan proposal online dengan validasi dokumen otomatis (PDF, DOCX) dan plagiarism checker terintegrasi, mengurangi waktu administrasi hingga 70%",
                     "Dashboard manajemen proyek real-time dengan Gantt chart, tracking milestone, dan sistem notifikasi multi-level approval",
                     "Modul keuangan canggih termasuk budgeting tool, expense tracking, dan rekonsiliasi otomatis dengan sistem keuangan universitas",
                     "Portal kolaborasi peneliti dengan fitur document sharing version control dan forum diskusi terstruktur",
                     "Sistem pelaporan otomatis yang menghasilkan output sesuai template Dikti dan LPDP dengan ekspor ke berbagai format"
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
                     "Mengoptimalkan dan menyederhanakan seluruh alur kerja administrasi penelitian melalui implementasi sistem terintegrasi yang mampu mempercepat proses penyelesaian dokumen secara signifikan sekaligus mengurangi beban kerja manual.",
                     "Mengembangkan platform komprehensif yang memungkinkan seluruh tahapan administrasi penelitian mulai dari pengajuan proposal, proses review dokumen oleh tim evaluator, persetujuan pendanaan, hingga pelaporan akhir dapat dikelola secara online melalui satu sistem terpusat.",
                     "Merancang mekanisme pengelolaan dana penelitian yang sistematis dengan pembagian kategori anggaran yang jelas, pencatatan otomatis setiap transaksi, serta pelaporan keuangan yang terstruktur untuk memastikan akuntabilitas penggunaan dana."
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

export default DetailSiris;
