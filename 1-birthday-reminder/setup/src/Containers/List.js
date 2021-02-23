import React from 'react';
import ListComponent from "../Components/ListComponent";
const List = ({people}) => {
    return (
        <>
            {people.map((person) => {
                return ListComponent(person)
            })}
        </>
    );
}
;

export default List;
