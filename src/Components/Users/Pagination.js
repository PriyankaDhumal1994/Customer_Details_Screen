import React from "react";

const Pagination = ({ totalPosts, pageHandler, activePage }) => {
  let pages = [];
  for (let i = 1; i <= totalPosts; i++) {
    pages.push(i);
  }
  return (
    <nav style={{ marginLeft: "9px" }}>
      <ul className="pagination">
        {pages.map((page) => (
          <li className="page-item">
            <a
              href="!#"
              onClick={(e) => {
                pageHandler(e, page);
              }}
              className={
                activePage === page ? "page-link active-a" : "page-link"
              }
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default React.memo(Pagination);
