import { useRef, useState } from "react";

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
        <form onSubmit={sendJobHandler}>
          <div>
            <div>
              <label htmlFor='title'>Your title</label>
              <input type='text' id='title' ref={titleRef} />
            </div>
            <div>
              <label htmlFor='type'>Your type</label>
              <input type='text' id='type' ref={typeRef} />
            </div>
            <div>
              <label htmlFor='category'>Your category</label>
              <input type='text' id='category' ref={categoryRef} />
            </div>
            <div>
              <label htmlFor='department'>Your department</label>
              <input type='text' id='department' ref={departmantRef} />
            </div>
            <div>
              <label htmlFor='location'>Your location</label>
              <input type='text' id='location' ref={locationRef} />
            </div>
          </div>
          <div>
            <label htmlFor='excerpt'>Your short text</label>
            <textarea id='excerpt' rows='5' ref={excerptRef}></textarea>
          </div>
          <div>
            <label htmlFor='description'>Your description</label>
            <textarea id='description' rows='5' ref={descriptionRef}></textarea>
          </div>
          <button>Submit</button>
        </form>
      );
}

export default NewJob;