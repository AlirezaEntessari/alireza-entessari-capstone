import { useEffect } from "react";
import "./USA.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const USA = () => {
  const [videoId, setVideoId] = useState("0WZfL_hN9jA");

  return (
    <>
      <div className="usa">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="usa__button">Home</button>
          </Link>
          <Link to="/NorthAmerica">
            <button className="usa__button--back">Back</button>
          </Link>
      </div>
    </>
  );
};

export default USA;
