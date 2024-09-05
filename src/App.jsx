import { Avatar, Box, Typography } from "@mui/material";
import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import KenyaFlag from "./images/KE.png";

import { DNA } from "react-loader-spinner";

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
            bgcolor={"#F1F1F1"}
            color={"text.primary"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Avatar
                sx={{ width: 40, height: 40 }}
                src={KenyaFlag}
                alt="KENYA"
              />
              <Typography
                variant="body1"
                fontWeight={"bold"}
                color={"text.secondary"}
              >
                GENZEE
              </Typography>
              <Box>
                <DNA width={30} height={30}/>
              </Box>
            </Box>
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
