import Router from "../components/routes.js";
import Body from "../components/navbar.js";
function Layout() {
  return (
    <div style={{ textAlign: "Center", minWidth: "1300px" }}>
      <Router />
      <br />
      <br />
      <Body />
      <br />
    </div>
  );
}

export default Layout;
