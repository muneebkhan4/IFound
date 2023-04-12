import React from "react";
import './rangeInput.css';
import { Button } from "react-bootstrap";
import { COLORS } from "../../styles/globalColors";

//Controlled Component
function RangeInput({
    label,
    type,
    autofocus,
    minValue,
    maxValue,
    handleMinChange,
    handleMaxChange,
    handleGoClick,
}) {
    return (
        <div className="d-flex align-items-center" id="range-input">
            <label className="fs-6" style={{color:COLORS.ifSpanColor}}>{label}</label>
            <input
                className="ms-1 me-1 s-ref-age-range"
                autoFocus={autofocus}
                placeholder={"Min"}
                value={minValue}
                name="min"
                type={type}
                id="min-age"
                onChange={handleMinChange}
                maxLength="2"
                style={{
                    border: "1px solid #888C8C",
                    borderRadius: "3px",
                    boxShadow: "0 1px 2px rgba(15,17,17,.15) inset"
                }}
            />
            <input
                className="me-1 s-ref-age-range"
                autoFocus={autofocus}
                placeholder={"Max"}
                value={maxValue}
                name="max"
                type={type}
                id="max-age"
                onChange={handleMaxChange}
                maxLength="2"
                style={{
                    border: "1px solid #888C8C",
                    borderRadius: "3px",
                    boxShadow: "0 1px 2px rgba(15,17,17,.15) inset"
                }}
            />
            <Button onClick={handleGoClick}>Go</Button>
        </div>
    );
}

export default RangeInput;
