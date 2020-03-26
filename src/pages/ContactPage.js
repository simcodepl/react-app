import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class ContactPage extends Component {
  state = {
    value: ""
  };
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  render() {
    return (
      <>
        <h1>Contact Page</h1>
        <form action="">
          <p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={this.state.value}
              onChange={this.handleChange}
            ></textarea>
          </p>
          <p>
            <input type="submit" value="Wyslij" />
          </p>
        </form>
        <Prompt
          when={this.state.value !== ""}
          message="Masz niewypełniony formularz"
        />
      </>
    );
  }
}

export default ContactPage;
