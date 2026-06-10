import { useContext } from "react";
import { StoreContext } from "../stores/store";

export function userStore() {
  return useContext(StoreContext);
}
