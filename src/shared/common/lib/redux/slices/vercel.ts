import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Vercel.IVercelState = {
  activeSection: "overview",
};

const vercelSlice = createSlice({
  name: "vercel",
  initialState,
  reducers: {
    setActiveSection: (
      state,
      action: PayloadAction<Vercel.VercelMenuType>
    ) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } =
  vercelSlice.actions;
export default vercelSlice.reducer;
