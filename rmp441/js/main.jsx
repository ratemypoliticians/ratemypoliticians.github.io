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
      <Post url="/uploads/debbie_imgjpg.jpg" name="Debbie Dingell" />
      <Post url="/uploads/jason_morgan.jpg" name="Jason Morgan" />
      <Post url="/uploads/travis_radina_img.jpg" name="Travis Radina" />
    </StrictMode>
  );
} else if (rootElement.id === "ratingsEntry") {
  console.log("blahblah");
  const poliName = window.poliName;
  console.log(poliName)
  // Render the "RateMyPoliticians" component in ratings.html
  var loc = "loading . . ." 
  var titl = "loading . . ." 
  if (poliName === "Debbie Dingell"){
    loc = " Michigan"
    titl = " U.S Representative"
  }
  if (poliName === "Jason Morgan"){
    loc =  " Ann Arbor"
    titl = " State Representative"
  }
  if (poliName === "Travis Radina"){
    loc = " Ann Arbor"
    titl = " Concilman"
  }
  root.render(
    <StrictMode>
      <RateMyPoliticians name={poliName} location = {loc} title={titl} />
    </StrictMode>
  );
}
