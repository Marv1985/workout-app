import "/home/marv/react-projects/workout-app/src/LogOut/Scss/Logout.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signingOut } from "../FirebaseConfig/FirebaseConfig";

export default function LogOut() {
  const navigate = useNavigate();
  // logout
  const handleLogout = (e) => {
    e.preventDefault();
    signingOut();
    navigate("/");
  };

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
              <Link to="/ChooseProgram">
                <li>Home</li>
              </Link>
              <Link>
                <li onClick={handleLogout}>Logout</li>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
