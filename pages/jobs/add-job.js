import {useRouter} from 'next/router';
import NewJob from "../../components/jobs/new-job";

function AddJob() {
    const router = useRouter();
    async function addJobHandler(enteredJobsData) {
        const response = await fetch('/api/job/new-job', {
            method: 'POST',
            body: JSON.stringify(enteredJobsData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        router.push('/');
    }

    return(
        <NewJob onAddJobs={addJobHandler} />
    )
}

export default AddJob;