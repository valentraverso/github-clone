import { useQuery } from "@tanstack/react-query";
import getUserData from "../../../utils/api/github/getUserData";
import SidebarUser from "./components/SidebarUser/SidebarUser/SidebarUser";
import ListRepos from "./components/ListRepos/ListRepos";
import './Repository.css';

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
                <div className="container-grid__div">
                    <SidebarUser user={user.data} />
                    <ListRepos user={user.data} />
                </div>
            </main >
    )
}

export default Repository