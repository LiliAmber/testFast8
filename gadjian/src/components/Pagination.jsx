import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="h-full bg-gray-100">
      <ul className="flex items-center justify-center pl-0 list-none rounded my-2">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="relative items-center block py-2 px-3 leading-tight bg-white border border-gray-300 text-green-500 border-r-0 hover:bg-gray-200"
          >
            <h1 onClick={() => paginate(number)} className="page-link">
              {number}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
