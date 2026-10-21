import React, { useEffect, useState } from "react";
import { imagesdata } from "../../data/index";
import { motion } from "framer-motion";
import CaseWorkTop from "../../components/CaseWorkTop";
import PortofolioDisplay from "../../components/PortfolioDisplay";
import TechBadge from "../../components/TechBadge";

import { SiJavascript, SiTailwindcss } from "react-icons/si";
import {
   FiCreditCard,
   FiAward,
   FiUserCheck,
   FiFileText,
   FiCheck,
} from "react-icons/fi";

const features = [
   {
      icon: <FiCreditCard />,
      title: "Pemantauan Pembayaran",
      desc: "Lacak status uang kuliah dan biaya lainnya. Notifikasi tenggat waktu dan saldo yang harus dibayar membantu orang tua memastikan anak tidak terhambat masalah administrasi.",
      tone: "bg-rose-50 border-rose-200",
      iconTone: "bg-rose-200 text-rose-600",
   },
   {
      icon: <FiAward />,
      title: "Laporan Nilai",
      desc: "Lihat nilai akademik per mata kuliah maupun nilai keseluruhan, sehingga orang tua bisa lebih terlibat dan memberi dukungan yang diperlukan.",
      tone: "bg-violet-50 border-violet-200",
      iconTone: "bg-violet-200 text-violet-600",
   },
   {
      icon: <FiUserCheck />,
      title: "Pantauan Kehadiran",
      desc: "Ketahui tingkat kehadiran anak dalam perkuliahan untuk memastikan anak tetap disiplin dan tidak bermasalah dengan absensi.",
      tone: "bg-sky-50 border-sky-200",
      iconTone: "bg-sky-200 text-sky-600",
   },
   {
      icon: <FiFileText />,
      title: "Transkrip Akademik",
      desc: "Akses transkrip lengkap berisi seluruh mata kuliah, nilai, dan status kelulusan untuk melihat perkembangan akademik anak dalam jangka panjang.",
      tone: "bg-emerald-50 border-emerald-200",
      iconTone: "bg-emerald-200 text-emerald-600",
   },
];

const benefits = [
   {
      title: "Akses Real-Time",
      desc: "Informasi akurat dan terkini tanpa perlu menunggu laporan dari anak.",
   },
   {
      title: "Komunikasi Lebih Baik",
      desc: "Memudahkan orang tua dan anak berdiskusi soal akademik dan administrasi.",
   },
   {
      title: "Pemantauan Prestasi",
      desc: "Orang tua tahu kapan anak membutuhkan dukungan tambahan di bidang akademik.",
   },
   {
      title: "Kehadiran Terpantau",
      desc: "Kehadiran anak di perkuliahan bisa dipantau secara langsung.",
   },
];

const fadeUp = {
   initial: { opacity: 0, y: 24 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true, margin: "-60px" },
   transition: { duration: 0.6, ease: "easeOut" },
};

const Card = ({ children, className = "" }) => (
   <div
      className={`rounded-3xl bg-white/70 backdrop-blur-md border border-slate-200/70
                  shadow-sm p-6 md:p-8 ${className}`}
   >
      {children}
   </div>
);

const SectionTitle = ({ children }) => (
   <h2 className="flex items-center gap-3 text-xl lg:text-2xl font-bold text-slate-800 mb-5">
      <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-rose-300 via-violet-300 to-sky-300" />
      {children}
   </h2>
);

