import { useState } from 'react';
import './SearchBar.css';

interface Props {
    repositories: any;
    setFilteredData: any;
}

export default function SearchBar({ repositories, setFilteredData }: Props) {

    const [timer, setTimer] = useState(setTimeout(() => ''));

    const handleSearch = (ev: any) => {
        const { value } = ev.target;

        clearTimeout(timer);

        setTimer(setTimeout(() => {
            const search = repositories.filter(({ name }) =>
                name.toLowerCase().includes(value.toLowerCase().replace(" ", "-"))
            )

            setFilteredData(search);
        }, 1000))
    }

    return (
        <div className='container-searchbar__div'>
            <input
                type="text"
                className="field-search-repository__input"
                placeholder='Find a repository'
                onChange={ev => handleSearch(ev)}
            />
            <select className='select-type__select'>
                <option selected>All</option>
            </select>
            <select className='select-sort__select'>
                <option>Last updated</option>
                <option>Name</option>
                <option>Stars</option>
            </select>
        </div>
    )
}