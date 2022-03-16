//global variables
var searchInput;
var lon;
var lat;
//var for the search input
var search = $('#search');
//var for search button
var searchBtn = $('#search-btn')


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

    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchInput +'&units=imperial&APPID=65293d15fd1af0117bccda69dffb91bb'


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

    //function to gather data from the future forecast API
function requestFiveDays(){

    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?' + lat +'&' + lon + '&units=imperial&exclude=current,minutley,hourly,alerts&APPID=65293d15fd1af0117bccda69dffb91bb'


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

function searchBar (event){
    event.preventDefault();
    var searchValue = search.val()
    console.log(searchValue);
    localStorage.setItem('searchValue', searchValue);
}

var mySearchHist = localStorage.getItem('searchValue');

        //add event listener to the button
searchBtn.on('submit' , searchBar);


    //create a function that will dynamically add a button of whatever city was searched in the input (search bar)
        //create another function that will capture saves searches from local storage and create a button for the cities that were stored there.

    //create a function that will dynamically add current weather

    //create a function that will dynamically add in the five day forecast.
        //remember to take the 7 day forecast and only show 5 (var i=0; i<5; i++)
        //remember to take the lat and lon from current weather and insert the data from that specifically
    
    
    
    
