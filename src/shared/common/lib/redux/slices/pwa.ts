import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PWA.IPWAState = {
  activeSection: "overview",
};

const pwaSlice  = createSlice({
  name: "pwa",
  initialState,
  reducers: {
    setActiveSection: (
      state,
      action: PayloadAction<PWA.PWAMenuType>
    ) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } =
  pwaSlice.actions;
export default pwaSlice.reducer;