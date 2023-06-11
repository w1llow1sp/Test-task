import {combineReducers, createStore} from "redux";
import {languageReducer} from "./languages-reducer";

const rootReducer = combineReducers({
    root:languageReducer
})


export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)