import { Fragment } from "react";
import {connectToDatabase} from '../lib/db';
import Head from 'next/head';
import JobList from "../components/jobs/JobList";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Next Job</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <JobList jobs={props.jobs} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await connectToDatabase();
  const db = client.db();

  const jobsCollection = db.collection('jobs');

  const jobs = await jobsCollection.find().toArray();

  client.close();

  return {
    props: {
      jobs: jobs.map((job) => ({
        title: job.title,
        location: job.location,
        description: job.description,
        id: job._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
