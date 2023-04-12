import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import NavBar from "../../../../sections/NavBar";
import AddTable from "./addTable";

export default function MatchCases({ postType }) {
  const [Loading, setLoading] = useState(false);
  const [ActiveCases, setActiveCases] = useState();
  const [SearchedPosts, setSearchedPosts] = useState();
  const [ActiveCaseIndex, setActiveCaseIndex] = useState();


  useEffect(() => {
    const getPersonPostData = async () => {
      // authentication token
      setSearchedPosts([]);
      setActiveCaseIndex(-1);
      const token = localStorage.getItem("x_auth_token");

      try {
        var { _id } = jwt_decode(token);
        console.log("_id: ", _id);
        const { data: currentUser } = await axios.get("http://www.localhost:1000/api/users/" + _id);
        if (currentUser && _id) {
          const { data } = await axios
            .get("https://localhost:44364/api/home/activeCases",
              {
                params: {
                  targetType: postType, id: currentUser["userID"]
                },
                headers: {
                  x_auth_token: token,
                },
              }
            );
          const arr = data.map(element => {
            const postId=element.postPersonId;
            const name = element.targetPersonDto.name;
            const age = element.targetPersonDto.age;
            const city = element.targetPersonDto.location;
            const details = element.targetPersonDto.description;
            const image = element.imageDto.base64String;
            const date = element.postDate;
            const gender = element.targetPersonDto.gender;
            const postType=element.targetPersonDto.targetId;
            return { postId,name, age, city, details, image, date, gender,postType };
          });
          console.log("Filtered Data ", arr);
          setActiveCases(arr);
        }
        else {

        }
      } catch (err) {
        if (err) console.log(err.response.data);
      }
    }
    getPersonPostData();
  }, [])

  const handleSearchPost = async () => {
    if (ActiveCaseIndex == -1)
      return;
    debugger;
    setLoading(true);
    console.log(Loading);

    const token = localStorage.getItem("x_auth_token");
    const formData = new FormData();
    formData.append("encoded", ActiveCases[ActiveCaseIndex].image);
    formData.append("targetType", postType);
    debugger;
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
      return { name, age, city, details, image, confidence };
    });
    setSearchedPosts(arr);
    setLoading(false);
  }

  const setCurrentActiveCase = (e) => {
    setActiveCaseIndex(e);
    // console.log("Current Slide is changed to: ", e);
  }

  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />
      <div style={{minHeight:"80vh"}}>
        <AddTable activeCases={ActiveCases}></AddTable>
      </div>
    </React.Fragment >
  );
}