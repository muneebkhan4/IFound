import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonPost from "../../components/PersonPost";
import ThingPost from "../../components/ThingPost";
import NavBar from "../../sections/NavBar";
import PersonList from "./personList";

const FoundList = () => {
  const [PersonPosts, setPersonPosts] = useState();
  const [ThingPosts, setThingPosts] = useState();

  const screenHeight = window.innerHeight;
  // Set the height of the current screen height

  useEffect(() => {

    const getThingPostData = async () => {
      // authentication token
      const token = localStorage.getItem("x_auth_token");
      // Request made to the backend api
      // Send formData object
      if (token) {
        try {
          const { data } = await axios.get(
            "http://localhost:1000/api/allFoundThingPosts",
            {
              headers: {
                x_auth_token: token,
              },
            }
          );
          setThingPosts(data);
        } catch (err) {
          if (err) console.log(err.response.data);
        }
      }
    };

    getThingPostData();
  }, []);

  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />
      {localStorage.getItem("x_auth_token") && (
        <div style={{ minHeight: "80vh" }}>
          <h1 className="App-header">Found List</h1>
          <PersonList
            url={`${process.env.REACT_APP_DOT_NET_API}api/home/getCurrentFoundPosts`}
            recordsPerPage={2}
          />
          <h1 className="App-header">Things Cases</h1>
          {!ThingPosts && (
            <div className="spinner-grow fonts" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          <div className="row">
            {ThingPosts &&
              ThingPosts.map((post) => (
                <div
                  key={Math.floor(Math.random() * 10000 + 1)}
                  className="col"
                >
                  <ThingPost image={post.image} data={post.data} />
                </div>
              ))}
          </div>
        </div>
      )
      }
      {
        !localStorage.getItem("x_auth_token") && (
          <div className="center" style={{ minHeight: screenHeight }}>
            <h3 className="fonts">Log In to see the Found List</h3>
          </div>
        )
      }
    </React.Fragment >
  );
};

export default FoundList;
