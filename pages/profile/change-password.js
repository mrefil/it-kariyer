import { getSession } from "next-auth/client";
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

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
    if (!session) {
      return {
        redirect: {
          destination: "/auth",
          permanent: false,
        },
      };
    }
  
    return {
      props: {
        session,
      },
    };
}

export default ChangePassword;