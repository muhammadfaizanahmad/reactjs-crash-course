import { StateProps, ActionProps } from "@typings";

export const initialState: StateProps = { count: 0 };

export const counterReducer = (
  state: StateProps,
  action: ActionProps
): StateProps => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
