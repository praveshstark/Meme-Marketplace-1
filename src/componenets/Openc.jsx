import React from 'react';
import { NavLink } from 'react-router-dom';


const Openc= () =>{
    return(
        <>
        <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
       
            <div className="dankr bg-white p-2 rounded my-4 shadow-sm">
            <h1 className="reg">DANK REGISTRY-VOTE</h1>
            <p className="reg">View challenges and vote to earn more DANK</p>
            <br/>
            </div>

            <div className="row">
            <ul className="nav flex-row mx-3  mb-5">
            <li><NavLink to="openc" className="text-white">Open Challenges</NavLink></li>
            <li> <NavLink to="resolvec" className="mx-4 text-white">Resolve Challenges</NavLink></li>
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
                <h5>No item found for Open Challenge</h5>
                </div>
        </div>
        </div>
        </div>
        </>
    );
};


export default Openc;