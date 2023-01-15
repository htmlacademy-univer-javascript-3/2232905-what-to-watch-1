import {createAction} from '@reduxjs/toolkit';


export const redirectAction = createAction('redirect', (path: string) => ({
  payload: path,
}));
