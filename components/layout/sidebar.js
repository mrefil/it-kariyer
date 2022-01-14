
import Link from 'next/link';
import classes from "./sidebar.module.css";


function Sidebar() {
    return(
        <header className={classes.sidebar}>
            <nav>
                <ul>
                    <li>
                        <Link href="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link href="/profile/applied-job">Applied Job</Link>
                    </li>
                    <li>
                        <Link href="/profile/assigment">Assigment</Link>
                    </li>
                    <li>
                        <Link href="/profile/cv">CV</Link>
                    </li>
                    <li>
                        <Link href="/profile/change-password">Change Password</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Sidebar;