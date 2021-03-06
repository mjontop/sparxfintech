import React from "react";
import {useHistory} from 'react-router-dom'
import "../styles.css";
import { login, isAutheticated } from "./helper";

export default function Login() {
  let history = useHistory()
  if (isAutheticated())  history.push('/dashboard')
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    error: "",
  });
  const handleChange = (name) => (event) => {
    event.preventDefault();
    setUser({ ...user, [name]: event.target.value });
  };

  const handleLogin = async ()=>{
    const {success} = await login(user)
    if(success){
      history.push('/dashboard')
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-4 ">
          <div className="container my-4 d-none d-md-block">
            <div
              className="bg-primary rounded10 p-2 text-center text-white "
              style={{
                margin: "15%",
                marginLeft: "40%",
                marginRight: "40%",
                height: "80vh",
              }}
            >
              <img
                src="http://myvds.in/design/assets/images/v1126_50.png"
                className="img-fluid"
              />
              <div style={{ height: "53vh" }}></div>
              <i className="fa fa-home " style={{ fontSize: "4vmin" }}></i>
              <br />
              <br />
              <i className="fa fa-sign-out" style={{ fontSize: "4vmin" }}></i>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-12" style={{ marginTop: "10vh" }}>
          <div className="container ">
            <div
              className="bg-grey  rounded10  text-center text-white  py-5"
              style={{
                maxWidth: "500px",
              }}
            >
              <div
                className="bg-primary rounded10 mx-auto text-center text-white  py-5"
                style={{
                  maxWidth: "397px",
                  marginTop: "-100px",
                }}
              >
                <b style={{ fontSize: "8vmin" }}>Login</b>
              </div>
              <div className="text-muted text-left p-5">
                <form>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                      <b> Email</b>
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control ml-3 rounded"
                        placeholder="email"
                        onChange={handleChange("email")}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                      <b> Password</b>
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="password"
                        className="form-control ml-3 rounded"
                        placeholder="password"
                        onChange={handleChange("password")}
                      />
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <button
                      className="btn buttonBlue text-white py-2 px-5 rounded10"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogin()
                      }}
                    >
                      <b>Login</b>
                    </button>

                    <h3>{user.error}</h3>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
