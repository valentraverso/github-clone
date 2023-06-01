import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import getRepos from "../../../../../utils/api/github/getRepos";
import CardRepository from "./components/CardRepository/CardRepository";
import SearchBar from "./components/SearchBar/SearchBar";
import './ListRepos.css'

interface Props {
    user: any;
}

export default function ListRepos({ user }: Props) {
    const [filteredData, setFilteredData] = useState(null);

    const { data: repositories, isLoading } = useQuery(['repository'], async () => {
        const fetch = await getRepos("valentraverso");

        return fetch;
    });

    return (
        <div className="container-repositories__div">
            <SearchBar setFilteredData={setFilteredData} repositories={repositories} />
            {
                isLoading ?
                    <p>Loading repositories...</p>
                    :
                    (
                        filteredData ?
                            filteredData?.map((repository: any) => (
                                <CardRepository repository={repository} />
                            ))
                            :
                            repositories?.map((repository: any) => (
                                <CardRepository repository={repository} />
                            ))
                    )
            }
        </div>
    );
}