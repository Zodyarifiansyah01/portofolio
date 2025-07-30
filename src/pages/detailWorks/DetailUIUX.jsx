import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import { imagesdata, linkberita } from "../../data/index";
import CaseWorkTop from "../../components/CaseWorkTop";
import ImagePopup from "../../data/animation/ImagePopup";
import PortofolioDisplay from "../../components/PortfolioDisplay";
import TechBadge from "../../components/TechBadge";
import { SiFigma } from 'react-icons/si';


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
         <div className="text-center text-xl font-semibold Helvetica-regular">
            Memuat atau Item tidak ditemukan!
         </div>
      );
   }

   return (
      <div className="text-black bg-white ">
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

            <motion.div
               className="my-8 text-justify"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1.8 }}
            >
               <strong className="text-xl block mb-2">Teknologi yang Digunakan</strong>
               <div className="flex flex-wrap gap-4 mt-4">
                  <TechBadge icon={<SiFigma />} name="Figma" />
               </div>
            </motion.div>
            <PortofolioDisplay dataId={dataId} />
         </motion.div>
      </div>
   );
};

const ContentSection = ({ selectedText, handleHover, handleHoverOut, linkberita, cardRef, imagesdata }) => {
   return (
      <motion.section
         className="mb-8 text-justify relative Helvetica-regular "
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 0.8 }}
      >
         <h2 className="text-lg lg:text-2xl font-semibold mb-4">
            Aplikasi Bank Sampah
         </h2>

         <h3 className="font-semibold">Data Sampah Plastik di Indonesia (2024)</h3>

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
                  <ul className="list-disc ml-6 space-y-3 ">
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
               <span className={`text-base lg:text-lg leading-relaxed ${selectedText === 'Kompas' ? 'bg-orange-400' : ''}`}>
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
            <span className={`text-base lg:text-lg leading-relaxed ${selectedText === 'Beautynesia' ? 'bg-orange-400' : ''}`}>
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

         <p className="mb-4 ">
            <strong>Komitmen Regional:</strong><br />
            <span className={`ml-8 text-base lg:text-lg leading-relaxed ${selectedText === 'ASEAN Declaration on Plastic Circularity' ? 'bg-orange-400' : ''}`}>
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

         <p className="mb-4 ">
            <strong>Sungai Penyumbang Sampah Plastik ke Laut:</strong><br />
            <span className={`ml-8 text-base lg:text-lg leading-relaxed ${selectedText === 'GoodStats Data' ? 'bg-orange-400' : ''}`}>
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

         <p className="mb-4">
            <strong>Inisiatif Regional:</strong><br />
            <span className={`ml-8 text-base lg:text-lg leading-relaxed ${selectedText === 'ERIA' ? 'bg-orange-400' : ''}`}>
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

         <p className="mb-4 text-base lg:text-lg leading-relaxed">
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
   return (
      <div className="text-base lg:text-lg leading-relaxed Helvetica-regular" id="planning">
         <h4 className="text-xl lg:text-2xl font-semibold">Permasalahan Utama</h4>
         <p >
            Indonesia saat ini menempati posisi sebagai salah satu negara dengan jumlah produksi sampah plastik tertinggi di dunia. Hal ini menimbulkan permasalahan lingkungan yang kompleks dan mendesak untuk segera ditangani. Rendahnya tingkat kesadaran masyarakat terhadap pentingnya pengelolaan sampah yang baik, serta keterbatasan infrastruktur pengolahan limbah yang memadai, menjadi faktor utama yang memperburuk situasi. Meskipun terdapat upaya dari pemerintah maupun sektor swasta dalam mengurangi penggunaan plastik, kenyataannya masih banyak sampah yang tidak dikelola secara optimal dan berakhir mencemari lingkungan, terutama lautan. Kurangnya pemahaman serta akses terhadap sistem daur ulang yang efisien membuat mayoritas limbah plastik dibuang tanpa dimanfaatkan kembali secara produktif.
         </p><br />

         <div>
            <strong>Tujuan Penelitian:</strong>
            <ul className="list-disc ml-6">
               <li>
                  Mengidentifikasi persepsi serta tingkat pemahaman masyarakat mengenai pentingnya daur ulang sampah plastik, sebagai dasar awal dalam perancangan solusi digital.
               </li>
               <li>
                  Menggali kebutuhan spesifik pengguna terkait pengelolaan sampah plastik di Indonesia melalui pendekatan teknologi berbasis platform digital.
               </li>
               <li>
                  Mengetahui preferensi dan ekspektasi pengguna terhadap fitur-fitur yang diharapkan dalam sebuah aplikasi pengelolaan sampah plastik yang ideal dan mudah digunakan.
               </li>
            </ul>
         </div>

         <div className="mt-4">
            <strong>Pertanyaan Penelitian Utama:</strong>
            <p>
               Bagaimana persepsi, pemahaman, kebutuhan, serta preferensi pengguna terkait konsep daur ulang sampah plastik, dan fitur-fitur apa yang mereka anggap penting dalam pengembangan platform digital pengelolaan sampah?
            </p>
            <p>
               Pertanyaan utama tersebut dikembangkan lebih lanjut menjadi 15 pertanyaan rinci yang dapat diakses melalui dokumen berikut:
               <span className="inline-block relative group ml-2">
                  <Link
                     to='https://docs.google.com/document/d/1V9DQ9-kEskmdiWWNlx6tsC9nhBTKHER9/edit?tab=t.0#heading=h.gjdgxs'
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-amber-400 font-semibold rounded-3xl w-fit px-2 py-1 text-xs hover:underline"

                  >
                     Google Document
                  </Link>
                  <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                     Kunjungi Pertanyaan Penelitian
                  </span>
               </span>
            </p>
         </div>

         <div className="mt-4">
            <strong>Hipotesis:</strong>
            <p>
               Dengan menghadirkan sebuah aplikasi digital yang dirancang untuk memfasilitasi pengelolaan sampah plastik, diharapkan akan terjadi peningkatan efisiensi serta partisipasi aktif masyarakat dalam kegiatan daur ulang. Aplikasi ini bertujuan untuk menyederhanakan proses pengumpulan dan pemilahan sampah plastik, mengurangi ketergantungan terhadap plastik sekali pakai, serta menumbuhkan kesadaran ekologis masyarakat. Target awal dari pengimplementasian aplikasi ini adalah untuk menjangkau partisipasi aktif setidaknya 60% dari pengguna potensial, serta mengurangi jumlah sampah plastik yang tidak terkelola hingga 20% dalam kurun waktu enam bulan.
            </p>
         </div>

         <div className="mt-4">
            <strong>Asumsi:</strong>
            <ul className="list-disc ml-6">
               <li>
                  Sistem reward atau insentif yang diberikan melalui aplikasi dapat meningkatkan motivasi pengguna untuk aktif berkontribusi dalam kegiatan daur ulang.
               </li>
               <li>
                  Layanan penjemputan sampah secara langsung dari rumah pengguna akan mendorong keterlibatan yang lebih konsisten dan mempermudah proses pengelolaan sampah harian.
               </li>
               <li>
                  Fitur peta lokasi bank sampah atau pusat daur ulang yang terintegrasi dalam aplikasi akan memudahkan pengguna dalam menemukan tempat terdekat untuk mendaur ulang sampah mereka.
               </li>
               <li>
                  Fitur pelacakan jumlah sampah yang dikumpulkan akan meningkatkan kesadaran pengguna terhadap kontribusi pribadi mereka dalam menjaga kelestarian lingkungan.
               </li>
            </ul>
         </div>

         <div className="mt-4">
            <strong>User Interview:</strong>
            <p>
               Wawancara pengguna dilakukan terhadap tiga partisipan perempuan berusia 20 hingga 50 tahun yang memiliki tingkat kepedulian tinggi terhadap lingkungan, terbiasa memilah sampah di rumah, dan pernah menggunakan aplikasi pengelolaan sampah. Wawancara dilakukan secara langsung (synchronous) dan tidak langsung (asynchronous) untuk memperoleh perspektif yang komprehensif dan autentik. Informasi dan wawasan yang diperoleh melalui metode ini sangat penting dalam menyusun solusi digital yang relevan dan berbasis kebutuhan nyata pengguna.
            </p>
         </div>

         <div className="mt-4">
            <strong>Hasil Verbatim Interview:</strong>
            <p>
               Dari hasil wawancara, ditemukan bahwa seluruh partisipan memahami pentingnya daur ulang plastik demi keberlangsungan lingkungan hidup. Namun, beberapa tantangan masih dihadapi, seperti kesulitan menemukan lokasi daur ulang yang mudah diakses, minimnya informasi terkait jenis plastik yang dapat didaur ulang, serta kebingungan dalam menggunakan aplikasi pengelolaan sampah yang sudah ada. Detail hasil wawancara tersedia melalui dokumen berikut:
               <span className="inline-block relative group ml-2">
                  <Link
                     to="https://docs.google.com/spreadsheets/d/1CzjMF9A6xYXxlC_5guchRjwsf6BQ_Cfr/edit?gid=270546614#gid=270546614'"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-amber-400 font-semibold rounded-3xl w-fit px-2 py-1 text-xs hover:underline"

                  >
                     Google Spreadsheet
                  </Link>
                  <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                     Kunjungi Verbatim
                  </span>
               </span>
            </p>
         </div>

         <div className="mt-4 text-black">
            <strong className="text-xl">Mensintesis Penelitian:</strong><br />
            <div className="grid md:grid-cols-2 gap-6 text-base lg:text-lg leading-relaxed mt-4">
               <div>
                  <h3 className="text-base font-semibold mb-2">Profil Pengguna</h3>
                  <ul className="list-disc ml-5 space-y-1">
                     <li><strong>Nama:</strong> Resti Nur Azizah</li>
                     <li><strong>Usia:</strong> 45 tahun</li>
                     <li><strong>Profesi:</strong> Ibu rumah tangga dan pegiat komunitas lingkungan</li>
                     <li><strong>Latar Belakang:</strong> Tinggal di lingkungan perkotaan dan aktif dalam berbagai kegiatan sosial yang berfokus pada isu pengelolaan sampah dan pelestarian lingkungan.</li>
                  </ul>

                  <div className="mt-6">
                     <h3 className="text-base font-semibold mb-2">Kebutuhan Utama</h3>
                     <ul className="list-disc ml-5 space-y-1">
                        <li>Membutuhkan akses yang mudah dan jelas ke lokasi bank sampah atau pusat daur ulang terdekat.</li>
                        <li>Menginginkan layanan penjemputan sampah plastik langsung dari rumah untuk menghemat waktu dan tenaga.</li>
                        <li>Memerlukan fitur pelacakan kontribusi pribadi terhadap jumlah sampah yang berhasil dikumpulkan dan dikelola.</li>
                        <li>Membutuhkan informasi edukatif dan panduan yang akurat tentang cara memilah sampah plastik dengan benar.</li>
                     </ul>
                  </div>
               </div>


               <div>
                  <h3 className="text-base font-semibold mb-2">Tujuan & Motivasi</h3>
                  <p className="mb-2">
                     Resti memiliki keinginan kuat untuk berkontribusi dalam mengurangi dampak negatif sampah plastik terhadap lingkungan. Ia ingin menjadi agen perubahan di lingkungannya dan berharap ada solusi digital yang praktis serta efisien untuk mengelola limbah rumah tangga secara berkelanjutan.
                  </p>

                  <h3 className="text-base font-semibold mt-4 mb-2">Pain Points (Tantangan)</h3>
                  <ul className="list-disc ml-5 space-y-1">
                     <li>Mengalami kesulitan dalam menemukan cara yang efektif untuk mengelola sampah plastik sehari-hari.</li>
                     <li>Sulit mengakses atau mengetahui lokasi pusat daur ulang atau bank sampah di sekitar tempat tinggalnya.</li>
                     <li>Pengalaman sebelumnya menggunakan aplikasi daur ulang terasa membingungkan karena struktur menu yang kompleks dan kurangnya panduan yang jelas.</li>
                  </ul>

                  <h3 className="text-base font-semibold mt-4 mb-2">Rekomendasi Solusi</h3>
                  <ul className="list-disc ml-5 space-y-1">
                     <li>Pengembangan aplikasi dengan navigasi sederhana dan panduan visual yang mudah dipahami.</li>
                     <li>Integrasi fitur lokasi bank sampah dengan peta digital berbasis lokasi pengguna.</li>
                     <li>Menyediakan layanan penjemputan dan pelacakan status secara real-time untuk meningkatkan kenyamanan pengguna.</li>
                  </ul>
               </div>

            </div>
         </div>


         <div className="mt-4">
            <strong className="text-xl">Affinity Map</strong>

            <div className="space-y-6 mt-4 text-base lg:text-lg leading-relaxed text-gray-800">

               <div>
                  <strong className="text-base mb-2">1. Pola Perilaku dalam Membuang Sampah</strong>
                  <ul className="list-disc ml-8 space-y-1">
                     <li>Beberapa pengguna sudah memilah sampah berdasarkan jenis dan menempatkannya dalam wadah yang terpisah.</li>
                     <li>Sampah plastik yang memiliki nilai tukar dikumpulkan secara khusus dalam satu wadah tersendiri.</li>
                     <li>Sampah organik dan sampah rumah tangga lainnya masih sering dibuang langsung tanpa proses pemilahan.</li>
                     <li>Sampah yang dapat ditukarkan biasanya hanya diserahkan kepada pengumpul secara langsung tanpa melalui tempat daur ulang formal.</li>
                  </ul>
               </div>

               <div>
                  <strong className="text-base mb-2">2. Keresahan dan Tantangan</strong>
                  <ul className="list-disc ml-8 space-y-1">
                     <li>Minimnya jumlah tempat daur ulang atau bank sampah yang tersedia di lingkungan sekitar.</li>
                     <li>Kurangnya informasi dan kejelasan pada aplikasi pengelolaan sampah yang pernah digunakan.</li>
                     <li>Kesulitan dalam menemukan lokasi bank sampah terdekat karena tidak adanya sistem penunjuk lokasi yang jelas.</li>
                     <li>Bank sampah terkadang tutup tanpa jadwal yang pasti, sehingga menyulitkan pengguna dalam menyalurkan sampah daur ulang.</li>
                  </ul>
               </div>

               <div>
                  <strong className="text-base mb-2">3. Ide dan Rekomendasi Solusi</strong>
                  <ul className="list-disc ml-8 space-y-1">
                     <li>Pentingnya pengembangan layanan digital yang menyediakan fitur penjemputan sampah secara terjadwal.</li>
                     <li>Dukungan informasi lokasi bank sampah dan status operasionalnya secara real-time di dalam aplikasi.</li>
                     <li>Diperlukan fitur panduan interaktif di dalam aplikasi yang dapat memudahkan pengguna dalam memilah sampah dan menggunakan aplikasi dengan optimal.</li>
                  </ul>
               </div>

            </div>
         </div>


         <div className="mt-4">
            <strong className="text-xl">Point of View</strong>
            <ul className="list-disc ml-6">
               <li>
                  <strong className="text-base">User</strong>
                  <p>Pengguna berusia 20–50 tahun, terdiri dari mahasiswa, ibu rumah tangga, dan pekerja yang memiliki kesadaran lingkungan tinggi.</p>
               </li>
               <li>
                  <strong className="text-base">Needs</strong>
                  <p>Aplikasi yang memudahkan akses ke lokasi pengolahan atau bank sampah yang terpercaya dan terdekat.</p>
               </li>
               <li>
                  <strong className="text-base">Insight</strong>
                  <p>Kebanyakan pengguna mengalami kesulitan dalam menemukan informasi atau lokasi daur ulang yang dapat diandalkan. Hal ini menjadi hambatan utama dalam partisipasi mereka dalam kegiatan daur ulang. Oleh karena itu, aplikasi yang mampu mengatasi kendala tersebut sangat dibutuhkan.</p>
               </li>
            </ul>
            <p>
               Ringkasnya, pengguna membutuhkan solusi digital yang dapat memperjelas dan mempermudah akses terhadap infrastruktur daur ulang, guna mendorong mereka untuk terlibat secara aktif dan konsisten dalam pengelolaan sampah plastik.
            </p>
         </div>

         <div className="mt-4">
            <strong className="text-xl">User Story</strong>
            <div>
               <strong className="text-base">User Story 1 – Layanan Penjemputan Sampah:</strong>
               <ul className="list-disc ml-6">
                  <li>Menyediakan fitur penjemputan sampah plastik secara fleksibel melalui aplikasi.</li>
                  <li>Sebagai pengguna, saya ingin memesan layanan penjemputan kapan saja sesuai kebutuhan.</li>
                  <li>Sebagai pengguna, saya ingin melacak status penjemputan secara real-time.</li>
               </ul>
            </div>
            <div className="mt-2">
               <strong className="text-base">User Story 2 – Navigasi ke Bank Sampah:</strong>
               <ul className="list-disc ml-6">
                  <li>Menyediakan fitur peta interaktif untuk mencari bank sampah terdekat.</li>
                  <li>Sebagai pengguna, saya ingin mengetahui lokasi bank sampah terdekat berdasarkan lokasi saya saat ini.</li>
                  <li>Sebagai pengguna, saya ingin mendapatkan informasi tentang jenis sampah yang diterima oleh bank sampah tersebut.</li>
               </ul>
            </div>
         </div>
      </div>
   );
};




export default DetailUIUX;
