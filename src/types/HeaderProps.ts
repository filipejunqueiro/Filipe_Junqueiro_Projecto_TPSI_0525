import type { Component } from "./Component";

export interface HeaderProps {
  components?: Component[];
  component?: Component | undefined;
  setComponent?: React.Dispatch<React.SetStateAction<Component | undefined>>;
}
