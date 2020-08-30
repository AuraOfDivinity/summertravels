import beach from "../assets/medias/MalibuBeach.mp4";
import forest from "../assets/medias/Forest.mp4";
import hamoa from "../assets/medias/hamoa.mp4";
import mallorca from "../assets/medias/mallorca.mp4";

const locationList = [
  {
    title: "Malibu Beach",
    currentHotspot: "beach",
    video: beach,
    facts: [
      "Good place to find prehistoric sharks' teeth!",
      "Has freshwater and saltwater marshes, mangroves and tidal flats",
      "Southern half of the beach was left in its natural state ",
      "Good place to find prehistoric sharks' teeth!",
      "Has freshwater and saltwater marshes, mangroves and tidal flats",
    ],
    location: [34.01, -118.41],
    nextHotspot: "beach2",
  },
  {
    title: "Hamoa Beach",
    currentHotspot: "beach2",
    video: hamoa,
    facts: [
      "Popular surf break",
      "Once known as 'Mokae' because of the cliff around it",
      "Is inside a breached volcanic crater",
      "Popular surf break",
      "Once known as 'Mokae' because of the cliff around it",
    ],
    location: [20.43, -155.59],
    nextHotspot: "beach3",
  },
  {
    title: "Mallorca Beach",
    currentHotspot: "beach3",
    video: mallorca,
    facts: [
      "Good place to find prehistoric sharks' teeth!",
      "Has freshwater and saltwater marshes, mangroves and tidal flats",
      "Southern half of the beach was left in its natural state ",
      "Has freshwater and saltwater marshes, mangroves and tidal flats",
      "Southern half of the beach was left in its natural state ",
    ],
    location: [34.274, -119.229],
    nextHotspot: "redwood",
  },
  {
    title: "Red Wood forest",
    currentHotspot: "redwood",
    video: forest,
    facts: [
      "Home to Fern Canyon, with its high, plant-covered walls.",
      "140, 000 acres in size",
      "To the south lies the protected rocky headland, Punta d'Amer",
      "140, 000 acres in size",
      "Home to Fern Canyon, with its high, plant-covered walls.",
    ],
    location: [41.213, -124.004],
    nextHotspot: "beach",
  },
];

export default locationList;
