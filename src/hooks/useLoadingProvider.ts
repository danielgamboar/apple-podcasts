import { useContext } from "react";
import { LoadingContext } from "../context/loadingContext";

export default function useLoadingProvider() {
  return useContext(LoadingContext);
}
