import classes from './profile.module.css';

function Profile() {
    return (
        <section className={classes.profile}>
            <div className={classes.form_wrapper}>
                <div className={classes.wrapper}>
                    <h1>Welcome</h1>
                    <p>Welcome to job portal! You can apply open jobs, update your CV and attend assigment that provided for you!</p>
                </div>
            </div>
        </section>
    )
}

export default Profile;