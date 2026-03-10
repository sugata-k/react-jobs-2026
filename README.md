# React Jobs 2026

A simple and beginner-friendly job listing app built with React, Vite, React Router, and Tailwind CSS.

The app lets you:
- See a home page
<img width="1227" height="989" alt="image" src="https://github.com/user-attachments/assets/2d36526e-26b0-45f2-9479-af1426a223fb" />

- Browse all jobs
<img width="1313" height="758" alt="image" src="https://github.com/user-attachments/assets/da56d13d-c715-4f24-bc75-0454e5886c65" />

- View individual job details
<img width="1211" height="713" alt="image" src="https://github.com/user-attachments/assets/8e07bb7f-af94-436a-b4e7-8651383aa2eb" />

- Add new jobs
<img width="1173" height="968" alt="image" src="https://github.com/user-attachments/assets/76f4bc4f-3a84-40a8-af17-4873bb20c47c" />

- Edit existing jobs
<img width="1192" height="963" alt="image" src="https://github.com/user-attachments/assets/a66234b4-b475-462c-95ac-a83518aafb34" />

- Delete jobs
<img width="1209" height="626" alt="image" src="https://github.com/user-attachments/assets/957a616c-a365-407e-840a-5c7b42d1e01f" />

<img width="270" height="64" alt="image" src="https://github.com/user-attachments/assets/6d903e93-e31c-4a44-bab6-cc016c1286c0" />

Data is served from a local `json-server` API using `src/jobs.json`.

## Tech Stack

- React 19
- Vite 7
- React Router
- Tailwind CSS
- json-server (mock backend)
- React Toastify

## Prerequisites

- Node.js 18+
- npm

## Installation

```bash
npm install
```

## Run The Project (Development)

This project uses two processes:
- Frontend app (Vite) on `http://localhost:3000`
- Mock API (`json-server`) on `http://localhost:3200`

## Run these in separate terminals:

```bash
npm run server
```

```bash
npm run dev
```

The frontend calls `/api/*` routes, and Vite proxies them to `http://localhost:3200`.

## Available Scripts

```bash
npm run dev      # Start Vite dev server
npm run server   # Start json-server API from src/jobs.json on port 3200
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Project Structure

```text
src/
	components/    Reusable UI components
	layouts/       Shared page layout
	pages/         Route pages (Home, Jobs, Add, Edit, Job Details)
	services/      Loader and CRUD service functions
	jobs.json      Local mock database for json-server
```

## Notes

- If jobs are not loading, make sure `npm run server` is running on port `3200`.
- Vite is configured to run on port `3000` and auto-open the browser.

