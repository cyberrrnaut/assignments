import { createContext } from "react";

export const Context = createContext({
  count: 0,
  setCount: () => {}
});
