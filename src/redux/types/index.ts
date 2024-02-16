export interface Path {
  path: string;
  color: string;
  strokeWidth: number;
}

export interface LineThicknessSlider {
  show: boolean;
  setStrokeWidth: (prev: number) => void;
}

export interface SliderThumb {
  width: number;
  height: number;
}