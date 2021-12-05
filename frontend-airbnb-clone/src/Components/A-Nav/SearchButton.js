import React from 'react';
import { IoSearch } from 'react-icons/io5';
import './Nav.scss';


function SearchButton() {

    const click = () => console.log('clicked')

    return (
        <div className="SearchBar">
            <div> <h4 id="start-your-search">Start your search</h4></div>
            <div role="button" aria-expanded="false" id="small-search" tabIndex={0} onClick={click}><IoSearch className="search-icon" /></div>
        </div>
    )
}

export default SearchButton
