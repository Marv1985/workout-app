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
                <li>Home</li>
              </Link>
              <Link to="/LoginScreen">
                <li>Logout</li>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
