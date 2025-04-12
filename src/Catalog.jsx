import React from "react";

const catalogData = [
  {
    title: "Люстры",
    price: "От 540₽",
    image: "../public/img/img6.png"
  },
  {
    title: "Светильники",
    price: "От 540₽",
    image: "../public/img/img4.png"
  },
  {
    title: "Бра",
    price: "От 540₽",
    image: "../public/img/img2.png"
  },
  {
    title: "Торшеры",
    price: "От 540₽",
    image: "../public/img/img5.png"
  },
  {
    title: "Настольные лампы",
    price: "От 540₽",
    image: "../public/img/img3.png"
  },
  {
    title: "Споты",
    price: "От 540₽",
    image: "../public/img/img1.png"
  }
];

const Catalog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-semibold">Каталог</h2>
        <button className="border border-black rounded-full px-5 py-2 hover:bg-gray-100 transition">
          Весь каталог →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {catalogData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-4 flex flex-col justify-between hover:shadow-md transition"
          >
            <div className="text-lg font-medium mb-2">{item.title}</div>
            <img
              src={item.image}
              alt={item.title}
              className="h-40 object-contain mx-auto"
            />
            <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
              <span>{item.price}</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
