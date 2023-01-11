import React, { useState, useEffect } from "react";
import NavBar from "../../../sections/NavBar";
import PersonPost from "../../../components/PersonPost";
import axios from "axios";

const UnResolvedCases = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const getData = async () => {
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
        //console.log(data[0]);
        setPosts(data);
        //console.log(posts);
      } catch (err) {
        if (err) console.log(err.response.data);
      }
    };

    getData();
  }, []);

  if (posts) console.log(posts[0]);

  const Users = [
    {
      name: "Deepak",
      rollNo: "123",
    },
    {
      name: "Yash",
      rollNo: "124",
    },
    {
      name: "Raj",
      rollNo: "125",
    },
    {
      name: "Rohan",
      rollNo: "126",
    },
    {
      name: "Puneet",
      rollNo: "127",
    },
    {
      name: "Vivek",
      rollNo: "128",
    },
    {
      name: "Aman",
      rollNo: "129",
    },
  ];

  {
    /* {Users.map((x) => (
        <h1 className="center fonts" key={x.rollNo}>
          Name: {x.name} RollNo. {x.rollNo}
        </h1>
      ))} */
  }
  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />
      <h1 className="App-header">UnResolved Cases</h1>
      <div className="container text-center bg-list">
        <div className="row">
          <div className="col">
            {posts && <PersonPost name={posts[0].name} />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UnResolvedCases;
