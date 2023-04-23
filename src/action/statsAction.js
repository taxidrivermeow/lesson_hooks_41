export const CHANGE_STATS = "CHANGE_STATS";

export const changeStatsAction = (isSubscribers, isInc) => (
    {
        type: CHANGE_STATS,
        payload: {
            isSubscribers,
            isInc
        }
    }
);
