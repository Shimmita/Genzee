import { Box } from "@mui/material";
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const HomePageLazy = lazy(() => import("./components/account/HomePage"));
const RecoverAuthLay = lazy(() => import("./components/auth/RecoverAuth"));
const RegistrationAuthLazy = lazy(() =>
  import("./components/auth/RegistrationAuth")
);
const AuthCheckLazy = lazy(() => import("./components/account/AuthCheck"));
const PageNotFoundLazy = lazy(() =>
  import("./components/notfound/PageNotFound")
);
const LoginAuthLazy = lazy(() => import("./components/auth/LoginAuth"));
const App = () => {
  return (
    <React.Fragment>
      <Suspense
        fallback={
          <Box
            bgcolor={"background.default"}
            color={"text.primary"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "90vh",
            }}
          >
            Loading...
          </Box>
        }
      >
        <Router>
          <Routes>
            <Route
              exact
              path="/*"
              element={
                <AuthCheckLazy>
                  <HomePageLazy />
                </AuthCheckLazy>
              }
            />
            <Route exact path={"/auth/login"} element={<LoginAuthLazy />} />
            <Route
              exact
              path={"/auth/register"}
              element={<RegistrationAuthLazy />}
            />
            <Route exact path={"/auth/recover"} element={<RecoverAuthLay />} />
            <Route path={"*"} element={PageNotFoundLazy} />
          </Routes>
        </Router>
      </Suspense>
    </React.Fragment>
  );
};

export default App;
