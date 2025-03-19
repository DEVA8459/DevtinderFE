import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./componenet/Body";
import Login from "./componenet/Login";
import Profile from "./componenet/Profile";
import Feed from "./componenet/Feed";
import Connections from "./componenet/Connections";
import Request from "./componenet/Request";
import IngoreReject from "./componenet/IngoreReject";
import Home from "./componenet/Home";
import Chat from "./componenet/Chat";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            {/* // making children Routes
            //but it renders in body */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user/connections" element={<Connections />} />

            <Route path="/request" element={<Request />} />
            <Route path="/ignoreReject" element={<IngoreReject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
