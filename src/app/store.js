import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "../services/pokemon/pokemonSlice";

const store = configureStore({
	reducer: {
		[pokemonApi.reducerPath]: pokemonApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: { warnAfter: 150 },
			serializableCheck: { warnAfter: 150 },
		}).concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export default store;