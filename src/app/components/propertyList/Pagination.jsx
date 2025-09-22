import React, { useState } from "react";

const Pagination = ({ total, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onPageChange && onPageChange(page); // pass to parent
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < total) {
      handlePageClick(currentPage + 1);
    }
  };

  return (
    <ul className="wd-navigation mt-20 d-flex justify-content-center">
      {/* Previous */}
      <li>
        <a
          href="#"
          className="nav-item"
          onClick={(e) => {
            e.preventDefault();
            handlePrev();
          }}
        >
          <i className="icon icon-arr-l"></i>
        </a>
      </li>

      {/* Dynamic page numbers */}
      {[...Array(total)].map((_, i) => {
        const page = i + 1;
        return (
          <li key={page}>
            <a
              href="#"
              className={`nav-item ${currentPage === page ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handlePageClick(page);
              }}
            >
              {page}
            </a>
          </li>
        );
      })}

      {/* Next */}
      <li>
        <a
          href="#"
          className="nav-item"
          onClick={(e) => {
            e.preventDefault();
            handleNext();
          }}
        >
          <i className="icon icon-arr-r"></i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
