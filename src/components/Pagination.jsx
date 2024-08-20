export const Pagination = ({
  total,
  pageSize,
  onClick,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(total / pageSize) || 0;

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onClick(page);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container">
      <button onClick={handlePreviousClick} disabled={currentPage === 1}>
        {"<"}
      </button>
      {Array(totalPages)
        .fill(undefined)
        .map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={pageNumber === currentPage ? "active" : ""}
            >
              {pageNumber}
            </button>
          );
        })}
      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        {">"}
      </button>
    </div>
  );
};
