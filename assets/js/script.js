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

//TODO: 

    //create a function that will capture the value of the search bar and add it to the api address
        //save these searches to local storage. 

    //create a function that will dynamically add a button of whatever city was searched in the input (search bar)
        //create another function that will capture saves searches from local storage and create a button for the cities that were stored there.

    //create a function that will dynamically add current weather

    //create a function that will dynamically add in the five day forecast.
        //remember to take the 7 day forecast and only show 5 (var i=0; i<5; i++)
        //remember to take the lat and lon from current weather and insert the data from that specifically
    
    //create a function that will 
    
    
