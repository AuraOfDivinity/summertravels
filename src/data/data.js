import beach from "../assets/medias/MalibuBeach.mp4";
import forest from "../assets/medias/Forest.mp4";

const locationList = [
  {
    title: "Caspersen Beach",
    currentHotspot: "beach",
    video: https://www.youtube.com/watch?v=tBFdp7-TAHg,
    facts: [
      "Good place to find prehistoric sharks' teeth!",
      "Has freshwater and saltwater marshes, mangroves and tidal flats",
      "Southern half of the beach was left in its natural state ",
    ],
    location: [36, 119],
    nextHotspot: "beach2",
  },
  {
    title: "Hamoa Beach",
    currentHotspot: "beach2",
    video: https://youtu.be/m_QgCPBE1kY?t=9,
    facts: [
      "Popular surf break",
      "Once known as 'Mokae' because of the cliff around it",
      "Is inside a breached volcanic crater",
    ],
    location: [40, 79],
    nextHotspot: "beach3",
  },
   {
    title: "Ventura Beach",
    currentHotspot: "beach3",
    video: https://www.youtube.com/watch?v=9mlgwus_zew,
    facts: [
      "Ventura Beach is a group of beaches",
      "Has a passage all the way to McGrath State Beach",
      "Good place to beach comb",
    ],
    location: [40, 79],
    nextHotspot: "beach4",
  },
   {
    title: "Cala Millor Beach",
    currentHotspot: "beach4",
    video: https://youtu.be/4m11cfhb7ZM?t=23,
    facts: [
      "It's over a kilometre long",
      "The depth is about 30 metres",
      "To the south lies the protected rocky headland, Punta d'Amer",
    ],
    location: [40, 79],
    nextHotspot: "beach",
  },
];

export default locationList;
