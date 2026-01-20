
import './App.css';
import { useEffect , useState } from "react";
function App() {
  const[grant, setGrant] = useState([{}])
  useEffect(() => 
  {
    async function fetchGrant()
    {
      const url = '/NEH2020sGrant_Short.json'
      console.log("hi")
      const response = await fetch(url);
      console.log(response.ok)
      if (response.ok)
         {
            const result = await response.json();
            console.log("to")
            console.log(result.Grants.Grant)
            setGrant(result.Grants.Grant)
         }


    }
    
    fetchGrant();
    
    },[]);
  return (
    <table>
      <tbody>
        <tr className = "titles">
          <td>
            Institution
          </td>
          <td>
            City
          </td>
          <td>
            Country
          </td>
          <td>
            Year Awarded
          </td>
          <td>
            Project Title
          </td>
          <td>
            Division
          </td>
          <td>
            Primary Discipline
          </td>
        </tr>
      {grant.map((grant, index) => (
        <tr key = {grant["@AppNumber"]}>
          <td>
            {grant.Institution}
          </td>
          <td>
            {grant.InstCity}
          </td>
          <td>
            {grant.InstCountry}
          </td>

          <td>
            {grant.YearAwarded}
          </td>
          <td>
            {grant.ProjectTitle}
          </td>

          <td>
            {grant.Division}
          </td>
          <td>
            {grant.PrimaryDiscipline}
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default App;
