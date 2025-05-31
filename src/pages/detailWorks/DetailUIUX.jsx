import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import { imagesdata, linkberita } from "../../data/index";
import CaseWorkTop from "../../components/CaseWorkTop";
import ImagePopup from "../../data/animation/ImagePopup";


const DetailUIUX = ({ dataId }) => {
   const [workItem, setWorkItem] = useState(null);
   const [selectedText, setSelectedText] = useState(null);
   const cardRef = useRef([]);

   useEffect(() => {
      const item = imagesdata.find((item) => item.slug === dataId);
      setWorkItem(item);
   }, [dataId]);


   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      cardRef.current.forEach((card) => {
         if (card) {
            gsap.fromTo(
               card,
               { opacity: 0, y: 40 },
               {
                  opacity: 1,
                  y: 0,
                  duration: 1.5,
                  scrollTrigger: {
                     trigger: card,
                     start: "top 95%",
                     toggleActions: "play none none none",
                     once: true,
                  },
               }
            );
         }
      });
   }, [workItem]);

   const handleHover = (source) => setSelectedText(source);
   const handleHoverOut = () => setSelectedText(null);


   if (!workItem) {
      return (
         <div className="text-center text-xl font-semibold ">
            Memuat atau Item tidak ditemukan!
         </div>
      );
   }

   return (
      <div className="text-black bg-white">
         <CaseWorkTop />
         <motion.div
            className="container mx-auto p-8 lg:p-12  "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
         >
            <ContentSection
               selectedText={selectedText}
               handleHover={handleHover}
               handleHoverOut={handleHoverOut}
               linkberita={linkberita}
               cardRef={cardRef}
               imagesdata={imagesdata}
            />
            <SectionPlanning />
         </motion.div>
      </div>
   );
};

