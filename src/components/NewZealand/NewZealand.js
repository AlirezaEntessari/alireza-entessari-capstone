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
      </div>
    </>
  );
};

export default NewZealand;
