import { createStore } from "vuex";

import  journalMudule from '../modules/daybook/store/journal'
const store = createStore({
  modules: {
    journal: journalMudule,
  },
});


export default store;
