import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PortfolioState {
  activeSection: number // 0: Overview, 1: Options Academy, 2: LifeSyncUp, 3: AI LinkedIn Agent, 4: Fun-Finder, 5: Journey, 6: Tech Arsenal, 7: Connect
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
