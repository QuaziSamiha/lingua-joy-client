const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="text-center py-8 w-full">
      {/* Previous page button */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        className="mx-2 btn btn-ghost btn-xs"
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Numbered buttons */}
      {/* {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`mx-2 btn btn-ghost btn-xs ${
            currentPage === index + 1 ? "btn-active" : ""
          }`}
        >
          {index + 1}
        </button>
      ))} */}
      {currentPage}

      {/* Next page button */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        className="mx-2 btn btn-ghost btn-xs"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
