import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from "../../../../sections/NavBar";
import AddTable from "./addTable";
import ShowToast from "../../../../components/PopUps/showToast";
import { Button } from "rsuite";
import { DeleteActivePost, UpdatePostStatus } from "../../../../services/ActiveCasesService";
import Footer from "../../../../sections/Footer";
import { PostStatus } from "../../../../Enums/Enums";

export default function MatchCases({ postType, toast }) {
  const [ActiveCases, setActiveCases] = useState();
  const [activeButton, setActiveButton] = useState(1);

  const navigate = useNavigate();
  const { postStatus } = useParams();

  useEffect(() => {
    const getPersonPostData = async () => {

      const token = localStorage.getItem("x_auth_token");

      try {
        var { _id } = jwt_decode(token);
        console.log("_id: ", _id);
        const { data: currentUser } = await axios.get(`${process.env.REACT_APP_NODE_API}api/users/${_id}`);
        if (currentUser && _id) {
          const { data } = await axios
            .get(`${process.env.REACT_APP_DOT_NET_API}api/home/activeCases/${postStatus}`,
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
            const postId = element.postPersonId;
            const name = element.targetPersonDto.name;
            const age = element.targetPersonDto.age;
            const city = element.targetPersonDto.location;
            const details = element.targetPersonDto.description;
            const image = element.imageDto.base64String;
            const date = element.postDate;
            const gender = element.targetPersonDto.gender;
            const postType = element.targetPersonDto.targetId;
            return { postId, name, age, city, details, image, date, gender, postType };
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
  }, [postType, postStatus])



  const handleButtonGroupClick = (value) => {
    setActiveButton(value);
    if(value==1)
      navigate(`/lostMatchCases/${PostStatus.Unresolved}`);
    else if(value==2)
    navigate(`/lostMatchCases/${PostStatus.Resolved}`);


  };

  const handleDeleteActivePost = (postId) => {
    // Handle option change event
    DeleteActivePost(postId).then(_response => {
      // console.log(':', response.data);
      const newActiveCases = ActiveCases.filter(post => post.postId !== postId);
      setActiveCases(newActiveCases);
      toast.setToastMessage({ headerText: "Active Case", bodyText: "DELETE request successful" });
      toast.setShow(true);
    }).catch(error => {
      console.error('DELETE request failed:', error);
      toast.setToastMessage({ headerText: "Active Case", bodyText: "DELETE request failed" });
      toast.setShow(true);
    });
  }

  const handleMarkAsResolve = (postId, status) => {
    debugger;
    UpdatePostStatus(postId, status).then(_response => {
      const newActiveCases = ActiveCases.filter(post => post.postId !== postId);
      setActiveCases(newActiveCases);      
      toast.setToastMessage({ headerText: "Active Case", bodyText: `Post ${status==1?"Resolved":"" || status==3?"UnResolved":""} Successfully` });
      toast.setShow(true);
    }).catch(err => {
      toast.setToastMessage({ headerText: "Active Case", bodyText: "DELETE request failed\n" + err.message });
      toast.setShow(true);
    });
  }

  const onPostManageClick = (data) => {
    debugger;
    console.log("event: ", data);
    navigate(`/searchPost/${data.postId}/${data.postType}`);
  }

  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />
      <div style={{ minHeight: "80vh" }}>
        <AddTable activeCases={ActiveCases}
          setActiveCases={setActiveCases}
          toast={toast}
          handleDeleteActivePost={handleDeleteActivePost}
          onPostManageClick={onPostManageClick}
          handleMarkAsResolve={handleMarkAsResolve}
          activeButton={activeButton}
          handleButtonClick={handleButtonGroupClick}
        />
        {/* <Button onClick={() => setShow(true)} >Hit Toast</Button> */}

      </div>
      <Footer />
    </React.Fragment >
  );
}