import {CHANGE_STATS} from "../action/statsAction";

const initialState = {
    followers: 10,
    subscribe: 1
}

export const statsReducer = (stats = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATS:
            const {isSubscribers, isInc} = action.payload;
            const type = isSubscribers ? "subscribe" : "followers";
            stats[type] = isInc ? stats[type] + 1 : stats[type] - 1;
            stats[type] = (stats[type] < 0) ? 0 : stats[type];

            return {
                ...stats,
                type: stats[type]
            }

        default:
            return stats;
    }
}
