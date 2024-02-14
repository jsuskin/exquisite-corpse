import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, displayName: "" },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setDisplayName(state, action) {
      state.displayName = action.payload;
    }
  },
});

export const { setUser, setDisplayName } = userSlice.actions;
export default userSlice.reducer;
