import { useSearchParams } from "react-router-dom";

export default function useIsEditSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const isEdit = !!searchParams.get("edit");
  function toggleEdit(isEdit) {
    if (isEdit) {
      setSearchParams({});
    } else {
      setSearchParams({ edit: "1" });
    }
  }

  return [isEdit, toggleEdit];
}
