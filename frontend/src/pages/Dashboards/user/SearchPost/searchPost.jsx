import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import NavBar from "../../../../sections/NavBar";
import IfPostDetail from "../../../../components/DesignComponents/ifPostDetail";
import ListCard from "../../../../components/ListComponents/ListCard";
import { Button } from "rsuite";
import Spinner from "react-bootstrap/esm/Spinner";


const SearchPost = () => {

    const { id, postType } = useParams();
    const [post, setPost] = useState({});

    const [Loading, setLoading] = useState(false);
    const [ActiveCases, setActiveCases] = useState();
    const [SearchedPosts, setSearchedPosts] = useState();
    const [ActiveCaseIndex, setActiveCaseIndex] = useState();

    useEffect(() => {

        const getPost = async () => {
            const token = localStorage.getItem("x_auth_token");

            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_DOT_NET_API}api/Home/GetCurrentPostPerson`,
                    {
                        params: {
                            postId: id,
                            postType: postType
                        },
                        headers: {
                            x_auth_token: token,
                        },
                    }
                );

                const newObj = {
                    "postId": data.postPersonId,
                    "name": data.targetPersonDto.name,
                    "age": data.targetPersonDto.age,
                    "city": data.targetPersonDto.location,
                    "details": data.targetPersonDto.description,
                    "image": data.imageDto.base64String,
                    "date": data.postDate,
                    "gender": data.targetPersonDto.gender,
                    "targetType": data.targetPersonDto.targetId,
                    "phone": data.phone
                }
                debugger;
                console.log(newObj);
                setPost(newObj);
            } catch (err) {
                if (err) console.log(err.response.data);
            }
        };

        getPost();
    }, []);


    const handleSearchPost = async () => {
        if (ActiveCaseIndex == -1)
            return;
        debugger;
        setLoading(true);
        console.log(Loading);

        const token = localStorage.getItem("x_auth_token");
        const formData = new FormData();
        debugger;
        formData.append("encoded", post.image);
        formData.append("targetType", postType);
        const { data } = await axios
            .post("https://localhost:44364/api/home/searchLostPerson", formData,
                {
                    headers: {
                        x_auth_token: token,
                    },
                }
            );
        // console.log("Searched Entries: ", data);
        const arr = data.map(element => {
            const name = element.targetPersonDto.name;
            const age = element.targetPersonDto.age;
            const city = element.targetPersonDto.location;
            const details = element.targetPersonDto.description;
            const image = element.imageDto.base64String;
            const confidence = element.confidence;
            const phone=element.phone;
            return { phone,name, age, city, details, image, confidence };
        });
        setSearchedPosts(arr);
        setLoading(false);
    }

    return (
        <React.Fragment>
            <NavBar currentUser={localStorage.getItem("email")} />
            <IfPostDetail postDetail={post}></IfPostDetail>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                    className="btn btn-primary m-4 "
                    color="blue"
                    appearance="primary"
                    onClick={handleSearchPost}
                >
                    Match
                </Button>
            </div>
            {
                Loading ?
                    (< section style={{ display: "flex", backgroundColor: "white", minHeight: "60vh" }}>
                        {
                            <div className="d-flex  m-auto flex-column align-items-center">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                                <h1>Matching</h1>
                            </div>
                        }
                    </section>
                    ) :
                    (< section id="listPerson" className="d-flex mt-1" style={{ backgroundColor: "white", minHeight: "60vh" }}>
                        {
                            SearchedPosts?.length > 0 ? <ListCard PersonPosts={SearchedPosts} /> : <h3 style={{ margin: "auto" }}>No Match Found</h3>
                        }
                    </section>)
            }
        </React.Fragment>
    );
};

export default SearchPost;
