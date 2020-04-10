function loadPage() {
  let movies = JSON.parse(localStorage.getItem("movies"));
  let id = JSON.parse(localStorage.getItem("id"));
  let movieSec = document.getElementById("book_movie");
  let div = document.createElement("div");
  var price = 0;
  let cur_movie;
  for (key in movies) {
    if (key.id == id) {
      cur_movie = movies[key];
    }
  }
  div.innerHTML = `<h2>Image of the movie</h2>
  <h2>${cur_movie.name}</h2>
  <div>
    <h2>seats</h2>
    <div class="row">
    ${cur_movie.seats.map((ele, idx) => {
      if (ele) {
        return `<img
            onclick="select(${idx})"
            class="icon is_active"
            src="https://image.flaticon.com/icons/svg/2052/2052398.svg"
          />`;
      } else {
        return `<img
        class="icon"
        onclick="select(${idx})"
        src="https://image.flaticon.com/icons/svg/2052/2052398.svg"
      />`;
      }
    })}
    </div>
  </div>
  <h2>Total Price : ${price}</h2>`;

  movieSec.appendChild(div);
}
window.addEventListener("DOMContentLoaded", loadPage);
function select(idx) {
  alert(idx);
}
