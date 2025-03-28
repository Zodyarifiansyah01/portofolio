import React, { useEffect, useState } from "react";
import { imagesdata } from "../../../data/index";
import { motion } from "framer-motion"; // Import motion

const DetailSiris = ({ dataId }) => {
  const [workItem, setWorkItem] = useState(null);

  useEffect(() => {
    const item = imagesdata.find((item) => item.slug === dataId);
    setWorkItem(item);
  }, [dataId]);

  if (!workItem) {
    return (
      <div className="text-center text-xl font-semibold text-gray-600">
        Memuat atau Item tidak ditemukan!
      </div>
    );
  }

  const renderList = (items) => {
    return items.map((item, index) => (
      <li key={index} className="text-sm md:text-lg text-gray-700 mb-2">
        {item}
      </li>
    ));
  };

  return (
    <div className="container mx-auto px-4 lg:px-16 py-6">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 lg:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 text-center">
          {workItem.title}
        </h1>

        <motion.img
          src={workItem.img}
          alt={workItem.title}
          className="w-full h-auto max-w-3xl mx-auto mb-8 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="flex flex-wrap gap-4 text-sm md:text-lg text-gray-800">
            <div className="w-full md:w-1/2">
              <span className="font-semibold">Subtitle:</span>{" "}
              {workItem.subtitle}
            </div>
            <div className="w-full md:w-1/2">
              <span className="font-semibold">App Title :</span>{" "}
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
        </motion.div>

        <motion.div
          className="mb-8 text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h2 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">
            Deskripsi Aplikasi LPPM Universitas
          </h2>
          <p className="text-sm md:text-lg text-gray-700 mb-4">
            Aplikasi Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM)
            di universitas merupakan platform digital yang dirancang untuk
            mendukung kegiatan penelitian dan pengabdian masyarakat di
            lingkungan akademik. Aplikasi ini bertujuan untuk mempermudah proses
            administrasi, monitoring, dan evaluasi program penelitian serta
            pengabdian kepada masyarakat yang dilakukan oleh dosen, mahasiswa,
            dan peneliti lainnya di universitas. <br />
            Dengan menggunakan aplikasi ini, seluruh kegiatan yang terkait
            dengan penelitian dan pengabdian masyarakat dapat diproses secara
            lebih efisien, transparan, dan terorganisir. Aplikasi LPPM
            memfasilitasi pengajuan proposal, pengelolaan dana, laporan, serta
            pemantauan perkembangan proyek penelitian.
          </p>
        </motion.div>

        <motion.div
          className="mb-8 text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">
            Fitur Utama:
          </h2>
          <ul className="list-decimal text-sm md:text-lg text-gray-700 mb-4 ml-6 space-y-2">
            {renderList([
              "Pengajuan Proposal Penelitian dan Pengabdian secara online, lengkap dengan pengecekan dokumen dan format standar.",
              "Manajemen Proyek untuk mengelola proyek penelitian dan pengabdian termasuk pemantauan timeline dan anggaran.",
              "Pengelolaan Dana untuk mendukung pengelolaan dana proyek, pencatatan penggunaan dana, dan pelaporan keuangan.",
            ])}
          </ul>
        </motion.div>

        <motion.div
          className="mb-8 text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h2 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">
            Manfaat:
          </h2>
          <ul className="list-decimal text-sm md:text-lg text-gray-700 mb-4 ml-6 space-y-2">
            {renderList([
              "Efisiensi Administrasi: Semua proses dapat dilakukan secara online, mengurangi beban administrasi.",
              "Transparansi: Memungkinkan semua pihak yang terlibat untuk memantau perkembangan proyek dan penggunaan dana.",
              "Pemantauan Keuangan yang Lebih Baik: Pengelolaan dana yang lebih transparan dan sistematis.",
            ])}
          </ul>
        </motion.div>

        <div>
          <h2 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-2">
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
                  <li key={idx} className="text-sm md:text-lg text-gray-700">
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

export default DetailSiris;
