import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import getRepos from "../../../../../utils/api/github/getRepos";
import CardRepository from "./components/CardRepository/CardRepository";
import SearchBar from "./components/SearchBar/SearchBar";
import './ListRepos.css'

export default function ListRepos() {
    const [filteredData, setFilteredData] = useState(null);

    // Fetch repositories
    const { data: repositories, isLoading } = useQuery(['repository'], async () => {
        const fetch = await getRepos("valentraverso", "updated");

        return fetch;
    });

    return (
        <div className="container-repositories__div">
            <SearchBar setFilteredData={setFilteredData} repositories={repositories} />
            {
                isLoading ? // Wait until load repositories
                    <p>Loading repositories...</p>
                    :
                    (
                        filteredData ? // Conditioanl rendering if user search
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