import React from "react";
import './iSpinner.scss';
import Spinner from "react-bootstrap/esm/Spinner";

export default function ISpinner() {

    return (
        <div>
                <Spinner animation="grow" role="status" style={{ backgroundColor: "transparent" }} variant="light" className="my-custom-spinner">
                    <span className="sr-only">Loading...</span>
                    <img src="../../assets/bg-pic.png" alt="loading..." className="my-custom-image" />
                </Spinner>

        </div>
    );
}
