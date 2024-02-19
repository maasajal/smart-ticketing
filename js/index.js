const seats = document.querySelectorAll(".kbd");
// for (let seat of seats) {
//   seat.addEventListener("click", function () {
//     const selectedSeat = seat.innerText;
//     // console.log(selectedSeat);
//     setBgColorById(selectedSeat);
//     const totalSeat = getTextElementValueById("seat-left");
//     const seatLeft = totalSeat - 1;
//     console.log(seatLeft);
//   });
// }
let selectedSeats = 0;
let totalPrice = 0;
for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];
  seat.addEventListener("click", function () {

    const selectedSeat = seat.innerText;

    // created seat selection paragraph
    const seatDetails = document.getElementById("seat-details");
    const p = document.createElement("p");
    const spanSeat = document.createElement("span");
    const spanEco = document.createElement("span");
    const spanPrice = document.createElement("span");
    spanSeat.innerText = selectedSeat;
    spanEco.innerText = "Economy";
    spanPrice.innerText = "550";

    p.appendChild(spanSeat);
    p.appendChild(spanEco);
    p.appendChild(spanPrice);

    // seatDetails.appendChild(p);
    p.classList.add("flex", "justify-between");

    const isSeatSelected = seat.classList.contains("bg-[#1DD100]");
    if (isSeatSelected) {
      seat.classList.remove("bg-[#1DD100]", "text-white");
      selectedSeats--;
    } else {
      if (selectedSeats >= 4) {
        alert("You cannot buy more than 4 seats");
        return;
      }
      // setBtnStyleById(selectedSeat);
      seat.classList.add("bg-[#1DD100]", "text-white");
      selectedSeats++;
      seatDetails.appendChild(p);
    }
    // Count down how many seat left
    let initialSeat = getTextElementValueById("seat-left");
    const leftSeat = initialSeat - 1;
    setTextElementValueById("seat-left", leftSeat);

    // Count up how many seats selected
    // selectedSeats++;
    setTextElementValueById("seat-count", selectedSeats);

    // Price and discount calculation
    totalPrice += 550;
    setTextElementValueById("total-price", totalPrice);
    setTextElementValueById("discounted-price", totalPrice);
  });
}

// Apply coupons and calculate the price
const couponApply = document.getElementById("coupon-apply");
couponApply.addEventListener("click", function () {
  const couponInput = document.getElementById("coupon-code").value;
  if (couponInput === "NEW15") {
    const discountPrice = totalPrice * 0.15;
    const finalPrice = totalPrice - discountPrice;
    setTextElementValueById("discount-price", discountPrice);
    hideElementById("coupon");
    showElementById("discount");
    setTextElementValueById("discounted-price", finalPrice);
  } else if (couponInput === "Couple 20") {
    const discountPrice = totalPrice * 0.2;
    const finalPrice = totalPrice - discountPrice;
    setTextElementValueById("discount-price", discountPrice);
    hideElementById("coupon");
    showElementById("discount");
    setTextElementValueById("discounted-price", finalPrice);
  } else {
    alert("Invalid Coupon!");
  }
});
