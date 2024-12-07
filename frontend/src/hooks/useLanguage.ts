import { useDispatch, useSelector } from "react-redux";
import { updateLanguage } from "../redux/actions/language.action";
import { RootState } from "redux/store/store";

function useLanguage() {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language);

  function setLanguage(newLanguage: any) {
    dispatch(updateLanguage(newLanguage));
  }
  return { language, setLanguage };
}

export default useLanguage;
