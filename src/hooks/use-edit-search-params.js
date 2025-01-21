import { useSearchParams } from "react-router-dom";

export default function useEditSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const isEdit = !!searchParams.get("edit");
  function tuggleEdit(isEdit) {
    if (isEdit) {
      setSearchParams({});
    } else {
      setSearchParams({ edit: "1" });
    }
  }

  return [isEdit, tuggleEdit];
}
