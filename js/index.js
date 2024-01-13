const API_KEY = `dbb8a5b125736c77919b70626601c5d3`;

const loadTemp = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}
const displayTemp = data => {
    setInnerTextById('Temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main)

}
const setInnerTextById = (id, text) => {
    const value = document.getElementById(id);
    value.innerText = text;
}
document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTemp(city);
})


loadTemp();