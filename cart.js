window.addEventListener("DOMContentLoaded", loadCard);
var cart_div = document.getElementById("bookings_made");
var allBookings = JSON.parse(localStorage.getItem("cart"));
function loadCard() {
  let allBookings = JSON.parse(localStorage.getItem("cart"));
  let div = document.createElement("div");
  div.className = "col-md-5 text-center shadow-lg m-auto border border-dark";
  for (let i = 0; i < allBookings.length; i++) {
    var obj = allBookings[i];
    div.innerHTML += `<div class = "border m-2 p-4">
                        <p class="lead">name of movie ${obj.name}</p>
                        <p>booked at date: ${obj.date} 
                                    time: ${obj.time}</p>
                        <p> seats booked are ${obj.seats.map((ele) => {
                          return (ele + 1).toString();
                        })} <p>
                        </hr>
                        <button id="cancel" value="${obj.name}"
                        onclick="cancelBooking()"
                        class="btn btn-danger">cancel booking</button>
                    </div>
                    `;
  }
  cart_div.appendChild(div);
}
function cancelBooking() {
  let movieName = event.target.value;
  let movieInCart = [];
  let movieToRemove;
  allBookings.forEach((ele) => {
    if (ele.name != movieName) {
      movieInCart.push(ele);
    } else {
      movieToRemove = ele;
    }
  });
  localStorage.setItem("cart", JSON.stringify(movieInCart));
  var allmovies = JSON.parse(localStorage.getItem("movies"));
  for (let i = 0; i < allmovies.length; i++) {
    let ele = allmovies[i];
    if (ele.name == movieToRemove.name) {
      let totalSeats = ele.seats;
      for (let j = 0; j < movieToRemove.seats.length; j++) {
        let seatToCancel = movieToRemove.seats[j];
        totalSeats[seatToCancel] = false;
      }
    }
  }
  localStorage.setItem("cart", JSON.stringify(movieInCart));
  localStorage.setItem("movies", JSON.stringify(allmovies));
  cart_div.innerHTML = "";
  alert("your booking has been cancelled");
  loadCard();
}
