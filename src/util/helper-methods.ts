/*** STYLE HELPERS ***/

// PREVIEW COMPONENT

export const getPreviewBorder = (index: number, last: number) =>
  ["Left", "Right", (!index && "Top") || (index === last && "Bottom")].map(
    (side) =>
      [
        ["Style", "dashed"],
        ["Color", "#b0b0b0"],
        ["Width", 0.5],
      ].reduce(
        (acc, cur) => ({ ...acc, [`border${side}${cur[0]}`]: cur[1] }),
        {}
      )
  );
