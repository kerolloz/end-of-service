const $ = document.querySelector.bind(document);

(() => {
  /*
   *   month :
   *   0 jan, 1 feb, 2 march, 3 apr
   */
  const END_DATE = new Date(2023, 3); //  april 2023

  if (isItOver(END_DATE)) return showEndParagraph();

  // Get today's date and time
  const now = new Date();

  // Find the distance between now and the count down date
  const distance = END_DATE - now;

  // Time calculations for days
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  $("#countdown").innerText = `${days} days to freedom...`;

  // If the count down is over
  if (distance < 0) {
    showEndParagraph();
  }
})();

function isItOver(endDate) {
  return endDate - Date.now() < 0;
}

function showEndParagraph() {
  $("#countdown").innerHTML =
    "<p> YOU <em> SURVIVED </em> IT! <br>Enjoy your life! </p>";
}
