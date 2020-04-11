//data for movies
var movies = [
  {
    id: 1,
    name: "Iron Man",
    price: 300,
    genre: ["action", "war", "adventure", "superhero"],
    language: "english",
    desc:
      "Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the first film in the Marvel Cinematic Universe. The film was directed by Jon Favreau from a screenplay by Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, and stars Robert Downey Jr. as Tony Stark / Iron Man, alongside Terrence Howard, Jeff Bridges, Shaun Toub, and Gwyneth Paltrow. In Iron Man, Tony Stark is an industrialist and master engineer who builds a mechanized suit of armor and becomes the superhero Iron Man.",
    img:
      "https://assetscdn1.paytm.com/images/catalog/product/H/HO/HOMPOSTERSKART-POST94654C5C3FD89/1563023086545_0.jpg?imwidth=320&impolicy=hq",
    seats: new Array(28).fill(false),
    timing: { start: "10pm", end: "6:30pm" },
  },
  {
    id: 2,
    name: "Shawshank Redemption",
    price: 300,
    language: "english",
    genre: ["thriller", "war", "adventure"],
    img:
      "https://rukminim1.flixcart.com/image/352/352/poster/h/m/z/posterskart-the-shawshank-redemption-poster-pksr01-medium-original-imaebcuhbuhfhryb.jpeg?q=70",
    desc:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    seats: new Array(33).fill(false),
    timing: { start: "10pm", end: "6:30pm" },
  },
  {
    id: 3,
    name: "The Flash",
    language: "hindi",
    genre: ["action", "war", "adventure", "superhero"],
    price: 300,
    img:
      "https://rukminim1.flixcart.com/image/704/704/poster/y/z/t/medium-andathedmov867-ananyadesigns-flash-minimal-wall-poster-original-imaegts2gfhtx5be.jpeg?q=70",
    desc:
      "The Flash (Bartholomew Henry 'Barry' Allen) is a fictional superhero appearing in American comic books published by DC Comics. The character first appeared in Showcase #4 (October 1956), created by writer Robert Kanigher and penciler Carmine Infantino.[1] Barry Allen is a reinvention of a previous character called the Flash, who appeared in 1940s comic books as the character Jay Garrick.",
    seats: new Array(33).fill(false),
    timing: { start: "10pm", end: "6:30pm" },
  },
  {
    id: 4,
    name: "Before Sunrise",
    price: 300,
    language: "spanish",
    genre: ["drama", "romantic"],
    img:
      "https://images.fineartamerica.com/images/artworkimages/medium/2/no1011-my-before-sunrise-minimal-movie-poster-chungkong-art.jpg",
    desc:
      "Before Sunrise is a 1995 American-Austrian romantic drama film directed by Richard Linklater and written by Linklater and Kim Krizan. The film follows Jesse (Ethan Hawke), a young American man, and Céline (Julie Delpy), a young French woman, who meet on a train and disembark in Vienna, where they spend the night walking around the city and getting to know and falling in love with each other.",
    seats: new Array(33).fill(false),
    timing: { start: "10pm", end: "6:30pm" },
  },
];
function loadData() {
  localStorage.setItem("movies", JSON.stringify(movies));
  localStorage.setItem("cart", null);
  localStorage.setItem("perPage", null);
}
let status = localStorage.getItem("movies");
if (!status) {
  loadData();
}
