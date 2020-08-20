import React, { useContext, useEffect, useState } from "react";
import { AuthContext, NameContext } from "../contexts/Context";
import Middleware from "./Middleware";

const Profile = () => {
  const [name] = useContext(NameContext);
  return (
    <Middleware>
      <div className="container my-3">
        <p>Name : {name}</p>
      </div>
    </Middleware>
  );
};

export default Profile;
