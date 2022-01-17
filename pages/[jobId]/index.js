import { ObjectId } from "mongodb";
import {connectToDatabase} from '../../lib/db';
import Head from 'next/head';
import { Fragment } from "react/cjs/react.production.min";
import JobDetail from "../../components/jobs/JobDetail";

function JobDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.jobData.title}</title>
        <meta name='description' content={props.jobData.description} />
      </Head>
      <JobDetail
        title={props.jobData.title}
        location={props.jobData.location}
        description={props.jobData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await connectToDatabase();
  const db = client.db();

  const jobsCollection = db.collection("jobs");
  const jobs = await jobsCollection.find().toArray();
  client.close();

  return {
    fallback: 'blocking',
    paths: jobs.map((job) => ({
      params: { jobId: job._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const jobId = context.params.jobId;
  const client = await connectToDatabase();
  const db = client.db();

  const jobsCollection = db.collection("jobs");
  const selectedJob = await jobsCollection.findOne({_id: ObjectId(jobId)});
  console.log(selectedJob._id.toString());
  client.close();
  return {
    props: {
      jobData: {
        id: selectedJob._id.toString(),
        title: selectedJob.title,
        location: selectedJob.location,
        description: selectedJob.description,
      },
    },
  };
}

export default JobDetails;