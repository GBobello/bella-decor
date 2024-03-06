import cabeceira_1 from "../assets/cabeceiras/cabeceira_1.jpg";
import cabeceira_2 from "../assets/cabeceiras/cabeceira_2.jpg";
import cabeceira_3 from "../assets/cabeceiras/cabeceira_3.jpg";
import cabeceira_4 from "../assets/cabeceiras/cabeceira_4.jpg";
import cabeceira_5 from "../assets/cabeceiras/cabeceira_5.jpg";
import cabeceira_6 from "../assets/cabeceiras/cabeceira_6.jpg";
import cabeceira_7 from "../assets/cabeceiras/cabeceira_7.jpg";
import cabeceira_8 from "../assets/cabeceiras/cabeceira_8.jpg";
import cabeceira_9 from "../assets/cabeceiras/cabeceira_9.jpg";
import poltrona_1 from "../assets/poltronas/poltrona_1.jpg";
import poltrona_2 from "../assets/poltronas/poltrona_2.jpg";
import poltrona_3 from "../assets/poltronas/poltrona_3.jpg";
import poltrona_4 from "../assets/poltronas/poltrona_4.jpg";
import poltrona_5 from "../assets/poltronas/poltrona_5.jpg";
import poltrona_6 from "../assets/poltronas/poltrona_6.jpg";
import poltrona_7 from "../assets/poltronas/poltrona_7.jpg";
import poltrona_8 from "../assets/poltronas/poltrona_8.jpg";
import poltrona_9 from "../assets/poltronas/poltrona_9.jpg";


const CABECEIRAS = [
  {
    id: "1",
    title: "Poah",
    price: 1000,
    images: [
      cabeceira_1,
      cabeceira_2,
      cabeceira_3,
    ],
    description: "lorem ipsum dolor sit amet",
  },
  {
    id: "2",
    title: "Paris",
    price: 2000,
    images: [
      cabeceira_6,
      cabeceira_4,
      cabeceira_5,
    ],
    description: "lorem ipsum dolor sit amet",
  },
  {
    id: "3",
    title: "Kelly",
    price: 3000,
    images: [
      cabeceira_7,
      cabeceira_8,
      cabeceira_9,
    ],
    description: "lorem ipsum dolor sit amet",
  }
]

const POLTRONAS = [
  {
    id: "1",
    title: "Havanna",
    price: 1000,
    images: [
      poltrona_1,
      poltrona_2,
      poltrona_3,
    ],
    description: "lorem ipsum dolor sit amet",
  },
  {
    id: "2",
    title: "Dubai",
    price: 2000,
    images: [
      poltrona_4,
      poltrona_5,
      poltrona_6,
    ],
    description: "lorem ipsum dolor sit amet",
  },
  {
    id: "3",
    title: "Web",
    price: 3000,
    images: [
      poltrona_7,
      poltrona_8,
      poltrona_9,
      poltrona_1,
    ],
    description: "lorem ipsum dolor sit amet",
  },
]

export {POLTRONAS, CABECEIRAS}