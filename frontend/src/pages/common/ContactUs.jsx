import React, { useState, Component, createRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";

class Contactus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: { name: "", email: "", message: "" },
    };
  }
  handleChange = (e) => {
    const credentials = { ...this.state.credentials };
    credentials[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ credentials });
  };
  handleContactusSubmit = (e) => {
    e.preventDefault();
    console.log(
      `submitted \nName: ${this.state.credentials.name}\nemail: ${this.state.credentials.email}\nmessage: ${this.state.credentials.message}`
    );
  };
  render() {
    const { name } = this.state.credentials;
    const { email } = this.state.credentials;
    const { message } = this.state.credentials;
    return (
      <div className="Background">
        <div class="position-absolute top-50 start-50 translate-middle">
          <h1 className="App-header">Contact us</h1>
          <form onSubmit={this.handleContactusSubmit}>
            <Input
              autofocus={true}
              label="Name"
              type="text"
              placeholder="name"
              name="name"
              value={name}
              handleChange={this.handleChange}
            />
            <Input
              autofocus={false}
              label="Email"
              type="email"
              placeholder="email"
              name="email"
              value={email}
              handleChange={this.handleChange}
            />
            <Input
              autofocus={false}
              label="Message"
              type="text"
              placeholder="Message"
              name="message"
              value={message}
              handleChange={this.handleChange}
            />
            <button className="left-btn-contact btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contactus;
