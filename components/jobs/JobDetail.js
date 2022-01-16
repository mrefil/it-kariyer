

function JobDetail(props) {
  return (
    <section>
      <h1>{props.title}</h1>
      <address>{props.location}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default JobDetail;