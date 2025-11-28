import React from "react";
import "../App.css";

export default function Filters({
  locationFilter,
  setLocationFilter,
  statusFilter,
  setStatusFilter,
  uniqueLocations,
}) {
  return (
    <div className="filter-search-row">
      <div className="filter-input">
        <img src="/Frame.png" alt="location" className="filter-icon" />
        <select
          defaultValue="All"
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="All">Location </option>
          {uniqueLocations.map((loc, i) => (
            <option key={i} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-input">
        <img src="/Vector.png" alt="status" className="filter-icon" />
        <select
          defaultValue="All"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">Status </option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
    </div>
  );
}
