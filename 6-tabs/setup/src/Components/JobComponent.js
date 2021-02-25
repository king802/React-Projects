import React from "react";
import JobDescriptionComponent from "./JobDescriptionComponent";

const JobComponent = ({company, dates, duties, title}) => {

    return (
        <artivcle className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
                return <JobDescriptionComponent duty={duty} index={index}/>
            })}
        </artivcle>

    );

};

export default JobComponent;