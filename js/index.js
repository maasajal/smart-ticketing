// function totalSeat() {
//   const totalSeat = seatSelection("A1");
//   setBgColorById("A1");
// }

//     const initialScore = getTextElementValueById("initial-score");
//     const currentScore = initialScore + 1;
//     setTextElementValueById("initial-score", currentScore);

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
let totalPrice = 0;
for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];
  seat.addEventListener("click", function () {
    const selectedSeat = seat.innerText;
    setBgColorById(selectedSeat);
    const seatDetails = document.getElementById("seat-details");
    const p = document.createElement("p");
    p.innerText = `${selectedSeat} Economy 550`;
    seatDetails.appendChild(p);
    // Price and discount calculation
    totalPrice += 550;
    setTextElementValueById("total-price", totalPrice);
    setTextElementValueById("discounted-price", totalPrice);
    console.log(totalPrice);
  });
}

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

// if (seats === 4) {
//   const totalSeat = getTextElementValueById("seat-left");
//   const seatLeft = totalSeat - 1;
//   console.log(seatLeft);
// }
