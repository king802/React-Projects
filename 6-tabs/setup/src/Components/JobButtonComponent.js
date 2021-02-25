import React from "react";


const JobButtonComponent = ({job, index, activeIndex, setValue}) => {
    return <button key={job.id}
                   className={index === activeIndex ? "job-btn active-btn" : "job-btn"}
                   onClick={() => setValue(index)}>
        {job.company}
    </button>


};

export default JobButtonComponent;