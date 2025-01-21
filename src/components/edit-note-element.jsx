import React from "react";
import { Form, redirect } from "react-router-dom";
import { updateNote } from "../notes";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateNote(params.noteId, updates);
  return redirect(`/notes/${params.noteId}`);
}

const EditNote = React.memo(function EditNote({ editModeTuggle }) {
  return (
    <>
      <button onClick={editModeTuggle}>Cancel</button>
      Edit Note
      <Form method="post" id="note-form" action="edit">
        <div>
          <label>
            Header
            <input
              placeholder="Your note"
              type="text"
              name="header"
              defaultValue={""}
            />
          </label>
          <label>
            Description
            <textarea
              placeholder="Describe your note"
              name="description"
              rows={6}
              defaultValue={""}
            />
          </label>
        </div>
      </Form>
    </>
  );
});

export default EditNote;
