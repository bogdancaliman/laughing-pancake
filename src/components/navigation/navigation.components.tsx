import { Link, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/messages">Messages</Link>
        <Link to="lists">Lists</Link>
        <Link to="/bookmarks">Bookmarks</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
