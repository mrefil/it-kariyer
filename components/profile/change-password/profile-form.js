import { useRef } from 'react';
import classes from './profile-form.module.css';

function ProfileForm(props) {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword
    });
  }

  return (
    <section className={classes.auth}>
      <div className={classes.form_wrapper}>
        <div className={classes.wrapper}>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              <input type='password' id='new-password' placeholder="New Password" ref={newPasswordRef} />
            </div>
            <div className={classes.control}>
              <input type='password' id='old-password' placeholder="Old Password" ref={oldPasswordRef} />
            </div>
            <div className={classes.action}>
              <button>Change Password</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProfileForm;
