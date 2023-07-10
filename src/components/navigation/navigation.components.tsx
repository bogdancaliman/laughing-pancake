import { Link, Outlet } from "react-router-dom";
import NavigationButton from "../navigation-button/navigation-button.component";
import {
  Bell,
  Bookmark,
  Home,
  MessagesSquare,
  ScrollText,
  Search,
  User,
} from "lucide-react";

function Navigation() {
  return (
    <div className="mx-auto max-w-screen-2xl ">
      <div className="grid grid-cols-[1fr,3fr]">
        <NavigationMenu />
        <Outlet />
      </div>
    </div>
  );
}

export default Navigation;

function NavigationMenu() {
  return (
    <div className="sticky top-0 flex flex-col justify-between h-screen bg-gray-200">
      <aside className="flex flex-col gap-2 py-2">
        <Link to="/">
          <NavigationButton text="Home" icon={<Home size={18} />} />
        </Link>
        <Link to="/explore">
          <NavigationButton text="Explore" icon={<Search size={18} />} />
        </Link>
        <Link to="/notifications">
          <NavigationButton text="Notifications" icon={<Bell size={18} />} />
        </Link>
        <Link to="/messages">
          <NavigationButton
            text="Messages"
            icon={<MessagesSquare size={18} />}
          />
        </Link>
        <Link to="/lists">
          <NavigationButton text="Lists" icon={<ScrollText size={18} />} />
        </Link>
        <Link to="/bookmarks">
          <NavigationButton text="Bookmarks" icon={<Bookmark size={18} />} />
        </Link>
        <Link to="/profile">
          <NavigationButton text="Profile" icon={<User size={18} />} />
        </Link>
      </aside>
      <div>Profile</div>
    </div>
  );
}
