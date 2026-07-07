import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PortfolioState {
  activeSection: number // 0: Hero, 1: Discover / Work, 2: Sky / Contact
  scrollProgress: number // Value between 0 and 1
}

const initialState: PortfolioState = {
  activeSection: 0,
  scrollProgress: 0,
}

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<number>) => {
      state.activeSection = action.payload
    },
    setScrollProgress: (state, action: PayloadAction<number>) => {
      state.scrollProgress = action.payload
    },
  },
})

export const { setActiveSection, setScrollProgress } = portfolioSlice.actions
export default portfolioSlice.reducer
