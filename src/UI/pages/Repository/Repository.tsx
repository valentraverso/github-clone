import { useQuery } from "@tanstack/react-query";
import getUserData from "../../../utils/api/github/getUserData";
import SidebarUser from "./components/leftSide/SidebarUser/SidebarUser";

function Repository() {
    const { data: user, isLoading } = useQuery(['user'], async () => {
        const fetch = await getUserData("valentraverso");
        return fetch;
    });

    return (
        isLoading ?
            <p>Loading info user</p>
            :
            <main>
                <div>
                    <SidebarUser user={user.data} />
                </div >
            </main >
    )
}

export default Repository