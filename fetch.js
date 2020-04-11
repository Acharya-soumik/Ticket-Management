// accessing all movies on localstorage
var movies = JSON.parse(localStorage.getItem("movies"));
let id = JSON.parse(localStorage.getItem("curPage"));
let ticket = document.getElementById("ticket");
let poster = document.getElementById("poster");
let paySec = document.getElementById("payment");
let no_of_seats = 0;
price = 0;

let cur_movie;

function loadPage() {
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  for (key in movies) {
    if (movies[key].id == id.id) {
      cur_movie = movies[key];
    }
  }
  div1.innerHTML = `
   <img style="width:100%" src=${cur_movie.img} />
   <div class="shadow-lg text-center p-4">
    <h2 class="text-success"> ${cur_movie.name}</h2>
    <p class="text-danger">timings: ${cur_movie.timing.start} - ${cur_movie.timing.end} </p>
    <p>${cur_movie.date}</p>
    </div>`;
  div2.innerHTML = `
<div>
<p class="lead">book your seats.</p>
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
<div>
  </div>
  
  `;
  poster.appendChild(div1);
  ticket.appendChild(div2);
  div1.className = "mt-4";
  div2.className = "mt-4";
}

// loading poster when document loads.
window.addEventListener("DOMContentLoaded", loadPage);

// book seats according to availability
let tiks = [];
function select(idx) {
  let div = document.createElement("div");
  div.className = "col-md-12";
  if (tiks[idx] == true) {
    event.target.style.backgroundColor = "";
    price -= cur_movie.price;
    delete tiks[idx];
    no_of_seats -= 1;
  } else {
    tiks[idx] = true;
    price += cur_movie.price;
    no_of_seats += 1;
    event.target.style.backgroundColor = "green";
  }
  div.innerHTML = `<div class="border rounded p-4 shadow-lg mt-4 ">
                    ${
                      no_of_seats < 2
                        ? `<h2>${no_of_seats} seat selected </h2>`
                        : `<h2>${no_of_seats} seats selected </h2>`
                    }
                    
                    <p class="lead" >your total cost is Rs ${price}</p>
                    ${
                      no_of_seats == 0
                        ? `<button class="btn btn-outline-dark" disabled>Pay Now</button>`
                        : `
                        <button
                          class="btn btn-outline-success"
                          onclick="payment()"
                        >
                          Pay Now
                        </button>
                      `
                    }
                    
                    </div>
                    `;
  paySec.innerHTML = "";
  paySec.appendChild(div);
}

// on click listener for payment
function payment() {
  let seats_booked = [];
  for (let i = 0; i < tiks.length; i++) {
    if (tiks[i]) {
      cur_movie.seats[i] = true;
      seats_booked.push(i);
    }
  }
  let movieName = cur_movie.name;
  for (key in movies) {
    if (movies[key].name == movieName) {
      movies[key].seats = cur_movie.seats;
    }
  }
  localStorage.setItem("movies", JSON.stringify(movies));
  let allTickets = JSON.parse(localStorage.getItem("cart"));
  var addToCart;
  if (allTickets) {
    addToCart = [
      ...allTickets,
      {
        name: movieName,
        seats: seats_booked,
        date: new Date(Date.now()).toLocaleDateString(),
        time: new Date(Date.now()).toLocaleTimeString(),
      },
    ];
  } else {
    addToCart = [
      {
        name: movieName,
        seats: seats_booked,
        date: new Date(Date.now()).toLocaleDateString(),
        time: new Date(Date.now()).toLocaleTimeString(),
      },
    ];
  }
  localStorage.setItem("cart", JSON.stringify(addToCart));
  // clearing previous content and adding new.
  ticket.innerHTML = "";
  poster.innerHTML = "";
  paySec.innerHTML = "";
  loadPage();
  setTimeout(() => {
    window.location = "payment.html";
  }, 3000);
  alert("redirecting to your cart");
}
