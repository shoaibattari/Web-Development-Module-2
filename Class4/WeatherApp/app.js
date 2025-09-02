const API_KEY = `92b5524a93c2ffd6bf5240fc4e3615f3`;  
const inputdata = document.getElementById("inputField");  
const weatherIcon = document.getElementById("weatherIcon");
const tempDiv = document.getElementById("temp-div");
const weatherInfo = document.getElementById("weatherInfo");

const loader = document.createElement("p");
loader.textContent = "Loading...";
loader.style.color = "black";

const getWeather = async () => {  
  weatherInfo.innerHTML = "";
  tempDiv.innerHTML = "";
  weatherIcon.style.display = "none";
  weatherInfo.appendChild(loader);

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputdata.value}&appid=${API_KEY}&units=metric`;

  try {
    const fetchData = await fetch(API_URL);
    const response = await fetchData.json();     
    console.log(response);
    showData(response);
  } catch (error) {
    tempDiv.innerHTML = `<p style="color:red;">Error fetching data</p>`;
  }
};  

const showData = (data) => {
  weatherInfo.innerHTML = ""; 

  if (data.cod == "404") {  
    tempDiv.innerHTML = `<p style="color:red;">${data.message}</p>`;
    weatherIcon.style.display = "none";
    return;
  }  


  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherIcon.style.display = "block";
  tempDiv.innerHTML = `<p>${data.main.temp}°C</p>`;
  weatherInfo.innerHTML = `<p>${data.weather[0].main}</p>`;
};  
