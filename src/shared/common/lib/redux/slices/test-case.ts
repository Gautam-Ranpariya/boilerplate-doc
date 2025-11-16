import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TestCase.ITestCaseState = {
  activeSection: "overview",
  
};

const testCaseSlice = createSlice({
  name: "testCase",
  initialState,
  reducers: {
    setActiveSection: (
      state,
      action: PayloadAction<TestCase.testcaseMenuType>
    ) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } =
  testCaseSlice.actions;
export default testCaseSlice.reducer;
