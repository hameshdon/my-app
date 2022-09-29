import React, { useEffect, useState } from "react";
import './App.css';


import Axios from "axios";
import CatFact from "./components/CatFact";
function App() 
{
  const [data, setData] = useState([]);
  const [active,setActive] = useState(true)
  
  
  function apicall(count) {
    var countryArray = [];
   
    Axios.get("https://catfact.ninja/fact")
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        countryArray.push({
          value: response.data.fact,
        });
          console.log("previous data countryArray ==>",countryArray)

        
      
        setData(countryArray);
        // console.log("data&&&&&&&&&&&&&&&&",data)
      })
      .catch((error) => {
        console.log(error);
      });

        //  return countryArray
  }

  // setData(countryArray);

  // console.log("cat data===>>>>",data)

  useEffect(() => {
    var count = 10;
    for (var i = 0; i < count; i++) {
      apicall(count);
      //   console.log("count=====>",i)
      //   console.log("previous data countryArray ==>",d)
      // //   if (count ===4)
      // // setData(d); 
      // console.log("data===>************************************",data)
    }
  }, []);

  // useEffect(() => {
  //   setData(countryArray); 
  // },[active])

   
  return (
    <>

    {/* <button
    onClick={setActive(false)}>
      button
    </button> */}
    {
      // console.log();
      // console.log("???",data.value)
      data.map((link) => (
            <li key={link.toString()}>{link.value}</li>
          ))
    }
    </>
    // <div className="App">
    //   {data.map((link) => (
    //     <li key={link.toString()}>{link.value}</li>
    //   ))}  
    // </div>
  );
}

export default App;
