import { useCallback, useContext } from "react";

import { GlobalDataContext } from "./globalData.context";
import { IGlobalDataActions, IGlobalDataState } from "./globalData.types.ts";

export * from "./globalData.provider.tsx";
export * from "./globalData.types.ts";

export const useGlobalData = (): [
  IGlobalDataState,
  (req: IGlobalDataActions) => void
] => {
  // useContext hook is used to access the context provided by the GlobalDataProvider component.
  const { state, dispatch } = useContext(GlobalDataContext);

  // useCallback hook is used to memoize the dispatchAction function.
  // It ensures that the function doesn't change on each render unless dispatch changes.
  const dispatchAction = useCallback(
    (req: IGlobalDataActions) => dispatch(req),
    [dispatch]
  );

  // The hook returns an array with two elements:
  // 1. The current state (IGlobalDataState) from the global data context.
  // 2. A memoized dispatch function that can be used to send actions to the global data reducer.

  return [state, dispatchAction];
};
