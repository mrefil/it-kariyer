import styles from "./starting-page.module.css";

function StartingPageContent() {

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
              <div className={styles.partTime}>Part Time</div>
              {/* <Image src={dribble} alt="dribble logo" /> */}
              <p>Dribbble</p>
              <h2>Customer Support Agent</h2>
              <div className={styles.description}>
                <div>$40,000 - $200,000/year</div>
                <div>/</div>
                <div>Remote</div>
                <div>/</div>
                <div>Project Management</div>
                <div>/</div>
                <div>Part Time</div>
              </div>
              <button>Apply For Job</button>
            </div>
            <div className={styles.job}>
              <div className={styles.partTime}>Part Time</div>
              <div className={styles.featured}>Featured</div>
              {/* <Image src={paypal} alt="paypal logo" /> */}
              <p>PayPal</p>
              <h2>General Ledger Accountant</h2>
              <div className={styles.description}>
                <div>$40,000 - $200,000/year</div>
                <div>/</div>
                <div>Miami,FL</div>
                <div>/</div>
                <div>Accounting / Finance</div>
                <div>/</div>
                <div>Part Time</div>
              </div>
              <button>Apply For Job</button>
            </div>
            <div className={styles.job}>
              <div className={styles.partTime}>Part Time</div>
              {/* <Image src={apple} alt="apple logo" /> */}
              <p>Apple</p>
              <h2>Senior Product Designer</h2>
              <div className={styles.description}>
                <div>$40,000 - $200,000/year</div>
                <div>/</div>
                <div>London, UK</div>
                <div>/</div>
                <div>Design</div>
                <div>/</div>
                <div>Part Time</div>
              </div>
              <button>Apply For Job</button>
            </div>
            <div className={styles.job}>
              <div className={styles.partTime}>Part Time</div>
              {/* <Image src={starbuck} alt="sturbucks logo" /> */}
              <p>Starbuck</p>
              <h2>Product Manager</h2>
              <div className={styles.description}>
                <div>$40,000 - $200,000/year</div>
                <div>/</div>
                <div>Manhattan, NY</div>
                <div>/</div>
                <div>Development</div>
                <div>/</div>
                <div>Full Time</div>
              </div>
              <button>Apply For Job</button>
            </div>
            <div className={styles.job}>
              <div className={styles.partTime}>Full Time</div>
              {/* <Image src={dell} alt="dell logo" /> */}
              <p>Dell</p>
              <h2>Software Engineer</h2>
              <div className={styles.description}>
                <div>$40,000 - $200,000/year</div>
                <div>/</div>
                <div>Remote</div>
                <div>/</div>
                <div>Development</div>
                <div>/</div>
                <div>Full Time</div>
              </div>
              <button>Apply For Job</button>
            </div>
            <div className={styles.job}>
              <div className={styles.partTime}>Part Time</div>
              <div className={styles.featured}>Featured</div>
              {/* <Image src={slack} alt="apple logo" /> */}
              <p>Slack</p>
              <h2>Senior Product Designer</h2>
              <div className={styles.description}>
                <div>$40,000 - $200,000/year</div>
                <div>/</div>
                <div>London, UK</div>
                <div>/</div>
                <div>Design</div>
                <div>/</div>
                <div>Part Time</div>
              </div>
              <button>Apply For Job</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartingPageContent;
