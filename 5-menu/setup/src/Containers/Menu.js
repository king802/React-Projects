import React from 'react';
import MenuItem from "../Components/MenuItem";
import menu from "../Data/data";

const Menu = ({items}) => {
    return (
        <div className="section-center">
            {items.map((item) => {
                return <MenuItem {...item}/>
            })}
        </div>

    );
};

export default Menu;
