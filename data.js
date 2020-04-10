//data for movies
var movies = [
  {
    id: 1,
    name: "abc",
    price: 300,
    desc: "",
    img: "",
    seats: new Array(28).fill(false),
    timing: { start: "10pm", end: "6:30pm" },
  },
  {
    id: 2,
    name: "abc2",
    price: 300,
    img: "",
    desc: "",
    seats: new Array(33).fill(false),
    timing: { start: "10pm", end: "6:30pm" },
  },
  {
    id: 3,
    name: "abc3",
    price: 300,
    img: "",
    desc: "",
    seats: new Array(33).fill(false),
    timing: { start: "10pm", end: "6:30pm" },
  },
  {
    id: 4,
    name: "abc4",
    price: 300,
    img: "",
    desc: "",
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
