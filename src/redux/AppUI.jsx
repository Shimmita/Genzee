import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  // view state
  defaultState: true, // default
  isAccountViewAll: false,
  isAccountStatistics: false,
  isAccountSettings: false,
  isHelpQuiz: false,
  isReportUser: false,
  isAssistEmail: false,
  isAbout: false,
  isScrolledDown: false,
  isDownloadPage: false,
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
    showAccountViewAll: (state) => {
      return {
        ...state,
        defaultState: false,
        isAccountViewAll: true,
      };
    },

    showAccountStatistics: (state) => {
      return {
        ...state,
        defaultState: false,
        isAccountStatistics: true,
      };
    },

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
        isAccountStatistics: false,
        isAccountViewAll: false,
        isAccountSettings: false,
        isHelpQuiz: false,
        isReportUser: false,
        isAssistEmail: false,
        isAbout: false,
        isDownloadPage: false,
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

    showDownloadPage: (state) => {
      return {
        ...state,
        defaultState: false,
        isDownloadPage: true,
      };
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
  showAccountViewAll,
  showAccountStatistics,
  showAccountSettings,
  resetAll,
  resetDarkMode,
  showHelpQuiz,
  showReportUser,
  showAssistEmail,
  showAbout,
  handleScrolledDown,
  showDownloadPage,
  showViralPage,
  showJobsPage,
  showArchivesPage,
  showMobileRighBar,
  showRefreshBox,
} = appUISliceReducerSlice.actions;

// export the appUISliceReducer for universal purposes
export default appUISliceReducerSlice.reducer;
