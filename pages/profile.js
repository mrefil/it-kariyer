import { getSession } from "next-auth/client";
import UserProfile from "../components/profile/user-profile";
import Profile from "../components/profile/profile";
import Sidebar from "../components/layout/sidebar";
import { Fragment } from "react/cjs/react.production.min";

function ProfilePage() {
  return (
    <Fragment>
      <Sidebar />
      <Profile />
    </Fragment>
  );
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

export default ProfilePage;
