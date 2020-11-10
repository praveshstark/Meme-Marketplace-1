import React from 'react';

const Submit= () =>{
    return(
        <>  
            
        <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            
            <div className="upload page-content1 p-5" id="content">
            <div className="bg-white p-3 rounded my-4 shadow-sm">
            <h1 className="reg">DANK REGISTRY-SUBMIT</h1>
            <p className="reg">Submit a new meme to thr Registry for consideration</p>
            </div>
            </div>
            
            
            <div class="col-lg-7 tag">
            <div class="col-md-12 order-1 order-lg-2 pt-5 bg-white p-5 rounded my-4 shadow-sm">
            <form>
            <div className="form-group">
            <input type="name" className="form-control " placeholder="Title" />
            </div><br/>
            
            <div className="form-group">
            <input type="name" className="form-control " placeholder="Tags" />
            </div>
           
            <div className="form-group">
            <label for="exampleFormControlSelect1">Inssurence</label>
            <select className="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
            </div>
    
            <div className="form-group">
            <label for="exampleFormControlTextarea1">Comment</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="form-group">
            <label for="img">Select image:</label>
             <input type="file" id="img" name="img" accept="image/*"></input>
             </div>
             <br/>

            <div className="col-12" >
            <button className="btn btn-outline-primary" type="onSubmit">
            Submit
            </button>
            </div>
            
            </form>
            </div>
            </div>
            
            
            <div className="preview">
            <div className="bg-white p-5 rounded my-0 shadow-sm">
            <h1 className="reg">Preview</h1>
            
            </div>
            </div>
            
        </div>
        </div>
        </div>
          
        </>
    );
};


export default Submit;