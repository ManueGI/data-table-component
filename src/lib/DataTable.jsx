import { useState, useMemo } from "react";
import "./DataTable.css";

export default function DataTable({
  data = [],
  columns = [],
  itemsPerPage = 10,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);

  // Recherche
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter((item) =>
      columns.some((col) =>
        String(item[col.key]).toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
  }, [data, searchTerm, columns]);

  // Tri
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    const sorted = [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    return sorted;
  }, [filteredData, sortConfig]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  return (
    <div className="datatable-container">
      <div className="datatable-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="datatable-search-input"
        />
        <span className="datatable-entries">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, sortedData.length)} of{" "}
          {sortedData.length} entries
        </span>
      </div>

      <table className="datatable">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>
                <div className="header-cell">
                  <span className="header-label">{col.label}</span>
                  <button
                    className={`sort-btn ${sortConfig.key === col.key ? "active" : ""}`}
                    onClick={() => handleSort(col.key)}
                    title={`Trier par ${col.label}`}
                  >
                    {sortConfig.key === col.key
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : "↕"}
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((item, idx) => (
              <tr key={idx}>
                {columns.map((col) => (
                  <td key={col.key}>{item[col.key]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="datatable-empty">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="datatable-pagination">
        <button
          className="pagination-btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        >
          First
        </button>
        <button
          className="pagination-btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Previous
        </button>

        <span className="pagination-info">
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          className="pagination-btn"
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
        <button
          className="pagination-btn"
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage(totalPages)}
        >
          Last
        </button>
      </div>
    </div>
  );
}
