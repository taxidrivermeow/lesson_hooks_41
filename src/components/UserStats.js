import React from 'react';
import UserAvatar from "./UserAvatar";
import {useDispatch, useSelector} from "react-redux";
import {changeStatsAction} from "../action/statsAction";
import {changeNameAction} from "../action/userAction";

const UserStats = () => {
    const {user, stats} = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className={'user-stats'}>
            <UserAvatar/>
            <div onClick={() => {
                const name = prompt("Enter new name:");
                dispatch(changeNameAction(name));
            }}>{user.name}</div>
            <div className={'stats'}>
                <div onClick={() => dispatch(changeStatsAction(false, true))}
                     onContextMenu={e => {
                         e.preventDefault();
                         dispatch(changeStatsAction(false, false));
                     }}
                >Followers:{stats.followers} </div>
                <div onClick={() => dispatch(changeStatsAction(true, true))}
                     onContextMenu={e => {
                         e.preventDefault();
                         dispatch(changeStatsAction(true, false));
                     }}
                >Subscribe: {stats.subscribe} </div>
            </div>
        </div>
    );
};

export default UserStats;
