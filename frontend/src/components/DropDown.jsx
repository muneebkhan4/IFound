// import React, { useState } from 'react';
import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  change = eventkey => {
    // a.persist();
    alert(`you chosen: ${eventkey}`);
  };

  render() {
    return (
      <div>
        <Dropdown onSelect={this.change}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="baudratestate1200">1200</Dropdown.Item>
            <Dropdown.Item eventKey="baudratestate2400">2400</Dropdown.Item>
            <Dropdown.Item eventKey="baudratestate4800">4800</Dropdown.Item>
            <Dropdown.Item eventKey="baudratestate9600">9600</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
