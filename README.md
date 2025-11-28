# Wobot.AI_Project
Created with CodeSandbox

Wobot.ai Camera Management Dashboard (React Frontend)

A clean and responsive frontend-only camera dashboard built in React, integrated with the provided API to display and manage a list of cameras.

Data Integration:
Camera list is fetched using an authenticated Bearer token API call from Wobot.ai staging server.
Camera status can be switched between Active and Inactive using the provided status update API.
All operations (search, filter, pagination, and status toggle) are handled entirely on the frontend using React state, without any backend development.

Key Features & How They Work
 Search:
The search box filters cameras instantly based on camera name or location from the table data already loaded into the UI.
 
Location Filter:
A dropdown filter collects all available camera locations from the dataset.
When a user selects a specific location, the table updates to show only cameras that belong to that exact location, ensuring precise filtering.

Status Filter:
A dropdown allows filtering by:
Active → displays only active cameras from the table
Inactive → displays only inactive cameras from the table
All → shows all cameras
This doesn't make a new API call — it filters from the data already stored on the frontend.

Pagination:
The camera list is split into pages, showing 10 cameras per page.
Users can navigate using Prev, Next, or by selecting page numbers.
Pagination applies after search and filtering, making sure the user sees results only from the currently selected filters.


Status Toggle: 
Each camera row contains a toggle icon to change the status.
When clicked:
The camera status updates immediately in the table UI (e.g. Active → Inactive or vice versa).

