import "../css/index.css";
import Logo from "../assets/img/avatar.png";
import Image from "react-bootstrap/Image";
import Jquery from "jquery";
import { FontawesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <div class="Login" size="cover">
      {/* <script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
        type="module"
      ></script> */}
      <div class="modal-dialog text-center">
        <div class="col-sm-8 main-section">
          <div class="modal-content">
            <div class="col-12 user-img">
              <Image src={Logo} />
              {/* <img src="D:\Documents\GitHub\DCTC\frontend\src\assets\img\avatar.png" /> */}
            </div>
            <form class="col-12" action="{/login}" method="get">
              <div class="form-group" id="user-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombre de usuario"
                  name="username"
                />
              </div>
              <div class="form-group" id="contrasena-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Contraseña"
                  name="password"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                <i class="fas fa-sign-in-alt"></i> Ingresar{" "}
              </button>
            </form>
            <div class="col-12 forgot">
              <a href="#">Recordar contraseña?</a>
            </div>
            <div if="${param.error}" class="alert alert-danger" role="alert">
              Invalid username and password.
            </div>
            <div if="${param.logout}" class="alert alert-success" role="alert">
              You have been logged out.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
