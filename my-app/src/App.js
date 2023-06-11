import React, { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="Container">
      <h1>New Movies</h1>
      <div className="inputContainer">

        <input
          className="search"
          type="text"
          placeholder="Search movie..."
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
      </div>
      <div className="dataContainer">
      {
        data.filter((value)=>{
          if(searchTerm==""){
            return value;
          }else if(value.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return value;
          }
        }).map((val)=>{
          return(
            <div className="data" key={val.id}>
              <img src={val.image} />
              <h3>{val.title}</h3>
              <p>{val.Description}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
