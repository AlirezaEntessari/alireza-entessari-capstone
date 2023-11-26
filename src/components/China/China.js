import { useEffect } from "react";
import "./China.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const China = () => {
  const [videoId, setVideoId] = useState("P-vLVUcdLxI");

  return (
    <>
      <div className="china">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="china__button">Home</button>
          </Link>
          <Link to="/Asia">
            <button className="china__button--back">Back</button>
          </Link>
      </div>
    </>
  );
};

export default China;
