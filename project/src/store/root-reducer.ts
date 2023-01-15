import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from "../const";
import {userProcess} from "./user-process/user-process";
import {filmProcess} from "./film-process/film-process";
import {mainProcess} from "./main-process/main-process";
import {dataProcess} from "./data-process/data-process";

export const rootReducer = combineReducers({
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Main]: mainProcess.reducer,
  [NameSpace.Data]: dataProcess.reducer,
});
