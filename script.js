var secMovie = document.getElementById("book_now");

function loadCard() {
  var data = localStorage.getItem("movies");
  data = JSON.parse(data);
  data.forEach((ele) => {
    let div = document.createElement("div");
    div.className = "col-md-4 m-4";
    let card = "";
    card = `<div class="card shadow-lg style="height:550px">
    <img src=${ele.img} style="height:430px; width:100%" class="card-img-top" alt="card poster">
    <div class="card-body">
    <h3 class="card-title">${ele.name}</h3>
    <div id="accordion">
    <div class="">
      <div class="" id="headingOne">
        <h5 class="mb-0">
          <button
            class="btn btn-outline-dark"
            data-toggle="collapse"
            data-target=#${ele.name}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            view description
          </button>
        </h5>
      </div>

      <div
        id=${ele.name}
        class="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div class="card-body">
          ${ele.desc}
        </div>
      </div>
    </div>
  </div>
    <button onclick ="newMovie(${ele.id})" class="btn btn-primary mt-4">Book Now</button>
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
