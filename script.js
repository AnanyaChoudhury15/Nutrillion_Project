document.getElementById("bmiForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve form values
    const region = document.getElementById("region").value;
    const age = parseInt(document.getElementById("age").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const height = parseFloat(document.getElementById("height").value)/100;
    const weight = parseFloat(document.getElementById("weight").value);

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Determine BMI category and diet tips
    let category = "";
    let dietTip = "";

    if (bmi < 18.5) {
        category = "Underweight";
        dietTip = "Make sure to eat at least three meals per day and try to add in energy-dense snacks whenever possible. |The tastier your food is, the easier it is to eat a lot of it. | Eat mostly whole, single-ingredient foods.Don't drink water before meals.| Drinking whole milk to quench thirst is a simple way to get in more high-quality protein and calories. | Get quality sleep. Sleeping properly is very important for muscle growth.Eat your protein first and vegetables last.|Regular sleep patterns and at least 8-9 hours of sleep.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
        dietTip = "Maintain a balanced diet and regular exercise.";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        dietTip = "Consider a diet low in fats and sugars.";
    } else {
        category = "Obese";
        dietTip = "Seek a diet plan with a healthcare provider.";
    }

    // Redirect to results page with URL parameters
    const params = new URLSearchParams({
        region: region,
        age: age,
        gender: gender,
        bmi: bmi,
        category: category,
        dietTip: dietTip
    });
    
    window.location.href = `results.html?${params.toString()}`;
});
