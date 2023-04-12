// import React, { useState } from 'react';
import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default class DropDown extends Component {

  change = (eventkey) => {
    const {dropDownChange}=this.props;
    dropDownChange(eventkey);    
  };

  render() {
    const {label}=this.props;
    const {list}=this.props;
    return (
      <div>
        <Dropdown onSelect={this.change}>
          <Dropdown.Toggle id="dropdown-basic">
            {label}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {list.map((l, i) => {
              return (<Dropdown.Item key={i} eventKey={l}>{l}</Dropdown.Item>)
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
