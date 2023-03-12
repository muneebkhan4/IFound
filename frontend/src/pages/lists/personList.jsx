import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonPost from "../../components/PersonPost";
import Spinner from "react-bootstrap/esm/Spinner";
import Pagination from "../../components/Pagination";
import "../../styles/IFoundLoading.scss";

const PersonList = ({ url,recordsPerPage }) => {
    const [PersonPosts, setPersonPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); 

    useEffect(() => {
        const getPersonPostData = async () => {
            // authentication token
            const token = localStorage.getItem("x_auth_token");
            // Request made to the backend api
            // Send formData object
            try {
                const { data } = await axios.get(
                    url,
                    {
                        headers: { x_auth_token: token, },
                    }
                );
                const arr = data.map(element => {
                    const name = element.targetPersonDto.name;
                    const age = element.targetPersonDto.age;
                    const city = element.targetPersonDto.location;
                    const details = element.targetPersonDto.description;
                    const image = element.imageDto.base64String;

                    return { name, age, city, details, image };
                });
                // console.log("Filtered Data ", arr);
                setPersonPosts(arr);
                setLoading(false);
            } catch (err) {
                if (err) console.log(err.response.data);
            }
        };
        getPersonPostData();
    }, [url]);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = PersonPosts.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(PersonPosts.length / recordsPerPage);
    return (
        <React.Fragment>
            <div className="container text-center bg-list">
                <div className="row min-vh-100">
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

export default PersonList;
