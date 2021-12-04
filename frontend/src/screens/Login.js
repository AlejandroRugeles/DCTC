// import "../css/login.css";
import Logo from "../assets/img/avatar.png";
import Image from "react-bootstrap/Image";
import Jquery from "jquery";
import { FontawesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Background from "../assets/img/background.jpg";
import NavBarR from "../components/NavBarR";
import SignInButton from "../components/SignInButton";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}
    >
      <NavBarR />

      <div>
        <div class="modal-dialog text-center">
          <div
            class="col-sm-8 main-section"
            style={{ margin: "0 auto", marginTop: "30%", padding: "0" }}
          >
            <div
              class="modal-content"
              style={{
                backgroundColor: "#8b7272",
                opacity: "0.85",
                padding: "0 20px",
                boxShadow: "0px 0px 3px #6b4f4f",
                left: "80px",
              }}
            >
              <div
                class="col-12 user-img"
                style={{ marginTop: "-50px", marginBottom: "35px" }}
              >
                <Image
                  src={Logo}
                  style={{
                    width: "100xp",
                    height: "100px",
                    boxShadow: "0px 0px 3px #644844",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <form class="col-12" action="{/login}" method="get">
                <div class="form-group" id="user-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre de usuario"
                    name="username"
                    style={{
                      height: "42px",
                      fontSize: "18px",
                      border: "0",
                      paddingLeft: "54px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div class="form-group" id="contrasena-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Contraseña"
                    name="password"
                    style={{
                      height: "42px",
                      fontSize: "18px",
                      border: "0",
                      paddingLeft: "54px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{ width: "60%", margin: "5px 0 25px" }}
                >
                  <i class="fas fa-sign-in-alt"></i> Ingresar{" "}
                </button>
                <div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style={{ width: "60%", margin: "5px 0 25px" }}
                  >
                    <i class="fas fa-sign-in-alt"></i> Registrar{" "}
                  </button>
                </div>
              </form>
              <div class="col-12 forgot">
                <a href="#">Recordar contraseña?</a>
              </div>
              <SignInButton />
              <div if="${param.error}" class="alert alert-danger" role="alert">
                Invalid username and password.
              </div>
              <div
                if="${param.logout}"
                class="alert alert-success"
                role="alert"
              >
                You have been logged out.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
