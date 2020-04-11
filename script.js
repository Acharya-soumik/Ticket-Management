var secMovie = document.getElementById("book_now");
var data = localStorage.getItem("movies");

function loadCard(value) {
  if (value == event) {
    allMovies = JSON.parse(data);
  } else {
    allMovies = value;
  }
  allMovies.forEach((ele) => {
    let div = document.createElement("div");
    div.className = "col-md-4 m-4";
    let card = "";
    card = `<div class="card poster_card shadow-lg style="height:550px">
              <img src=${ele.img} style="height:430px; width:100%" class="card-img-top" alt="card poster">
              <div class="card-body">
              <h3 class="card-title">${ele.name}</h3>
              <div class="accordion" id="accordionExample">
              <div id="headingTwo">
                <h2 class="mb-0">
                  <small class="btn btn-ouline-light collapsed" type="button" data-toggle="collapse" data-target=#${ele.name} aria-expanded="false" aria-controls="collapseTwo">
                    view description
                  </small>
                </h2>
              </div>
              <div id=${ele.name} class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body">
                ${ele.desc}
                </div>
              </div>
            </div>
              <button onclick ="newMovie(${ele.id})" class="btn btn-primary mt-4">Book Now</button>
              </div>
            </div>`;
    div.innerHTML = card;
    secMovie.appendChild(div);
  });
}

// on load
window.addEventListener("DOMContentLoaded", loadCard);

function newMovie(id) {
  localStorage.setItem("curPage", JSON.stringify({ id }));
  window.location = "/movie.html";
}

// filter
let filter_lang = document.getElementById("filter_language");
let filter_genre = document.getElementById("filter_genre");

function changeHandlerGenre() {
  let filteredList;
  let value = event.target.value.toLowerCase();
  if (value == "all") {
    filteredList = JSON.parse(data);
  } else {
    let clone_movies = [...JSON.parse(data)];
    filteredList = clone_movies.filter((ele) => {
      if (ele.genre.includes(value)) {
        return true;
      }
    });
  }
  secMovie.innerHTML = "";
  loadCard(filteredList);
}
function changeHandlerLanguage() {
  let filteredList;
  let value = event.target.value.toLowerCase();
  if (value == "all") {
    filteredList = JSON.parse(data);
  } else {
    let clone_movies = [...JSON.parse(data)];
    filteredList = clone_movies.filter((ele) => {
      return ele.language == value;
    });
  }
  secMovie.innerHTML = "";
  loadCard(filteredList);
}
filter_lang.addEventListener("change", changeHandlerLanguage);
filter_genre.addEventListener("change", changeHandlerGenre);
