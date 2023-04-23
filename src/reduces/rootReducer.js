import {userReducer} from "./userReducer";
import {statsReducer} from "./statsReducer";
import {combineReducers} from "redux";

// export const rootReducer = (state, action) => ({
//     user: userReducer(state.user, action),
//     stats: statsReducer(state.stats, action),
// });

export const rootReducer = combineReducers(
    {
        user: userReducer,
        stats: statsReducer,
    }
)
