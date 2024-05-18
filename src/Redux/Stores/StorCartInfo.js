import { legacy_createStore } from "redux";
import { ReducerCartInfo } from "../Reducers/ReducerCartInfo";


export const StoreCartInfo = legacy_createStore(ReducerCartInfo)


