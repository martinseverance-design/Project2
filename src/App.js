
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
      if(value == 4){
        setNum(4)
      }
      if(value == 5){
        setNum(5)
      }
      if(value == 6){
        setNum(6)
      }
      if(value == 7){
        setNum(7)
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


let grantList = grantArr;


const[temp, setTemp] = useState(0)

function sortAZ(){
  grantList.sort((a, b) => {
    return(a.Institution.localeCompare(b.Institution))
  })
  setTemp(1)
}

let yearOne = grantArr.filter((grant) => grant.YearAwarded.includes("2018"))
let yearTwo = grantArr.filter((grant) => grant.YearAwarded.includes("2019"))
let challenge = grantArr.filter((grant) => grant.Division.includes("Challenge Programs"))
let research = grantArr.filter((grant) => grant.Division.includes("Research Programs"))




  return (
    
  <div>
    <section>
    <select name="Compare" onChange={handleChange}>
    <option value= {1}>Show All Data</option>
  <option value={2}>Kentucky vs. Regional</option>
  <option value= {3} >Kentucky vs. National</option>
  </select>
  <select name="yearCompare" onChange={handleChange}>
    <option value = {1}>No Year Selected</option>
    <option value= {4}>2018 Amount:{yearOne.length}</option>
    <option value={5}>2019 Amount:{yearTwo.length}</option>
  </select>
  <select name="DivisionCompare" onChange={handleChange}>
    <option value = {1}>No Division Selected</option>
    <option value= {6}>Challenge Amount:{challenge.length}</option>
    <option value={7}>Research Amount:{research.length}</option>
  </select>
  <button onClick = {sortAZ}>Sort A-Z by Institution</button>
  <button onClick = {() => window.location.reload()}>Reset</button>
  </section>
    <table>
      <TableHead number = {getNum()}/>
      <tbody>
      <ContentMaker LocalAve = {sumLocal} average = {sumtwo} Blist = {grantList} number = {getNum()}/>
          </tbody>
      </table>
    </div>
  );
}

export default App;
