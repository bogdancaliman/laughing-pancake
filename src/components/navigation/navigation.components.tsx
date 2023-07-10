import { Link, Outlet } from "react-router-dom";
import NavigationButton from "../navigation-button/navigation-button.component";

function Navigation() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="grid grid-cols-[1fr,3fr]">
        <div>
          <div className="sticky top-0 grid grid-cols-[1fr,4fr]">
            <div className="bg-blue-200"></div>
            <div className="flex flex-col justify-between h-screen bg-gray-200">
              <div className="flex flex-col gap-2 py-2  ">
                <Link to="/">
                  <NavigationButton text="Home" />
                </Link>
                <Link to="/explore">
                  <NavigationButton text="Explore" />
                </Link>
                <Link to="/notifications">
                  <NavigationButton text="Notifications" />
                </Link>
                <Link to="/messages">
                  <NavigationButton text="Messages" />
                </Link>
                <Link to="/lists">
                  <NavigationButton text="Lists" />
                </Link>
                <Link to="/bookmarks">
                  <NavigationButton text="Bookmarks" />
                </Link>
                <Link to="/profile">
                  <NavigationButton text="Profile" />
                </Link>
              </div>
              <div>Profile</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[14fr,1fr]">
          <div className="bg-green-200">
            <Outlet />
          </div>
          <div className="bg-blue-200"></div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
