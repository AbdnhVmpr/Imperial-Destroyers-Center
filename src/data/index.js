import { BiPlanet } from "react-icons/bi";
import { SiStarship } from "react-icons/si";
import { BsPeople } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";

export const homeInfo = [
  {
    id: 1,
    title: "Planets",
    description:
      "The fictional universe of the Star Wars franchise features multiple planets and moons. While only the feature films and selected other works are considered canon to the franchise since the 2012 acquisition of Lucasfilm by The Walt Disney Company, some canon planets were first named or explored in works from the non-canon Star Wars expanded universe, now rebranded Star Wars Legends.",
    url: "planets",
    image: require("../assets/planets/kamino.jpg"),
  },
  {
    id: 2,
    title: "Starships",
    description:
      "A starship, also known as a starcruiser, spaceship, spacecraft, or simply just craft or ship, was a vessel designed for interstellar travel, specifically between star systems. Starships were distinguished by the inclusion of a hyperdrive, a piece of equipment that made hyperspace travel possible.",
    url: "starships",
    image: require("../assets/starships/X-wing.png"),
  },
  {
    id: 3,
    title: "Vehicles",
    description:
      'The term "Vehicle" encompasses both Planetary Vehicles (Such as Airspeeders, Landspeeders, and Walkers), and Starships (Such as Starfighters, Space Transports, and Capital Ships). The major difference between Planetary Vehicles and Starships is that Planetary Vehicles generally do not travel in the vacuum of space. Rules that pertain only to Planetary Vehicles or Starships are called out specifically.',
    url: "vehicles",
    image: require("../assets/vehicles/AT-AT.png"),
  },
  {
    id: 4,
    title: "People",
    description:
      "This incomplete list of characters from the Star Wars franchise contains only those which are considered part of the official Star Wars canon, as of the changes made by Lucasfilm in April 2014. Following its acquisition by The Walt Disney Company in 2012, Lucasfilm rebranded most of the novels, comics, video games and other works produced since the originating 1977 film Star Wars as Star Wars Legends and declared them non-canon to the rest of the franchise. As such, the list contains only information from the Skywalker Saga films, the 2008 animated TV series Star Wars: The Clone Wars, and works published after April 2014.",
    url: "people",
    image: require("../assets/people/Luke-Skywalker-Jedi.png"),
  },
];

export const headerNav = [
  {
    display: "Planets",
    path: "/planets",
    icon: <BiPlanet />,
  },
  {
    display: "Starships",
    path: "/starships",
    icon: <SiStarship />,
  },
  {
    display: "People",
    path: "/people",
    icon: <BsPeople />,
  },
  {
    display: "Vehicles",
    path: "/vehicles",
    icon: <FaTruck />,
  },
];

export const categories = {
  planets: [
    {
      name: "Tatooine",
      climate: "arid",
      terrain: "desert",
      population: "200000",
      url: "https://swapi.dev/api/planets",
    },
  ],
  starships: [
    {
      name: "CR90 corvette",
      manufacturer: "Corellian Engineering Corporation",
      crew: "30-165",
      cargo_capacity: "3000000",
      url: "https://swapi.dev/api/starships/",
    },
  ],
  people: [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      birth_year: "19BBY",
      url: "https://swapi.dev/api/people",
    },
  ],
  vehicles: [
    {
      name: "Sand Crawler",
      manufacturer: "Corellia Mining Corporation",
      crew: "46",
      cargo_capacity: "50000",
      url: "https://swapi.dev/api/vehicles",
    },
  ],
};
