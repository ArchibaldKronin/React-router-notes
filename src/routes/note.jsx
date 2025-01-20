import { useLoaderData } from "react-router-dom";
import { NOTES } from "../notes";

export async function loader({ params }) {
  const note = NOTES[params.noteId];
  return { note };
}

// export async function loader({ params }) {
//     const contact = await getContact(params.contactId);
//     if (!contact) {
//       throw new Response("", { status: 404, statusText: "Not Found" });
//     }
//     return { contact };
//   }

export default function Note() {
  const { note } = useLoaderData();
  return (
    <>
      <div>JOKRHGN</div>
    </>
  );
}
