import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

const newPathObjDefault = { path: "", color: "", strokeWidth: 1 };
const newSquareDefault = {
  paths: [[]],
  bottomPaths: [[]],
  orderedPathIDs: [],
};

const getBottomPaths = (obj, reverse = false) => {
  const coords = obj.path.split(" ");
  const bottomPaths = coords
    .reduce(
      (acc, cur) => {
        const lastIdx = acc.length - 1;
        const x = cur.split(",").pop();
        const x0 = +x;

        if (x0 < 730) {
          if (acc[lastIdx].path.length) return [...acc, { ...obj, path: "" }];
        } else {
          const last = acc.pop();
          let str = "";

          if (!last.path.length) {
            str += "M" + cur.slice(1);
          } else {
            str = last.path + " " + cur;
          }

          return [...acc, { ...obj, path: str }];
        }

        return acc;
      },
      [{ ...obj, path: "" }]
    )
    .filter(({ path }) => path.length)
    .map((obj) => ({ ...obj, path: obj.path.trim() }));

  return bottomPaths;
};

const setStateArray = (arr, newPathObj, lastIdx, prepend = false) => {
  const cur = arr[lastIdx];
  cur[prepend ? "unshift" : "push"](...newPathObj);
  console.log({ prepend });
  return [...arr.slice(0, lastIdx), cur];
};

const pathSlice = createSlice({
  name: "path",
  initialState: newSquareDefault,
  reducers: {
    addPath(state, action) {
      const [newPathObj, prepend] = action.payload;
      const lastIdx = state.paths.length - 1;
      const id = uuid.v4();
      newPathObj.id = id;
      const bottomPaths = getBottomPaths(newPathObj);

      state.paths = setStateArray(state.paths, [newPathObj], lastIdx, prepend);
      state.orderedPathIDs = [...state.orderedPathIDs, ["add", id]];
      state.bottomPaths = setStateArray(
        state.bottomPaths,
        bottomPaths,
        lastIdx,
        prepend
      );
    },
    removePath(state, action) {
      const lastPathsIdx = state.paths.length - 1;

      if (action.payload === "all") {
        state.orderedPathIDs = [...state.orderedPathIDs, ["rmv", state.paths]];
        ["paths", "bottomPaths"].forEach((key) => {
          state[key] = [...state[key].slice(0, lastPathsIdx), []];
        });
      } else {
        // TODO: ADD FUNCTIONALITY FOR REMOVING BY ID
        const id = state.orderedPathIDs
          .filter((arr) => arr[0] === "add")
          .reverse()[0][1];
        const targetIdx = state.orderedPathIDs.findIndex(
          (arr) => arr[1] === id
        );
        const target = state.orderedPathIDs.splice(targetIdx, 1)[0];
        target[0] = "rmv";
        state.orderedPathIDs = [...state.orderedPathIDs, target];
        state.paths[lastPathsIdx] = state.paths[lastPathsIdx].filter(
          (obj) => obj.id !== id
        );
        console.log({ ordered: state.orderedPathIDs });
      }
    },
    revertRmv(state) {
      console.log("revert rmv", { orderedPaths: state.orderedPathIDs, paths: state.paths });
    },
    startNewSquare(state) {
      const lastBottomPaths = state.bottomPaths.slice(-1).pop();
      const tails = lastBottomPaths.map((obj) => {
        const { path } = obj;
        const coords = path.split(" ");
        const adjustedCoords = coords
          .map((yx) => {
            const [y, x] = yx.split(",");
            return `${y},${+x - 730}`;
          })
          .join(" ");
        return { ...obj, path: adjustedCoords };
      });

      state.paths = [...state.paths, tails];
      state.bottomPaths = [...state.bottomPaths, []];
    },
  },
});

export const { addPath, removePath, revertRmv, startNewSquare } = pathSlice.actions;
export default pathSlice.reducer;
