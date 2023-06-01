import { useQuery } from "@tanstack/react-query";
import getUserData from "../../../utils/api/github/getUserData";
import SidebarUser from "./components/leftSide/SidebarUser";

function Repository() {
    const { data: user } = useQuery(['user'], async () => {
        const fetch = await getUserData("valentraverso");
        return fetch;
    });

    return (
        <main>
            <div>
                <SidebarUser user={user} />
            </div>
        </main>
    )
}

export default Repository