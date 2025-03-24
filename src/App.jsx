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
import PrivacyPolicy from "./componenet/footer/PrivacyPolicy";
import RefundPolicy from "./componenet/footer/RefundPOlicy";
import ContactUs from "./componenet/footer/ContactUs";
import TermsAndConditions from "./componenet/footer/TermsOFConditions";

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
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/termsandconditions" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
