const weatherData = {
    tempUnit: 'C',
    windSpeedUnit: 'm/s',
    days: [{
        day: 'Mon',
        temp: '22',
        windDirection: 'north-east',
        windSpeed: '10',
        type: 'sunny'
    },
    {
        day: 'Tue',
        temp: '14',
        windDirection: 'north-west',
        windSpeed: '14',
        type: 'rainy'
    },
    {
        day: 'Wen',
        temp: '17',
        windDirection: 'south-east',
        windSpeed: '17',
        type: 'cloudy'
    },
    {
        day: 'Thu',
        temp: '8',
        windDirection: 'east',
        windSpeed: '15',
        type: 'cloudy'
    },
    {
        day: 'Fri',
        temp: '24',
        windDirection: 'south-west',
        windSpeed: '3',
        type: 'sunny'
    },
    ]
}

// generate html 
if (typeof weatherData.days != 'undefined' && weatherData.days.length > 0) {
    for (var i = 0; i < weatherData.days.length; i++) {
        var html = '';
        html += '<div class="days-inline">';
        html += '<ul onclick="showDetails(this)" id="day-' + i + '">';
        html += '<li class="dayname">Day: ' + weatherData.days[i].day + '</li>';
        html += '<li class="temp">Temp: ' + weatherData.days[i].temp + ' ' + weatherData.tempUnit + '</li>';
        html += '</ul>';
        html += '</div>';


        document.getElementById("main-div").innerHTML += html;
    }
}

// 
function showDetails(prop) {
    var id = prop.id;
    document.getElementById('main-div').style.display = "none";

    var arrayElement = id.split('-')[1];
    
    var direction = weatherData.days[arrayElement].windDirection;
    console.log(direction)
    var icon = '';
    switch (direction) {
        case "north":
            icon = direction + ' <i class="fa fa-arrow-up"></i>';
            break;
        case "east":
            icon = direction + ' <i class="fa fa-arrow-left"></i>';
            break;
        case "south":
            icon = direction + ' <i class="fa fa-arrow-down"></i>';
            break;
        case "east":
            icon = direction + ' <i class="fa fa-arrow-right"></i>';
            break;
        case "north-west":
            icon = direction + ' <i class="fa fa-arrow-down fa-rotate-45"></i>';
            break;
        case "south-west":
            icon = direction + ' <i class="fa fa-arrow-left fa-rotate-45"></i>';
            break;
        case "north-east":
            icon = direction + ' <i class="fa fa-arrow-right fa-rotate-45"></i>';
            break;
        case "south-east":
            icon = direction + ' <i class="fa fa-arrow-up fa-rotate-45"></i>';
            break;
    }

    var html = '';
    html += '<div class="days-inline">';
    html += '<ul id="day-' + i + '">';
    html += '<li class="dayStyle">Day: ' + weatherData.days[arrayElement].day + '</li>';
    html += '<li class="temp dayStyle">Temp: ' + weatherData.days[arrayElement].temp + ' ' + weatherData.tempUnit + '</li>';
    html += '<li class="dayStyle">Wind Direction: ' + icon + '</li>';
    html += '<li class="speed dayStyle">Speed: ' + weatherData.days[arrayElement].windSpeed + ' m/s</li>';
    html += '<li class="dayStyle">Today is: ' + weatherData.days[arrayElement].type + '</li>';
    html += '</ul>';
    html += '<button class="btn" onclick="backToMainView()" id="back-button">Back</button>';
    html += '</div>';


    document.querySelector(".item-details").innerHTML += html;
}




//convert
function convertTemperature(el) {
    let currentTempUnit = document.getElementById("temp-unit").value;
    let list = document.querySelectorAll('li.temp');

    if (currentTempUnit == 'c') {
        list.forEach((item, index) => {
            let value = item.innerHTML;
            value = value.split(' ')[1];
            value = (parseInt(value) + parseInt(273.15));
            item.innerHTML = 'Temp: ' + value + ' K';
        });

        document.getElementById("temp-unit").value = 'k';
        el.innerText = 'Convert to Celsius';

    } else {
        list.forEach((item, index) => {
            let value = item.innerHTML;
            value = value.split(' ')[1];
            value = (parseInt(value) - parseInt(273.15));
            item.innerHTML = 'Temp: ' + value + ' C';
        });

        document.getElementById("temp-unit").value = 'c';
        el.innerText = 'Convert to Kelvin';
    }
}

function convertSpeed(el) {
    // <input type="hidden" id="temp-unit" value="m"></input>
    let currentSpeedUnit = document.getElementById("speed-unit").value;
    let list = document.querySelectorAll('li.speed');

    if (currentSpeedUnit == 'm') {
        list.forEach((item, index) => {
            let value = item.innerHTML;
            value = value.split(' ')[1];
            value = (parseFloat(value) * parseFloat(3.6));
            item.innerHTML = 'Speed: ' + value + ' km/h';
        });

        document.getElementById("speed-unit").value = 'k';
        el.innerText = 'Convert to m/s';

    } else {
        list.forEach((item, index) => {
            let value = item.innerHTML;
            value = value.split(' ')[1];
            value = (parseFloat(value) / parseFloat(3.6));
            item.innerHTML = 'Speed: ' + value + ' m/s';
        });

        document.getElementById("speed-unit").value = 'm';
        el.innerText = 'Convert to km/s';
    }

}


//back
function backToMainView() {
    document.querySelector(".item-details").innerHTML = '';
    document.getElementById('main-div').style.display = "block";
}





//function clock
function pad(num) {
  return ('0' + num).slice(-2);
}

function updateClock() {
  var clockEl = document.getElementById('time'),
    dateObj = new Date();
  clockEl.innerHTML = pad(dateObj.getHours()) + ':' + pad(dateObj.getMinutes()) + ':' + pad(dateObj.getSeconds());
}

setInterval(updateClock, 1000);
