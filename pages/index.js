import { Fragment } from "react";
import Head from 'next/head';
import JobList from "../components/jobs/JobList";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <JobList />
    </Fragment>
  );
}

export default HomePage;
