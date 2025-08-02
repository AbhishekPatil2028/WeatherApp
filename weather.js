
const apiKey = "dd02a2b5f4794275318586e15df4b8d3"

function getWeather(){

     const city = document.getElementById("cityInput").value.trim().toLowerCase();

    const resultDiv = document.getElementById("weatherResult");

    if(!city){
        alert("Please enter the city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
     .then(response =>{

      

        if(!response.ok){
            throw new Error("city not found");

        }
        return response.json();
     })

     .then(data =>{

       const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  
        const weather= `
        <h2 id='cityName'>${data.name},${data.sys.country}</h2>

        <div id ="icon-container">

        <div class="icon" >
        <img src ="${iconUrl}" style="width:50px; vertical-align:middle;">
        <strong>Temperature:<br></strong>${data.main.temp} C</div>

       <div  class="icon">
       <img src ="${iconUrl}" style="width:50px; vertical-align:middle;">
       <strong>Weather:<br></strong> ${data.weather[0].description}</div>

       <div  class="icon">
       <img src ="${iconUrl}" style="width:50px; vertical-align:middle;">
       <strong> Humidity:<br></strong>${data.main.humidity}%</div>

       <div  class="icon">+-
        <img src ="${iconUrl}" style="width:50px; vertical-align:middle;">
        <strong>Wind Speed:<br></strong>${data.wind.speed} m/s</div> 
        </div>`  ;

       
  document.getElementById("weatherResult").innerHTML = weather;

     })

     .catch(error =>{
        resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
     });
}