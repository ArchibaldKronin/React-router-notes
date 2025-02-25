import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page">
      <h1>Something went wrong</h1>
      <p>Unexpected error has occurred</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
