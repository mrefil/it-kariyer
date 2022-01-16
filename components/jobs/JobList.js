import styles from "./JobList.module.css";

function JobList() {

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
            <div className={styles.job}>
              <div className={styles.partTime}>Full Time</div>
              {/* <Image src={dribble} alt="dribble logo" /> */}
              <p>May, 11 2021</p>
              <h2>Customer Support Agent</h2>
              {/* <div className={styles.description}>
                <div>$40,000 - $200,000/year</div>
                <div>/</div>
                <div>Remote</div>
                <div>/</div>
                <div>Project Management</div>
                <div>/</div>
                <div>Full Time</div>
              </div> */}
              <button>Apply For Job</button>
            </div>
            <div className={styles.job}>
              <div className={styles.partTime}>Full Time</div>
              <p>May, 11 2021</p>
              <h2>General Ledger Accountant</h2>
              <button>Apply For Job</button>
            </div>
            <div className={styles.job}>
              <div className={styles.partTime}>Part Time</div>
              <p>May, 11 2021</p>
              <h2>Senior Product Designer</h2>
              <button>Apply For Job</button>
            </div>
            <div className={styles.job}>
              <div className={styles.partTime}>Full Time</div>
              <p>May, 11 2021</p>
              <h2>Product Manager</h2>
              <button>Apply For Job</button>
            </div>
            <div className={styles.job}>
              <div className={styles.partTime}>Full Time</div>
              <p>May, 11 2021</p>
              <h2>Software Engineer</h2>
              <button>Apply For Job</button>
            </div>
            <div className={styles.job}>
              <div className={styles.partTime}>Full Time</div>
              <div className={styles.featured}>Featured</div>
              <p>May, 11 2021</p>
              <h2>Senior Product Designer</h2>
              <button>Apply For Job</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobList;
