//global variables
var lon;
var lat;
var innerWeather = document.getElementById('inner-weather');
//var for the search input
var search = document.getElementById('search');
var cityBtn = document.getElementById('city-btn');
var cityBtnContainer = document.getElementById('city-btn-container');

//var for search button
var searchBtn = document.getElementById('search-btn');

//function that will capture the value of the search bar and add it to the api address
    
searchBtn.addEventListener('click', function(event){
    event.preventDefault();
    console.log(search.value);
    //saves these searches to local storage. 
    localStorage.setItem('search-value', search.value);
    requestCurrent();
    currentDay();
})

//this is the function for current day added to the correct area of the html
function currentDay(){
    $('#date').html(moment().format('ddd MM/DD/y'));
}

//this is the function to add the dates to the five day forecast
function fiveDays(){
    $('#date-1').html(moment().add(1, 'days').format('MM/DD/y'));
    $('#date-2').html(moment().add(2, 'days').format('MM/DD/y'));
    $('#date-3').html(moment().add(3, 'days').format('MM/DD/y'));
    $('#date-4').html(moment().add(4, 'days').format('MM/DD/y'));
    $('#date-5').html(moment().add(5, 'days').format('MM/DD/y'));
}

//functions that will gather data from the api

    //function to gather data from current weather API
function requestCurrent(){

    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + search.value +'&units=imperial&APPID=65293d15fd1af0117bccda69dffb91bb'

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        insertData(data);
        requestFiveDays();
    })
    //function that inserts data from current weather
    function insertData(data){
        var cityName = document.getElementById('city-name');
        var iconImg = document.getElementById('icon');
        var curTemp = document.getElementById('cur-temp');
        var curWind = document.getElementById('cur-wind');
        var curHumidity = document.getElementById('cur-humidity');
        // var curUv = document.getElementById('cur-uv');
        var icon = data.weather[0].icon;
        var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
        iconImg.src = iconUrl
        cityName.textContent = data.name;
        curTemp.textContent = "Temp: " + data.main.temp + "°F";
        curWind.textContent = "Wind: " + data.wind.speed + " mph";
        curHumidity.textContent = "Humidity: " + data.main.humidity + "%";
        // curUv.textContent = data.
        lon = data.coord.lon;
        lat = data.coord.lat;
    }
}

    
    
    //function that gathers data from the open weather API
function requestFiveDays(){

    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat +'&lon=' + lon + '&units=imperial&exclude=current,minutley,hourly,alerts&APPID=65293d15fd1af0117bccda69dffb91bb'
    console.log(requestUrl);
    
    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data2) {
        console.log(data2);
        var fiveDayTable;
        for (var i=0; i<6; i++) {
            fiveDayTable = `
                <div id="inner-5">
                    <h5 id="date-1"></h5>
                    <p id="icon-2"></p>
                    <p id="temp"></p>
                    <p id="wind"></p>
                    <p id="humitidy"></p>
                </div>
            `
            innerWeather.appendChild(fiveDayTable);
        }
        insertData2(data2);
        fiveDays();
        })

        //function that inserts data from open weather
    function insertData2(data2){
        var iconImg2 = document.getElementById('icon-2');
        var temp = document.getElementById('temp');
        var wind = document.getElementById('wind');
        var humidity = document.getElementById('humidity');
        var icon2 = data2.daily[i].weather[0].icon;
        var icon2Url = `http://openweathermap.org/img/wn/${icon2}@2x.png`;
        iconImg2.src = icon2Url;
        temp.textContent = "Temp: " + data2.daily[i].temp.max + "°F";
        wind.textContent = data2.daily[i].weather[0].wind_speed + " mph";
        humidity.textContent = data.main.humidity + "%";
    }
}



    
    //TODO: 
    
        //create a function that will dynamically add a button of whatever city was searched in the input (search bar)
            //create another function that will capture saves searches from local storage and create a button for the cities that were stored there.
    
        //create a function that will dynamically add current weather
    
        //create a function that will dynamically add in the five day forecast.
            //remember to take the 7 day forecast and only show 5 (var i=0; i<5; i++)
            //remember to take the lat and lon from current weather and insert the data from that specifically

    
    
    
    
