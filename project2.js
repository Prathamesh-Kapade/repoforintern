const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const heightValue = document.querySelector("#height").value;
  const weightValue = document.querySelector("#weight").value;
  const result = document.querySelector("#result");

  const height = parseInt(heightValue);
  const weight = parseInt(weightValue);

  // Input validation
  if (heightValue === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = "⚠️ Please enter a valid height";
  } else if (weightValue === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "⚠️ Please enter a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let category = "";
    if (bmi < 18.6) {
      category = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal";
    } else {
      category = "Overweight";
    }

    result.innerHTML = `Your BMI is <span>${bmi}</span> (${category})`;
  }
});
