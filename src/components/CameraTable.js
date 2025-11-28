import React from "react";
import "../App.css";

export default function CameraTable({ cameras, handleDelete, toggleStatus }) {
  return (
    <table className="camera-table">
      <thead>
        <tr>
          <th style={{ width: "40px" }}></th>
          <th>NAME</th>
          <th>HEALTH</th>
          <th>LOCATION</th>
          <th>RECORDER</th>
          <th>TASKS</th>
          <th>STATUS</th>
          <th>ACTIONS</th>
        </tr>
      </thead>

      <tbody>
        {cameras.map((cam) => {
          const id = cam._id || cam.id || Math.random();
          const status = cam.status || "Inactive";

          return (
            <tr key={id}>
              <td className="checkbox-cell">
                <input type="checkbox" />
              </td>

              <td>
                <div className="cam-name">{cam.name || "Camera " + id}</div>
                <div className="cam-email">
                  {typeof cam.owner === "object" && cam.owner !== null
                    ? cam.owner.email || "N/A"
                    : "N/A"}
                </div>
              </td>

              <td>{typeof cam.health === "object" ? "🟢" : "⚪"}</td>

              <td>{cam.location || "N/A"}</td>
              <td>{cam.recorder_name || cam.recorder || "N/A"}</td>

              <td>{(cam.task_count || cam.tasks || 0) + " Tasks"}</td>

              <td>
                <span className={`status-pill ${status.toLowerCase()}`}>
                  {status}
                </span>
              </td>

              <td className="actions-icon-only">
                <span
                  className="action-icon"
                  onClick={() => toggleStatus(id, status)}
                  title="Update Status"
                >
                  ↻
                </span>
                <span className="action-icon" title="Camera Info">
                  ⓘ
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