const ContentSection = ({ selectedText, handleHover, handleHoverOut, linkberita, cardRef, imagesdata }) => {
   return (
      <motion.section
         className="mb-8 text-justify  relative Helvetica-regular"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 0.8 }}
      >
         <h2 className="text-lg lg:text-2xl font-semibold mb-4">
            Aplikasi Bank Sampah
         </h2>

         <h3 className="font-semibold mb-2">Data Sampah Plastik di Indonesia (2024)</h3>

         <div className="mb-8 grid xl:grid-cols-2 gap-6 items-start">
            <div className="space-y-4 text-justify">
               <p>
                  <span className={`block text-base lg:text-lg leading-relaxed ${selectedText === 'SIPSN' ? 'bg-orange-400' : ''}`}>
                     Berdasarkan laporan dari <strong>Sistem Informasi Pengelolaan Sampah Nasional (SIPSN)</strong> yang dikelola oleh Kementerian Lingkungan Hidup dan Kehutanan (KLHK), tercatat bahwa total timbulan sampah dari 310 kabupaten/kota di seluruh Indonesia pada tahun 2024 mencapai <strong>33,6 juta ton</strong>.
                     Data ini tidak hanya menggambarkan peningkatan signifikan volume sampah dari tahun ke tahun, tetapi juga memperlihatkan betapa mendesaknya kebutuhan akan pengelolaan sampah yang lebih inovatif di tengah laju pertumbuhan populasi dan konsumsi masyarakat yang semakin masif.
                     Oleh karena itu, informasi ini menjadi dasar yang krusial bagi pemerintah pusat maupun daerah untuk menyusun berbagai kebijakan strategis, mulai dari program pengelolaan berbasis komunitas hingga penerapan inovasi teknologi daur ulang, dengan harapan dapat menciptakan sistem pengelolaan sampah yang lebih efektif, efisien, dan berkelanjutan.
                  </span>
               </p>

               <div>
                  <strong className="text-lg">Pengelolaan Sampah:</strong>
                  <ul className="list-disc ml-6 space-y-3 mt-2">
                     <li>
                        <span className={`text-base lg:text-lg leading-relaxed ${selectedText === 'SIPSN' ? 'bg-orange-400' : ''}`}>
                           Dari jumlah tersebut, sampah yang berhasil dikelola tercatat sebesar <strong>60,09%</strong> atau sekitar 20,2 juta ton, menunjukkan adanya upaya nyata dalam menangani permasalahan sampah di Indonesia.
                        </span>
                     </li>
                     <li>
                        <span className={`text-base lg:text-lg leading-relaxed ${selectedText === 'SIPSN' ? 'bg-orange-400' : ''}`}>
                           Sementara itu, masih terdapat <strong>39,91%</strong> atau sekitar 13,4 juta ton sampah yang tidak terkelola dengan baik, yang pada akhirnya berpotensi mencemari lingkungan darat maupun laut dan memperburuk krisis sampah nasional.
                        </span>
                        <span className="inline-block relative group ml-2">
                           <Link
                              to="https://sipsn.menlhk.go.id/sipsn/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-amber-400 font-semibold rounded-3xl w-fit px-2 py-1 text-xs hover:underline"
                              onMouseEnter={() => handleHover('SIPSN')}
                              onMouseLeave={handleHoverOut}
                           >
                              SIPSN
                           </Link>
                           <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                              Kunjungi Situs Resmi SIPSN
                           </span>
                        </span>
                     </li>
                  </ul>
               </div>
            </div>


            <div className="h-full flex items-center">
               <ImageGrid imagesdata={imagesdata} cardRef={cardRef} />
            </div>
         </div>



         <div>
            <strong>Sampah Plastik di Laut:</strong><br />
            <p className="mb-4">
               <span className={`text-base lg:text-lg ${selectedText === 'Kompas' ? 'bg-orange-400' : ''}`}>
                  Menyambung permasalahan di darat, sampah plastik yang tidak terkelola dengan baik turut memberikan kontribusi besar terhadap pencemaran laut. Berdasarkan laporan tahun 2024, sekitar <strong>350.000 ton</strong> sampah plastik telah memasuki lautan Indonesia.
                  Walaupun angka ini menunjukkan penurunan sebesar 41% dibandingkan tahun 2018, jumlah tersebut tetap menimbulkan kekhawatiran besar karena berdampak langsung terhadap ekosistem laut, mengancam kehidupan biota, serta berpotensi membahayakan manusia melalui rantai makanan yang telah tercemar mikroplastik.
               </span>
               <span className="inline-block relative group ml-[8px]">
                  <Link
                     to={linkberita[0]}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-amber-400 font-semibold rounded-3xl w-fit px-2 py-1 text-xs hover:underline"
                     onMouseEnter={() => handleHover('Kompas')}
                     onMouseLeave={handleHoverOut}
                  >
                     Kompas.com
                  </Link>
                  <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                     Kunjungi Situs Resmi Kompas
                  </span>
               </span>
            </p>
         </div>

         <p className="mb-4">
            <strong>Provinsi Penyumbang Sampah Terbanyak:</strong><br />
            <span className={`text-base lg:text-lg ${selectedText === 'Beautynesia' ? 'bg-orange-400' : ''}`}>
               Secara geografis, Pulau Jawa menjadi wilayah dengan kontribusi sampah terbesar, dimana <strong>Jawa Barat</strong> tercatat menghasilkan sekitar <strong>4,9 juta ton</strong> sampah sepanjang tahun 2024.
               Tingginya volume ini erat kaitannya dengan padatnya populasi serta tingginya aktivitas ekonomi dan konsumsi masyarakat di wilayah ini.
               Namun, kondisi ini juga memperlihatkan besarnya tantangan yang harus dihadapi, mengingat masih minimnya sistem pemilahan sampah yang efektif serta keterbatasan infrastruktur daur ulang, baik di kawasan perkotaan maupun pedesaan.
            </span>
            <span className="inline-block relative group ml-[8px]">
               <Link
                  to={linkberita[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-400 font-semibold rounded-3xl w-fit px-2 py-1 text-xs hover:underline"
                  onMouseEnter={() => handleHover('Beautynesia')}
                  onMouseLeave={handleHoverOut}
               >
                  Beautynesia
               </Link>
               <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                  Kunjungi Situs Resmi Beautynesia
               </span>
            </span>
         </p>

         <h3 className="font-semibold mb-2 text-lg">🌏 Data Sampah Plastik di Kawasan ASEAN</h3>

         <p className="mb-4 text-base lg:text-lg">
            <strong>Komitmen Regional:</strong><br />
            <span className={`ml-8 ${selectedText === 'ASEAN Declaration on Plastic Circularity' ? 'bg-orange-400' : ''}`}>
               Tidak hanya Indonesia, negara-negara di kawasan ASEAN pun menunjukkan komitmen mereka terhadap pengurangan sampah plastik melalui <strong>ASEAN Declaration on Plastic Circularity</strong> yang diresmikan pada Oktober 2024.
               Deklarasi ini mengadopsi pendekatan siklus hidup penuh terhadap polusi plastik, mulai dari produksi hingga tahap pembuangan akhir, dengan fokus pada pengurangan plastik sekali pakai serta peningkatan tingkat daur ulang di kawasan Asia Tenggara.
            </span>
            <span className="inline-block relative group ml-[8px]">
               <Link
                  to={linkberita[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-400 font-semibold rounded-3xl w-fit px-2 py-1 text-xs hover:underline"
                  onMouseEnter={() => handleHover('ASEAN Declaration on Plastic Circularity')}
                  onMouseLeave={handleHoverOut}
               >
                  ASEAN Declaration on Plastic Circularity
               </Link>
               <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                  Kunjungi Situs Resmi ASEAN Declaration on Plastic Circularity
               </span>
            </span>
         </p>

         <p className="mb-4 text-base lg:text-lg">
            <strong>Sungai Penyumbang Sampah Plastik ke Laut:</strong><br />
            <span className={`block indent-8 ${selectedText === 'GoodStats Data' ? 'bg-orange-400' : ''}`}>
               Menariknya, data terbaru menunjukkan bahwa sungai-sungai di Filipina menjadi sumber utama sampah plastik yang mengalir ke lautan dunia.
               Dari 10 sungai penyumbang terbesar secara global, 9 di antaranya berada di Filipina, termasuk Sungai Pasig yang tercatat sebagai penyumbang tertinggi.
            </span>
            <span className="inline-block relative group ml-[8px]">
               <Link
                  to={linkberita[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-400 font-semibold rounded-3xl w-fit px-2 py-1 text-xs hover:underline"
                  onMouseEnter={() => handleHover('GoodStats Data')}
                  onMouseLeave={handleHoverOut}
               >
                  GoodStats Data
               </Link>
               <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                  Kunjungi Situs Resmi GoodStats Data
               </span>
            </span>
         </p>

         <p className="mb-4 text-base lg:text-lg">
            <strong>Inisiatif Regional:</strong><br />
            <span className={`block indent-8 ${selectedText === 'ERIA' ? 'bg-orange-400' : ''}`}>
               Dalam rangka memperkuat sinergi, ASEAN juga menggelar <strong>ASEAN Conference on Combating Plastic Pollution (ACCPP)</strong> tahun 2024 di Vientiane, Laos.
               Konferensi ini bertujuan untuk meningkatkan kerja sama, mempercepat inovasi, dan memperluas kemitraan dalam mengatasi permasalahan polusi plastik secara lebih kolaboratif di tingkat regional.
            </span>
            <span className="inline-block relative group ml-[8px]">
               <Link
                  to={linkberita[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-400 font-semibold rounded-3xl w-fit px-2 py-1 text-xs hover:underline"
                  onMouseEnter={() => handleHover('ERIA')}
                  onMouseLeave={handleHoverOut}
               >
                  ERIA
               </Link>
               <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                  Kunjungi Situs Resmi ERIA
               </span>
            </span>
         </p>

         <p className="mb-4 text-base lg:text-lg">
            Sebagai jawaban atas tantangan-tantangan tersebut, <strong>Aplikasi Bank Sampah</strong> dikembangkan untuk memberdayakan masyarakat dalam mengelola, memilah, serta mengurangi sampah plastik secara lebih sistematis dan berkelanjutan, sehingga mendukung terciptanya lingkungan yang lebih bersih dan sehat.
         </p>

      </motion.section >
   )
}

const ImageGrid = (({ cardRef, imagesdata }) => {

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 p-4">
         {imagesdata[0].imgSampah.map((item, index) => (
            <div
               ref={(el) => (cardRef.current[index] = el)}
               key={item.id}
               className="opacity-0"
            >
               <ImagePopup item={item} index={item.id} />
            </div>
         ))}
      </div>
   );
});

const SectionPlanning = () => {
   const dataAccording = [
      {
         title: "Apa itu sampah plastik?",
         content:
            "Sampah plastik adalah jenis sampah yang terbuat dari bahan plastik yang dapat diolah menjadi barang-barang baru seperti botol plastik, botol bekas, kardus, dan lain-lain.",
      },
      {
         title: "Apa saja jenis sampah plastik?",
         content:
            "Ada beberapa jenis sampah plastik yang umum digunakan, seperti botol plastik, botol bekas, kardus, dan lain-lain.",
      },
   ]
   return (
      <div className="text-base lg:text-lg" id="planning">
         <h4 className="text-xl lg:text-2xl font-semibold">Permasalahan Utama</h4>
         <p>
            Indonesia saat ini menempati peringkat kedua sebagai produsen sampah plastik terbesar di dunia, sebuah masalah yang telah memberikan dampak lingkungan yang sangat besar. Fenomena ini sebagian besar disebabkan oleh kebiasaan masyarakat yang kurang menyadari pentingnya pengelolaan sampah dengan cara yang lebih efisien dan ramah lingkungan. Meskipun ada sejumlah upaya untuk mengurangi produksi sampah plastik, kenyataannya masih banyak sampah yang tidak terkelola dengan baik dan berakhir di tempat pembuangan akhir atau bahkan mencemari lautan. Kurangnya fasilitas dan kesadaran mengenai proses daur ulang yang efektif menyebabkan sebagian besar sampah plastik tersebut terbuang begitu saja tanpa memberi manfaat lebih bagi masyarakat maupun lingkungan.
         </p><br />

         <div>
            <strong>Tujuan Penelitian:</strong>
            <ul className=" list-disc ml-6 space-y-2 mt-2">
               <li>
                  Mengidentifikasi persepsi dan pemahaman pengguna mengenai konsep daur ulang sampah plastik sebagai langkah pertama dalam mengembangkan platform digital.
               </li>
               <li>
                  Mengetahui kebutuhan pengguna terkait pengelolaan sampah plastik di Indonesia melalui platform digital.
               </li>
               <li>
                  Mengidentifikasi preferensi pengguna terkait fitur-fitur yang diinginkan dalam pengembangan platform digital untuk daur ulang sampah plastik.
               </li>
            </ul>

            <div className="mt-4">
               <strong>Pertanyaan Penelitian Utama:</strong>
               <p className="mt-2">
                  Bagaimana persepsi, pemahaman, kebutuhan, dan preferensi pengguna terkait konsep daur ulang sampah plastik serta fitur yang diharapkan terhadap pengembangan platform pengelolaan sampah plastik?
               </p>
            </div>
         </div>

         {/* <Test /> */}
      </div>
   );
}

function Test() {
   const text = "Indonesia saat ini menempati peringkat kedua sebagai produsen sampah plastik terbesar di dunia.";

   useEffect(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID';
      speechSynthesis.speak(utterance);
   }, []);

   return (
      <div style={{ padding: '2rem' }}>
         <p>{text}</p>
      </div>
   );
}

export default DetailUIUX;
