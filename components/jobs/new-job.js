import { useRef, useState } from "react";
import classes from './new-job.module.css';

function NewJob(props) {
    const titleRef = useRef();
    const typeRef = useRef();
    const categoryRef = useRef();
    const departmantRef = useRef();
    const locationRef = useRef();
    const excerptRef = useRef();
    const descriptionRef = useRef();

    function sendJobHandler(event) {
        event.preventDefault();
    
        const enteredTitle   = titleRef.current.value;
        const enteredType    = typeRef.current.value;
        const enteredCategory = categoryRef.current.value;
        const enteredDepartment = departmantRef.current.value;
        const enteredLocation = locationRef.current.value;
        const enteredExcerpt = excerptRef.current.value;
        const enteredDescription = departmantRef.current.value;

        const jobData = {
          title: enteredTitle,
          type: enteredType,
          category: enteredCategory,
          department: enteredDepartment,
          location: enteredLocation,
          excerpt: enteredExcerpt,
          description: enteredDescription
        };
    
        props.onAddJobs(jobData);
    }

    return (
      <section className={classes.auth}>
      <div className={classes.form_wrapper}>
        <div className={classes.wrapper}>
        <form onSubmit={sendJobHandler}>
          <div>
            <div className={classes.control}>
              <input type='text' id='title' ref={titleRef} placeholder="Title" />
            </div>
            <div className={classes.control}>
              <input type='text' id='type' ref={typeRef} placeholder="Job Type" />
            </div>
            <div className={classes.control}>
              <input type='text' id='category' ref={categoryRef} placeholder="Category" />
            </div>
            <div className={classes.control}>
              <input type='text' id='department' ref={departmantRef} placeholder="Job Department" />
            </div>
            <div className={classes.control}>
              <input type='text' id='location' ref={locationRef} placeholder="Location" />
            </div>
          </div>
          <div className={classes.control}>
            <textarea id='excerpt' rows='5' ref={excerptRef} placeholder="Short Description"></textarea>
          </div>
          <div className={classes.control}>
            <textarea id='description' rows='5' ref={descriptionRef} placeholder="Description"></textarea>
          </div>
          <div className={classes.actions}>
            <button>Submit</button>
          </div>
        </form>
        </div>
      </div>
    </section>
      );
}

export default NewJob;