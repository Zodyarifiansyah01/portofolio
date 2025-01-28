import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imagesdata } from "../../data/index";

const DetailListWork = () => {
  const { id } = useParams();
  const [workItem, setWorkItem] = useState("");

  useEffect(() => {
    const item = imagesdata.find((item) => item.id === parseInt(id));
    setWorkItem(item);
  }, [id]);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Detail List Work</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg mb-2">
          Detail for work item with ID:{" "}
          <span className="font-semibold">{workItem.title}</span>
        </p>
        <img
          src={workItem.img}
          alt={workItem.title}
          className="w-full h-auto max-w-md mx-auto mb-4"
        />
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Subtitle:</span> {workItem.subtitle}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Year Started:</span>{" "}
          {workItem.bulanAwal} {workItem.tahunAwal}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Year Started:</span>{" "}
          {workItem.bulanAkhir} {workItem.tahunAwal}
        </p>

        <div>
          <p
            className="text-gray-700 text-justify"
            dangerouslySetInnerHTML={{ __html: workItem.desc }}
          />
        </div>
      </div>
    </div>
  );
};
export default DetailListWork;
