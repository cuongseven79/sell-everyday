import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type LanguageState = {
  country: string;
  currency: string;
  flagURL: string;
  url: string;
};

const languageLocal = localStorage.getItem("language");
const c = JSON.parse(languageLocal || "{}")?.country;
const cur = JSON.parse(languageLocal || "{}")?.currency;
const f = JSON.parse(languageLocal || "{}")?.flagURL;
const u = JSON.parse(languageLocal || "{}")?.url;

const initialState: LanguageState = {
  country: c,
  currency: cur,
  flagURL: f,
  url: u,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    updateLanguage: (state, action: PayloadAction<any>) => {
      state.country = action.payload.country;
      state.currency = action.payload.currency;
      state.flagURL = action.payload.flagURL;
      state.url = action.payload.url;
      localStorage.setItem("language", JSON.stringify(action.payload));
    },
  },
});

export const { updateLanguage } = languageSlice.actions;
export default languageSlice.reducer;
// https://redux-toolkit.js.org/tutorials/quick-start#add-slice-reducers-to-the-store
