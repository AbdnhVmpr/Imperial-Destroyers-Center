export const searchData = (
  value,
  searchInputValue,
  selectRef,
  data,
  filteredData
) => {
  selectRef.current.value = "default";
  let result = [];
  if (searchInputValue.length !== 0) {
    result = data.filter((p) => {
      let searchValue = p.name.toLowerCase();
      return searchValue.indexOf(value.toLowerCase()) !== -1;
    });
  } else {
    result = filteredData.filter((p) => {
      let searchValue = p.name.toLowerCase();
      return searchValue.indexOf(value.toLowerCase()) !== -1;
    });
  }

  return result;
};

export const sortingStarships = (
  e,
  data,
  filteredData,
  searchInputValue,
  category
) => {
  let { value } = e.target;
  let result = [];
  let new_filteredData = [...filteredData];

  switch (category) {
    case "planets":
      if (value === "diameter") {
        result = new_filteredData.sort(
          (a, b) => parseFloat(b.diameter) - parseFloat(a.diameter)
        );
      } else if (value === "population") {
        result = new_filteredData.sort(
          (a, b) => parseFloat(b.population) - parseFloat(a.population)
        );
      } else {
        if (searchInputValue.length !== 0) {
          result = data;
        } else {
          result = [...data];
        }
      }
      return result;

    case "people":
      if (value === "height") {
        result = new_filteredData.sort(
          (a, b) => parseFloat(b.height) - parseFloat(a.height)
        );
      } else if (value === "mass") {
        result = new_filteredData.sort(
          (a, b) => parseFloat(b.mass) - parseFloat(a.mass)
        );
      } else if (value === "birth_year") {
        result = new_filteredData.sort(
          (a, b) => parseFloat(b.birth_year) - parseFloat(a.birth_year)
        );
      } else {
        if (searchInputValue.length !== 0) {
          result = data;
        } else {
          result = [...data];
        }
      }
      return result;

    case "starships":
    case "vehicles":
      if (value === "crew") {
        result = new_filteredData.sort(
          (a, b) => parseFloat(b.crew) - parseFloat(a.crew)
        );
      } else if (value === "cargo_capacity") {
        result = new_filteredData.sort(
          (a, b) => parseFloat(b.cargo_capacity) - parseFloat(a.cargo_capacity)
        );
      } else {
        if (searchInputValue.length !== 0) {
          result = data;
        } else {
          result = [...data];
        }
      }

      return result;

    default:
      return result;
  }
};
