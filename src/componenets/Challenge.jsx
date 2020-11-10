import React from 'react';
import { NavLink } from 'react-router-dom';


const Challenge= () =>{
    return(
        <>
        <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
       
            <div className="dankr bg-white p-2 rounded my-4 shadow-sm">
            <h1 className="reg">DANK REGISTRY-CHALLENGE</h1>
            <p className="reg">View and Challenge new entries to the registry</p>
            <br/>
            </div>

            <div className="row">
            <ul className="nav flex-row mx-3  mb-5">
            <li><NavLink to="openc"></NavLink></li>
            <li> <NavLink to="resolvec" className="mx-4"></NavLink></li>
            </ul>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    FILTER
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">NEWEST</a>
                    <a className="dropdown-item" href="#">TRADE VALUE</a>
                    <a className="dropdown-item" href="#">REGISTRY NUMBER</a>
                </div>
                </div>
                </div>

                <div className="bg-white p-5 rounded mb-5 shadow-sm" id="item1">
                <h5>No item found</h5>
                </div>
        </div>
        </div>
        </div>
        </>
    );
};


export default Challenge;