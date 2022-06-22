const searchButton = document.querySelector('#button-addon2');
const inputKeyword = document.querySelector('.input-keyword');
document.body.style.backgroundImage = 'url(img/sky.jpg)'

searchButton.addEventListener('click', function() {

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputKeyword.value+"&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric")
        .then(response => response.json())
        .then(response => {
            let result = document.querySelector('.result')

            result.innerHTML = `<h2 style="margin-bottom: 15px;" class="city">${response.name}, ${response.sys.country}</h2>
                                <h5><span class="temp">Temperatur : ${response.main.temp}°С</span> <span class="temp">Condition : ${response.weather[0].main}</span> <span class="temp">Clouds : ${response.clouds.all}%</span></h5>` 
        })
    inputKeyword.value = null;
})
