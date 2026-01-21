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
            {grant.InstState}
          </td>

          <td>
            {grant.YearAwarded}
          </td>
          <td>
            {grant.PrimaryDiscipline}
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
        else if(n == 4){
          let year = grantArr.filter((grant) => grant.YearAwarded.includes("2018"))
          return(
            year.map((grant, index) =>

        <tr key = {grant["@AppNumber"]}>
          <td>
            {grant.Institution}
          </td>
          <td>
            {grant.InstCity}
          </td>
          <td>
            {grant.InstState}
          </td>

          <td>
            {grant.YearAwarded}
          </td>
          <td>
            {grant.PrimaryDiscipline}
          </td>

          <td>
            {grant.Division}
          </td>
          <td>
            {grant.PrimaryDiscipline}
          </td>
        </tr>)
          )
        }
        else if(n == 5){
          let year = grantArr.filter((grant) => grant.YearAwarded.includes("2019"))
          return(
            year.map((grant, index) =>

        <tr key = {grant["@AppNumber"]}>
          <td>
            {grant.Institution}
          </td>
          <td>
            {grant.InstCity}
          </td>
          <td>
            {grant.InstState}
          </td>

          <td>
            {grant.YearAwarded}
          </td>
          <td>
            {grant.PrimaryDiscipline}
          </td>

          <td>
            {grant.Division}
          </td>
          <td>
            {grant.PrimaryDiscipline}
          </td>
        </tr>)
          )
        }
        else if(n == 6){
          let year = grantArr.filter((grant) => grant.Division.includes("Challenge Programs"))
          return(
            year.map((grant, index) =>

        <tr key = {grant["@AppNumber"]}>
          <td>
            {grant.Institution}
          </td>
          <td>
            {grant.InstCity}
          </td>
          <td>
            {grant.InstState}
          </td>

          <td>
            {grant.YearAwarded}
          </td>
          <td>
            {grant.PrimaryDiscipline}
          </td>

          <td>
            {grant.Division}
          </td>
          <td>
            {grant.PrimaryDiscipline}
          </td>
        </tr>)
          )
        }
        else if(n == 7){
          let year = grantArr.filter((grant) => grant.Division.includes("Research Programs"))
          return(
            year.map((grant, index) =>

        <tr key = {grant["@AppNumber"]}>
          <td>
            {grant.Institution}
          </td>
          <td>
            {grant.InstCity}
          </td>
          <td>
            {grant.InstState}
          </td>

          <td>
            {grant.YearAwarded}
          </td>
          <td>
            {grant.PrimaryDiscipline}
          </td>

          <td>
            {grant.Division}
          </td>
          <td>
            {grant.PrimaryDiscipline}
          </td>
        </tr>)
          )
        }
}
export default ContentMaker;