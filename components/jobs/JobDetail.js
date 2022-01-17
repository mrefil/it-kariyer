import classes from "./JobDetail.module.css";

function JobDetail(props) {
  return (
    <section className={classes.auth}>
      <div className={classes.form_wrapper}>
        <div className={classes.wrapper}>
          <h1>{props.title}</h1>
          <address>{props.location}</address>
          <p className={classes.text}>{props.description}</p>
          <div className={classes.actions}>
            <button>Apply For Job</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobDetail;
