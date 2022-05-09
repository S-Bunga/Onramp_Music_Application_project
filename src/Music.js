//importing React, axios, bootstrap
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {Table} from 'react-bootstrap';
import Player from "./Player";
const Music = () => {
  const [songData, setSongData] = useState();
 // onramp provided music application data link is used
 // Fetch podcasts data from json link
  useEffect(() => {
    axios
      .get("https://gist.githubusercontent.com/CervantesVive/3f85bf26672cf27fe1cd932ffcb7ecac/raw/4de50b351a62158083a97f3b950bd786d3ffd928/awesome-podcasts.json")
      .then((res) => {
        const apiData = res.data.podcasts;//res.podcasts
        console.log(apiData);

        setSongData(apiData);//Apidata
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  return (
    <div className="main-container col-lg-12 col-md-12">
      <h1 className="col-lg-6"> </h1>
      <div className="tableDisplay">
        <div className="tableData col-lg-12 col-md-12">
         

          <Table responsive>
            <thead>
              <tr>
         
          
                {Object.keys(songData ? songData[0] : "").map((key) => (
                <th>{key.toUpperCase()}</th>
              ))}

              </tr>
            </thead>
            <tbody>
          
             
              
              {songData?.map((val, key) => {
              return (
                <tr key={key}>
                  <td >{val.name}</td>
                  <td >{val.description}</td>
                  <td >{val.source}</td>
                  <td ><Player url={val.audio}/></td>
                  <td >
                  <img src={val.image} className="imgSize"></img></td>
                  <td >{val.title}</td>
                </tr>
              );
            })}
            
              
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Music;
