import type { ComponentType } from "react";

export interface Component {
  label: string;
  component: ComponentType;
  default?: boolean;
}
