import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../../sections/NavBar";
import PersonPost from "../../../components/PersonPost";
import axios from "axios";

const ResolvedCases = () => {
  const location = useLocation();
  const [PersonPosts, setPersonPosts] = useState();

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
        setPersonPosts(data);
        //console.log(posts);
      } catch (err) {
        if (err) console.log(err.response.data);
      }
    };

    getData();
  }, []);

  if (PersonPosts) console.log(PersonPosts);
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
      <h1 className="App-header">Resolved Cases</h1>
    </React.Fragment>
  );
};

export default ResolvedCases;

// <div className="container text-center bg-list">
//   <div className="row">
//     {/* <div className="col">
//       {posts && <PersonPost name={posts[0].name} />}
//     </div> */}

//     <div className="col">
//       <img
//         src={location.state.posted}
//         style={{
//           width: "25rem",
//           height: "25rem",
//           marginLeft: "2rem",
//           marginTop: "1rem",
//           marginBottom: "1rem",
//         }}
//       ></img>
//     </div>
//     <div className="col" style={{ marginTop: "12rem" }}>
//       <h1 className="fonts"> Matched with</h1>
//     </div>
//     <div className="col">
//       <img
//         src={`data:image/png;base64,${location.state.matched}`}
//         style={{
//           width: "25rem",
//           height: "25rem",
//           marginRight: "2rem",
//           marginTop: "1rem",
//           marginBottom: "1rem",
//         }}
//       ></img>
//     </div>
//   </div>
// </div>
