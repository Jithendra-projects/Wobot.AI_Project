import React, { useEffect } from "react";
import "../App.css";

export default function SearchBar({ search, setSearch }) {
  useEffect(() => {
    document.title = "Wobot.ai Cameras";
  }, []);

  return (
    <header className="header">
      <div className="logo-center">
        <img src="/Logo.svg" alt="Wobot.ai Logo" />
      </div>

      <div className="header-row">
        <div className="header-text">
          <h1>Cameras</h1>
          <p>Manage your cameras here</p>
        </div>

        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>
    </header>
  );
}
