import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../sections/NavBar";
import IfPostDetail from "../../components/DesignComponents/ifPostDetail";

function PersonDetail() {
  const { id } = useParams();
  const [data, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const token = localStorage.getItem("x_auth_token");
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_DOT_NET_API}api/Home/GetPostPerson`,
          {
            params: {
              id: id
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

        setPost(newObj);
      } catch (err) {
        if (err) console.log(err.response.data);
      }
    };

    getPost();
  }, []);

  console.log("data.targetType", data.targetType);
  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />
      <IfPostDetail postDetail={data}></IfPostDetail>
    </React.Fragment>
  );
}

export default PersonDetail;
