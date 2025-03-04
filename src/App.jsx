import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./componenet/Body";
import Login from "./componenet/Login";
import Profile from "./componenet/Profile";
import Feed from "./componenet/Feed";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            {/* // making children Routes
            //but it renders in body */}
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
