import React, { useEffect, useState } from "react";
import "./App.css";

import Axios from "axios";
import CatFact from "./components/CatFact";
function App() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(true);

const [fact1,setFact1] =useState("")
const [fact2,setFact2] =useState("")
const [fact3,setFact3] =useState("")
const [fact4,setFact4] =useState("")
const [fact5,setFact5] =useState("")
const [fact6,setFact6] =useState("")
const [fact7,setFact7] =useState("")
const [fact8,setFact8] =useState("")
const [fact9,setFact9] =useState("")

const [fact10,setFact10] =useState("")



  function apicall(count) {
    var countryArray = [];

    Axios.get("https://catfact.ninja/fact")
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        countryArray.push({
          value: response.data.fact,
        });
        console.log("previous data countryArray ==>", count);
        if (count ===0 ) {
          setFact1(response.data.fact)

        }
        if (count ===1) {
          setFact2(response.data.fact)
          
        }
        if (count ===2 ) {
          setFact3(response.data.fact)
          
        }
        if (count ===3 ) {
          setFact4(response.data.fact)
          
        }
        if (count ===4 ) {
          setFact5(response.data.fact)
          
        }
        if (count ===5 ) {
          setFact6(response.data.fact)
          
        }
        if (count ===6 ) {
          setFact7(response.data.fact)
          
        }
        if (count ===7 ) {
          setFact8(response.data.fact)
          
        }
        if (count ===8 ) {
          setFact9(response.data.fact)
          
        }
        if (count ===9 ) {
          setFact10(response.data.fact)
          
        }
       

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
      apicall(i);
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
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1>Cat Facts</h1>
      <ul>
        <li>{fact1}</li>
        <li>{fact2}</li>
        <li>{fact3}</li>
        <li>{fact4}</li>
        <li>{fact5}</li>
        <li>{fact6}</li>
        <li>{fact7}</li>
        <li>{fact8}</li>
        <li>{fact9}</li>
        <li>{fact10}</li>
      </ul>
      {/* {data.map((link,e) => (
          <li key={link.toString()}>{link.value}</li>
          
        ))
      } */}
      </div> 
    </>
  );
}

export default App;
