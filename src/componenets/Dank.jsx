import React from 'react';


const Dank= () =>{
    return(
        <>
        <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
       
            <div className="dankr bg-white p-2 rounded my-5 shadow-sm">
            <h1 className="reg">DANK REGISTRY</h1>
            <p className="reg">All Memes ever minted</p>
            <hr/>
            <br/>
            <br/>
            <form >
            <input type="text" class="inp no-outline" placeholder=" Name" />
            <br/>
            <br/>
            <input type="text" class="inp no-outline" placeholder="Tags" />
                <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    FILTER
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">NEWEST</a>
                    <a class="dropdown-item" href="#">TRADE VALUE</a>
                    <a class="dropdown-item" href="#">REGISTRY NUMBER</a>
                </div>
                </div>
            </form>
            </div>
            
            <div className="item bg-white p-5 rounded my-5 shadow-sm">
                <h5>No item found</h5>
            </div>
        </div>
        </div>
        </div>
        </>
    );
};


export default Dank;