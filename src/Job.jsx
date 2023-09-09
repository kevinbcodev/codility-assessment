import React, { useEffect, useState } from 'react';
import { fetchResults } from './functions';

const Job = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job data and update the state when the data is received.
    fetchResults('Job/getall')
      .then((res) => {
        setJobs(res); // Assuming that the API response contains an array of jobs.
      })
      .catch((error) => {
        console.error('Error fetching job data:', error);
        setJobs([]); // Set jobs to an empty array if there is an error.
      });
  }, []); // Empty dependency array means this effect runs once after the initial render.

  return (
    <>
      <h1>Job Listings</h1>
      <div className="row px-5 mx-5 my-3">
        {jobs !== null ? (
          jobs.map((job) => (
            <div className="col-md-4 col-lg-4" key={job?.id}>
              <div className="card mb-3" style={{ height: '250px', overflowY: 'auto' }}>
                <div className="card-header">{job?.industry}</div>
                <div className="card-body">
                  <h5 className="card-title">{job?.title}</h5>
                  <p className="card-text">
                    {job?.description}
                  </p>
                  <a href="#" className="btn btn-primary rounded-pill text-uppercase fs-5 px-3">
                    Apply <span className="material-icons">arrow_outward</span>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p> // Display a loading message while waiting for data.
        )}
      </div>
    </>
  );
};

export default Job;
