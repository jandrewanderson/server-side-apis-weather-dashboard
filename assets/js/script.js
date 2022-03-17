//global variables
    var lon;
    var lat;
    //var for the search input
    var search = document.getElementById('search');
    
    
    //var for search button
    var searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', function(event){
        event.preventDefault();
        console.log(search.value);
        requestCurrent();
    })
    
    //this is the current day. added to the correct area of the html
    $('#date').html(moment().format('ddd MM/DD/y'))
    
    //this is the function to add the dates to the five day forecast
    function fiveDays(){
        $('#date-1').html(moment().add(1, 'days').format('MM/DD/y'));
        $('#date-2').html(moment().add(2, 'days').format('MM/DD/y'));
        $('#date-3').html(moment().add(3, 'days').format('MM/DD/y'));
        $('#date-4').html(moment().add(4, 'days').format('MM/DD/y'));
        $('#date-5').html(moment().add(5, 'days').format('MM/DD/y'));
    }
    fiveDays();
    
    
    
    //functions that will gather data from the api
    
        //function to gather data from current weather API
    function requestCurrent(){
    
        var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + search.value +'&units=imperial&APPID=65293d15fd1af0117bccda69dffb91bb'
    
        //this is just for reference. Delete once requestUrl works.
        // var requestUrlDallas = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&APPID=65293d15fd1af0117bccda69dffb91bb'
    
        fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var cityName = data.name;
            console.log(data);
            insertData(data);
            requestFiveDays();
        })
    
    }

function insertData(data){
    var cityName = document.getElementById('city-name');
    var iconImg = document.getElementById('icon');
    var curTemp = document.getElementById('cur-temp');
    var curWind = document.getElementById('cur-wind');
    var curHumidity = document.getElementById('cur-humidity');
    var curUv = document.getElementById('cur-uv');
    var icon = data.weather[0].icon;
    var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
    iconImg.src = iconUrl
    cityName.textContent = data.name;
    curTemp.textContent = "Temp: " + data.main.temp + "°F";
    curWind.textContent = data.wind.speed + " mph";
    curHumidity.textContent = data.main.humidity + "%";
    // curUv.textContent = data.
    lon = data.coord.lon;
    lat = data.coord.lat;
}
    
    
        //function to gather data from the future forecast API
    function requestFiveDays(){
    
        var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat +'&lon=' + lon + '&units=imperial&exclude=current,minutley,hourly,alerts&APPID=65293d15fd1af0117bccda69dffb91bb'
        console.log(requestUrl);
        
        fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // var memesArray = data.data.memes;
            // console.log(memesArray)
    
            // memesArray.forEach(item => {
            //     var url = item.url
    
            //     var img = $(`<img src=${url} alt="meme">`);
            //     main.append(img);
            // })
        })
    
    }
    
    
    //TODO: 
    
        //create a function that will capture the value of the search bar and add it to the api address
            //save these searches to local storage. 
            //add event listener to the button
    
        //create a function that will dynamically add a button of whatever city was searched in the input (search bar)
            //create another function that will capture saves searches from local storage and create a button for the cities that were stored there.
    
        //create a function that will dynamically add current weather
    
        //create a function that will dynamically add in the five day forecast.
            //remember to take the 7 day forecast and only show 5 (var i=0; i<5; i++)
            //remember to take the lat and lon from current weather and insert the data from that specifically

    
    
    
    
