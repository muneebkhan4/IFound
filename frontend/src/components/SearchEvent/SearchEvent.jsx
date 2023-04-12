import React, { useState,useEffect,useRef } from 'react';
import './SearchEvent.css';
import SearchLocation from '../SearchLocation/searchLocation';
import SearchIcon from '../Svgs/searchIcon';
import { cities } from '../../static/static';
import listenForOutsideClick from '../HelperComponents/listen-for-outside-clicks';


export default function SearchEvent({onSearchClick}) {

    const [filteredCities, setFilteredCities] = useState(
        {
            query: "",
            list: cities,
        });
    const [isOpen, setIsOpen] = useState(false);
    // Hide Dropdown on Outside Click
    const menuRef = useRef(null)
    const [listening, setListening] = useState(false)
    useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

    const handleSearchEvent = (e) => {
        const results = cities.filter(city => {
            if (e.target.value === "") return cities;
            return city.toLowerCase().includes(e.target.value.toLowerCase());
        });

        setFilteredCities({
            query: e.target.value,
            list: results
        });
        console.log(results);
    }

    return (
        <div className='searchArea' ref={menuRef}>
            <div className='position-relative'>
                <div>
                    <div className='d-flex bg-white'>
                        <SearchIcon />
                        <input style={{
                            border: "none",
                            outline: "none"
                        }} className='w-100 ms-1'
                            type="text"
                            id="headerSearch"
                            placeholder="Search Person"
                            name="s"
                            onChange={handleSearchEvent}
                            onClick={() => setIsOpen(true)}
                        />
                    </div>
                    <div style={{ marginTop: "0.2rem" }}></div>
                    {
                        isOpen ? (
                            <div className='ab5c51c3'>
                                {
                                    filteredCities.list.map((value, index) =>
                                        (<SearchLocation onClick={()=>onSearchClick(value)} key={index} name={value}></SearchLocation>)
                                    )
                                }
                            </div>) : ("")
                    }
                </div>
            </div>
        </div>
    );
}
