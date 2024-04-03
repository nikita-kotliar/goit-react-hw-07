import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice"; 
import { devToolsEnhancer } from "@redux-devtools/extension";


const initialState = {

  contacts: {
    items: [], 
    loading: false, 
    error: null, 
  },
  filters: {
    name: "",
  },
};
const enhancer = devToolsEnhancer();
export const store = configureStore({
  reducer:
    {
      contacts: contactsReducer,
      filters: filtersReducer, 
    },
  preloadedState: initialState, 
  enhancer
});
