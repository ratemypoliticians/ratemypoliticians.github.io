import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchablePoliticianList from "./SearchablePoliticianList";
import RateMyPoliticians from './ratemypoliticians';

const rootElement = document.getElementById("reactEntry") || document.getElementById("ratingsEntry");
const root = createRoot(rootElement);

if (rootElement.id === "reactEntry") {
  root.render(
    <StrictMode>
      <SearchablePoliticianList />
    </StrictMode>
  );
} else if (rootElement.id === "ratingsEntry") {
  const poliName = window.poliName;
  console.log(poliName);
  
  var loc = "loading . . ."
  var titl = "loading . . ."
  if (poliName === "Debbie Dingell") {
    loc = " Michigan"
    titl = " U.S Representative"
  }
  if (poliName === "Jason Morgan") {
    loc = " Ann Arbor"
    titl = " State Representative"
  }
  if (poliName === "Travis Radina") {
    loc = " Ann Arbor"
    titl = " Concilman"
  }
  
  root.render(
    <StrictMode>
      <RateMyPoliticians name={poliName} location={loc} title={titl} />
    </StrictMode>
  );
}