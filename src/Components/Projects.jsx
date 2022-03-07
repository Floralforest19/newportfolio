import React, { Fragment, useEffect } from 'react';
 import { useHistory, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

export default function Projects() {
  return (
      <Fragment>

    
    <div className="row">
    <div className="swapi-text col-4">My first project in react</div>
    <div className="col-4"></div>
    <div className="swapi col-4"></div>
    </div>
    <div className="row">
    <div className="capi col-4"><a className="projectA col-4" href="https://floralforest19.github.io/capi/"></a></div>
    <div className="col-4"></div>
    <div className="col-4">A project for jobsearch</div>
    </div>
    <div className="row">
    <div className="col-4">Luffarschack my first project for JavaScript</div>
    <div className="col-4"></div>
    <div className="chess col-4"><a className="projectA" href="https://floralforest19.github.io/luffarshack/"></a></div>
    </div>
      </Fragment>
  )
}
