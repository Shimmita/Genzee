import React from "react";
import NabvBarAuth from "../auth/NabvBarAuth";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <React.Fragment>
      <NabvBarAuth />
      <div
        style={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div className="rounded-2 p-5 d-flex justify-content-center align-items-center w-75 shadow-lg">
          <div>
            <h5>Page Not Found !</h5>
            <hr />
            <small className="text-secondary text-center">
              Go back home{" "}
              <span className="ms-1">
                {" "}
                <Link to={"/"}>here</Link>
              </span>
            </small>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageNotFound;
