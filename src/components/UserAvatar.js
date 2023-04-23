import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeAvatarAction, changeNameAction} from "../action/userAction";

const UserAvatar = (props) => {
   const dispatch = useDispatch();
   const user = useSelector(state => state.user);
    return (
            <img className={`user-avatar ${props.size}`}
                          src={user.avatar}
                          alt={user.name}
            onClick={() => {
                const url = prompt('Enter new avatar url');
                dispatch(changeAvatarAction(url));
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter new name');
                dispatch(changeNameAction(name));
            }}
            />
    );
};

export default UserAvatar;
