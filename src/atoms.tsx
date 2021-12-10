import { atom } from "recoil";

export const isDarkState = atom({
  key: "dark",
  default: false,
});
