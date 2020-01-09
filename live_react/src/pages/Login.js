import React from "react";
import { Redirect } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

const Login = props => {
  const isLogin = props.isLogin;
  const email = props.email;
  const username = props.username;
  console.warn("isLogin", props.isLogin);
  if (false) {
    return <Redirect to={{ pathname: "/login" }} />;
  } else {
    return (
      <React.Fragment>
        <Header />
        <form className="profile-content">
          <h1
            style={{
              textalign: "center"
            }}
          >
            Profile
          </h1>
          <p>
            <label>Email:</label> {email}
          </p>
          <p>
            <label>Username:</label> {username}
          </p>
        </form>
      </React.Fragment>
    );
  }
};

export default connect("isLogin, email, name", actions)(withRouter(Login));