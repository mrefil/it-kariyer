import { Fragment } from "react/cjs/react.production.min";
import Sidebar from "../../components/layout/sidebar";
import ChangePasswordHandler from "../../components/profile/change-password/profile-form";

function ChangePassword() {
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
        <Fragment>
            <Sidebar />
            <ChangePasswordHandler onChangePassword={changePasswordHandler} />
        </Fragment>
    )
}

export default ChangePassword;