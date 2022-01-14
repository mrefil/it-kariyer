// import { getSession } from "next-auth/client";
// import { useEffect, useState } from "react";
import ProfileForm from "./change-password/profile-form";
import Sidebar from "../layout/sidebar";
import classes from "./user-profile.module.css";

function UserProfile() {
  async function changePasswordHandler(passwordData) {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <section className={classes.profile}>
      <Sidebar />
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
