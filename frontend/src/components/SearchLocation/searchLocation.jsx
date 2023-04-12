import React from "react";
import { COLORS } from "../../styles/globalColors";
import LocationIcon from "../Svgs/locationIcon";
import './searchLocation.css';

function SearchLocation({name,onClick}) {
    return (
        <div onClick={onClick} className="autocomplete-items temp-class" id="city-locations" aria-label="Locations dropdown">
            <div class="d-flex align-items-center m-1 ps-1 pe-1">
                <LocationIcon height="25" width="25 " ></LocationIcon>
                <p class="fs-6 ms-1" style={{ color: COLORS.ifSpanColor }}>{name}</p>
            </div>
        </div>
    );
}

export default SearchLocation;
