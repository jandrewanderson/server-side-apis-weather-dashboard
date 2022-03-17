//global variables
var lon;
var lat;
var innerWeather = document.getElementById('inner-weather');
//var for the search input
var search = document.getElementById('search');
var cityBtnContainer = document.getElementById('city-btn-container');

//var for search button
var searchBtn = document.getElementById('search-btn');

//var for the city button
var cityBtn = document.getElementById('city-btn');
var cityBtnValue;

//var for the local storage value
var storageValue = localStorage.getItem('search-value');
var newSearchValue = localStorage.getItem('new-search-value')
//function that will capture the value of the search bar and add it to the api address
    
searchBtn.addEventListener('click', function(event){
    event.preventDefault();
    console.log(search.value);
    //saves these searches to local storage. 
    localStorage.setItem('search-value', search.value);
    requestCurrent();
    currentDay();
    createBtn();
})

//create a function that will dynamically add a button of whatever city was searched in the input (search bar)
    //create another function that will capture saves searches from local storage and create a button for the cities that were stored there.
function createBtn(){
    var cityBtnCreate = document.createElement("button");
    cityBtnCreate.classList.add('city-btn-create');
    cityBtnCreate.textContent = (search.value || storageValue);
    cityBtnContainer.appendChild(cityBtnCreate);
}

// call createBtn when page loads to getItem from local storage.
    //note: it is being called in the searchBtn function as well.
createBtn();
newSearchBtn();
//the function that will make the search button 
function newSearchBtn(){
    
    localStorage.setItem('new-search-value', newSearchValue);
    cityBtnValue = (storageValue || newSearchValue);
    console.log(cityBtnValue)
    requestCurrent();
    currentDay();
    
}

cityBtn.addEventListener('click', function(event){
    event.preventDefault();
    console.log(event);
});



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

    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + (search.value || cityBtnValue) +'&units=imperial&APPID=65293d15fd1af0117bccda69dffb91bb'
    console.log(requestUrl);

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
        var icon = data.weather[0].icon;
        var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
        iconImg.src = iconUrl
        cityName.textContent = data.name;
        curTemp.textContent = "Temp: " + data.main.temp + "°F";
        curWind.textContent = "Wind: " + data.wind.speed + " mph";
        curHumidity.textContent = "Humidity: " + data.main.humidity + "%";
        lon = data.coord.lon;
        lat = data.coord.lat;
    }
}

//TODO: FIGURE OUT WHY THE ICON SYMBOL IS NOT SHOWING UP IN THE 5 DAY FORECAST. 
    
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
        
        insertData2(data2);
        insertData3(data2);
        insertData4(data2);
        insertData5(data2);
        insertData6(data2);
        fiveDays();
        })

        //function that inserts data from open weather
    function insertData2(data2){
        var iconImg1 = document.getElementById('icon-1');
        var temp1 = document.getElementById('temp-1');
        var wind1 = document.getElementById('wind-1');
        var humidity1 = document.getElementById('humitidy-1');
        var curUv = document.getElementById('cur-uv');
        var icon1 = data2.daily[0].weather[0].icon;
        var icon1Url = `http://openweathermap.org/img/wn/${icon1}@2x.png`
        iconImg1.src = icon1Url;
        temp1.textContent = "Temp: " + data2.daily[0].temp.max + "°F";
        wind1.textContent = "Wind: " + data2.daily[0].wind_speed + " mph";
        humidity1.textContent = "Hum: " + data2.daily[0].humidity + " %";
        curUv.textContent = "Uv Index: " + data2.daily[0].uvi;
    }
    function insertData3(data2){
        var iconImg2 = document.getElementById('icon-2');
        var temp2 = document.getElementById('temp-2');
        var wind2 = document.getElementById('wind-2');
        var humidity2 = document.getElementById('humitidy-2');
        var icon2 = data2.daily[1].weather[0].icon;
        var icon2Url = `http://openweathermap.org/img/wn/${icon2}@2x.png`
        iconImg2.src = icon2Url;
        temp2.textContent = "Temp: " + data2.daily[1].temp.max + "°F";
        wind2.textContent = "Wind: " + data2.daily[1].wind_speed + " mph";
        humidity2.textContent = "Hum: " + data2.daily[1].humidity + " %";
    }
    function insertData4(data2){
        var iconImg3 = document.getElementById('icon-3');
        var temp3 = document.getElementById('temp-3');
        var wind3 = document.getElementById('wind-3');
        var humidity3 = document.getElementById('humitidy-3');
        var icon3 = data2.daily[2].weather[0].icon;
        var icon3Url = `http://openweathermap.org/img/wn/${icon3}@2x.png`
        iconImg3.src = icon3Url;
        temp3.textContent = "Temp: " + data2.daily[2].temp.max + "°F";
        wind3.textContent = "Wind: " + data2.daily[2].wind_speed + " mph";
        humidity3.textContent = "Hum: " + data2.daily[2].humidity + " %";
    }
    function insertData5(data2){
        var iconImg4 = document.getElementById('icon-4');
        var temp4 = document.getElementById('temp-4');
        var wind4 = document.getElementById('wind-4');
        var humidity4 = document.getElementById('humitidy-4');
        var icon4 = data2.daily[3].weather[0].icon;
        var icon4Url = `http://openweathermap.org/img/wn/${icon4}@2x.png`
        iconImg4.src = icon4Url;
        temp4.textContent = "Temp: " + data2.daily[3].temp.max + "°F";
        wind4.textContent = "Wind: " + data2.daily[3].wind_speed + " mph";
        humidity4.textContent = "Hum: " + data2.daily[3].humidity + " %";
    }
    function insertData6(data2){
        var iconImg5 = document.getElementById('icon-5');
        var temp5 = document.getElementById('temp-5');
        var wind5 = document.getElementById('wind-5');
        var humidity5 = document.getElementById('humitidy-5');
        var icon5 = data2.daily[4].weather[0].icon;
        var icon5Url = `http://openweathermap.org/img/wn/${icon5}@2x.png`
        iconImg5.src = icon5Url;
        temp5.textContent = "Temp: " + data2.daily[4].temp.max + "°F";
        wind5.textContent = "Wind: " + data2.daily[4].wind_speed + " mph";
        humidity5.textContent = "Hum: " + data2.daily[4].humidity + " %";
    }
}
