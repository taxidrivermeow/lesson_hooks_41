import {
    CHANGE_AVATAR,
    CHANGE_NAME,
} from "../action/userAction";

import {
    FOLLOWERS_DEC,
    FOLLOWERS_INC,
    SUBSCRIBERS_DEC,
    SUBSCRIBERS_INC,
} from "../action/statsAction";

export const twitterReducer = (state, action) => {
    let user = {...state.user};
    let stats = {...state.stats};

    switch (action.type) {
        case CHANGE_AVATAR:
            user.avatar = action.payload || user.avatar;
            return {...state, user};

        case CHANGE_NAME:
            user.name = action.payload || user.name;
            return {...state, user};

        case FOLLOWERS_INC:
            stats.followers++;
            return {...state, stats};

        case FOLLOWERS_DEC:
            stats.followers = stats.followers > 0 ?
                stats.followers - 1 : 0;
            return {...state, stats};

        case SUBSCRIBERS_INC:
            stats.subscribe++;
            return {...state, stats};

        case SUBSCRIBERS_DEC:
            stats.subscribe = (stats.subscribe > 0) ?
                stats.subscribe - 1 : 0;
            return {...state, stats};

        default:
            return state;
    }
}
