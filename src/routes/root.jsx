import {
  Form,
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { createNote, getNotes } from "../notes";
import { useContext, useEffect } from "react";
import { ThemeContext, THEME } from "../context/theme-context";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const notes = await getNotes(q);
  return { notes, q };
}

export async function action() {
  const note = await createNote();
  return redirect(`notes/${note.id}?edit=1`);
}

export default function Root() {
  const { notes, q } = useLoaderData();
  const submit = useSubmit();
  const navigation = useNavigation();

  const { theme, toggleTheme } = useContext(ThemeContext);

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => {
    document.querySelector("#q").value = q;
  }, [q]);

  return (
    <>
      <div id="sidebar">
        <button onClick={() => toggleTheme()}>
          {theme === THEME.light ? "Make dark" : "Make light"}
        </button>
        <i>{`Here's ${theme} now`}</i>
        <h1>Notes</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search notes"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(e) => {
                const isFirstSearching = q === null;
                submit(e.currentTarget.form, { replace: !isFirstSearching });
              }}
            ></input>
            <div id="search-spinner" aria-hidden hidden={!searching} />
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
