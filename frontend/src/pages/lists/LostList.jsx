import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonPost from "../../components/PersonPost";
import ThingPost from "../../components/ThingPost";
import SearchEvent from "../../components/SearchEvent";
import { DatePicker } from "rsuite";
import './LostList.css';

const LostList = () => {
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
          "https://localhost:44364/api/home/getCurrentLostPosts",
          {
            headers: {
              x_auth_token: token,
            },
          }
        );
        console.log(".Net Server ", data);

        const arr = data.map(element => {
          const name = element.targetPersonDto.name;
          const age = element.targetPersonDto.age;
          const city = element.targetPersonDto.location;
          const details = element.targetPersonDto.description;
          const image = element.imageDto.base64String;

          return { name, age, city, details, image };
        });
        console.log("Filtered Data ", arr);
        setPersonPosts(arr);
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
          "http://localhost:1000/api/allMissingThingPosts",
          {
            headers: {
              x_auth_token: token,
            },
          }
        );
        console.log(data);
        setThingPosts([]);
      } catch (err) {
        if (err) console.log(err.response.data);
      }
    };



    getPersonPostData();
    getThingPostData();
  }, []);

  const changeDateEvent = (data) => {
    console.log("Date has been changed: ", data);
  }

  console.log("NodeServer:", PersonPosts);

  return (
    <React.Fragment>
      {/* <h1 className="App-header">Lost List</h1> */}
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
        <div className="container text-center bg-list">
          {/* <h1 className="App-header">Person Cases</h1> */}
          {!PersonPosts && (
            <div className="spinner-grow fonts" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          <div className="row">
            {PersonPosts &&
              PersonPosts.map((post) => (
                <div key={Math.floor(Math.random() * 10000 + 1)} className="col">
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
                <div key={Math.floor(Math.random() * 10000 + 1)} className="col">
                  <ThingPost image={post.image} data={post.data} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LostList;
