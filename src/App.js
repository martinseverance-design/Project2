
import './App.css';
import TableHead from "./TableHead";
import ContentMaker from './ContentMaker';
import { useEffect , useState } from "react";
function App() {
  const[grantArr, setGrantArr] = useState([])
  useEffect(() => 
  {
    async function fetchGrant()
    {
      const url = '/NEH2020sGrant_Short.json'
      //console.log("hi")
      const response = await fetch(url);
      //console.log(response.ok)
      if (response.ok)
         {
            const result = await response.json();
            //console.log("to")
            //console.log(result)
            //console.log(result.Grants.Grant)
            setGrantArr(result.Grants.Grant)
         }


    }
    
    fetchGrant();
    },[]);

    const[num, setNum] = useState(1)

    function handleChange(event) {
      const value = event.target.value;
      if(value == 1){
        setNum(1);
      }
      if(value == 2){
        console.log("its at two")
        setNum(2);
      }
      if(value == 3){
        setNum(3);
      }
    }

    function getNum(){
      console.log(num);
      return(num);
    }


    let sum = grantArr.reduce((int, grant) => 
      {
        if(Number(grant.AwardMatching != 0.000)){
          return(int + Number(grant.AwardMatching))
        }
        if(Number(grant.AwardOutright != 0.000) && Number(grant.AwardMatching == 0.000)){
          return(int + Number(grant.AwardOutright))
        }
        return int;
}, 0);

let K = grantArr.filter((grant) =>grant.InstState.includes("KY"));
 let sumK = K.reduce((int, grant) => 
      {
        if(Number(grant.AwardMatching != 0.000)){
          return(int + Number(grant.AwardMatching))
        }
        if(Number(grant.AwardOutright != 0.000) && Number(grant.AwardMatching == 0.000)){
          return(int + Number(grant.AwardOutright))
        }
        return int;
}, 0);
let I = grantArr.filter((grant) =>grant.InstState.includes("IN"));
 let sumI = I.reduce((int, grant) => 
      {
        if(Number(grant.AwardMatching != 0.000)){
          return(int + Number(grant.AwardMatching))
        }
        if(Number(grant.AwardOutright != 0.000) && Number(grant.AwardMatching == 0.000)){
          return(int + Number(grant.AwardOutright))
        }
        return int;
}, 0);
let T = grantArr.filter((grant) =>grant.InstState.includes("TN"));
 let sumT = T.reduce((int, grant) => 
      {
        if(Number(grant.AwardMatching != 0.000)){
          return(int + Number(grant.AwardMatching))
        }
        if(Number(grant.AwardOutright != 0.000) && Number(grant.AwardMatching == 0.000)){
          return(int + Number(grant.AwardOutright))
        }
        return int;
}, 0);
let O = grantArr.filter((grant) =>grant.InstState.includes("OH"));
 let sumO = O.reduce((int, grant) => 
      {
        if(Number(grant.AwardMatching != 0.000)){
          return(int + Number(grant.AwardMatching))
        }
        if(Number(grant.AwardOutright != 0.000) && Number(grant.AwardMatching == 0.000)){
          return(int + Number(grant.AwardOutright))
        }
        return int;
}, 0);
let M = grantArr.filter((grant) =>grant.InstState.includes("MO"));
 let sumM = M.reduce((int, grant) => 
      {
        if(Number(grant.AwardMatching != 0.000)){
          return(int + Number(grant.AwardMatching))
        }
        if(Number(grant.AwardOutright != 0.000) && Number(grant.AwardMatching == 0.000)){
          return(int + Number(grant.AwardOutright))
        }
        return int;
}, 0);
let W = grantArr.filter((grant) =>grant.InstState.includes("WV"));
 let sumW = W.reduce((int, grant) => 
      {
        if(Number(grant.AwardMatching != 0.000)){
          return(int + Number(grant.AwardMatching))
        }
        if(Number(grant.AwardOutright != 0.000) && Number(grant.AwardMatching == 0.000)){
          return(int + Number(grant.AwardOutright))
        }
        return int;
}, 0);
let V = grantArr.filter((grant) =>grant.InstState.includes("VA"));
 let sumV = V.reduce((int, grant) => 
      {
        if(Number(grant.AwardMatching != 0.000)){
          return(int + Number(grant.AwardMatching))
        }
        if(Number(grant.AwardOutright != 0.000) && Number(grant.AwardMatching == 0.000)){
          return(int + Number(grant.AwardOutright))
        }
        return int;
}, 0);

let sumtwo = sum/grantArr.length;

let sumLocal = (sumK + sumI + sumM + sumO + sumT + sumW + sumV)/(K.length+I.length+M.length+O.length+T.length+V.length+W.length)






  return (
    
  <div>
    <select name="Compare" onChange={handleChange}>
    <option value= {1}>Show All Data</option>
  <option value={2}>Kentucky vs. Regional</option>
  <option value= {3} >Kentucky vs. National</option>
</select>
    <table>
      <TableHead number = {getNum()}/>
      <tbody>
      <ContentMaker LocalAve = {sumLocal} average = {sumtwo} Blist = {grantArr} number = {getNum()}/>
          </tbody>
      </table>
    </div>
  );
}

export default App;

/*<table>
      <TableHead/>
      <tbody>
      {grant.map((grant, index) => (
        <tr key = {["@AppNumber"]}>
          <td>
            {props.Institution}
          </td>
          <td>
            {props.InstCity}
          </td>
          <td>
            {props.InstCountry}
          </td>

          <td>
            {props.YearAwarded}
          </td>
          <td>
            {props.ProjectTitle}
          </td>

          <td>
            {props.Division}
          </td>
          <td>
            {props.PrimaryDiscipline}
          </td>
        </tr>
      ))}
      </tbody>
    </table>)*/
