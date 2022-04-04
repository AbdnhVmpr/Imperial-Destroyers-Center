import { useEffect } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Pagination = ({ loading, info, limit, page, setPage, category }) => {
  const { count, next, previous } = info;

  const max = Math.ceil(count / limit);

  useEffect(() => {
    setPage(1);
  }, [setPage, category]);

  return (
    <div className="cards__pagination">
      {!loading && (
        <div className="previous" data-testid="previous-button-div">
          {previous && (
            <button
              onClick={() => {
                setPage((page) => page - 1);
              }}
            >
              <AiFillCaretLeft />
            </button>
          )}
        </div>
      )}
      <div className="text">
        {loading ? (
          <p>Page {page}</p>
        ) : (
          <p>
            {page} to {max} of {count} {category}
          </p>
        )}
      </div>

      {!loading && (
        <div className="next" data-testid="next-button-div">
          {next && (
            <button
              onClick={() => {
                setPage((page) => page + 1);
              }}
            >
              <AiFillCaretRight />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Pagination;
