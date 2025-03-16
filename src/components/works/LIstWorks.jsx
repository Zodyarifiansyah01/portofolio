import { imagesdata } from "../../data/index";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ListWorks = () => {
  // Fungsi untuk memotong deskripsi sehingga hanya menampilkan 3 paragraf pertama
  const getLimitedDescription = (desc) => {
    const paragraphs = desc.split("\n"); // Memecah deskripsi berdasarkan baris
    return paragraphs.slice(0, 3).join("\n"); // Mengambil hanya 3 paragraf pertama
  };

  const cardRef = useRef([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0, // Mulai dari transparan
          y: 50, // Mulai dari posisi lebih rendah
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            once: true,
            start: "top 80%", // Animasi mulai ketika card hampir muncul
          },
        }
      );
    });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="space-y-12">
        {imagesdata.map((item, index) => (
          <Link to={`/Detail-Works/${item.slug}`} key={item.id}>
            <div
              className="cursor-pointer"
              ref={(el) => (cardRef.current[index] = el)}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12 mt-8">
                {/* Kolom Kiri (Tahun dan Bulan) */}
                <div className="flex flex-col gap-4 md:col-span-4">
                  <div className="space-y-1">
                    <p className="text-gray-600 font-medium text-base sm:text-lg md:text-xl">
                      {item.tahunAwal}
                    </p>
                    <p className="text-gray-500 text-sm sm:text-base">
                      {item.bulanAwal}
                    </p>
                    <p className="text-gray-500 text-sm sm:text-base">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Kolom Kanan (Gambar dan Deskripsi) */}
                <div className="flex flex-col md:col-span-8 gap-4">
                  <div className="relative flex flex-col md:flex-row gap-4">
                    {/* Gambar di desktop */}
                    <div className="space-y-4 w-full">
                      <img
                        src={item.img}
                        alt={item.titleApp}
                        className="hidden sm:block rounded-lg w-full h-60 object-cover object-center shadow-md"
                      />
                    </div>
                    {/* Judul gambar di desktop */}
                    <div className="space-y-2 absolute top-8 left-4 hidden md:block">
                      <h2 className="text-white font-noto-serif text-xl md:text-2xl font-medium">
                        {item.titleApp}
                      </h2>
                    </div>
                  </div>
                  {/* Gambar dan Judul di mobile */}
                  <div className="md:hidden space-y-4">
                    <h2 className="text-white font-noto-serif text-xl font-medium">
                      {item.titleApp}
                    </h2>
                    <img
                      src={item.img}
                      alt={item.titleApp}
                      className="rounded-lg w-full h-60 object-cover object-center shadow-md"
                    />
                  </div>
                  {/* Deskripsi */}
                  <div className="text-sm flex flex-col justify-end mt-4">
                    <p className="text-gray-500 text-justify">
                      {getLimitedDescription(item.desc)}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListWorks;
