import React from "react";
export default function productcard(props){
const {data={},onChange=(item)=>{},disabled=false}=props;
            return(
                <div className="card mb-3">
                  <div className="card-body">
                  <div className="row">
                  <div className="col-8">
                  <div className="d-flex flex-column justify-content-center">
                    <h1>{data.label ||"name not Available"}</h1>
                    <p>{`₹${data.price }`|| "price not Available"}</p>
                    </div>
                  </div>
                  <div className="col-4">
                  <div className="d-flex h-100vh flex-column justify-content-center" style={{height:"100%"}}>
                  <button
                disabled={disabled}
                className={`btn ${
                  disabled ? "btn-secondary" : "btn-primary"
                } btn-sm`}
                onClick={() => onChange(data)}
              >
                {disabled ? "Added" : "Add to cart"}
              </button>
                    </div>
                  </div>

                 </div>
                  </div>
                </div>            
            
    )
}
