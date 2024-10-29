import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Post from "./post";
import RateMyPoliticians from './ratemypoliticians';


// Create a root
const root = createRoot(document.getElementById("reactEntry"));

// This method is only called once
// Insert the post component into the DOM
root.render(
  <StrictMode>
    <Post url="/uploads/DoBhY_h__400x400.jpg" name = "Debbie Dingell" />
    <Post url="/uploads/Q6YACEPYJZDMVJIASQDNLC25PI.jpg" name = "Jason Morgan" />
    <Post url="/uploads/Q6YACEPYJZDMVJIASQDNLC25PI.jpg" name = "Travis Radina" />
    <RateMyPoliticians name="Chris Taylor"/>
  </StrictMode>
);
