//json data for movies
var movies = [
  {
    name: "abc",
    price: 300,
    seats: new Array(33).fill(false),
    timing: { start: "10pm", end: "6:30pm" },
  },
  {
    name: "abc2",
    price: 300,
    seats: new Array(33).fill(false),
    timing: { start: "10pm", end: "6:30pm" },
  },
  {
    name: "abc3",
    price: 300,
    seats: new Array(33).fill(false),
    timing: { start: "10pm", end: "6:30pm" },
  },
  {
    name: "abc4",
    price: 300,
    seats: new Array(33).fill(false),
    timing: { start: "10pm", end: "6:30pm" },
  },
];
function loadData() {
  localStorage.setItem("movies", JSON.stringify(movies));
}
let status = localStorage.getItem("movies");
if (!status) {
  loadData();
}
