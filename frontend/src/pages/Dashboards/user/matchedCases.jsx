import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonPost from "../../../components/PersonPost";
import ThingPost from "../../../components/ThingPost";
import NavBar from "../../.././sections/NavBar";

const UnResolvedCases = () => {
  const [PersonPosts, setPersonPosts] = useState();
  const [ThingPosts, setThingPosts] = useState();

  useEffect(() => {
    const getPersonPostData = async () => {
      // authentication token
      const token = localStorage.getItem("x_auth_token");
      // Request made to the backend api
      // Send formData object
      try {
        const { data } = await axios.get(
          "http://localhost:1000/api/getPersonPosts",
          {
            headers: {
              x_auth_token: token,
            },
          }
        );
        setPersonPosts(data);
      } catch (err) {
        if (err) console.log(err.response.data);
      }
    };

    const getThingPostData = async () => {
      // authentication token
      const token = localStorage.getItem("x_auth_token");
      // Request made to the backend api
      // Send formData object
      try {
        const { data } = await axios.get(
          "http://localhost:1000/api/getMatchedThingPosts",
          {
            headers: {
              x_auth_token: token,
              answer: 42,
            },
          }
        );
        setThingPosts(data);
      } catch (err) {
        if (err) console.log(err.response.data);
      }
    };

    getPersonPostData();
    getThingPostData();
  }, []);

  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />

      <h1 className="App-header">Matched Cases</h1>

      <div className="container text-center bg-list">
        <h1 className="App-header">Person Cases</h1>
        {!PersonPosts && (
          <div className="spinner-grow fonts" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <div className="row">
          {PersonPosts &&
            PersonPosts.map((post) => (
              <div key={Math.floor(Math.random() * 10000 + 1)} className="col">
                <PersonPost
                  name={post.data.name}
                  age={post.data.age}
                  city={post.data.city}
                  image={post.image}
                  data={post.data}
                />
              </div>
            ))}
        </div>

        <h1 className="App-header">Things Cases</h1>
        {!ThingPosts && (
          <div className="spinner-grow fonts" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {ThingPosts && (
          <ThingPost
            name={ThingPosts[0].data.name}
            age={ThingPosts[0].data.city}
            city={ThingPosts[0].data.color}
            image={ThingPosts[0].image}
            data={ThingPosts[0].data}
          />
        )}
        <div className="row">
          {ThingPosts &&
            ThingPosts.map((post) => (
              <div key={Math.floor(Math.random() * 10000 + 1)} className="col">
                <ThingPost
                  name={post.data.name}
                  age={post.data.city}
                  city={post.data.color}
                  image={post.image}
                  data={post.data}
                />
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default UnResolvedCases;
