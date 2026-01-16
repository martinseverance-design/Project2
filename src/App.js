import logo from './logo.svg';
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
      {grant.map((grant, index) => (
        <tr key = {grant["@AppNumber"]}>
          <td>{grant.Institution}</td>
          <td>
            {grant.Institution}
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default App;
