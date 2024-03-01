function getWeatherDetails(){
    console.log(place.value);

    const weatherDetails = async ()=>{
        if(place.value){
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place.value}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`);
            if(response.status === 200){
                const weatherPlaceDetails = await response.json();
                var currentdate = new Date(); 
                console.log(weatherPlaceDetails);

                weatherSummary.innerHTML = `
                    <h3>${weatherPlaceDetails.main.temp}&deg;</h3>
                    <p> feels like ${weatherPlaceDetails.main.feels_like}&deg;</p>
                    <h3>${weatherPlaceDetails.name}</h3>
                    <p>${currentdate}</p>
                    <p class="text-center">${weatherPlaceDetails.weather[0].description}</p>`

                country.innerHTML = `${weatherPlaceDetails.sys.country}`     
                humidity.innerHTML = `${weatherPlaceDetails.main.humidity} %`  
                wind.innerHTML = `${weatherPlaceDetails.wind.speed} kmph`   
                pressure.innerHTML = `${weatherPlaceDetails.main.pressure}`     

            }    
            else{
                alert("Place Not Found!!!")
            }
        }
        else{
            alert("Please provide a place")
        }
    }
    weatherDetails();
}