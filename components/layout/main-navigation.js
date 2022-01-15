import Link from "next/link";
import { useSession, signOut } from "next-auth/client";

import classes from "./main-navigation.module.css";

function MainNavigation() {
  const [session, loading] = useSession();

  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <div className={classes.logo}>Next Job</div>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/jobs/add-job">Add Job</Link>
          </li>
          {!session && !loading && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
