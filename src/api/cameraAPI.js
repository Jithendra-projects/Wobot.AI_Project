const BASE = "https://api-app-staging.wobot.ai/app/v1";
const TOKEN = "4ApVMIn5sTxeW7GQ5VWeWiy";

export async function fetchCameras() {
  const res = await fetch(`${BASE}/fetch/cameras`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });

  if (!res.ok) throw new Error("Failed to fetch cameras");
  const json = await res.json();
  return json?.data || [];
}

export async function updateCameraStatus(id, status) {
  const res = await fetch(`${BASE}/update/camera/status`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ id, status }),
  });

  if (!res.ok) throw new Error("Failed to update status");
  return true;
}
