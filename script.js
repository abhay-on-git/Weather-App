const card = document.querySelector('.card');
const search = document.querySelector('.searchbox button');
const weatherbox = document.querySelector('.weather-box');
const weatherdetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click',(e)=>{
   const APIKey = '55954a169a55f99dbfafbf0e6820de25';
   const city = document.querySelector('.searchbox input').value;

   if(city == ''){
    return ;
   }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json()).then(json => {

        if(json.cod == '404'){
            card.style.height = '400px';
            weatherbox.classList.remove('active');
            weatherdetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }

        card.style.height = '555px';
        weatherbox.classList.add('active');
        weatherdetails.classList.add('active');
        error404.classList.remove('active');

        // console.log(json)
        const image = document.querySelector('.weather-box img');
        const temprature = document.querySelector('.weather-box .temprature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch(json.weather[0].main){
            case 'Clear' : 
            image.src = 'images/clear.png'; 
            break;
            case 'Rain' : 
            image.src = 'images/rain.png'; 
            break;
            case 'Snow' : 
            image.src = 'images/snow.png';
            break; 
            case 'Clouds' : 
            image.src = 'images/cloud.png';
            break; 
            case 'Mist' : 
            image.src = 'images/mist.png'; 
            break;
            case 'Haze' : 
            image.src = 'images/mist.png';
            break; 
            default:
            image.src = 'images/cloud.png';     
        }
        temprature.innerHTML =` ${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

    
    })
})

// Enter button event

search.addEventListener('keyup',(e)=>{

    alert("enter event")
    if(e.key === 'Enter'){
        
        const APIKey = '55954a169a55f99dbfafbf0e6820de25';
        const city = document.querySelector('.searchbox input').value;
     
        if(city == ''){
         return ;
        }
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
         .then(response => response.json()).then(json => {
     
             if(json.cod == '404'){
                 card.style.height = '400px';
                 weatherbox.classList.remove('active');
                 weatherdetails.classList.remove('active');
                 error404.classList.add('active');
                 return;
             }
     
             card.style.height = '555px';
             weatherbox.classList.add('active');
             weatherdetails.classList.add('active');
             error404.classList.remove('active');
     
             console.log(json)
             const image = document.querySelector('.weather-box img');
             const temprature = document.querySelector('.weather-box .temprature');
             const description = document.querySelector('.weather-box .description');
             const humidity = document.querySelector('.weather-details .humidity span');
             const wind = document.querySelector('.weather-details .wind span');
     
             switch(json.weather[0].main){
                 case 'Clear' : 
                 image.src = 'images/clear.png'; 
                 break;
                 case 'Rain' : 
                 image.src = 'images/rain.png'; 
                 break;
                 case 'Snow' : 
                 image.src = 'images/snow.png';
                 break; 
                 case 'Clouds' : 
                 image.src = 'images/cloud.png';
                 break; 
                 case 'Mist' : 
                 image.src = 'images/mist.png'; 
                 break;
                 case 'Haze' : 
                 image.src = 'images/mist.png';
                 break; 
                 default:
                 image.src = 'images/cloud.png';     
             }
             temprature.innerHTML =` ${parseInt(json.main.temp)}<span>°C</span>`;
             description.innerHTML = `${json.weather[0].description}`;
             humidity.innerHTML = `${json.main.humidity}%`;
             wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
     
         
         })
    }
   
})