import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  // view state
  defaultState: true, // default
  isAccountSettings: false,
  isHelpQuiz: false,
  isReportUser: false,
  isAssistEmail: false,
  isAbout: false,
  isScrolledDown: false,
  isViralPage: false,
  isJobsPage: false,
  isArchivePage: false,
  isMobileRighBar: false,
  isRefreshBox: true,

  // theme
  isDarkMode: false,
};

const appUISliceReducerSlice = createSlice({
  name: "AppUI",
  initialState,
  reducers: {
    showAccountSettings: (state) => {
      return {
        ...state,
        defaultState: false,
        isAccountSettings: true,
      };
    },

    resetAll: (state) => {
      return {
        ...state,
        defaultState: true,
        isAccountSettings: false,
        isHelpQuiz: false,
        isReportUser: false,
        isAssistEmail: false,
        isAbout: false,
        isViralPage: false,
        isJobsPage: false,
        isArchivePage: false,
      };
    },

    resetDarkMode: (state) => {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    },

    showHelpQuiz: (state) => {
      return {
        ...state,
        defaultState: false,
        isHelpQuiz: true,
      };
    },

    showReportUser: (state) => {
      return {
        ...state,
        defaultState: false,
        isReportUser: true,
      };
    },

    showAssistEmail: (state) => {
      return {
        ...state,
        defaultState: false,
        isAssistEmail: true,
      };
    },
    showAbout: (state) => {
      return {
        ...state,
        defaultState: false,
        isAbout: true,
      };
    },

    // manages user scrolling
    handleScrolledDown: (state, action) => {
      state.isScrolledDown = action.payload;
    },

    showViralPage: (state) => {
      return {
        ...state,
        defaultState: false,
        isViralPage: true,
      };
    },

    showJobsPage: (state) => {
      return {
        ...state,
        defaultState: false,
        isJobsPage: true,
      };
    },

    showArchivesPage: (state) => {
      return {
        ...state,
        defaultState: false,
        isArchivePage: true,
      };
    },

    showMobileRighBar: (state) => {
      return {
        ...state,
        isMobileRighBar: !state.isMobileRighBar,
      };
    },

    showRefreshBox: (state) => {
      return {
        ...state,
        isRefreshBox: !state.isRefreshBox,
      };
    },
  },
});

// exporting the actions
export const {
  showAccountSettings,
  resetAll,
  resetDarkMode,
  showHelpQuiz,
  showReportUser,
  showAssistEmail,
  showAbout,
  handleScrolledDown,
  showViralPage,
  showJobsPage,
  showArchivesPage,
  showMobileRighBar,
  showRefreshBox,
} = appUISliceReducerSlice.actions;

// export the appUISliceReducer for universal purposes
export default appUISliceReducerSlice.reducer;
