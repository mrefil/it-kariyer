import { Fragment } from "react/cjs/react.production.min";
import Sidebar from "../../components/layout/sidebar";
import ChangePasswordHandler from "../../components/profile/change-password/profile-form";

function ChangePassword() {
    return (
        <Fragment>
            <Sidebar />
            <ChangePasswordHandler />
        </Fragment>
    )
}

export default ChangePassword;