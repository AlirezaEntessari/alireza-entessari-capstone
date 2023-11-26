import { useEffect } from "react";
import "./Japan.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Japan = () => {
  const [videoId, setVideoId] = useState("F0AT_7uVbeo");

  return (
    <>
      <div className="japan">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="japan__button">Home</button>
          </Link>
          <Link to="/Asia">
            <button className="japan__button--back">Back</button>
          </Link>
      </div>
    </>
  );
};

export default Japan;
