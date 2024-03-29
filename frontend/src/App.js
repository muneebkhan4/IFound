import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FoundList from "./pages/lists/FoundList";
import NotFound from "./pages/common/NotFound";
import Home from "./pages/common/Home";
import LostList from "./pages/lists/LostList";
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
import MatchThingCases from "./pages/Dashboards/user/MatchThingPosts/MatchThingCases";

import LoadingPage from "./pages/forms/LoadingPage";
import Footer from "./sections/Footer";
import ThingDetail from "./pages/details/ThingDetails";
import { TargetType } from "./Enums/Enums";
import NavBar from "./sections/NavBar";
import Auth from "./test/Auth";
import MatchCases from "./pages/Dashboards/user/MatchPersonPosts/MatchCases";
import ListCard from "./components/ListComponents/ListCard";

function AppRoutes() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Found-List" element={<FoundList />}></Route>
        <Route path="/Lost-List" element={<LostList />}></Route>
        <Route path="/Contact-Us" element={<Contactus />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>
        <Route
          path="/uploadFoundPerson"
          element={
            <UploadPerson
              PostType={TargetType.LOST}
              ApiUrl={"https://localhost:44364/api/home/createFoundPersonForm"}
            />
          }
        ></Route>
        <Route
          path="/uploadLostPerson"
          element={
            <UploadPerson
              PostType={TargetType.FOUND}
              ApiUrl={"https://localhost:44364/api/home/createLostPersonForm"}
            />
          }
        ></Route>
        <Route path="/Person-Details" element={<PersonDetail />}></Route>
        <Route path="/Thing-Details" element={<ThingDetail />}></Route>
        <Route path="/upload-thing" element={<UploadThing />}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        <Route path="/user-dashboard" element={<UserDashboard />}></Route>
        <Route path="/resolved-cases" element={<ResolvedCases />}></Route>
        <Route path="/matched-cases" element={<MatchedCases />}></Route>
        <Route
          path="/lostMatchCases"
          element={<MatchCases postType={TargetType.LOST} />}
        ></Route>

        <Route
          path="/foundMatchCases"
          element={<MatchCases postType={TargetType.FOUND} />}
        ></Route>

        <Route
          path="/thinglostMatchCases"
          element={<MatchThingCases postType={TargetType.LOST} />}
        ></Route>

        <Route
          path="/thingfoundMatchCases"
          element={<MatchThingCases postType={TargetType.FOUND} />}
        ></Route>

        <Route path="/notFound" element={<NotFound />}></Route>
        <Route
          path="/premium-user-dashboard"
          element={<PremiumUserDashboard />}
        ></Route>
        <Route path="/police-dashboard" element={<PoliceDashboard />}></Route>
        <Route path="/LoadingPage" element={<LoadingPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
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
      <Footer />
    </BrowserRouter>
  );
}

export default Wrapper;
