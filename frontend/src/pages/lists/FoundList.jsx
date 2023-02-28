import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonPost from "../../components/PersonPost";
import ThingPost from "../../components/ThingPost";
import NavBar from "../../sections/NavBar";

const FoundList = () => {
  const [PersonPosts, setPersonPosts] = useState();
  const [ThingPosts, setThingPosts] = useState();

  const screenHeight = window.innerHeight;
  // Set the height of the current screen height

  useEffect(() => {
    const getPersonPostData = async () => {
      // authentication token
      const token = localStorage.getItem("x_auth_token");
      // Request made to the backend api
      // Send formData object

      if (token) {
        try {
          const { data } = await axios.get(
            "https://localhost:44364/api/home/getCurrentFoundPosts",
            {
              headers: {
                x_auth_token: token,
              },
            }
          );
          const arr = data.map((element) => {
            const name = element.targetPersonDto.name;
            const age = element.targetPersonDto.age;
            const city = element.targetPersonDto.location;
            const details = element.targetPersonDto.description;
            const image = element.imageDto.base64String;

            return { name, age, city, details, image };
          });
          console.log("Filtered Data ", arr);
          console.log(arr);
          setPersonPosts(arr);
        } catch (err) {
          if (err) console.log(err.response.data);
        }
      }
    };

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

    getPersonPostData();
    getThingPostData();
  }, []);

  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />
      {localStorage.getItem("x_auth_token") && (
        <div style={{ minHeight: screenHeight }}>
          <h1 className="App-header">Found List</h1>
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
                  <div
                    key={Math.floor(Math.random() * 10000 + 1)}
                    className="col"
                  >
                    <PersonPost image={post.image} data={post} />
                  </div>
                ))}
            </div>
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
          <h3 className="fonts">Log In to see the Found List</h3>
        </div>
      )}
    </React.Fragment>
  );
};

export default FoundList;
