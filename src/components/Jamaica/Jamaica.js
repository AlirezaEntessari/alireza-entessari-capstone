import { useEffect } from "react";
import "./Jamaica.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Jamaica = () => {
  const [videoId, setVideoId] = useState("-4qqNLMLAHw");

  return (
    <>
      <div className="jamaica">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="jamaica__button">Home</button>
          </Link>
          <Link to="/NorthAmerica">
            <button className="jamaica__button--back">Back</button>
          </Link>
      </div>
    </>
  );
};

export default Jamaica;
