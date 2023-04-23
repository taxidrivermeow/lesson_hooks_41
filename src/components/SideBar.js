import React from 'react';
import UserStats from "./UserStats";

const SideBar = (props) => {
    return (
        <div className={'sidebar'}>
        <UserStats/>
        </div>
    );
};

export default SideBar;