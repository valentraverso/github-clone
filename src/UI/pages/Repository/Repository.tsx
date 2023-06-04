import { useQuery } from "@tanstack/react-query";
import getUserData from "../../../utils/api/github/getUserData";
import SidebarUser from "./components/SidebarUser/SidebarUser/SidebarUser";
import ListRepos from "./components/ListRepos/ListRepos";
import './Repository.css';
import Menu from "./components/Menu/Menu";
import { Helmet } from "react-helmet-async";

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
                <Helmet>
                    <title>{user.data.name} repositories</title>
                </Helmet>
                <Menu />
                <div className="container-absolute__div">
                    <div className="container-grid__div">
                        <SidebarUser user={user.data} />
                        <ListRepos />
                    </div>
                </div>
            </main >
    )
}

export default Repository