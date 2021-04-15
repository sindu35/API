function result(){
//const fetch=require("node-fetch");
let country=document.getElementById("text").value;
let url="https://api.covid19api.com/country/"+country;
fetch(url).then((response)=>{
    return response.json();
}).then((data)=>
{
    let table=document.createElement("TABLE");
    table.border="1";
    table.width="800";
    table.align="center"
    row=table.insertRow(-1)
    cellH1=row.insertCell(-1)
    cellH2=row.insertCell(-1)
    cellH3=row.insertCell(-1)
    cellH4=row.insertCell(-1)
    cellH5=row.insertCell(-1)
    cellH1.innerHTML="Sno."
    cellH2.innerHTML="Date"
    cellH3.innerHTML="ActiveCases"
    cellH4.innerHTML="Death"
    cellH5.innerHTML="Recovered"

      data.forEach((ele)=>{
        
      row1=table.insertRow(-1);
      cell1=row1.insertCell(-1)
      cell2=row1.insertCell(-1)
      cell3=row1.insertCell(-1)
      cell4=row1.insertCell(-1)
      cell5=row1.insertCell(-1)

      cell1.innerHTML=data.indexOf(ele)+1
        cell2.innerHTML=ele.Date
      cell3.innerHTML=ele.Active
      cell4.innerHTML=ele.Deaths
      cell5.innerHTML=ele.Recovered
      })
    var divtab=document.getElementById("data");
    divtab.append(table); 
    console.log(data)
})
    //console.log(data);
   

}