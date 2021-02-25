import React, {useState, useEffect} from 'react'
import JobButtonComponent from "./Components/JobButtonComponent";
import JobComponent from "./Components/JobComponent";

const url = 'https://course-api.com/react-tabs-project'



function App() {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0)

    /**
     * trys to grabs all of the jobs from the endpoint url and loads them in. Then sets load state to false.
     * @returns {Promise<void>}
     */
    const fetchJobs = async () => {
        try {
            const response = await fetch(url)
            const newJobs = await response.json();
            setJobs(newJobs)
        }
        catch (err){
            console.log("Error Loading in the data")
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchJobs()
    }, []);

    if (loading) {
        return (
            <section className="section loading">
                <h1>Loading...</h1>
            </section>
        )
    }
    return (
        <section className="section">
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"/>
            </div>
            <div className="jobs-center">

                <div className="btn-container">
                    {jobs.map((job, index) => {
                        return <JobButtonComponent
                            job={job}
                            index={index}
                            activeIndex={value}
                            setValue={setValue}
                        />;
                    })
                    }
                </div>
                <JobComponent {...jobs[value]}/>
            </div>
            <button className="btn"> More Info</button>
        </section>
    )
}

export default App
