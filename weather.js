function weather(){
//const fetch=require('node-fetch');
let city = document.getElementById("text").value;
let apiKey = '99ea546a572d0ca9f7f9a63fa17890a5'
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(url).then((response) =>{
    return response.json();
}).then((data)=>{
    //document.write(data.main.temp);
   document.getElementById("data").value=data.main.temp
});

}
