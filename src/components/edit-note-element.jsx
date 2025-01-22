import React from "react";
import { Form } from "react-router-dom";

const EditNote = React.memo(function EditNote({
  editModeTuggle,
  header,
  description,
}) {
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
              defaultValue={header}
            />
          </label>
          <label>
            Description
            <textarea
              placeholder="Describe your note"
              name="description"
              rows={6}
              defaultValue={description}
            />
          </label>
          <button type="submit">Save</button>
        </div>
      </Form>
    </>
  );
});

export default EditNote;
