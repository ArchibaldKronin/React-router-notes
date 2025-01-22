import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import { loader as rootLoader, action as rootAction } from "./routes/root.jsx";
import NoteWrapper, { loader as noteLoader } from "./routes/note-wrapper.jsx";
import ErrorPage from "./components/error-page.jsx";
import Index from "./routes/index.jsx";
import { action as editAction } from "./routes/edit.js";
import { action as deleteAction } from "./routes/delete.js";
import { ThemeProvider } from "./context/theme-context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "notes/:noteId",
            element: <NoteWrapper />,
            loader: noteLoader,
          },
          {
            path: "notes/:noteId/edit",
            action: editAction,
          },
          {
            path: "notes/:noteId/delete",
            action: deleteAction,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
