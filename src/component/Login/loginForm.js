import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Loginform(props) {
  const initialValue = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const [isvalidEmail, setIsvalidEmail] = useState(true);
  const [isvalidPassword, setIsvalidPassword] = useState(true);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [error, setError] = useState(null);
  let { email, password } = formData;

  const history = useHistory();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(e.target.value);
  };
  useEffect(() => {
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      email != ""
    ) {
      setIsvalidEmail(false);
      setEmailError("invalid email !");
    } else if (password.length < 6 && password != "") {
      setIsvalidPassword(false);
      setPasswordError("password must be atleast 6 characters long !");
    } else {
      setIsvalidEmail(true);
      setIsvalidPassword(true);
    }
  }, [handleOnChange]);

  return (
    <>
      <div className="signup-form">
        <form>
        {error && <p className="error">{error}</p>}

          <h1 className="text-center">Sign in to goodreads</h1>
          <hr />
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-user"></i>
              </span>
              <input
                type="email"
                autoComplete="off"
                className="form-control"
                name="email"
                placeholder="email"
                required="required"
                value={email}
                onChange={handleOnChange}
              />
            </div>
            {isvalidEmail === false && <p className="error">{emailError}</p>}
          </div>

          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock"></i>
              </span>
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
                value={password}
                onChange={handleOnChange}
              />
            </div>
            {isvalidPassword === false && (
              <p className="error">{passwordError}</p>
            )}
          </div>

          <div
            className="form-group"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {email != "" &&
            password != "" &&
            isvalidEmail === true &&
            isvalidPassword === true ? (
              <button type="submit" class="btn btn-danger btn-lg my-btn">
                Sign in
              </button>
            ) : (
              <button
                type="submit"
                class="btn btn-danger btn-lg my-btn"
                disabled
              >
                Sign in
              </button>
            )}
          </div>
          <p className="text-center">don't have an account?</p>
          <p className="text-center">
            <a
              className="text-primary h3"
              onClick={() => history.push("/signup")}
            >
              sign up
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Loginform;
