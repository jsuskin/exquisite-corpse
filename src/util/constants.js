import {
  faArrowTurnDown,
  faArrowTurnUp,
  faCheck,
  faPalette,
  faPenRuler,
  faRecycle,
  faAnchor,
  faCircleQuestion,
  faXmark,
  faLayerGroup,
  faCircleUser,
  faImage,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";

export const colors = [
  "#000000",
  "#ff0000",
  "#0400ff",
  "#00ad03",
  "#ff9100",
  "#fff200",
  "#0eeade",
  "#ff40f1",
  "#aaa1b3",
];

export const icons = [
  ["close", faXmark],
  ["user", faCircleUser],
  ["help", faCircleQuestion],
  // ["keep open", faAnchor],
  ["thickness", faPenRuler],
  ["color", faPalette],
  ["draw under", faLayerGroup],
  ["preview", faImage],
  ["undo", faArrowTurnDown],
  ["redo", faArrowTurnUp],
  ["clear", faRecycle],
  ["next", faCheck],
  ["complete", faFlagCheckered],
];
