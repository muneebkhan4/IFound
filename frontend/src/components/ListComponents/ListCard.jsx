import React, { useState, useEffect } from "react";
import PersonPost from "../DesignComponents/PersonPost";

import './ListCard.css';

const ListCard = ({PersonPosts}) => {
  console.log(PersonPosts);
  return (
    <React.Fragment>     
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
                  {post.confidence && <div>Matched Confidence {post.confidence} </div>}
                  <PersonPost image={post.image} data={post} />
                </div>
              ))}
          </div>
        </div>
    </React.Fragment>
  );
};

export default ListCard;