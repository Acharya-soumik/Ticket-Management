var movies = JSON.parse(localStorage.getItem("movies"));
let id = JSON.parse(localStorage.getItem("curPage"));
let movieSec = document.getElementById("seats");
let paySec = document.getElementById("payment");
price = 0;

let cur_movie;
function loadPage() {
  let div = document.createElement("div");
  for (key in movies) {
    if (movies[key].id == id.id) {
      cur_movie = movies[key];
    }
  }
  div.innerHTML = `
  <div class="row container">
    <div class="col-md-6 pt-4"><img src=${cur_movie.img} />
    <h2>${cur_movie.name}</h2>
    </div>
<div class="col-md-6">
<div>
<h2>seats</h2>
<div class="row col-md-12 border rounded border-dark shadow-lg p-4">
${cur_movie.seats.map((ele, idx) => {
  if (ele) {
    return `<div><img
        class="icon is_active"
        src="https://image.flaticon.com/icons/svg/2052/2052398.svg"
      />
      <p class="text-dark text-center">${idx + 1}</p>
      <hr />
      </div>`;
  } else {
    return `<div><img
    class="icon"
    onclick="select(${idx})"
    src="https://image.flaticon.com/icons/svg/2052/2052398.svg"
  />
  <p class="text-dark text-center">${idx + 1}</p>
  <hr/>
 </div>`;
  }
})}
</div>
</div>
<div>
  </div>
  
  `;

  movieSec.appendChild(div);
}
window.addEventListener("DOMContentLoaded", loadPage);
let tiks = [];
function select(idx) {
  let div = document.createElement("div");
  div.className = "col-md-12";
  if (tiks[idx] == true) {
    event.target.style.backgroundColor = "";
    price -= cur_movie.price;
    delete tiks[idx];
  } else {
    tiks[idx] = true;
    price += cur_movie.price;
    event.target.style.backgroundColor = "green";
  }
  div.innerHTML = `<div class="border rounded p-4 shadow-lg mt-4 ">
                    <h2>no of seats: </h2>
                    <p class="lead" >your total cost is Rs ${price}</p>
                    <button class="btn btn-outline-success" onclick ="payment()">Pay Now</button>
                    </div>
                    `;
  paySec.innerHTML = "";
  paySec.appendChild(div);
}
function payment() {
  for (let i = 0; i < tiks.length; i++) {
    if (tiks[i]) {
      cur_movie.seats[i] = true;
    }
  }
  let movieName = cur_movie.name;
  for (key in movies) {
    if (movies[key].name == movieName) {
      movies[key].seats = cur_movie.seats;
    }
  }
  localStorage.setItem("movies", JSON.stringify(movies));
  movieSec.innerHTML = "";
  loadPage();
}
