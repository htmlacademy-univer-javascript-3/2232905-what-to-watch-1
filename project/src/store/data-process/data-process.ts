import {NameSpace} from '../../const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: {
  isDataLoaded: boolean;
} = {
  isDataLoaded: false
};


export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setIsDataLoaded: (state, action: PayloadAction<boolean>) => {
      state.isDataLoaded = action.payload;
    }
  },
});

export const {setIsDataLoaded} = dataProcess.actions;