const DetailMyWali = ({ dataId }) => {
   const [workItem, setWorkItem] = useState(null);

   useEffect(() => {
      const item = imagesdata.find((item) => item.slug === dataId);
      setWorkItem(item);
   }, [dataId]);

   if (!workItem) {
      return (
         <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#fdf2f8] via-[#f5f3ff] to-[#f0f9ff] px-4 Helvetica-regular">
            <p className="rounded-full bg-white/80 border border-slate-200 px-6 py-3 text-base font-medium text-slate-600 shadow-sm">
               Memuat atau item tidak ditemukan.
            </p>
         </div>
      );
   }

   // Pecah deskripsi kontribusi menjadi daftar poin tunggal
   const contributions = (workItem.desc || "")
      .split("\n")
      .flatMap((paragraph) => paragraph.split(". "))
      .map((point) => point.trim().replace(/\.+$/, ""))
      .filter(Boolean);

   return (
      <div className="relative overflow-hidden min-h-screen text-slate-700 Helvetica-regular bg-gradient-to-br from-[#fdf2f8] via-[#f5f3ff] to-[#f0f9ff]">
         {/* Blob pastel samar */}
         <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl" />
         <div className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
         <div className="pointer-events-none absolute bottom-1/4 -left-24 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />

         <div className="relative">
            <CaseWorkTop />

            <motion.div
               className="container mx-auto px-4 lg:px-6 py-8 lg:py-12 space-y-8"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
            >
               {/* Hero */}
               <div
                  className="rounded-[2rem] p-8 md:p-12 border border-white/80 shadow-sm
                             bg-gradient-to-br from-rose-100 via-violet-100 to-sky-100"
               >
                  <h1 className="font-nunito-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 leading-tight">
                     My Wali
                  </h1>
                  <p className="mt-2 text-lg lg:text-2xl font-semibold text-violet-500">
                     Aplikasi pemantauan pendidikan untuk orang tua
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                     {workItem.tahunAwal && (
                        <span className="rounded-full bg-white/80 border border-slate-200 px-3.5 py-1 text-sm font-medium text-slate-600">
                           {workItem.bulanAwal} {workItem.tahunAwal}
                           {workItem.tahunAkhir
                              ? ` – ${workItem.bulanAkhir} ${workItem.tahunAkhir}`
                              : ""}
                        </span>
                     )}
                     <span className="rounded-full bg-white/80 border border-slate-200 px-3.5 py-1 text-sm font-medium text-slate-600">
                        Web App
                     </span>
                  </div>

                  <p className="mt-6 max-w-3xl text-base lg:text-lg leading-relaxed text-slate-700">
                     <strong>My Wali</strong> membantu orang tua memantau
                     pendidikan anak yang sedang berkuliah. Pembayaran, nilai
                     akademik, dan transkrip bisa diakses dengan mudah,
                     sehingga orang tua tetap mengikuti perkembangan anak tanpa
                     harus terlibat langsung dalam setiap proses administratif
                     di kampus.
                  </p>
               </div>

               {/* Fitur */}
               <motion.section {...fadeUp}>
                  <SectionTitle>Fitur utama</SectionTitle>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                     {features.map((feature) => (
                        <div
                           key={feature.title}
                           className={`rounded-3xl border p-6 transition-transform duration-300 hover:-translate-y-1 ${feature.tone}`}
                        >
                           <span
                              className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl text-xl ${feature.iconTone}`}
                           >
                              {feature.icon}
                           </span>
                           <h3 className="text-lg font-bold text-slate-800 mb-1">
                              {feature.title}
                           </h3>
                           <p className="text-sm lg:text-base leading-relaxed text-slate-600">
                              {feature.desc}
                           </p>
                        </div>
                     ))}
                  </div>
               </motion.section>

               {/* Manfaat + Kontribusi */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <motion.section {...fadeUp}>
                     <Card className="h-full">
                        <SectionTitle>Manfaat</SectionTitle>
                        <ul className="space-y-4">
                           {benefits.map((benefit) => (
                              <li key={benefit.title} className="flex gap-3">
                                 <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-sm">
                                    <FiCheck />
                                 </span>
                                 <p className="text-base leading-relaxed">
                                    <span className="font-semibold text-slate-800">
                                       {benefit.title}.
                                    </span>{" "}
                                    {benefit.desc}
                                 </p>
                              </li>
                           ))}
                        </ul>
                     </Card>
                  </motion.section>

                  <motion.section {...fadeUp}>
                     <Card className="h-full">
                        <SectionTitle>Kontribusi saya</SectionTitle>
                        <ul className="space-y-3">
                           {contributions.map((point, idx) => (
                              <li key={idx} className="flex gap-3">
                                 <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-violet-300" />
                                 <p className="text-base leading-relaxed">
                                    {point}.
                                 </p>
                              </li>
                           ))}
                        </ul>
                     </Card>
                  </motion.section>
               </div>

               {/* Teknologi */}
               <motion.section {...fadeUp}>
                  <Card>
                     <SectionTitle>Teknologi yang digunakan</SectionTitle>
                     <div className="flex flex-wrap gap-3">
                        <TechBadge icon={<SiJavascript />} name="JavaScript" />
                        <TechBadge icon={<SiTailwindcss />} name="Tailwind CSS" />
                     </div>
                  </Card>
               </motion.section>

               {/* Galeri */}
               <motion.section {...fadeUp}>
                  <Card>
                     <SectionTitle>Tampilan aplikasi</SectionTitle>
                     <PortofolioDisplay dataId={dataId} />
                  </Card>
               </motion.section>
            </motion.div>
         </div>
      </div>
   );
};

export default DetailMyWali;