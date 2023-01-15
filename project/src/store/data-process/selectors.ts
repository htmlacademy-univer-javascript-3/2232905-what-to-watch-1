import {State} from "../../types/state";
import {NameSpace} from "../../const";

export const getIsDataLoaded = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
