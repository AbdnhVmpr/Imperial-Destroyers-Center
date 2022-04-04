import { useState, useEffect, useRef } from "react";

const useFetch = (category) => {
  const [data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [info, setInfo] = useState({ next: null, count: 0, previous: null });
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchInputValue, setSearchInputValue] = useState("");
  const selectRef = useRef();

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://swapi.dev/api/${category}/?page=${page}`
      );
      const data = await res.json();

      setLoading(false);

      const { next, count, previous, results } = data;
      setInfo({
        ...info,
        next,
        count,
        previous,
      });

      setData(results);
      setfilteredData(results);
      page === 1 && setLimit(results.length);
    } catch (e) {
      setLoading(true);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, page]);

  return {
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
  };
};

export default useFetch;
