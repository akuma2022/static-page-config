const rangeInput = document.querySelectorAll(".range-input input");
const progress = document.querySelector(".progress");

const priceGap = 1000;

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    const [minInput, maxInput] = Array.from(rangeInput).sort(
      (a, b) => parseInt(a.value) - parseInt(b.value)
    );

    const minVal = parseInt(minInput.value);
    const maxVal = parseInt(maxInput.value);

    minInput.value = minVal;
    progress.style.left = (minVal / minInput.max) * 100 + "%";

    maxInput.value = maxVal;
    progress.style.right = 100 - (maxVal / maxInput.max) * 100 + "%";
  });
});
