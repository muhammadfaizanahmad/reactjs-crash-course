"use client";

import { ReactNode, Dispatch } from "react";
import { createContext, useReducer } from "react";
import { counterReducer, initialState } from "@reducer/counter-reducer";
import { StateProps, ActionProps } from "@typings";

type CounterContextProps = {
  state: StateProps;
  dispatch: Dispatch<ActionProps>;
};

export const CounterContext = createContext<CounterContextProps>({
  state: initialState,
  dispatch: () => null,
});

type CounterProviderProps = {
  children: ReactNode;
};

export const CounterProvider: React.FC<CounterProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
