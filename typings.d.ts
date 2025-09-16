export interface StateProps {
  count: number;
}

export type ActionProps = { type: "increment" } | { type: "decrement" };
