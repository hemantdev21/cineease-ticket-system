const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("movie");
const time = urlParams.get("time");

const seatGrid = document.getElementById("seatGrid");
const selectedSeats = new Set();

for (let row = 0; row < 5; row++) {
  const rowDiv = document.createElement("div");
  rowDiv.className = "d-flex justify-content-center mb-2";
  for (let col = 0; col < 8; col++) {
    const seat = document.createElement("div");
    seat.className = "seat";
    seat.innerText = `${String.fromCharCode(65 + row)}${col + 1}`;
    seat.onclick = () => {
      seat.classList.toggle("selected");
      selectedSeats.has(seat.innerText)
        ? selectedSeats.delete(seat.innerText)
        : selectedSeats.add(seat.innerText);
    };
    rowDiv.appendChild(seat);
  }
  seatGrid.appendChild(rowDiv);
}

function confirmBooking() {
  if (selectedSeats.size === 0) return alert("Please select seats");

  const user = localStorage.getItem("cineease_user");
  const booking = {
    movie: movieId,
    time,
    seats: Array.from(selectedSeats),
    user,
    date: new Date().toLocaleString(),
    qr: "" // will be set after QR is generated
  };

  const qrData = JSON.stringify({
    movie: movieId,
    time: time,
    seats: Array.from(selectedSeats),
    user: user,
    date: booking.date
  });
  
  // Create a canvas and render the QR code to get the image data
  QRCode.toDataURL(qrData, (err, url) => {
    if (err) return console.error(err);

    booking.qr = url;

    const bookings = JSON.parse(localStorage.getItem("cineease_bookings") || "[]");
    bookings.push(booking);
    localStorage.setItem("cineease_bookings", JSON.stringify(bookings));

    // Show QR Code on screen
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Booking QR Code";
    img.width = 200;
    document.getElementById("qrResult").innerHTML = "<h5 class='text-info'>🎫 Booking QR Code</h5>";
    document.getElementById("qrResult").appendChild(img);
  });
}
