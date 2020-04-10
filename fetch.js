let movies = JSON.parse(localStorage.getItem("movies"));
let id = JSON.parse(localStorage.getItem("id"));
let movieSec = document.getElementById("seats");
let paySec = document.getElementById("payment");
let cur_movie;
price = 0;

function loadPage() {
  let div = document.createElement("div");
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
  `;

  movieSec.appendChild(div);
}
window.addEventListener("DOMContentLoaded", loadPage);
let tiks = [];
function select(idx) {
  let div = document.createElement("div");
  if (tiks[idx] == true) {
    event.target.style.backgroundColor = "";
    price -= cur_movie.price;
    delete tiks[idx];
  } else {
    tiks[idx] = true;
    price += cur_movie.price;
    event.target.style.backgroundColor = "green";
  }
  div.innerHTML = `<h2>your total cost is ${price}</h2>
                    <button>Payment</button>`;
  paySec.innerHTML = "";
  paySec.appendChild(div);
  console.log(tiks);
}
