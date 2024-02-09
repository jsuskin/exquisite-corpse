type BoolSetter = (prev: boolean) => void

export interface Sidebar {
  menuOpen: boolean;
  setMenuOpen: BoolSetter;
  colorPickerOpen: boolean;
  setColorPickerOpen: BoolSetter;
  drawBehind: boolean;
  setDrawBehind: BoolSetter;
}

export interface FormInput {
  placeholder: "Email" | "Password";
  value: string;
  setState: (text: string) => void;
  props?: any;
}

export interface Button {
  handlePress: () => void;
  text: "Sign In" | "Sign Up";
}