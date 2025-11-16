import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CommonTypes.ILayoutState = {
  isMobileMenuOpen: false,
  currentPage: 'test-case',
  copiedCode: "",
  expandedSections: {},
}

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setIsMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<CommonTypes.Routes>) => {
      state.currentPage = action.payload
    },
      setCopiedCode: (state, action: PayloadAction<string>) => {
      state.copiedCode = action.payload;
    },
    setExpandedSections: (state, action: PayloadAction<string>) => {
      const section = action.payload;
      state.expandedSections = {
        ...state.expandedSections,
        [section]: !state.expandedSections[section],
      };
    },
  },
})

export const { setIsMobileMenuOpen, setCurrentPage, setCopiedCode, setExpandedSections } = layoutSlice.actions
export default layoutSlice.reducer
