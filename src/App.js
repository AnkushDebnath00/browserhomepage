import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Unsplash, { toJson } from "unsplash-js";
import {
  faGithub,
  faDev,
  faAmazon,
  faFlipboard,
  faMakefile,
  faYoutube,
  faGoogleDrive,
  faMicrosoft,
  faGmail,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [bgImage, setBgImage] = useState("");

  let unsplash = createApi({
    Fetch: fetch,
  });

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
