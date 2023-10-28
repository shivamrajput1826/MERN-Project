import { createContext } from "react";
import { IGlobalDataContext, IGlobalDataState } from "./globalData.types";

const initialState: IGlobalDataState = {};

export const GlobalDataContext = createContext<IGlobalDataContext>({
  state: initialState,
  dispatch: () => null,
});
