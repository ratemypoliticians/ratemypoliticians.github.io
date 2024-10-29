import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Post from "./post";

// Create a root
const root = createRoot(document.getElementById("reactEntry"));

// This method is only called once
// Insert the post component into the DOM
root.render(
  <StrictMode>
    <Post url="/uploads/DoBhY_h__400x400.jpg" />
  </StrictMode>
);
