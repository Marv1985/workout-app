import "/home/marv/react-projects/workout-app/src/LogOut/Scss/Logout.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

export default function LogOut() {
  const navigate = useNavigate();

  const auth = getAuth();

  //once logged out prevents backwards navigation
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/", { replace: true });
      }
    });
  }, [navigate, auth]);

  // sign users out
  function signingOut() {
    signOut(auth)
      .then(() => {
        //console.log('user signed out')
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

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
                <li onClick={signingOut}>Logout</li>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
