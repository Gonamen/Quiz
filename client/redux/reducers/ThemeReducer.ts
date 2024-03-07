/* eslint-disable @typescript-eslint/default-param-last */
import type { Action, State } from "./types";

const initState: State = {
  theme: [],
};

export const themeReducer = (
  state: State = initState,
  action: Action
): State => {
  switch (action.type) {
    case "theme/load":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
