import React, { useEffect, useState } from "react";
import { imagesdata } from "../../data/index";
import { motion } from "framer-motion"; // Import motion
import CaseWorkTop from "../../components/CaseWorkTop";
import { Link } from "react-router-dom";
import ImagePopup from "../../data/animation/ImagePopup";

const DetailUIUX = ({ dataId }) => {
   const [workItem, setWorkItem] = useState(null);
   const [selectedText, setSelectedText] = useState(null);
   const [isOpen, setIsOpen] = useState(false);
   console.log(dataId, "ini adalah dataId");


   useEffect(() => {
      const item = imagesdata.find((item) => item.slug === dataId);
      setWorkItem(item);
   }, [dataId]);

   if (!workItem) {
      return (
         <div className="text-center text-xl font-semibold ">
            Memuat atau Item tidak ditemukan!
         </div>
      );
   }

   const linkberita = [
      'https://lestari.kompas.com/read/2025/02/14/175817386/350-ribu-ton-sampah-plastik-masuk-ke-laut-indonesia-pada-2024?utm_source=chatgpt.com',
      'https://www.beautynesia.id/life/miris-5-fakta-mengejutkan-tentang-sampah-di-indonesia-yang-perlu-kamu-tahu/b-303458?utm_source=chatgpt.com',
      'https://asean.org/wp-content/uploads/2024/10/23-Final_ASEAN-Declaration-on-Plastic-Circularity.pdf?utm_source=chatgpt.com',
      'https://data.goodstats.id/statistic/sungai-filipina-dominasi-sampah-plastik-dunia-indonesia-peringkat-berapa-mKRsp?utm_source=chatgpt.com',
      'https://rkcmpd-eria.org/reports-and-publications/asean-conference-on-combating-plastic-pollution-2024-action-innovation-and-partnership-to-phase-out-plastic-pollution?utm_source=chatgpt.com'
   ]

   const hoverHandler = (source) => {
      setSelectedText(source)
   }

   const hoverHandlerOut = () => {
      setSelectedText(null)
   }

   console.log(workItem.imgSampah, "ini adalah gambar sampah");

   return (
      <div className=" text-white">
         <CaseWorkTop />
         <motion.div
            className="container mx-auto shadow-lg rounded-lg p-8 lg:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
         >
            <motion.div
               className="mb-8 text-justify text-white relative"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.8 }}
            >
               <h2 className="text-lg lg:text-2xl font-semibold mb-4">
                  Aplikasi Bank Sampah
               </h2>

               <h3 className="font-semibold mb-2">Data Sampah Plastik di Indonesia (2024)</h3>

               <div className="mb-4">
                  <p className="mb-4">
                     <span className={`mb-4 text-base lg:text-lg ${selectedText === 'SIPSN' ? 'bg-orange-400' : ''}`}>
                        <strong>Sistem Informasi Pengelolaan Sampah Nasional (SIPSN) Kementerian Lingkungan Hidup dan Kehutanan (KLHK)</strong>,
                        total timbulan sampah dari 310 kabupaten/kota di seluruh Indonesia pada tahun 2024 tercatat mencapai <strong>33,6 juta ton</strong>.
                        Angka ini mencerminkan meningkatnya tantangan dalam pengelolaan sampah seiring dengan pertumbuhan populasi dan aktivitas konsumsi masyarakat yang terus berkembang.
                        Data ini menjadi acuan penting bagi pemerintah pusat maupun daerah dalam merumuskan kebijakan dan strategi pengelolaan sampah yang lebih efektif dan berkelanjutan.
                     </span>
                  </p>

                  <div className="grid grid-cols-2 gap-2 md:gap-6 p-4">
                     {
                        imagesdata[0].imgSampah.map((item) => (
                           <ImagePopup item={item} index={item.id} />
                        ))
                     }
                  </div>

                  <strong>Pengelolaan Sampah:</strong>
                  <ul className="text-white list-disc ml-6 flex gap-2 items-end" >
                     <div>
                        <li className={`text-base lg:text-lg ${selectedText === 'SIPSN' ? 'bg-orange-400' : ''}`}>Sampah yang berhasil dikelola: <strong>60,09%</strong> (sekitar 20,2 juta ton)</li>
                        <li className={`text-base lg:text-lg ${selectedText === 'SIPSN' ? 'bg-orange-400' : ''}`}>
                           Sampah yang tidak terkelola: <strong>39,91%</strong> (sekitar 13,4 juta ton){" "}
                        </li>
                     </div>
                     <span className="inline-block relative group ml-[-8px]">
                        <Link
                           to="https://sipsn.menlhk.go.id/sipsn/"
                           target="_blank"
                           className="bg-gray-400 font-semibold rounded-3xl w-fit px-2 py-1 text-xs hover:underline"
                           onMouseEnter={() => hoverHandler('SIPSN')}
                           onMouseLeave={hoverHandlerOut}
                        >
                           SIPSN
                        </Link>

                        <span className="
                           absolute -top-6 left-1/2 transform -translate-x-1/2
                           bg-gray-800 text-white text-xs rounded py-1 px-2
                           opacity-0 group-hover:opacity-100 transition-opacity duration-200
                           whitespace-nowrap pointer-events-none z-10
                        ">
                           Kunjungi Situs Resmi SIPSN
                           <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                        </span>
                     </span>
                  </ul>
               </div>



               <div>
                  <strong>Sampah Plastik di Laut:</strong><br />
                  <p className="mb-4">
                     <span className={`text-base lg:text-lg ${selectedText === 'Kompas' ? 'bg-orange-400' : ''}`}>
                        Berdasarkan laporan pada tahun 2024 sekitar <strong>350.000 ton</strong> sampah plastik masuk ke laut Indonesia.
                        Meskipun ini menurun sekitar 41% dibandingkan tahun 2018, jumlah tersebut masih sangat mengkhawatirkan karena berdampak langsung pada ekosistem laut,
                        mengancam keberlangsungan hidup biota laut, serta berpotensi masuk ke rantai makanan manusia melalui mikroplastik yang tersebar luas.
                     </span>

                     <span className="inline-block relative group ml-[8px]">
                        <Link
                           to={linkberita[0]}
                           target="_blank"
                           className="bg-gray-400 font-semibold rounded-3xl w-fit px-2 py-1 text-xs hover:underline"
                           onMouseEnter={() => hoverHandler('Kompas')}
                           onMouseLeave={hoverHandlerOut}
                        >
                           Kompas.com
                        </Link>

                        <span className="
                           absolute -top-6 left-1/2 transform -translate-x-1/2
                           bg-gray-800 text-white text-xs rounded py-1 px-2
                           opacity-0 group-hover:opacity-100 transition-opacity duration-200
                           whitespace-nowrap pointer-events-none z-10
                        ">
                           Kunjungi Situs Resmi Kompas
                           <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                        </span>
                     </span>
                  </p>
               </div>

               <p className="mb-4">
                  <strong>Provinsi Penyumbang Sampah Terbanyak:</strong><br />
                  <span className={`text-base lg:text-lg ${selectedText === 'Beautynesia' ? 'bg-orange-400' : ''}`}>
                     Pulau Jawa menjadi penyumbang terbesar timbulan sampah, dengan <strong>Jawa Barat</strong> menghasilkan sekitar <strong>4,9 juta ton</strong> sampah sepanjang 2024.
                     Jumlah ini tidak hanya mencerminkan tingginya tingkat konsumsi dan kepadatan penduduk, tetapi juga menunjukkan tantangan besar dalam pengelolaan sampah yang efektif,
                     mulai dari sistem pemilahan yang masih minim hingga keterbatasan infrastruktur daur ulang di wilayah perkotaan maupun pedesaan.
                  </span>

                  <span className="inline-block relative group ml-[8px]">
                     <Link
                        to={linkberita[1]}
                        target="_blank"
                        className="bg-gray-400 font-semibold rounded-3xl w-fit px-2 py-1 text-xs hover:underline"
                        onMouseEnter={() => hoverHandler('Beautynesia')}
                        onMouseLeave={hoverHandlerOut}
                     >
                        Beautynesia
                     </Link>

                     <span className="
                           absolute -top-6 left-1/2 transform -translate-x-1/2
                           bg-gray-800 text-white text-xs rounded py-1 px-2
                           opacity-0 group-hover:opacity-100 transition-opacity duration-200
                           whitespace-nowrap pointer-events-none z-10
                        ">
                        Kunjungi Situs Resmi Beautynesia
                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                     </span>
                  </span>
               </p>

               <h3 className="font-semibold mb-2">🌏 Data Sampah Plastik di Kawasan ASEAN</h3>

               <p className="mb-4 text-base lg:text-lg">
                  <strong>Komitmen Regional:</strong><br />
                  <span className={`${selectedText === 'ASEAN Declaration on Plastic Circularity' ? 'bg-orange-400' : ''}`}>
                     Negara-negara ASEAN telah menyepakati
                     <strong>ASEAN Declaration on Plastic Circularity</strong> pada Oktober 2024. Deklarasi ini menekankan pendekatan siklus hidup penuh terhadap polusi plastik, termasuk pengurangan plastik sekali pakai dan peningkatan daur ulang.

                  </span>

                  <span className="inline-block relative group ml-[8px]">
                     <Link
                        to={linkberita[1]}
                        target="_blank"
                        className="bg-gray-400 font-semibold rounded-3xl w-fit px-2 py-1 text-xs hover:underline"
                        onMouseEnter={() => hoverHandler('ASEAN Declaration on Plastic Circularity')}
                        onMouseLeave={hoverHandlerOut}
                     >
                        ASEAN Declaration on Plastic Circularity
                     </Link>

                     <span className="
                           absolute -top-6 left-1/2 transform -translate-x-1/2
                           bg-gray-800 text-white text-xs rounded py-1 px-2
                           opacity-0 group-hover:opacity-100 transition-opacity duration-200
                           whitespace-nowrap pointer-events-none z-10
                        ">
                        Kunjungi Situs Resmi ASEAN Declaration on Plastic Circularity
                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                     </span>
                  </span>
               </p>

               <p className="mb-4 text-base lg:text-lg">
                  <strong>Sungai Penyumbang Sampah Plastik ke Laut:</strong><br />
                  <span className={`${selectedText === 'GoodStats Data' ? 'bg-orange-400' : ''}`}>
                     Filipina menjadi kontributor utama dalam sampah plastik ke laut melalui sungai. Dari 10 sungai dengan kontribusi terbanyak secara global, 9 berada di Filipina — termasuk Sungai Pasig yang menempati peringkat teratas.
                  </span>
                  <span className="inline-block relative group ml-[8px]">
                     <Link
                        to={linkberita[0]}
                        target="_blank"
                        className="bg-gray-400 font-semibold rounded-3xl w-fit px-2 py-1 text-xs hover:underline"
                        onMouseEnter={() => hoverHandler('GoodStats Data')}
                        onMouseLeave={hoverHandlerOut}
                     >
                        GoodStats Data
                     </Link>

                     <span className="
                           absolute -top-6 left-1/2 transform -translate-x-1/2
                           bg-gray-800 text-white text-xs rounded py-1 px-2
                           opacity-0 group-hover:opacity-100 transition-opacity duration-200
                           whitespace-nowrap pointer-events-none z-10
                        ">
                        Kunjungi Situs Resmi GoodStats Data
                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                     </span>
                  </span>
               </p>

               <p className="mb-4 text-base lg:text-lg">
                  <strong>Inisiatif Regional:</strong><br />
                  <span className={`${selectedText === 'ERIA' ? 'bg-orange-400' : ''}`}>
                     ASEAN juga mengadakan <strong>ASEAN Conference on Combating Plastic Pollution (ACCPP)</strong> 2024 di Vientiane, Laos. Tujuannya adalah memperkuat kerja sama, inovasi, dan kemitraan dalam mengatasi polusi plastik di kawasan.
                  </span>

                  <span className="inline-block relative group ml-[8px]">
                     <Link
                        to={linkberita[0]}
                        target="_blank"
                        className="bg-gray-400 font-semibold rounded-3xl w-fit px-2 py-1 text-xs hover:underline"
                        onMouseEnter={() => hoverHandler('ERIA')}
                        onMouseLeave={hoverHandlerOut}
                     >
                        ERIA
                     </Link>

                     <span className="
                           absolute -top-6 left-1/2 transform -translate-x-1/2
                           bg-gray-800 text-white text-xs rounded py-1 px-2
                           opacity-0 group-hover:opacity-100 transition-opacity duration-200
                           whitespace-nowrap pointer-events-none z-10
                        ">
                        Kunjungi Situs Resmi ERIA (Economics Research Institute for Asia End East Asia)
                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                     </span>
                  </span>
               </p>

               <p className="mb-4 text-base lg:text-lg">
                  Aplikasi Bank Sampah hadir sebagai bagian dari solusi untuk membantu masyarakat mengelola dan mengurangi sampah plastik secara berkelanjutan.
               </p>

               <p className="text-sm italic">
                  Sumber: KLHK (sipsn.menlhk.go.id), Kompas, ASEAN.org, GoodStats, Beautynesia, RKCM PD Eria
               </p>



            </motion.div>

         </motion.div>
      </div>
   );
};

