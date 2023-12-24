import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import {
	persistReducer,
	persistStore,
	PERSIST,
	REHYDRATE,
	FLUSH,
	PAUSE,
	PURGE,
	REGISTER,
} from 'redux-persist';

import { userReducer } from './slices/user/user';

const rootReducer = combineReducers({
	user: userReducer,
});

const persistConfig = {
	key: 'root',
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [PERSIST, REHYDRATE, FLUSH, PAUSE, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
