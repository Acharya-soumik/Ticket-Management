var secMovie = document.getElementById("book_now");

function loadCard() {
  var data = localStorage.getItem("movies");
  data = JSON.parse(data);
  data.forEach((ele) => {
    let div = document.createElement("div");
    let card = "";
    card = `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${ele.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button onclick ="newMovie(${ele.id})" class="btn btn-primary">Book Now</button>
    </div>
    </div>`;
    div.innerHTML = card;
    secMovie.appendChild(div);
  });
  payment();
}

// on load
window.addEventListener("DOMContentLoaded", loadCard);

function newMovie(id) {
  localStorage.setItem("curPage", JSON.stringify({ id }));
  window.location = "/movie.html";
}
