import React, { useEffect, useState } from "react";
import "../App.css";

import Axios from "axios";

function CatFact() {
  const [data, setData] = useState([]);

  const countryArray = [];
  function apicall() {
    Axios.get("https://catfact.ninja/fact")
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        countryArray.push({
          value: response.data.fact,
        });
        //   console.log("response.data.fact",response.data.fact)
        setData(...data, countryArray);
        //   return(
        //     <>
        //     <h1>
        //         {response.data.fact}
        //     </h1>
        //     </>
        //   )
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // setData(countryArray);

  // console.log("cat data===>>>>",data)

  useEffect(() => {
    // Axios.get('https://catfact.ninja/fact')
    // .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //     var count = 10
    //     const countryArray= [];
    //     for (var i = 0; i < count; i++) {
    //       countryArray.push({
    //         value: response.data.fact

    //       });
    //     }
    //     setData(countryArray);
    //     console.log('wwww',countryArray)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    var count = 10;
    for (var i = 0; i < count; i++) {
      apicall();
    }
    // setData(countryArray);
  }, []);

  //    console.log("data===>",data)
  return (
    <div className="App">
      {data.map((link) => (
        <li key={link.endpoint}>{link.value}</li>
      ))}

      {console.log("data===>", data)}
      
    </div>
  );
}

export default CatFact;
