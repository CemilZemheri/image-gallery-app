import React from "react";
import data from "./data";
import "./index.css";

const App=()=> {
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <div className="pictures">
        {data.map((item) => (
          <div className="picture">
            <div className="imageContainer">
              <img src={item.src.large} alt="" />
            </div>
            <div className="info">
              <span>{item.photographer}</span>
            </div>
          </div>
        ))}
      </div>
      <footer><div>Designed by CZ, 2024</div>
      <div>CODEVELOPERS®</div>

      </footer>
    </div>
  );
}

export default App;