export default DetailUIUX;





// import React, { useEffect, useState } from "react";
// import { imagesdata } from "../../data/index";
// import { motion } from "framer-motion";
// import CaseWorkTop from "../../components/CaseWorkTop";

// const DetailUIUX = ({ dataId }) => {
//    const [workItem, setWorkItem] = useState(null);

//    useEffect(() => {
//       const item = imagesdata.find((item) => item.slug === dataId);
//       setWorkItem(item);
//    }, [dataId]);

//    if (!workItem) {
//       return (
//          <div className="text-center text-xl font-semibold ">
//             Memuat atau Item tidak ditemukan!
//          </div>
//       );
//    }

//    console.log(workItem.imgSampah, "ini adalah gambar sampah");

//    return (
//       <div className=" text-white">
//          <CaseWorkTop />
//          <motion.div
//             className="container mx-auto shadow-lg rounded-lg p-8 lg:p-12"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//          >
//             <motion.img
//                src={workItem.img}
//                alt={workItem.title}
//                className="w-full h-auto max-w-3xl mx-auto mb-8 rounded-lg shadow-lg"
//                initial={{ opacity: 0 }}
//                animate={{ opacity: 1 }}
//                transition={{ duration: 1, delay: 0.4 }}
//             />

//             <motion.div
//                className="mb-8 text-justify text-white"
//                initial={{ opacity: 0 }}
//                animate={{ opacity: 1 }}
//                transition={{ duration: 1, delay: 0.8 }}
//             >
//                <h2 className="text-lg lg:text-2xl font-semibold mb-4">
//                   Aplikasi Bank Sampah
//                </h2>
//                <h2 className="text-sm lg:text-xl font-semibold ">Solusi Cerdas, Lingkungan Bersih, Hadiah Menanti</h2>
//                <p className="text-sm md:text-lg  mb-4">
//                   Aplikasi Bank Sampah adalah platform inovatif yang mempermudah masyarakat dalam mengelola sampah secara lebih ramah lingkungan, praktis, dan menguntungkan.
//                </p>
//                <div className="grid grid-cols-4 gap-2 md:gap-4 mb-4 items-center">
//                   {
//                      workItem.imgSampah?.map(images => (
//                         <img key={images.id} src={images.img} alt={workItem.title} className=" w-full h-full object-cover rounded-xl md:rounded-3xl transition duration-300 ease-in-out transform hover:scale-105  hover:brightness-105" />
//                      ))
//                   }

