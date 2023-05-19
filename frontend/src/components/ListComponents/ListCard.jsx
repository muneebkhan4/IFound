import React from "react";
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
                  <PersonPost image={post.image} data={post} confidence={post.confidence}/>
                </div>
              ))}
          </div>
        </div>
    </React.Fragment>
  );
};

export default ListCard;