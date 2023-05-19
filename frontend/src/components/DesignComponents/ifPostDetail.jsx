import React from "react";
import { TargetType } from "../../Enums/Enums";

const IfPostDetail = ({postDetail }) => {
    
    const {postId,name,age,city,details,image,date,gender,targetType,founderName,phone,fatherName}=postDetail;

    return (
        <React.Fragment>
      <h1 className="fonts center">Person Post Details</h1>
      <div className="row" style={{ padding: "3rem" }}>
        <div className="col" style={{ padding: "1rem" }}>
          <img
            src={"data:image/jpg;base64," + image}
            className="figure-img img-fluid"
            alt="..."
            width="600"
            height="auto"
            style={{ borderRadius: "1rem" }}
          />
        </div>
        <div
          className="col bg-light"
          style={{ padding: "2rem", marginLeft: "5rem", borderRadius: "1rem" }}
        >
          <div className="row">
            <div className="col">
              <h3>Name:</h3>
            </div>
            <div className="col">
              <h3>{name}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Father's Name:</h3>
            </div>
            <div className="col">
              {fatherName && <h3>{fatherName}</h3>}
              {!fatherName && <h3>---</h3>}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Age:</h3>
            </div>
            <div className="col">
              <h3>{age} years</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>City:</h3>
            </div>
            <div className="col">
              <h3>{city}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Case Type:</h3>
            </div>
            <div className="col">
              <h3>{Object.keys(TargetType)[targetType - 1]?.toString()}</h3>

            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Uploaded By:</h3>
            </div>
            <div className="col">
              {founderName && <h3>{founderName}</h3>}
              {!founderName && <h3>---</h3>}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Contact No.:</h3>
            </div>
            <div className="col">
              {phone && <h3>{phone}</h3>}
              {!phone && <h3>---</h3>}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Details:</h3>
            </div>
            <div className="col">
              <p>{details}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
    );
};

export default IfPostDetail;
