import { useEffect } from "react";
import "./Canada.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Canada = () => {
  const [videoId, setVideoId] = useState("_drFdYSVOEA");

  return (
    <>
      <div className="canada">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="canada__button">Home</button>
          </Link>
          <Link to="/NorthAmerica">
            <button className="canada__button--back">Back</button>
          </Link>
      </div>
    </>
  );
};

export default Canada;
