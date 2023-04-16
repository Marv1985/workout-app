import "/home/marv/react-projects/workout-app/src/LogOut/Scss/Logout.css";
import { Link } from "react-router-dom";

export default function LogOut() {
  return (
    <div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <div className="lis">
              <Link to="/">
                <a href={"#0"}>
                  <li>Home</li>
                </a>
              </Link>
              <Link to="LoginScreen">
                <a href={"#0"}>
                  <li>Logout</li>
                </a>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
