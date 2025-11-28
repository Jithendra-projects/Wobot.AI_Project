import React from "react";
import "../App.css";

export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        ◀ Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button key={i + 1} onClick={() => setPage(i + 1)}>
          {i + 1}
        </button>
      ))}

      <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Next ▶
      </button>
    </div>
  );
}
