import {useRouter} from 'next/router';
import styles from './JobList.module.css';

function JobItem(props) {
    const router = useRouter();

    function showDetailsHandler() {
        router.push('/' + props.id);
    }
    
  return (
    <div className={styles.job}>
        <div className={styles.partTime}>Full Time</div>
        <div className={styles.featured}>Featured</div>
        <p>{props.location}</p>
        <h2>{props.title}</h2>
        <button onClick={showDetailsHandler}>Apply For Job</button>
    </div>
  );
}

export default JobItem;