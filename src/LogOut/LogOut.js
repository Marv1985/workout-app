import "/home/marv/react-projects/workout-app/src/LogOut/Scss/Logout.css";
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
              <a href={"#0"}>
                <li>Home</li>
              </a>
              <a href={"#0"}>
                <li>Logout</li>
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
