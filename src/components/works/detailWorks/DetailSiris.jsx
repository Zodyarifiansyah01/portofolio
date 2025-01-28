import React, { useEffect, useState } from "react";
import { imagesdata } from "../../../data/index";
import { motion } from "framer-motion"; // Import motion

const DetailSiris = ({ dataId }) => {
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
              Pengajuan Proposal Penelitian dan Pengabdian Pengguna dapat
              mengajukan proposal penelitian atau pengabdian kepada masyarakat
              secara online. Proses ini dilengkapi dengan sistem pengecekan
              kelengkapan dokumen dan format standar yang telah ditetapkan.
            </li>
            <li>
              Manajemen Proyek Fitur untuk mengelola proyek penelitian dan
              pengabdian yang sedang berlangsung, termasuk pemantauan timeline,
              anggaran, serta kegiatan yang sudah atau belum dilaksanakan.
            </li>
            <li>
              Pengelolaan Dana Sistem yang mendukung pengelolaan dana yang
              diterima untuk proyek penelitian atau pengabdian, termasuk
              pencatatan penggunaan dana dan pelaporan keuangan.
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
            <li>
              Efisiensi Administrasi Aplikasi ini membantu mengurangi waktu dan
              beban administrasi dalam pengelolaan penelitian dan pengabdian
              kepada masyarakat, karena semua proses dapat dilakukan secara
              online.
            </li>
            <li>
              Transparansi Dengan sistem yang terintegrasi, semua pihak yang
              terlibat dapat memantau perkembangan proyek dan penggunaan dana,
              sehingga meningkatkan transparansi dalam pengelolaan kegiatan
              penelitian.
            </li>
            <li>
              Pemantauan Keuangan yang Lebih Baik Dengan adanya pengelolaan dana
              yang lebih transparan dan sistematis, pemantauan anggaran yang
              digunakan dalam proyek penelitian menjadi lebih akurat dan
              terkontrol.
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

export default DetailSiris;
