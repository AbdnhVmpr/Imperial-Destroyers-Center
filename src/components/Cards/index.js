/* eslint-disable no-lone-blocks */
import Card from "../Card";
import "../Cards/Cards.scss";

const Cards = ({ filteredData = [], category }) => {
  return (
    <>
      {(() => {
        if (filteredData.length > 0) {
          if (category === "planets") {
            return filteredData.map(
              ({ name, climate, terrain, population, url }) => (
                <Card key={name} name={name} category={category} url={url}>
                  <p>
                    <span>Climate: </span>
                    {climate}
                  </p>
                  <p>
                    <span>Terrain: </span> {terrain}
                  </p>
                  <p>
                    <span>Population: </span> {population}
                  </p>
                </Card>
              )
            );
          } else if (category === "starships" || category === "vehicles") {
            {
              return filteredData.map(
                ({ name, manufacturer, cargo_capacity, crew, url }) => (
                  <Card key={name} name={name} category={category} url={url}>
                    <p>
                      <span>Manufacturer: </span>
                      {manufacturer}
                    </p>
                    <p>
                      <span>Cargo capacity: </span> {cargo_capacity}
                    </p>
                    <p>
                      <span>Crew: </span> {crew}
                    </p>
                  </Card>
                )
              );
            }
          } else if (category === "people") {
            {
              return filteredData.map(
                ({ name, height, mass, birth_year, url }) => (
                  <Card key={name} name={name} category={category} url={url}>
                    <p>
                      <span>Height: </span>
                      {height}
                    </p>
                    <p>
                      <span>Mass: </span> {mass}
                    </p>
                    <p>
                      <span>Birth Year: </span> {birth_year}
                    </p>
                  </Card>
                )
              );
            }
          }
        } else {
          return <p>No data</p>;
        }
      })()}
    </>
  );
};

export default Cards;
