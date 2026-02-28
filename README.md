# DevTinder Frontend

DevTinder is a developer networking platform inspired by modern matching
applications, where developers can discover each other, send connection
requests, and build professional connections.

This repository contains the React frontend of the DevTinder
application.

------------------------------------------------------------------------

## Tech Stack

-   React.js (Vite)
-   Redux Toolkit
-   React Router DOM
-   Tailwind CSS
-   Axios
-   JWT Authentication
-   REST API Integration

------------------------------------------------------------------------

## Features

-   User Authentication (Login / Signup)
-   Protected Routes
-   Developer Feed
-   Send Connection Requests
-   Accept / Reject Requests
-   View Connections
-   Edit Profile
-   Responsive Modern UI

------------------------------------------------------------------------

## 📁 Folder Structure

```bash
src/
├── components/
│   ├── Feed.jsx
│   ├── Profile.jsx
│   ├── Login.jsx
│   ├── Connections.jsx
│   ├── Requests.jsx
│   └── UserCard.jsx
│
├── utils/
│   ├── appStore.js
│   ├── userSlice.js
│   ├── feedSlice.js
│   ├── requestsSlice.js
│   └── connectionSlice.js
```

Redux Toolkit is used for global state management including user data, feed, requests, and connections.

------------------------------------------------------------------------

## Setup Instructions

1.  Clone the repository

git clone https://github.com/your-username/devtinder-frontend.git cd
devtinder-frontend

2.  Install dependencies

npm install

3.  Run development server

npm run dev

App runs on: http://localhost:5173

------------------------------------------------------------------------

## What I Learned

-   Managing global state using Redux Toolkit
-   Building scalable React folder structures
-   Handling authentication flows
-   API integration using Axios
-   Protected routing in React applications

------------------------------------------------------------------------

## Future Improvements

-   Real-time chat
-   Notification system
-   Skill-based matching algorithm

------------------------------------------------------------------------

Author: Om Vishwakarma
