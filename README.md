# Second Chat App (Second Improved Version)

This repository contains the "second_chat_app" — the second, improved version of a realtime chat application built with a Node/Express backend and a React frontend. The app supports user authentication, one-to-one and group chats, and realtime messaging via Socket.IO.

## Key features

- User authentication (JWT)
- One-to-one and group chats
- Real-time messaging using Socket.IO
- MongoDB (Mongoose) for persistence
- React frontend using Chakra UI and react-scrollable-feed
- Organized backend controllers, models, routes and middleware for maintainability

## Architecture

- Backend: Node.js + Express, located under `backend/` (server entry: `backend/server.js`).
- Frontend: React (Create React App) under `frontend/`.
- Database: MongoDB accessed through Mongoose.
- Realtime: socket.io on both server and client for instant messaging.

## Project structure (important files/folders)

- `backend/` - Express server sources

  - `config/` - DB and other configuration helpers
  - `controllers/` - Request handlers for users, chats, messages
  - `Models/` - Mongoose models
  - `routes/` - Express routes
  - `middleware/` - Auth and error middleware
  - `server.js` - App entrypoint

- `frontend/` - React app (Create React App)

  - `src/` - React components, pages, context
  - `public/` - static assets

- `package.json` (root) - scripts & backend dependencies
- `frontend/package.json` - frontend dependencies and scripts

## Prerequisites

- Node.js (v16+ recommended)
- npm (v8+) or yarn
- MongoDB (local or a hosted MongoDB URI)

## Environment variables

The backend expects the following environment variables (defined in `backend/config/*` and token generator):

- `MONGO_URI` — MongoDB connection string (required)
- `JWT_SECRET` — secret used to sign JWT tokens (required)
- `PORT` — optional, server port (defaults to 5000 if not set)

Create a `.env` file at the project root (kept locally, not committed). Example `.env`:

MONGO_URI="mongodb+srv://<user>:<password>@cluster0.mongodb.net/mydb?retryWrites=true&w=majority"
JWT_SECRET="replace-with-a-secure-random-string"
PORT=5000

Notes:

- The repo uses `process.env.MONGO_URI` and `process.env.JWT_SECRET` (see `backend/config/db.js` and `backend/config/generateToken.js`).
- Keep `.env` out of git. Add `.env` to `.gitignore` if not already present.

## Local development (quick start)

Open two terminals (one for backend, one for frontend):

1. Backend

```bash
# from project root
npm install
# start server (root package.json starts backend with nodemon)
npm start
```

The server entry is `backend/server.js` and the root `start` script launches it with `nodemon`.

2. Frontend

```bash
cd frontend
npm install
npm start
```

The frontend package.json has a `proxy` configured for `http://127.0.0.1:5000` so API calls to the backend during development will be proxied to port 5000.

## Production build

- Frontend: `cd frontend && npm run build` — produce static files in `frontend/build`.
- Backend: host the built frontend (optional) or serve separately. See your hosting provider's docs for combining a static frontend and Express backend.
- Check out the hosted app here https://construction-app-xi.vercel.app/

## Contact / Author

Author: Eric
