import beach from "../assets/medias/MalibuBeach.mp4";
import forest from "../assets/medias/Forest.mp4";

const locationList = [
  {
    title: "Malibu Beach",
    currentHotspot: "beach",
    video: beach,
    facts: [
      "Example fact about malibu beach 1 ",
      "Example fact about malibu beach 2",
      "Example fact about malibu beach 3",
      "Example fact about malibu beach 4",
      "Example fact about malibu beach 5",
    ],
    location: [36, 119],
    nextHotspot: "forest",
  },
  {
    title: "Forest",
    currentHotspot: "forest",
    video: forest,
    facts: [
      "Example fact about forest 1 ",
      "Example fact about forest 2",
      "Example fact about forest 3",
      "Example fact about forest 4",
      "Example fact about forest 5",
    ],
    location: [40, 79],
    nextHotspot: "beach",
  },
];

export default locationList;
