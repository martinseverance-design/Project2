
function TableHead(props){
  let n = props.number
  if(n == 1 || n == 4 || n == 5 || n == 6 || n == 7){
    return(
        <thead>
        <tr>
          <th>
            Institution
          </th>
          <th>
            City
          </th>
          <th>
            State
          </th>
          <th>
            Year Awarded
          </th>
          <th>
            Project Discipline
          </th>
          <th>
            Division
          </th>
          <th>
            Primary Discipline
          </th>
        </tr>
    </thead>
)}
else if(n == 2){
  return(
    <thead>
      <tr>
        <th>
          Institution
        </th>
        <th>
          Award Outright
        </th>
        <th>
          Avearge of AwardOutright and AwardMatching Regional
        </th>
      </tr>
    </thead>
  )
}
else{
  return(
    <thead>
      <tr>
        <th>
          Institution
        </th>
        <th>
          Award Outright
        </th>
        <th>
          Avearge of AwardOutright and AwardMatching Nationaly
        </th>
      </tr>
    </thead>
  )
}
}

export default TableHead;