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
let seatSelected = 0;
let totalPrice = 0;
for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];
  seat.addEventListener("click", function () {
    const selectedSeat = seat.innerText;
    setBtnStyleById(selectedSeat);
    console.log(selectedSeat);

    // Count down how many seat left
    let initialSeat = getTextElementValueById("seat-left");
    const leftedSeat = initialSeat - 1;
    setTextElementValueById("seat-left", leftedSeat);

    // Count down how many seat left
    let countSeat = getTextElementValueById("seat-count");
    seatSelected = countSeat + 1;
    setTextElementValueById("seat-count", seatSelected);

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

    seatDetails.appendChild(p);
    p.classList.add("flex", "justify-between");

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
