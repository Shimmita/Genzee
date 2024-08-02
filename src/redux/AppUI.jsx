import { createSlice } from "@reduxjs/toolkit";

const appUISliceReducerSlice = createSlice({
  name: "AppUI",
  initialState: {
    isAccountViewAll: false,
    isAccountStatistics: false,
  },

  reducers: {
    showAccountViewAll: (state) =>{
        return {
            ...state,
            isAccountViewAll: !state.isAccountViewAll,
        }
    },

    showAccountStatistics: (state) =>{
        return {
            ...state,
            isAccountStatistics: !state.isAccountStatistics,
        }
    }
      
  },
});

// exporting the actions
export const { showAccountViewAll, showAccountStatistics } = appUISliceReducerSlice.actions;

// export the appUISliceReducer for universal purposes
export default appUISliceReducerSlice.reducer;