//                </div>
//                <p>Melalui pendekatan digital, pengguna tidak hanya bisa membuang sampah terpilah dengan benar, tetapi juga mengubah sampah menjadi reward yang bisa ditukarkan dengan hadiah menarik.</p>
//             </motion.div>

//             <motion.div
//                className="mb-8 text-justify text-white"
//                initial={{ opacity: 0 }}
//                animate={{ opacity: 1 }}
//                transition={{ duration: 1, delay: 1 }}
//             >
//                <h2 className="text-lg lg:text-2xl font-semibold mb-4">
//                   Fitur Utama:
//                </h2>
//                <ul className="list-decimal text-sm md:text-lg mb-4 ml-6 space-y-2">
//                   <li>
//                      Pemisahan Sampah: Pengguna dapat memisahkan sampah berdasarkan jenisnya, seperti sampah organik, plastik, kertas, dan lainnya.
//                   </li>
//                   <li>
//                      Pengumpulan Sampah: Aplikasi akan mencatat jenis dan jumlah sampah yang dibuang, dan pengguna akan mendapatkan reward berdasarkan jenis dan berat sampah yang dibuang.
//                   </li>
//                   <li>
//                      Penjemputan Sampah: Pengguna dapat menjadwalkan waktu penjemputan sampah untuk kenyamanan mereka.
//                   </li>
//                   <li>
//                      Reward atau Poin: Pengguna yang aktif mendapatkan reward yang bisa ditukarkan dengan hadiah menarik.
//                   </li>
//                   <li>
//                      Pendidikan Lingkungan: Aplikasi ini memberikan edukasi mengenai pentingnya pengelolaan sampah yang baik dan mendaur ulang.</li>
//                </ul>
//             </motion.div>

