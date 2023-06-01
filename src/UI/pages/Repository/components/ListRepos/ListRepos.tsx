import { useQuery } from "@tanstack/react-query";
import getRepos from "../../../../../utils/api/github/getRepos";
import CardRepository from "./components/CardRepository/CardRepository";
import SearchBar from "./components/SearchBar/SearchBar";

interface Props {
    user: any;
}

export default function ListRepos({ user }: Props) {
    const { data: repos, isLoading } = useQuery(['user'], async () => {
        const fetch = await getRepos("valentraverso");

        return fetch;
    });

    return (
        <div>
            <SearchBar />
            {
                isLoading ?
                    <p>Loading repositories...</p>
                    :
                    <CardRepository />
            }
        </div>
    );
}