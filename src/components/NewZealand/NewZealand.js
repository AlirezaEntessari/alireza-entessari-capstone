import { useEffect } from "react";
import "./NewZealand.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const NewZealand = () => {
  const [videoId, setVideoId] = useState("OgZQjaXOisg");

  return (
    <>
      <div className="new-zealand">
        <YouTube videoId={videoId} />
        <Link to="/">
          <button className="new-zealand__button">Home</button>
        </Link>
        <Link to="/Australia">
          <button className="new-zealand__button--back">Back</button>
        </Link>
        <Link
          to="https://wikitravel.org/en/New_Zealand"
          target="_blank"
          rel="noopener noreferrer"
          className="new-zealand__link"
        >
          Additional New Zealand Travel Information
        </Link>
      </div>
    </>
  );
};

export default NewZealand;
