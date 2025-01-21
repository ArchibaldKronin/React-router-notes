import { Form } from "react-router-dom";
import EditNote from "./edit-note-element";
import useEditSearchParams from "../hooks/use-edit-search-params";

export default function Note({ note }) {
  const [isEdit, tuggleEdit] = useEditSearchParams();

  function handleOnClickEdit() {
    tuggleEdit(isEdit);
  }

  return (
    <>
      {isEdit ? (
        <EditNote editModeTuggle={handleOnClickEdit} />
      ) : (
        <div id="note">
          <div>
            <h1>{note.header ? note.header : <i>Unnamed</i>}</h1>
            {note.description && <p>{note.description}</p>}
          </div>
          <div>
            <button onClick={handleOnClickEdit}>Edit</button>
            <Form
              method="post"
              action="destroy"
              onSubmit={(e) => {
                if (!confirm("Вы точно хотите удалить эту заметку?")) {
                  e.preventDefault();
                }
              }}
            >
              <button type="submit">Delete</button>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
