import {CHANGE_STATS} from "../action/statsAction";

const initialState = {
    followers: 10,
    subscribe: 1
}

export const statsReducer = (stats = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATS:
            const {isSubscribers, isInc} = action.payload;
            const type = isSubscribers?"subscribe":"followers";
            stats[type] = isInc?stats[type] + 1:stats[type] - 1;
            if (stats[type] < 0) {
                stats[type] = 0;
            }

            return  {
                ...stats,
                type: stats[type]
            }

        default:
            return stats;
    }
}
