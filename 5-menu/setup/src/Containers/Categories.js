import React from 'react';

const Categories = ({filterItems, categories}) => {
    return (
        <div className="btn-container">
            {/*<button className="filter-btn" onClick={() => filterItems('breakfast')}>Breakfast</button>*/}


            {categories.map((category, index) => {
                return (
                    <button key={index} className="filter-btn" onClick={() => filterItems(category)}>{category}</button>
                );
            })}
        </div>
    );
};

export default Categories;
