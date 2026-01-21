import { useState } from "react";


function ContentMaker(props){
let n = props.number
let grantArr = props.Blist
let ave = props.average
let localAve = props.LocalAve
    
if(n == 1){
  return(
  grantArr.map((grant, index) =>

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
        </tr>))
  
      }
        else if(n == 2){
          let ken = grantArr.filter((grant) =>grant.InstState.includes("KY"));
          return(
            ken.map((grant, index) =>
            <tr key = {grant["@AppNumber"]}>
              <td>
                {grant.Institution}
              </td>
              <td>
                ${Number(grant.AwardOutright)}
              </td>
              <td>
                ${localAve}
              </td>
            </tr>)
          )
        }
        else if(n == 3){
          let ken = grantArr.filter((grant) =>grant.InstState.includes("KY"));
          return(
            ken.map((grant, index) =>
            <tr key = {grant["@AppNumber"]}>
              <td>
                {grant.Institution}
              </td>
              <td>
                ${Number(grant.AwardOutright)}
              </td>
              <td>
                ${ave}
              </td>
            </tr>)
          )
        }
}
export default ContentMaker;