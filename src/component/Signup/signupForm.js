import React,{useEffect,useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

function Signupform(props) {
    const history = useHistory();
    const initialValue = {
        name: "",
        username: "",
        email: "",
        mobile_number: "",
        password: "",
        confirm_password: "",
      };
      const [formData, setFormData] = useState(initialValue);
      const [isvalidName, setIsvalidName] = useState(true);
      const [isvalidUsername, setIsvalidUsername] = useState(true);
      const [usernameError, setUsernameError] = useState(null);
      const [isvalidEmail, setIsvalidEmail] = useState(true);
      const [nameError, setNameError] = useState(null);
      const [emailError, setEmailError] = useState(null);
      const [isValidMobile, setIsvalidMobile] = useState(true);
      const [mobileError, setMobileError] = useState(null);
      const [isvalidPassword, setIsvalidPassword] = useState(true);
      const [passwordError, setPasswordError] = useState(null);
      const [isvalidConfirmPassword, setIsvalidConfirmPassword] = useState(true);
      const [confirmPasswordError, setConfirmPasswordError] = useState(null);
      const [error, setError] = useState(null);
    
      const { name, username, email, mobile_number, password, confirm_password } =
        formData;

        const handleOnChange = (e) => {
            const { name, value } = e.target;
        
            setFormData({
              ...formData,
              [name]: value,
            });
        
            console.log(e.target.value);
          };
        
          useEffect(() => {
            if (!/^[a-zA-Z ]+$/.test(name) && name != "") {
              setNameError("name is invalid !");
              setIsvalidName(false);
            } else if (
              !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
              email != ""
            ) {
              setEmailError("email is invalid !");
              setIsvalidEmail(false);
            } else if (!/^[a-zA-Z0-9]+$/.test(username) && username != "") {
              setIsvalidUsername(false);
              setUsernameError("special characters not allowed !");
            } else if (username.length > 6 && username != "") {
              setIsvalidUsername(false);
              setUsernameError("username should not exceed more than 6 characters !");
            } else if (name.length < 6 && name != "") {
              setNameError("name must be atleast 6 characters long !");
              setIsvalidName(false);
            } else if (!/^[0-9\b]+$/.test(mobile_number) && mobile_number != "") {
              setIsvalidMobile(false);
              setMobileError("mobile number should only contain numbers !");
            } else if (mobile_number.length < 10 && mobile_number != "") {
              setIsvalidMobile(false);
              setMobileError("mobile number length should be 10 !");
            } else if (password.length < 6 && password != "") {
              setIsvalidPassword(false);
              setPasswordError("password must be atleast 6 characters long !");
            } else if (
              confirm_password !== password &&
              confirm_password != "" &&
              password != ""
            ) {
              setIsvalidConfirmPassword(false);
              setConfirmPasswordError("password mismatch !");
            } else {
              setIsvalidName(true);
              setIsvalidUsername(true);
              setIsvalidEmail(true);
              setIsvalidMobile(true);
              setIsvalidPassword(true);
              setIsvalidConfirmPassword(true);
            }
          }, [handleOnChange]);

          const register = (e) => {
            e.preventDefault();
            axios
              .post("http://localhost:5000/api/auth/register", {
                email,
                password,
                mobile_number,
                name,
                username,
              })
              .then((response) => {
                console.log("register response", response);
                localStorage.setItem(
                  "login",
                  JSON.stringify({
                    userLogin: true,
                    token: response.data.access_token,
                  })
                );
                setError("");
                history.push("/dashboard");
              })
              .catch((error) => {
                setError(`${error.response.data.message} !`.toUpperCase());
              });
          };
        
        
    
  return (
    <>
      <div class="signup-form">
        <form onSubmit={register}>
          <h1>Register</h1>
          <p>Please fill in this form to create an account!</p>
          <hr />
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-user"></i>
              </span>
              <input
                type="text"
                autoComplete="off"
                class="form-control"
                name="name"
                placeholder="name"
                required="required"
                value={name}
                onChange={handleOnChange}

              />
            </div>
            {isvalidName === false && <p className="error">{nameError}</p>}

          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-user"></i>
              </span>
              <input
                type="text"
                autoComplete="off"
                class="form-control"
                name="username"
                placeholder="username"
                required="required"
                value={username}
                onChange={handleOnChange}

              />
            </div>
            {isvalidUsername === false && (
              <p className="error">{usernameError}</p>
            )}

          </div>

          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-paper-plane"></i>
              </span>
              <input
                type="email"
                autoComplete="off"
                class="form-control"
                name="email"
                placeholder="Email Address"
                required="required"
                value={email}
                onChange={handleOnChange}

              />
            </div>
            {isvalidEmail === false && <p className="error">{emailError}</p>}

          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-mobile"></i>
              </span>
              <input
                type="mobile"
                autoComplete="off"
                class="form-control"
                name="mobile_number"
                placeholder="Mobile Number"
                required="required"
                value={mobile_number}
                onChange={handleOnChange}

              />
            </div>
            {isValidMobile === false && <p className="error">{mobileError}</p>}

          </div>

          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-lock"></i>
              </span>
              <input
                type="text"
                autoComplete="off"
                class="form-control"
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
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-lock"></i>
                <i class="fa fa-check"></i>
              </span>
              <input
                type="text"
                autoComplete="off"
                class="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
                required="required"
                value={confirm_password}
                onChange={handleOnChange}

              />
            </div>
            {isvalidConfirmPassword === false && (
              <p className="error">{confirmPasswordError}</p>
            )}

          </div>
          <div class="form-group">
            <h3>Add image</h3>

            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-id-badge"></i>
              </span>
              <input
                type="file"
                accept="image/*"
                class="form-control"
                name="image"
                placeholder="upload image"
                required="required"
                multiple={false}
                style={{ border: "none" }}
                required={false}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="checkbox-inline">
              <input type="checkbox" required="required" /> I accept the{" "}
              <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
            </label>
          </div>
          <div
            class="form-group"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            {isvalidName === true &&
            isvalidEmail === true &&
            isValidMobile === true &&
            isvalidPassword === true &&
            isvalidConfirmPassword === true &&
            name != "" &&
            email != "" &&
            mobile_number != "" &&
            password != "" &&
            confirm_password != "" ? (
              <button type="submit" class="btn btn-danger btn-lg my-btn">
                Register
              </button>
            ) : (
              <button type="submit" class="btn btn-danger btn-lg my-btn" disabled>
                Register
              </button>
            )}
          </div>
          <p className="text-center">Already have an account?</p>
          <p className="text-center">
            <a
              className="text-primary h3"
              style={{cursor:"pointer"}}
              onClick={() => history.push("/login")}
            >
              Sign In
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signupform;
