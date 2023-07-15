import { Outlet } from "react-router-dom";
import Navigation from "../navigation/navigation.components";

function Layout() {
  return (
    <div className="mx-auto max-w-screen-2xl ">
      <div className="grid grid-cols-[1fr,3fr]">
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;