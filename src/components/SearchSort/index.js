import { BiSearch } from "react-icons/bi";

const Search = ({
  searchInputValue,
  handleSearch,
  handleSorting,
  selectRef,
  category,
  inputRef,
}) => {
  return (
    <div className="cards__options">
      <div className="cards__options__search">
        <BiSearch />
        <input
          type="text"
          placeholder="Search"
          value={searchInputValue}
          onChange={(e) => handleSearch(e.target.value)}
          ref={inputRef}
        />
      </div>

      <div className="cards__options__sort">
        <select
          name="sort"
          onChange={handleSorting}
          ref={selectRef}
          defaultValue=""
        >
          <option disabled value="">
            Order by
          </option>
          <option value="default">Default</option>

          {(() => {
            if (category === "planets") {
              return (
                <>
                  <option value="diameter">Diameter</option>
                  <option value="population">Population</option>
                </>
              );
            } else if (category === "starships" || category === "vehicles") {
              return (
                <>
                  <option value="crew">Crew</option>
                  <option value="cargo_capacity">Cargo capacity</option>
                </>
              );
            } else if (category === "people") {
              return (
                <>
                  <option value="height">Height</option>
                  <option value="mass">Mass</option>
                  <option value="birth_year">Birth year</option>
                </>
              );
            }
          })()}
        </select>
      </div>
    </div>
  );
};

export default Search;
