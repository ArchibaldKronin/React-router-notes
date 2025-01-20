import { Form, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getNotes, NOTES } from "../notes";

export async function loader() {
  const notes = await getNotes();
  return { notes };
}

export default function Root() {
  //   const { notes } = useLoaderData();
  const notes = NOTES;
  return (
    <>
      <div id="sidebar">
        <h1>Notes</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search notes"
              placeholder="Search"
              type="search"
              name="q"
            ></input>
            <div id="search-spinner" aria-hidden hidden />
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {notes.length ? (
            <ul>
              {notes.map((note) => (
                <li key={note.id}>
                  <NavLink to={`notes/${note.id}`}>
                    {note.header ? <>{note.header}</> : <i>Unnamed</i>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No notes</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
