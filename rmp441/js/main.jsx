import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Post from "./post";
import RateMyPoliticians from './ratemypoliticians';

// Identify which component to render based on the root element
const rootElement = document.getElementById("reactEntry") || document.getElementById("ratingsEntry");
const root = createRoot(rootElement);
if (rootElement.id === "reactEntry") {
  // Render the "Post" component in index.html
  console.log("suppers");
  root.render(
    <StrictMode>
      <Post url="/uploads/DoBhY_h__400x400.jpg" name="Debbie Dingell" />
      <Post url="/uploads/Q6YACEPYJZDMVJIASQDNLC25PI.jpg" name="Jason Morgan" />
      <Post url="/uploads/Q6YACEPYJZDMVJIASQDNLC25PI.jpg" name="Travis Radin" />
    </StrictMode>
  );
} else if (rootElement.id === "ratingsEntry") {
  console.log("blahblah");
  const poliName = window.poliName;
  console.log(poliName)
  // Render the "RateMyPoliticians" component in ratings.html
  root.render(
    <StrictMode>
      <RateMyPoliticians name={poliName} />
    </StrictMode>
  );
}
