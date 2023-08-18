import React from "react";
import WatchItems from "./WatchItems";

const watchArray = [
  {
    id: 1,
    brand: "Rolex",
    model: "Submariner",
    price: 10000,
    description: "A classic dive watch with timeless design.",
    imageUrl:
      "https://global-uploads.webflow.com/636a2d3c26aa845d12b17679/645a5a99b7ecc8bcf79135d1_2019-11-04-rolex-submariner-date-ref-116610ln-41.webp",
  },
  {
    id: 2,
    brand: "Omega",
    model: "Speedmaster Professional",
    price: 7500,
    description: "The legendary moonwatch worn by astronauts.",
    imageUrl:
      "https://hodinkee.imgix.net/uploads/images/1568741839034-6xpjhwxlmnp-5af0ce2ff16b5207580926a16ab34458/729A8430.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12",
  },
  {
    id: 3,
    brand: "Patek Philippe",
    model: "Calatrava",
    price: 20000,
    description: "An elegant and refined dress watch.",
    imageUrl:
      "https://watches83.com/56161-thickbox_default/patek-philippe-calatrava-1963-ref-3435-vintage-swiss-automatic-watch-18k-gold-cal-27-460-collectors-extract-box-.jpg",
  },
  {
    id: 4,
    brand: "Tag Heuer",
    model: "Carrera",
    price: 4500,
    description: "A sporty chronograph with racing heritage.",
    imageUrl: "https://i.ytimg.com/vi/Xc9qt7Ca85o/sddefault.jpg",
  },
  {
    id: 5,
    brand: "Audemars Piguet",
    model: "Royal Oak",
    price: 30000,
    description: "Iconic luxury watch with a distinctive octagonal design.",
    imageUrl:
      "https://vanwonderenwatches.com/wp-content/uploads/VIERKANT-VWW-februari2-21-van-206.jpg",
  },
  {
    id: 6,
    brand: "Seiko",
    model: "SKX007",
    price: 40000,
    description: "A popular automatic dive watch known for its value.",
    imageUrl:
      "https://unclestraps.com/cdn/shop/products/JubileeandBoR24.jpg?v=1626198000&width=1500",
  },
  {
    id: 7,
    brand: "Casio",
    model: "G-Shock DW5600",
    price: 6000,
    description: "A rugged digital watch with shock resistance.",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5c9cb86ec46f6d68c6b63267/1660746763121-LNPW3XUMTWPE7UAXMWRQ/casio-g-shock-dw-5600-review.jpg?format=500w",
  },
  {
    id: 8,
    brand: "Fossil",
    model: "Grant",
    price: 11000,
    description: "A vintage-inspired chronograph watch.",
    imageUrl:
      "https://www.brandfield.com/media/catalog/product/cache/image/9df78eab33525d08d6e5fb8d27136e95/4/0/4051432662065.jpg",
  },
  {
    id: 9,
    brand: "Tissot",
    model: "Le Locle",
    price: 50000,
    description: "A Swiss automatic watch with classic elegance.",
    imageUrl:
      "https://obsessionsj.com/cdn/shop/products/T006_407_22_033_00_2_74a03107-1570-4190-81ac-9f6a61648536_1200x.jpg?v=1633535420",
  },
  {
    id: 10,
    brand: "Bulova",
    model: "Precisionist",
    price: 165000,
    description: "A high-precision quartz watch with sleek design.",
    imageUrl:
      "https://diamondsjewellers.ie/cdn/shop/products/bulpresoical.jpg?v=1647780117",
  },
];

export default function Watches() {
  const watchList = watchArray.map((watch) => (
    <WatchItems watch={watch} key={watch.id} />
  ));

  return (
    <div className="container my-5">
      <ul className="row p-0 justify-content-center gap-4">{watchList}</ul>
    </div>
  );
}
