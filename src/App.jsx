import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Homepage from "./components/account/Home";
import LoginAuth from "./components/auth/LoginAuth";
import PageNotFound from "./components/notfound/PageNotFound";
import RegistrationAuth from "./components/auth/RegistrationAuth";
import RecoverAuth from "./components/auth/RecoverAuth";
import Homepage from "./components/account/HomePage";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/genzee/auth/homepage" element={<Homepage />} />
          <Route path={"/genzee/auth/login"} element={<LoginAuth />} />
          <Route path={"/genzee/auth/register"} element={<RegistrationAuth />} />
          <Route path={"/genzee/auth/recover"} element={<RecoverAuth />} />
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
