export interface ButtonProps {
  label: string;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
}

export interface ButtonEmits {
  (e: "click"): void;
}
