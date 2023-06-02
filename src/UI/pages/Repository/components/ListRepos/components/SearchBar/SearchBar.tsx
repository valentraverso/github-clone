import { useState } from 'react';
import './SearchBar.css';

interface Props {
    repositories: any;
    setFilteredData: any;
    setSortRepositories: any;
}

export default function SearchBar({ repositories, setFilteredData, setSortRepositories }: Props) {

    const [valueInputSearch, setValueInputSearch] = useState('');
    const [timer, setTimer] = useState(setTimeout(() => '')); // Save the timer of handleSearch()

    const handleSearch = (ev: any) => {
        const { value } = ev.target;

        setValueInputSearch(value);

        // Delete timer if user type again
        clearTimeout(timer);

        // Wait 1 second to optimize query
        setTimer(setTimeout(() => {
            const search = repositories.filter(({ name }) =>
                name.toLowerCase().includes(value.toLowerCase().replace(" ", "-"))
            )

            setFilteredData(search);
        }, 1000))
    }

    const handleSort = (value: string): void => {
        setValueInputSearch('');

        setSortRepositories(value);
    }

    return (
        <div className='container-searchbar__div'>
            <input
                type="text"
                className="field-search-repository__input"
                placeholder='Find a repository'
                onChange={ev => handleSearch(ev)}
                value={valueInputSearch}
            />
            <select className='select-type__select'>
                <option selected>All</option>
            </select>
            <select className='select-sort__select' onChange={(ev) => handleSort(ev.target.value)}>
                <option value={"updated"}>Last updated</option>
                <option value={"created"}>Created</option>
                <option value={"full_name"}>Name</option>
            </select>
        </div>
    )
}