import { ParamListBase } from "@react-navigation/native";

type BoolSetter = (prev: boolean) => void;
type NumSetter = (prev: number) => void;

// export type RootStackParamList = { Login: undefined; Profile: { userId: string }, Canvas: { canvasId: string } } & ParamListBase;
export type RootStackParamList = {
  Login: any;
  Profile: any;
  Canvas: any;
  Settings: any;
} & ParamListBase;

export interface Sidebar {
  menuOpen: boolean;
  setMenuOpen: BoolSetter;
  colorPickerOpen: boolean;
  setColorPickerOpen: BoolSetter;
  drawBehind: boolean;
  setDrawBehind: BoolSetter;
  setStrokeWidth: NumSetter;
}

export interface FormInput {
  placeholder: "Email" | "Password";
  value: string;
  setState: (text: string) => void;
  props?: any;
}

export interface Button {
  handlePress: () => void;
  text: "Sign In" | "Sign Up" | "Sign Out" | "Save Changes" | "New Drawing";
  disabled?: boolean;
}
