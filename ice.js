// ICE CREAM COMBO DATA (Object)
// All flavor + topping combinations stored in one place
// Easy for business owner to update

const comboData = {
  "Chocolate-Sprinkles": {
    name: "Chocolate Party Delight",
    description: "Rich chocolate ice cream topped with colorful sprinkles.",
  },
  "Chocolate-Chocolate Sauce": {
    name: "Double Chocolate Dream",
    description: "Decadent chocolate with smooth chocolate sauce.",
  },
  "Chocolate-Cookie Crumbles": {
    name: "Cookie Crunch Cocoa",
    description: "Chocolate base with crunchy cookie pieces.",
  },
  "Strawberry-Sprinkles": {
    name: "Berry Celebration",
    description: "Sweet strawberry topped with fun sprinkles.",
  },
  "Strawberry-Chocolate Sauce": {
    name: "Strawberry Choco Bliss",
    description: "Fresh strawberry flavor drizzled in chocolate.",
  },
  "Strawberry-Cookie Crumbles": {
    name: "Berry Cookie Crunch",
    description: "Strawberry sweetness with cookie crumble texture.",
  },
  "Vanilla-Sprinkles": {
    name: "Classic Vanilla Party",
    description: "Smooth vanilla topped with colorful sprinkles.",
  },
  "Vanilla-Chocolate Sauce": {
    name: "Vanilla Choco Swirl",
    description: "Creamy vanilla with rich chocolate drizzle.",
  },
  "Vanilla-Cookie Crumbles": {
    name: "Cookies & Cream Twist",
    description: "Classic vanilla blended with cookie crunch.",
  },
};

//  Get dropdown elements
const flavorSelect = document.getElementById("flavor");
const toppingSelect = document.getElementById("topping");
const resultDiv = document.getElementById("result");

// Update combo when selection changes
flavorSelect.addEventListener("change", updateCombo);
toppingSelect.addEventListener("change", updateCombo);

// Updates combo result
// Demonstrates:
// - Conditional Logic
// - Object Lookup
// - Regular Expression (Week 4 concept)
function updateCombo() {
  const flavor = flavorSelect.value;
  const topping = toppingSelect.value;

  // If one dropdown is not selected, clear output
  if (!flavor || !topping) {
    resultDiv.textContent = "";
    return;
  }

  const key = `${flavor}-${topping}`;

  // Week 4: Regular Expression validation
  const pattern = /^[A-Za-z\s]+-[A-Za-z\s]+$/;

  if (!pattern.test(key)) {
    resultDiv.textContent = "Invalid selection format.";
    return;
  }

  const combo = comboData[key];

  if (combo) {
    resultDiv.innerHTML = `
      <h3>${combo.name}</h3>
      <p>${combo.description}</p>
    `;
  }

}


