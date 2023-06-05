import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./pages/common/NotFound";
import Home from "./pages/common/Home";
import PersonPage from "./pages/lists/PersonPage";
import Contactus from "./pages/forms/ContactUs";
import LogIn from "./pages/forms/login";
import SignUpForm from "./pages/forms/Signup";
import UploadPerson from "./pages/forms/uploadPerson";
//import TestForm from "./pages/forms/testForm";

import PersonDetail from "./pages/details/PersonDetail";
import UploadThing from "./pages/forms/uploadThing";
import UserDashboard from "./pages/Dashboards/user/userDashboard";
import PremiumUserDashboard from "./pages/Dashboards/premium_user/premiumUserDashboard";
import PoliceDashboard from "./pages/Dashboards/police/policeDashboard";
import AdminDashboard from "./pages/Dashboards/admin/adminDashboard";
import ResolvedCases from "./pages/Dashboards/user/reolvedCases";
import MatchedCases from "./pages/Dashboards/user/matchedCases";
import LoadingPage from "./pages/forms/LoadingPage";
import Footer from "./sections/Footer";
import ThingDetail from "./pages/details/ThingDetails";
import { TargetType } from "./Enums/Enums";
// import NavBar from "./sections/NavBar";
import Auth from "./test/Auth";
import MatchCases from "./pages/Dashboards/user/MatchPersonPosts/MatchCases";
// import ListCard from "./components/ListComponents/ListCard";
import SearchPost from "./pages/Dashboards/user/SearchPost/searchPost";
import ShowToast from "./components/PopUps/showToast";
import ThingPage from "./pages/lists/ThingPage";
import MatchThingCases from "./pages/Dashboards/user/MatchThingPosts/MatchThingCases";

function AppRoutes() {
  const [show, setShow] = useState(false);
  const [toastMessage, setToastMessage] = useState({
    headerText: "",
    bodyText: ""
  });



  return (
    <React.Fragment>

      {/* <div id="signInButton">
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </div>
      <div id="signOutButton">
        <GoogleLogout
          clientId={clientId}
          buttonText={"Logout"}
          onLogoutSuccess={onSuccessLogout}
        />
      </div> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auths" element={<Auth />}></Route>

        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Found-List" element={
          <PersonPage
            url={`${process.env.REACT_APP_DOT_NET_API}api/home/getCurrentFoundPosts`}
            toast={{ setToastMessage, setShow }}
          />}>
        </Route>
        <Route path="/Lost-List" element={
          <PersonPage
            url={`${process.env.REACT_APP_DOT_NET_API}api/home/getCurrentLostPosts`}
            toast={{ setToastMessage, setShow }}
          />}>
        </Route>

        <Route path="/thing-Found-List" element={
          <ThingPage
            url={`${process.env.REACT_APP_NODE_API}api/allFoundThingPosts`}
            toast={{ setToastMessage, setShow }}
          />}>
        </Route>
        <Route path="/thing-Lost-List" element={
          <ThingPage
            url={`${process.env.REACT_APP_NODE_API}api/allMissingThingPosts`}
            toast={{ setToastMessage, setShow }}
          />}>
        </Route>


        <Route path="/Contact-Us" element={<Contactus />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>
        <Route
          path="/uploadFoundPerson"
          element={
            <UploadPerson
              PostType={TargetType.FOUND}
              ApiUrl={`${process.env.REACT_APP_DOT_NET_API}api/home/createFoundPersonForm`}
            />
          }
        ></Route>
        <Route
          path="/uploadLostPerson"
          element={
            <UploadPerson
              PostType={TargetType.LOST}
              ApiUrl={`${process.env.REACT_APP_DOT_NET_API}api/home/createLostPersonForm`}
            />
          }
        ></Route>
        <Route path="/Person-Details/:id" element={<PersonDetail />}></Route>
        <Route path="/searchPost/:id/:postType" element={<SearchPost />}></Route>
        <Route path="/Thing-Details" element={<ThingDetail />}></Route>
        <Route path="/upload-thing/:postType" element={<UploadThing />}></Route>

        {/* <Route
          path="/thinglostMatchCases/:postType"
          element={<MatchThingCases />}
        ></Route> */}

        <Route
          path="/mythingMatchCases/:postType"
          element={<MatchThingCases />}
        ></Route>


        <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        <Route path="/user-dashboard" element={<UserDashboard />}></Route>
        <Route path="/resolved-cases" element={<ResolvedCases />}></Route>
        <Route path="/matched-cases" element={<MatchedCases />}></Route>
        <Route path="/lostMatchCases/:postStatus" element={<MatchCases postType={TargetType.LOST} toast={{ setToastMessage, setShow }} />}></Route>
        <Route path="/foundMatchCases" element={<MatchCases postType={TargetType.FOUND} toast={{ setToastMessage, setShow }} />}></Route>
        <Route path="/notFound" element={<NotFound />}></Route>
        <Route
          path="/premium-user-dashboard"
          element={<PremiumUserDashboard />}
        ></Route>
        <Route path="/police-dashboard" element={<PoliceDashboard />}></Route>
        <Route path="/LoadingPage" element={<LoadingPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ShowToast setShow={setShow} show={show} headerText={toastMessage.headerText} bodyText={toastMessage.bodyText} />
    </React.Fragment>
  );
}

function App() {
  return (
    <React.Fragment>
      <AppRoutes />
    </React.Fragment>
  );
}

function Wrapper() {

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Wrapper;
