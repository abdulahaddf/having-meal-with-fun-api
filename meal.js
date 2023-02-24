function loadMeals(meal) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    fetch(url)
    .then (response => response.json())
    .then(data => displayMeals(data.meals))
}
function displayMeals(meals) {
    const container = document.getElementById('meals-container');
    container.innerHTML = '';
    for (const meal of meals) {
       const mealDiv = document.createElement('div');
       mealDiv.classList.add('card');
        mealDiv.innerHTML =`
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="loadModal(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
 Details
</button>
        </div>
      </div>
        
        `
        container.appendChild(mealDiv);
    }
}
function searchMeals(){
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);
}
function loadModal(idMeal){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayInModal(data.meals[0]))
//    

}
function displayInModal(meal){
    document.getElementById('modalTitle').innerText = meal.strMeal;
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <img class="img-fluid " src="${meal.strMealThumb}">
    <p>${meal.strInstructions}</p>
    `

}