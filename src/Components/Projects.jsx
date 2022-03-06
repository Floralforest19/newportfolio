import React, { Fragment, useEffect } from 'react';
 import { useHistory, Link } from "react-router-dom";
 





export default function Projects(){    
    
const history = useHistory();
const delay = ms => new Promise(res => setTimeout(res, ms));


function hideElement(){
    document.getElementById('boxes').style.visibility = "hidden";
}

function showElement(){
    document.getElementById('boxes').style.visibility="unset";
    delay(8000);
}
useEffect(() => {
    hideElement();   
     setTimeout(() => {
        showElement();
        const rootElement = document.getElementById("box");
        rootElement.remove("box");
    }, 8000);
},);

return (
  
  <Fragment>
    <div className="continerOver">
    <h1>Projects</h1>
    
    <button onClick={() => history.push('/') } >Go to home</button>
    </div>
   
<div className="gridContainer">
   <h3 id="box" >
<div className="note" >&#9833;</div>
<div className="note">&#9834;</div>
<div className="note">&#9835;</div>
<div className="note">&#9836;</div>
<div className="note">&#9833;</div>
<div className="note">&#9834;</div>
<div className="note">&#9835;</div>
<div className="note">&#9836;</div>
</h3>
</div>
<div className="gridContainer">
      <h3 id="boxes" className="h3Box" >
<div className="notes" >&#9833;</div>
<div className="notes">&#9834;</div>
<div className="notes">&#9835;</div>
<div className="notes">&#9836;</div>
<div className="notes">&#9833;</div>
<div className="notes">&#9834;</div>
<div className="notes">&#9835;</div>
<div className="notes">&#9836;</div>
<div className="projectList">
    
    <a className="projectA">Star Wars API</a>
    <a className="projectA">Smartlist</a>
    <a className="projectA" href="https://floralforest19.github.io/capi/">Capi</a>
    <a className="projectA" href="https://floralforest19.github.io/luffarshack/">Luffarshack</a>
</div>
</h3>
</div>    

    <footer>©By Mikaela Fryklund mikaela@fryklunda.se</footer>
  </Fragment>
  );
}