import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

export const Register = () => {
  const firstname = useRef();
  const lastname = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleClick = async (e) => {
    e.preventDefault();

    const user = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      phone: phone.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    console.log(user);
    try {
      await axios.post("http://localhost:8800/api/auth/register", user);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div id="register-form" class="register-page">
        <div class="form-box1">
          <div class="form1">
            <form class="register-form" onSubmit={handleClick}>
              <center>
                <h1 class="main-heading">Sign Up</h1>
              </center>
              <input
                type="text"
                name="fuser"
                placeholder="first name"
                ref={firstname}
              />
              <input
                type="text"
                name="luser"
                placeholder="last name"
                ref={lastname}
              />
              <input
                type="text"
                name="tpnum"
                placeholder="telephone number"
                ref={phone}
              />
              <input
                type="email"
                name="email"
                placeholder="e-mail"
                ref={email}
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                ref={password}
              />
              <input
                type="file"
                src=""
                alt="Submit"
                width="48"
                height="48"
              ></input>
              <button>Sign UP</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
