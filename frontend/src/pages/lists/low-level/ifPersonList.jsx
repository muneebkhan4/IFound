import React, { useState } from "react";
import PersonPost from "../../../components/DesignComponents/PersonPost";
import Spinner from "react-bootstrap/esm/Spinner";
import Pagination from "../../../components/Pagination";
import "../../../styles/IFoundLoading.scss";

const IfPersonList = ({ recordsPerPage, PersonPosts, loading }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const screenHeight = window.innerHeight;
    // Set the height of the current screen height

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = PersonPosts.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(PersonPosts.length / recordsPerPage);
    return (
        <React.Fragment>
            <div className="container text-center bg-list">
                <div className="row min-vh-100" style={{ minHeight: screenHeight }}>
                    {
                        loading
                            ?
                            (<div className="i-loading-bar-center">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                                <h1>Loading</h1>
                            </div>)
                            :
                            (<React.Fragment>
                                {currentRecords &&
                                    currentRecords.map((post) => (
                                        <div key={Math.floor(Math.random() * 10000 + 1)} className="col">
                                            <PersonPost image={post.image} data={post} />
                                        </div>
                                    ))}
                                <Pagination className="m-3"
                                    nPages={nPages}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                />
                            </React.Fragment>)
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default IfPersonList;
