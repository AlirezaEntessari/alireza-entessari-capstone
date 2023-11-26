import { useEffect } from "react";
import "./Spain.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Spain = () => {
  const [videoId, setVideoId] = useState("myoNlbXG2RI");

  return (
    <>
      <div className="spain">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="spain__button">Home</button>
          </Link>
          <Link to="/Europe">
            <button className="spain__button--back">Back</button>
          </Link>
      </div>
    </>
  );
};

export default Spain;
