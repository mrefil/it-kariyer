
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
                        Applied Job
                    </li>
                    <li>
                        Assigment
                    </li>
                    <li>
                        CV
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