const history = JSON.parse(localStorage.getItem("booking_history") || "[]");
const container = document.getElementById("bookingHistory");

history.forEach(b => {
  const card = document.createElement("div");
  card.className = "booking-card";
  card.innerHTML = `
    <h3>Movie: ${b.movieId}</h3>
    <p>Showtime: ${b.time}</p>
    <p>Seats: ${b.seats}</p>
    <div><img src="https://api.qrserver.com/v1/create-qr-code/?data=Booking-${b.id}&size=100x100" /></div>
  `;
  container.appendChild(card);
});
