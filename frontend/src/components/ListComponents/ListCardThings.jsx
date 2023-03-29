import React from "react";

import "./ListCard.css";
import ThingPost from "./../ThingPost";

const ListCard = ({ ThingPosts }) => {
  return (
    <React.Fragment>
      <div className="container text-center bg-list">
        {/* <h1 className="App-header">Person Cases</h1> */}
        {!ThingPosts && (
          <div className="spinner-grow fonts" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <div className="row">
          {ThingPosts &&
            ThingPosts.map((post) => (
              <div key={Math.floor(Math.random() * 10000 + 1)} className="col">
                <ThingPost data={post.data} image={post.image} />
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListCard;
