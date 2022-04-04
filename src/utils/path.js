import planets from "../assets/brano.jpg";
import starships from "../assets/starship.jpg";
import vehicles from "../assets/vehicle.jpg";
import people from "../assets/people.jpg";

const getId = (url) => {
  const split_url = url.split("/");
  const path = split_url[split_url.length - 2];
  return path;
};

export const getImage = (url, category = "planets") => {
  let path;
  try {
    path = require(`../assets/${category}/${getId(url)}.jpg`);
  } catch (err) {
    path = require(`../assets/${category}/not-found.png`);
  }

  return path;
};

export const getBackground = (category) => {
  switch (category) {
    case "planets":
      return planets;
    case "starships":
      return starships;
    case "vehicles":
      return vehicles;
    case "people":
      return people;
    default:
      return planets;
  }
};
