import './SearchBar.css';

export default function SearchBar() {
    return (
        <div className='container-searchbar__div'>
            <input type="text" className="field-search-repository__input" placeholder='Find a repository' />
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