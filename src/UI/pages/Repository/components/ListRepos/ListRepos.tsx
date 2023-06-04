import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import getRepos from "../../../../../utils/api/github/getRepos";
import CardRepository from "./components/CardRepository/CardRepository";
import SearchBar from "./components/SearchBar/SearchBar";
import './ListRepos.css'

export default function ListRepos() {
    const [filteredData, setFilteredData] = useState(null);
    const [sortRepositories, setSortRepositories] = useState<"created" | "updated" | "pushed" | "full_name">("updated");

    // Fetch repositories
    const { data: repositories, isLoading } = useQuery(['repository', sortRepositories], async () => {
        const fetch = await getRepos("valentraverso", sortRepositories);

        setFilteredData(null);

        return fetch;
    });

    return (
        <div className="container-repositories__div">
            <SearchBar setFilteredData={setFilteredData} repositories={repositories} setSortRepositories={setSortRepositories} />
            {
                isLoading ? // Wait until load repositories
                    <p>Loading repositories...</p>
                    :
                    <>
                        {
                            filteredData?.length < 1 || repositories?.length < 1 ?
                            <p>We couldn't find repositories.</p>
                            :
                            null
                        }
                        {
                            filteredData ? // Conditioanl rendering if user search
                                filteredData?.map((repository: any) => (
                                    <CardRepository repository={repository} />
                                ))
                                :
                                repositories?.map((repository: any) => (
                                    <CardRepository repository={repository} />
                                ))
                        }
                    </>
            }
        </div>
    );
}