//             <motion.div
//                className="mb-8 text-justify text-white"
//                initial={{ opacity: 0 }}
//                animate={{ opacity: 1 }}
//                transition={{ duration: 1, delay: 1.2 }}
//             >
//                <h2 className="text-lg lg:text-2xl font-semibold mb-4">
//                   Manfaat:
//                </h2>
//                <ul className="list-decimal text-sm md:text-lg mb-4 ml-6 space-y-2">
//                   <li>
//                      Mengurangi Sampah: Mengurangi sampah yang masuk ke TPA.</li>
//                   <li>
//                      Meningkatkan Kesadaran Lingkungan: Mendidik masyarakat untuk lebih peduli terhadap pengelolaan sampah.</li>
//                   <li>
//                      Mudah dan Praktis: Fitur penjemputan sampah membuat aplikasi mudah digunakan.</li>
//                   <li>
//                      Reward yang Menguntungkan: Mendapatkan hadiah atas kontribusi pengelolaan sampah.</li>
//                </ul>
//             </motion.div>

//             <div>
//                <h2 className="text-lg lg:text-2xl font-semibold  mb-2">
//                   Tugas yang Dikerjakan
//                </h2>
//                <motion.p
//                   className="text-lg text-justify"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 1, delay: 1.4 }}
//                >
//                   {workItem.desc?.split("\n").map((paragraph, index) => (
//                      <ul key={index} className="list-disc ml-6 mb-2">
//                         {paragraph.split(". ").map((point, idx) => (
//                            <li key={idx} className="text-sm md:text-lg">
//                               {point.trim()}.
//                            </li>
//                         ))}
//                      </ul>
//                   ))}
//                </motion.p>
//             </div>
//          </motion.div>
//       </div>
//    );
// };

// export default DetailUIUX;

