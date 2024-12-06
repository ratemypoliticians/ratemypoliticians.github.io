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
  var dis = "N/A"
  if (poliName === "Debbie Dingell") {
    loc = " Michigan"
    titl = " U.S Representative"
    dis = " 6th District "
  }
  if (poliName === "Jason Morgan") {
    loc = " Michigan"
    titl = " State Representative"
    dis = " 23rd District "
  }
  if (poliName === "Travis Radina") {
    loc = " Ann Arbor"
    titl = " Councilman"

  }

  if (poliName === "Victoria Burton-Harris") {
    loc = "Michigan"
    titl = "Judge"
    dis = "36th District Court"
}

if (poliName === "Ranjeev Puri") {
    loc = "Michigan"
    titl = "State Representative"
    dis = "24th District"
}
if (poliName === "Sheldon Neeley") {
  loc = "Flint"
  titl = "Mayor"
}
 
  
  root.render(
    <StrictMode>
      <RateMyPoliticians name={poliName} location={loc} title={titl} district={dis}/>
    </StrictMode>
  );
}