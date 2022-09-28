import React, { useEffect, useState } from "react";
import './App.css';


import Axios from "axios";
import CatFact from "./components/CatFact";
function App() 
{
  const [data, setData] = useState([]);

  
  var countryArray = [];
  function apicall(count) {
   
    Axios.get("https://catfact.ninja/fact")
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        countryArray.push({
          value: response.data.fact,
        });
          console.log("previous data countryArray ==>",countryArray)

        
      
        setData(countryArray);
       
      })
      .catch((error) => {
        console.log(error);
      });

         return(
            <>
            <h1>
                {data.fact}
            </h1>
            </>
          )
  }

  // setData(countryArray);

  // console.log("cat data===>>>>",data)

  useEffect(() => {
    var count = 10;
    for (var i = 0; i < count; i++) {
      apicall(count);
        console.log("count=====>",i)

      // setData(countryArray);
    }
  }, []);

     console.log("data===>",data)
  return (
    <div className="App">
      {data.map((link) => (
        <li >{link.value}</li>
      ))}  
    </div>
  );
}

export default App;
