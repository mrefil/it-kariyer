import { getSession } from "next-auth/client";
import { Fragment } from "react";
import Sidebar from "../../components/layout/sidebar";

function Assigment() {
    return(
        <Fragment>
            <Sidebar />
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

export default Assigment;