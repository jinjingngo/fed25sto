import { createContext } from "react";

export default createContext({
  get: () => [],
  set: () => {},
  add: () => {},
  remove: () => {},
  count: 0,
});
