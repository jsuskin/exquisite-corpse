import React from 'react';
import { Path } from "react-native-svg";

export default function ({ strokeWidth, d, stroke }: any) {
  return <Path {...{ strokeWidth, d, stroke }} fill='none' />;
}
