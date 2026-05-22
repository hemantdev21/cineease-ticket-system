const movies = [
  {
    id: "MOV001",
    title: "Oppenheimer",
    poster: "images/oppenheimer.jpg",
    showtimes: ["10:00 AM", "2:00 PM", "6:00 PM"],
    venue: "PVR Saket, New Delhi"
  },
  {
    id: "MOV002",
    title: "Barbie",
    poster: "images/barbie.jpg",
    showtimes: ["11:00 AM", "3:00 PM", "7:00 PM"],
    venue: "INOX, Mumbai"
  },
  {
    id: "MOV003",
    title: "Dune: Part Two",
    poster: "images/dune.jpg",
    showtimes: ["9:30 AM", "1:30 PM", "5:30 PM"],
    venue: "Carnival, Bengaluru"
  },
  {
    id: "MOV004",
    title: "John Wick: Chapter 4",
    poster: "images/johnwick4.jpg",
    showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
    venue: "Cinepolis, Pune"
  },
  {
    id: "MOV005",
    title: "Avatar: The Way of Water",
    poster: "images/avatar2.jpg",
    showtimes: ["10:30 AM", "2:30 PM", "6:30 PM"],
    venue: "INOX, Kolkata"
  },
  {
    id: "MOV006",
    title: "Spider-Man: No Way Home",
    poster: "images/spiderman.jpg",
    showtimes: ["11:15 AM", "3:15 PM", "7:15 PM"],
    venue: "PVR, Chennai"
  }
];

const movieList = document.getElementById("movieList");

movies.forEach(movie => {
  const col = document.createElement("div");
  col.className = "col-sm-12 col-md-6 col-lg-4";

  col.innerHTML = `
    <div class="movie-card">
      <img src="${movie.poster}" alt="${movie.title}" />
      <div class="movie-details">
        <h3>${movie.title}</h3>
        <p>${movie.venue}</p>
        <div>
          ${movie.showtimes.map(time => `
            <a href="book-movie.html?movie=${movie.id}&time=${encodeURIComponent(time)}">
              <button class="showtime-btn">${time}</button>
            </a>
          `).join("")}
        </div>
      </div>
    </div>
  `;

  movieList.appendChild(col);
});
