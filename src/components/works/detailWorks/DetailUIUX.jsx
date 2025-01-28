import React, { useEffect, useState } from "react";
import { imagesdata } from "../../../data/index";
import { motion } from "framer-motion"; // Import motion

const DetailUIUX = ({ dataId }) => {
  const [workItem, setWorkItem] = useState(null);

  useEffect(() => {
    const item = imagesdata.find((item) => item.id === parseInt(dataId));
    setWorkItem(item);
  }, [dataId]);

  if (!workItem) {
    return (
      <div className="text-center text-xl font-semibold text-gray-600">
        Memuat atau Item tidak ditemukan!
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 md:px-12 lg:px-16">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 lg:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="text-xl lg:text-2xl mb-4 text-gray-700">
          Detail for work item{" "}
          <span className="font-semibold ">{workItem.title}</span>
        </p>

        <motion.img
          src={workItem.img}
          alt={workItem.title}
          className="w-full h-auto max-w-lg mx-auto mb-6 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Subtitle:</span> {workItem.subtitle}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Year Started:</span>{" "}
            {workItem.bulanAwal} {workItem.tahunAwal}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Year End:</span>{" "}
            {workItem.bulanAkhir} {workItem.tahunAkhir}
          </p>
        </motion.div>

        <motion.div
          className="mb-6 text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Deskripsi Aplikasi LPPM Universitas
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Aplikasi Bank Sampah adalah sebuah platform yang dirancang untuk
            memfasilitasi pengelolaan sampah dengan cara yang lebih ramah
            lingkungan dan efisien. Dalam aplikasi ini, pengguna dapat membuang
            sampah yang sudah dipisahkan berdasarkan jenisnya, dan sebagai
            imbalannya, mereka akan mendapatkan reward atau hadiah. Selain itu,
            aplikasi ini juga menyediakan layanan penjemputan sampah, sehingga
            pengguna tidak perlu khawatir tentang cara membuang sampah mereka.
          </p>
        </motion.div>

        <motion.div
          className="mb-6 text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Fitur Utama:
          </h2>
          <ol className="list-decimal text-lg text-gray-700 mb-4 ml-6 space-y-2">
            <li>
              Pemisahan Sampah: Pengguna dapat memisahkan sampah berdasarkan
              jenisnya, seperti sampah organik, plastik, kertas, dan lainnya.
            </li>
            <li>
              Pengumpulan Sampah: Aplikasi akan mencatat jenis dan jumlah sampah
              yang dibuang, dan pengguna akan mendapatkan reward berdasarkan
              jenis dan berat sampah yang dibuang.
            </li>
            <li>
              Penjemputan Sampah: Pengguna dapat menjadwalkan waktu penjemputan
              sampah untuk kenyamanan mereka.
            </li>
            <li>
              Reward atau Poin: Pengguna yang aktif mendapatkan reward yang bisa
              ditukarkan dengan hadiah menarik.
            </li>
            <li>
              Pendidikan Lingkungan: Aplikasi ini memberikan edukasi mengenai
              pentingnya pengelolaan sampah yang baik dan mendaur ulang.
            </li>
          </ol>
        </motion.div>

        <motion.div
          className="mb-6 text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Manfaat:
          </h2>
          <ol className="list-decimal text-lg text-gray-700 mb-4 ml-6 space-y-2">
            <li>Mengurangi Sampah: Mengurangi sampah yang masuk ke TPA.</li>
            <li>
              Meningkatkan Kesadaran Lingkungan: Mendidik masyarakat untuk lebih
              peduli terhadap pengelolaan sampah.
            </li>
            <li>
              Mudah dan Praktis: Fitur penjemputan sampah membuat aplikasi mudah
              digunakan.
            </li>
            <li>
              Reward yang Menguntungkan: Mendapatkan hadiah atas kontribusi
              pengelolaan sampah.
            </li>
          </ol>
        </motion.div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Tugas yang Dikerjakan
          </h2>
          <motion.p
            className="text-lg text-gray-700 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {workItem.desc?.split("\n").map((paragraph, index) => (
              <ul key={index} className="list-disc ml-6 mb-2">
                {paragraph.split(". ").map((point, idx) => (
                  <li key={idx} className="text-gray-700">
                    {point.trim()}.
                  </li>
                ))}
              </ul>
            ))}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailUIUX;
