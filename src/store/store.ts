import {configureStore, ThunkAction} from '@reduxjs/toolkit';
import {Action} from 'redux';

import main from './models/main';

export const store = configureStore({
  reducer: {
    main,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
