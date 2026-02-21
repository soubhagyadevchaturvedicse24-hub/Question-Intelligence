import { createBrowserRouter } from "react-router";
import { HomePage } from "./components/HomePage";
import { SubjectPage } from "./components/SubjectPage";

// VITE_BASE_PATH is set by GitHub Actions to '/Question-Intelligence/'.
// Locally (npm run dev) it is '/', so the app resolves to localhost:5173/ normally.
const BASE = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '') || '/';

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: HomePage,
    },
    {
      path: "/subject/:abbreviation",
      Component: SubjectPage,
    },
  ],
  { basename: BASE }
);
