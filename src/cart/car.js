
import React, {useState} from 'react';
import Cart1 from "../component/cart1";
import Productcard from "../component/productcard";
const data=[{
  label:"Briyani",
  price:24,
  },
{
  label:'Pannir masala',
  price:12,
},
{
  label:'Swarma',
  price:127,
},
{
  label:'Chappathi',
  price:20,
},

{
  label:'rava',
  price:120,
},
  ];


function Car(){
  const [Car,setCar]=useState([]);
 
  function handleChange(item={}){
    console.log(item);
    let CarCopy=[...Car];
    if(item.label){
     CarCopy.push(item);
    }
   setCar(CarCopy);
    }
    function handleCar(item={}){
      console.log(item);
      let CarCopy=[...Car];
      if(item.label){
        CarCopy=CarCopy.filter((_data)=>_data.label !== item.label);
      }
      setCar(CarCopy);
    }
  function checkCarStatus(item={}){
    let status=false;
    if(item.label){
      status=
      Car.filter((_data,i)=>_data.label===item.label).length>0?true:false;
   }
    return status;
  }
  
    return(
    
    
    <div className="container">

         <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8">
                  {data.map((element,index)=>(
                  
                <Productcard  
                key={`product-card-${index}`}
                disabled={checkCarStatus(element)} 
                  data={element} onChange={handleChange}/>
                
                  ))
}

                    </div>
                      
                
                
                
              <div className="col-lg-4">carrt
              
              {Car.map((d, index) => (
              <Cart1
                key={`cart1-${index}`}
                data={d}
                onRemove={handleCar}
              />
            ))}
              

              </div>

                
            </div>
         </div>




    </div>
    )
}
export default Car;
