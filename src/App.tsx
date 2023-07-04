import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./routes/home/home.component";
import Messages from "./routes/messages/messages.component";
import Bookmarks from "./routes/bookmarks/bookmarks.component";
import Explore from "./routes/explore/explore.component";
import Lists from "./routes/lists/lists.component";
import Notifications from "./routes/notifications/notifications.component";
import Profile from "./routes/profile/profile.component";
import NotFound from "./routes/not-found/not-found.component";

const Navigation = () => {
  return (
    <div>
      <h1>I am the navigation bar</h1>
      <Outlet />
    </div>
  );
};


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
