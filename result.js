// Function to get URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        region: params.get("region"),
        age: params.get("age"),
        gender: params.get("gender"),
        bmi: params.get("bmi"),
        category: params.get("category"),
        dietTip: params.get("dietTip")
    };
}

// Display results on page
const results = getUrlParams();
document.getElementById("regionResult").textContent = results.region;
document.getElementById("ageResult").textContent = results.age;
document.getElementById("genderResult").textContent = results.gender;
document.getElementById("bmiResult").textContent = results.bmi;
document.getElementById("categoryResult").textContent = results.category;

const dietTipsArray = results.dietTip.split("|");  // Split by line breaks
const dietTipHtml = dietTipsArray.map(tip => `<li>${tip}</li>`).join("");
document.getElementById("dietTipResult").innerHTML = `<ul>${dietTipHtml}</ul>`;