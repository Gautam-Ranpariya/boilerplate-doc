import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CICD.ICiCdState = {
  activeSection: "overview",
};

const ciCdSlice = createSlice({
  name: "ci-cd",
  initialState,
  reducers: {
    setActiveSection: (
      state,
      action: PayloadAction<CICD.CiCdMenuType>
    ) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } =
  ciCdSlice.actions;
export default ciCdSlice.reducer;