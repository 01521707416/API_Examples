const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data.meals));
}


const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal_container')
    mealsContainer.innerHTML = ``
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="card" onclick="mealDetails(${meal.idMeal})">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </div>
        `
        mealsContainer.appendChild(mealDiv)
    });
}

const searchFood = () => {
    const searchField = document.getElementById('search_field')
    const searchText = searchField.value;
    loadMeals(searchText)
    searchField.value = ''
}

const mealDetails = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
    const detailContainer = document.getElementById('detail_container')
    detailContainer.innerHTML = ``
    const mealsDiv = document.createElement('div')
    mealsDiv.classList.add('card')
    mealsDiv.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        `
    detailContainer.appendChild(mealsDiv)
}

loadMeals('');