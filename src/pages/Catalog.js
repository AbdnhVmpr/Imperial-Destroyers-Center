import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import Cards from "../components/Cards";
import SearchSort from "../components/SearchSort";
import Pagination from "../components/Pagination";
import PageHeader from "../components/PageHeader";
import { searchData, sortingStarships } from "../utils/search";

import { ReactComponent as Spinner } from "../assets/spinner.svg";
import { homeInfo } from "../data";
import "../components/Cards/Cards.scss";

const Catalog = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!homeInfo.some((e) => e.url === category)) {
      navigate("/not-found");
    }
  }, [navigate, category]);

  const {
    data,
    filteredData,
    info,
    error,
    page,
    limit,
    loading,
    searchInputValue,
    selectRef,
    setPage,
    setSearchInputValue,
    setfilteredData,
  } = useFetch(category);

  const handleSearch = useCallback(
    (value) => {
      setSearchInputValue(value);
      const result = searchData(
        value,
        searchInputValue,
        selectRef,
        data,
        filteredData
      );

      setfilteredData(result);
    },
    [
      data,
      searchInputValue,
      selectRef,
      filteredData,
      setSearchInputValue,
      setfilteredData,
    ]
  );

  const handleSorting = useCallback(
    (e) => {
      const result = sortingStarships(
        e,
        data,
        filteredData,
        searchInputValue,
        category
      );
      setfilteredData(result);
    },
    [data, filteredData, searchInputValue, setfilteredData, category]
  );

  return (
    <>
      <PageHeader category={category} />

      <div className="cards container">
        <div className="cards__title">
          <h1>{category}</h1>
        </div>

        {!loading && (
          <SearchSort
            searchInputValue={searchInputValue}
            handleSearch={handleSearch}
            handleSorting={handleSorting}
            selectRef={selectRef}
            category={category}
          />
        )}

        {error ? (
          <div className="cards__error">
            There's a problem fetching data from the server ⚠️
            <br /> Please try again later
          </div>
        ) : (
          <>
            {loading ? (
              <div className="cards__spinner">
                <Spinner />
              </div>
            ) : (
              <>
                {filteredData.length > 0 ? (
                  <div className="cards__container">
                    <Cards filteredData={filteredData} category={category} />
                  </div>
                ) : (
                  <div className="cards__no-data-found">
                    <p>No result was found 😬</p>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {!error && (
          <Pagination
            loading={loading}
            info={info}
            limit={limit}
            page={page}
            setPage={setPage}
            category={category}
          />
        )}
      </div>
    </>
  );
};

export default Catalog;
