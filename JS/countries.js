const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country)
    // }
    const countriesContainer = document.getElementById('countries-container')
    countries.forEach(country => {
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        console.log(country)
        countryDiv.innerHTML = `
            <h3> Name: ${country.name.common} </h3>
            <p> Capital: ${country.capital ? country.capital[0] : 'None'} </p>
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv)
    });
}


const loadCountryDetails = (code) => {

    /* https://restcountries.com/v3.1/alpha/{code} */

    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('See country details', code)
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = detail => {
    console.log(detail)
    const countryDetail = document.getElementById('country-detail')
    countryDetail.innerHTML = `
        <h2> Details: ${detail.name.common} </h2>
        <img src = "${detail.flags.png}">
    `
}


loadCountries()