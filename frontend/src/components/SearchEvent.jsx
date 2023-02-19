import React, { useState } from 'react';
import './SearchEvent.css';

export default function SearchEvent() {

    const handleSearchEvent = (e) => {
        e.preventDefault();
        console.log(e.target.headerSearch.value);
    }

    return (

        <form onSubmit={handleSearchEvent} >
            <div>
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search blog posts</span>
                </label>
                <input
                    type="text"
                    id="headerSearch"
                    placeholder="Search posts"
                    name="s"
                />
                <button type="submit">Search</button>

            </div>
        </form>


    );
}
