import React, { useState, useEffect, useMemo } from "react";
import { fetchCameras, updateCameraStatus } from "./api/cameraAPI.js";

import SearchBar from "./components/SearchBar.js";
import Filters from "./components/Filters.js";
import Pagination from "./components/Pagination.js";
import CameraTable from "./components/CameraTable.js";

import "./App.css";

export default function App() {
  const [cameras, setCameras] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const list = await fetchCameras();
      setCameras(list);
    } catch (err) {
      console.error("Fetch failed:", err);
      setCameras([]);
    }
  }

  function handleDelete(id) {
    setCameras((prev) => prev.filter((cam) => (cam._id || cam.id) !== id));
  }

  async function toggleStatus(id, status) {
    const next = status === "Active" ? "Inactive" : "Active";

    setCameras((prev) =>
      prev.map((cam) =>
        cam._id === id || cam.id === id ? { ...cam, status: next } : cam
      )
    );

    try {
      await updateCameraStatus(id, next);
    } catch {
      alert("Status update failed ❌");
    }
  }

  const uniqueLocations = [
    ...new Set(cameras.map((cam) => cam.location).filter(Boolean)),
  ];

  const filtered = useMemo(() => {
    return cameras.filter((cam) => {
      const name = cam.camera_name?.toLowerCase() || "";
      const loc = cam.location?.toLowerCase() || "";
      const stat = cam.status?.toLowerCase() || "";

      const matchesLocation =
        locationFilter === "All" || loc === locationFilter.toLowerCase();

      const matchesStatus =
        statusFilter === "All" || stat === statusFilter.toLowerCase();

      const matchesSearch =
        name.includes(search.toLowerCase()) ||
        loc.includes(search.toLowerCase()) ||
        cam.name?.toLowerCase().includes(search.toLowerCase());

      return matchesSearch && matchesLocation && matchesStatus;
    });
  }, [cameras, search, statusFilter, locationFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const tableData = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <main>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="container">
        <Filters
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          uniqueLocations={uniqueLocations}
        />

        <CameraTable
          cameras={tableData}
          handleDelete={handleDelete}
          toggleStatus={toggleStatus}
        />

        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </main>
  );
}
