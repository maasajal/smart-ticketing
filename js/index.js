const seats = document.querySelectorAll(".kbd");
let selectedSeats = parseInt(document.getElementById("seat-count").innerText);
let leftSeat = parseInt(document.getElementById("seat-left").innerText);
let totalPrice = 0;
for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];
  seat.addEventListener("click", function () {
    const selectedSeat = seat.innerText;
    // created seat selection paragraph
    const seatDetails = document.getElementById("seat-details");

    const isSeatSelected = seat.classList.contains("bg-[#1DD100]");
    if (isSeatSelected) {
      // Count down how many seat left
      seat.classList.remove("bg-[#1DD100]", "text-white");
      selectedSeats--;
      leftSeat++;
      setTextElementValueById("seat-count", selectedSeats);
      setTextElementValueById("seat-left", leftSeat);

      // Remove the details of a selected seat
      const pElement = seatDetails.getElementsByTagName("p");
      for (let i = 0; i < pElement.length; i++) {
        const spanSeat = pElement[i].getElementsByTagName("span")[0];
        if (spanSeat.innerText === selectedSeat) {
          seatDetails.removeChild(pElement[i]);
          break;
        }
      }
    } else {
      if (selectedSeats >= 4) {
        alert("You cannot buy more than 4 seats");
        return;
      }
      // Count up how many seats selected
      setBtnStyleById(selectedSeat);
      selectedSeats++;
      leftSeat--;
      setTextElementValueById("seat-count", selectedSeats);
      setTextElementValueById("seat-left", leftSeat);

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
      seatDetails.appendChild(p);
    }

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
