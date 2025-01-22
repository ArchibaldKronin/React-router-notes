import { redirect } from "react-router-dom";
import { deleteNote } from "../notes";

export async function action({ params }) {
  await deleteNote(params.noteId);
  return redirect("/");
}
