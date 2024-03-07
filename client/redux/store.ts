import { legacy_createStore as createStore, combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { themeReducer } from '../redux/reducers/ThemeReducer';
import { usersReducer } from './reducers/usersReducer';
import { authReducer } from './reducers/authReducer';

export const store = createStore(
  combineReducers({
    users: usersReducer,
    theme: themeReducer,
    auth: authReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
