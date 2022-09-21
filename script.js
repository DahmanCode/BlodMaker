// ===== GET INPUT VALUES AND ADD EVENT LISTENERS ===== //

let outputCode = document.getElementById("css-code");

let sliders = document.querySelectorAll("input[type='range']");

sliders.forEach( (slider) => {
  slider.addEventListener("input", createBlod);
});

let inputs = document.querySelectorAll("input[type='number']");

inputs.forEach( (input) => {
  input.addEventListener("change", createBlod);
});

function createBlod() {
  let radiusOne = sliders[0].value;
  let radiusTow = sliders[1].value;
  let radiusThree = sliders[2].value;
  let radiusFour = sliders[3].value;

  let blodHeight = inputs[0].value;
  let blodWidth = inputs[1].value;

  // ===== GENERATE BLOB ===== //

  let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTow}% ${100 - radiusTow}% ${100 - radiusFour}% ;`;

  document.getElementById("blod").style.cssText = `border-radius: ${borderRadius}; height: ${blodHeight}px; width: ${blodWidth}px`;

  // ===== GENERATE CSS CODE FOR BLOB ===== //

  outputCode.value = `border-radius: ${borderRadius}`
}

// ===== COPY THE GENERATE CODE TO CLIPBOARD ===== //

document.getElementById("copy").addEventListener("click", () => {
  outputCode.select();
  document.execCommand('copy');
  alert('Code Copies');
});