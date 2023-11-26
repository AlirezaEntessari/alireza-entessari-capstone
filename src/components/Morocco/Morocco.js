import { useEffect } from "react";
import "./Morocco.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Morocco = () => {
  const [videoId, setVideoId] = useState("f41dks0MpWQ");

  return (
    <>
      <div className="morocco">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="morocco__button">Home</button>
          </Link>
          <Link to="/Africa">
            <button className="morocco__button--back">Back</button>
          </Link>
      </div>
    </>
  );
};

export default Morocco;
