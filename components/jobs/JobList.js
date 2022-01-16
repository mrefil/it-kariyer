import JobItem from "./JobItem";
import styles from "./JobList.module.css";

function JobList(props) {
    console.log(props);
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1>Find your dream job</h1>
            <p>
              Find jobs, create trackable resumes and enrich your applications
            </p>
          </div>
        </div>
      </div>

      <div className={styles.jobs}>
        <div className={styles.wrapper}>
          <div className={styles.jobsList}>
            {props.jobs.map((job) => (
                <JobItem key={job.id} id={job.id} title={job.title} location={job.location} type={job.type} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobList;
