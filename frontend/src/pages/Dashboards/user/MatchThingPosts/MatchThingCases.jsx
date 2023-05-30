import React, { useEffect, useState } from "react";
import axios from "axios";
import ThingsCarousel from "../../../../components/ThingsCarousel";
import ListCardThings from "../../../../components/ListComponents/ListCardThings";
import { Button } from "rsuite";
import jwt_decode from "jwt-decode";
import Badge from "react-bootstrap/Badge";
import NavBar from "../../../../sections/NavBar";
import Spinner from "react-bootstrap/esm/Spinner";
import { TargetType } from "../../../../Enums/Enums";

export default function MatchThingCases({ postType }) {
  const [Loading, setLoading] = useState(false);
  const [ActiveCases, setActiveCases] = useState();
  const [SearchedPosts, setSearchedPosts] = useState();
  const [ActiveCaseIndex, setActiveCaseIndex] = useState();

  const screenHeight = window.innerHeight;
  // Set the height of the current screen height

  const token = localStorage.getItem("x_auth_token");
  useEffect(() => {
    const getThingPostData = async () => {
      setLoading(true);

      var api = "";
      if (postType === TargetType.FOUND)
        api = "http://localhost:1000/api/allFoundThingPosts";
      else api = "http://localhost:1000/api/allMissingThingPosts";

      // authentication token
      const token = localStorage.getItem("x_auth_token");
      // Request made to the backend api
      // Send formData object
      if (token) {
        try {
          const { data } = await axios.get(api, {
            headers: {
              x_auth_token: token,
            },
          });

          const arr = data.map((element) => {
            const name = element.data.name;
            const category = element.data.category;
            const color = element.data.color;
            const city = element.data.city;
            const image = element.image;
            const date = element.data.date;
            const details = element.data.details;
            const phone = element.data.phone;
            const postType = element.data.postType;
            return {
              name,
              category,
              color,
              city,
              image,
              date,
              details,
              phone,
              postType,
            };
          });
          setActiveCases(arr);
        } catch (err) {
          if (err) console.log(err.response.data);
        }
      }
      setLoading(false);
    };

    getThingPostData();
  }, [token]);

  const handleSearchPost = async () => {
    if (ActiveCaseIndex === -1) return;
    //debugger;
    setLoading(true);
    // console.log(Loading);

    // console.log("hitiih: ", ActiveCases[ActiveCaseIndex]);
    const { data } = await axios.get(
      "http://localhost:1000/api/getMatchedThingPosts",
      {
        headers: {
          x_auth_token: token,
        },
        params: {
          post: ActiveCases[ActiveCaseIndex],
        },
      }
    );
    let arr = []; // for data, image object creation
    for (let i = 0; i < data[0].length; i++) {
      arr.push({ data: data[0][i], image: data[1][i] });
    }
    // console.log(arr);
    setSearchedPosts(arr);
    //console.log(data[0]);  // data[0]-> post details, data[1]-> corresponding image
    setLoading(false);
  };

  const setCurrentActiveCase = (e) => {
    setActiveCaseIndex(e);
  };

  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />
      <div>
        <h3 style={{ backgroundColor: "currentColor" }}>
          <Badge bg="secondary">My Active Cases</Badge>
        </h3>
        <div style={{ backgroundColor: "currentColor" }}>
          <ThingsCarousel
            activePosts={ActiveCases}
            setCurrentActiveCase={setCurrentActiveCase}
          />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              className="btn btn-primary m-4"
              color="blue"
              appearance="primary"
              onClick={handleSearchPost}
            >
              Match
            </Button>
          </div>
        </div>
        {Loading ? (
          <section
            style={{
              display: "flex",
              backgroundColor: "white",
              minHeight: "60vh",
            }}
          >
            {
              <div className="d-flex  m-auto flex-column align-items-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                <h1>Matching</h1>
              </div>
            }
          </section>
        ) : (
          <section
            id="listPerson"
            className="d-flex mt-1"
            style={{ backgroundColor: "white", minHeight: "60vh" }}
          >
            {SearchedPosts && <ListCardThings ThingPosts={SearchedPosts} />}
            {!SearchedPosts && (
              <h3 style={{ margin: "auto" }}>No Match Found</h3>
            )}
          </section>
        )}
      </div>
    </React.Fragment>
  );
}
