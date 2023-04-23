import {createStore} from "redux";
import {rootReducer} from "../reduces/rootReducer";

// const initialState = {
//     user: {
//         avatar: 'https://www.gravatar.com/avatar/0000?d=monsterid',
//         name: 'Monster'
//     },
//     stats: {
//         followers: 10,
//         subscribe: 1
//     }
// }

export const store = createStore(rootReducer);
