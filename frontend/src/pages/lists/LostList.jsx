import React, { useState, useEffect } from "react";
import axios from "axios";
import { DatePicker } from "rsuite";
import PersonList from "./personList";
import ThingPost from "../../components/ThingPost";
import SearchEvent from "../../components/SearchEvent";

import NavBar from "../../sections/NavBar";
import "./LostList.css";

const LostList = () => {
  const [ThingPosts, setThingPosts] = useState();
  // To hold the actual data

  useEffect(() => {
    const getThingPostData = async () => {
      // authentication token
      const token = localStorage.getItem("x_auth_token");
      // Request made to the backend api
      // Send formData object
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_NODE_API}api/allMissingThingPosts`,
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
    };

    getThingPostData();
  }, []);

  const changeDateEvent = (data) => {
    console.log("Date has been changed: ", data);
  };

  const screenHeight = window.innerHeight;
  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />
      {localStorage.getItem("x_auth_token") && (
        <div style={{ minHeight: "80vh" }}>
          <h1 className="App-header">Lost List</h1>
          <div className="MainContent">
            <div className="FilterStyle">
              <SearchEvent></SearchEvent>
              <div>
                <label>From</label>
                <DatePicker onChange={changeDateEvent} format="yyyy-MM-dd" />
              </div>
              <div>
                <label>To</label>
                <DatePicker onChange={changeDateEvent} format="yyyy-MM-dd" />
              </div>
            </div>
            <PersonList
              url={`${process.env.REACT_APP_DOT_NET_API}api/home/getCurrentLostPosts`}
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
        </div>
      )}

      {!localStorage.getItem("x_auth_token") && (
        <div className="center" style={{ minHeight: screenHeight }}>
          <h3 className="fonts">Log In to see the Lost List</h3>
        </div>
      )}
    </React.Fragment>
  );
};

export default LostList;
