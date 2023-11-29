import { useEffect } from "react";
import "./France.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const France = () => {
  const [videoId, setVideoId] = useState("qertJXj_oBo");

  return (
    <>
      <div className="france">
        <YouTube videoId={videoId} />
        <Link to="/">
          <button className="france__button">Home</button>
        </Link>
        <Link to="/Europe">
          <button className="france__button--back">Back</button>
        </Link>
        <Link
          to="https://wikitravel.org/en/France"
          target="_blank"
          rel="noopener noreferrer"
          className="france__link"
        >
          Additional France Travel Information
        </Link>
      </div>
    </>
  );
};

export default France;
