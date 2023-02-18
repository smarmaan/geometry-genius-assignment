let serial = 0;

// =========================================================================================================
// @@@@@@@@@@@@@@@@@@@@@@@@@@   FIRST CARD DOM manipulation & creating events.... @@@@@@@@@@@@@@@@@@@@@@@@@@
// =========================================================================================================

document
  .getElementById("triangle-calculate")
  .addEventListener("click", function () {
    const valuesOfID = getTheElementsValueById(
      "triangle-card",
      "triangle-value-b",
      "triangle-value-h"
    );

    const triangleAreaCM2 = multiplyWithHalf(
      valuesOfID.inputValueBString,
      valuesOfID.inputValueHString
    );

    serial += 1;
    displayCalculatedData(valuesOfID.cardName, triangleAreaCM2);
  });

// =========================================================================================================
// @@@@@@@@@@@@@@@@@@@@@@@@@@  SECOND CARD DOM manipulation & creating events.... @@@@@@@@@@@@@@@@@@@@@@@@@@
// =========================================================================================================

document
  .getElementById("rectangle-calculate")
  .addEventListener("click", function () {
    const valuesOfID = getTheElementsValueById(
      "rectangle-card",
      "rectangle-value-w",
      "rectangle-value-i"
    );

    const rectangleAreaCM2 = multiplyWithEachOther(
      valuesOfID.inputValueBString,
      valuesOfID.inputValueHString
    );

    serial += 1;
    displayCalculatedData(valuesOfID.cardName, rectangleAreaCM2);
  });

// =========================================================================================================
// @@@@@@@@@@@@@@@@@@@@@@@@@@  THIRD CARD DOM manipulation & creating events....  @@@@@@@@@@@@@@@@@@@@@@@@@@
// =========================================================================================================

document
  .getElementById("parallelogram-calculate")
  .addEventListener("click", function () {
    const valuesOfID = getTheElementsValueById(
      "parallelogram-card",
      "parallelogram-value-b",
      "parallelogram-value-h"
    );

    const parallelogramAreaCM2 = multiplyWithEachOther(
      valuesOfID.inputValueBString,
      valuesOfID.inputValueHString
    );

    serial += 1;
    displayCalculatedData(valuesOfID.cardName, parallelogramAreaCM2);
  });

// =========================================================================================================
// @@@@@@@@@@@@@@@@@@@@@@@@@@  FOURTH CARD DOM manipulation & creating events....  @@@@@@@@@@@@@@@@@@@@@@@@@@
// =========================================================================================================

document
  .getElementById("rhombus-calculate")
  .addEventListener("click", function () {
    const valuesOfID = getTheElementsValueById(
      "rhombus-card",
      "rhombus-value-d1",
      "rhombus-value-d2"
    );

    const rhombusAreaCM2 = multiplyWithHalf(
      valuesOfID.inputValueBString,
      valuesOfID.inputValueHString
    );

    serial += 1;
    displayCalculatedData(valuesOfID.cardName, rhombusAreaCM2);
  });

// =========================================================================================================
// @@@@@@@@@@@@@@@@@@@@@@@@@@  FIFTH CARD DOM manipulation & creating events....  @@@@@@@@@@@@@@@@@@@@@@@@@@
// =========================================================================================================

document
  .getElementById("pentagon-calculate")
  .addEventListener("click", function () {
    const valuesOfID = getTheElementsValueById(
      "pentagon-card",
      "pentagon-value-p",
      "pentagon-value-b"
    );

    const pentagonAreaCM2 = multiplyWithHalf(
      valuesOfID.inputValueBString,
      valuesOfID.inputValueHString
    );

    serial += 1;
    displayCalculatedData(valuesOfID.cardName, pentagonAreaCM2);
  });

// =========================================================================================================
// @@@@@@@@@@@@@@@@@@@@@@@@@@  SIXTH CARD DOM manipulation & creating events....  @@@@@@@@@@@@@@@@@@@@@@@@@@
// =========================================================================================================

document
  .getElementById("ellipse-calculate")
  .addEventListener("click", function () {
    const valuesOfID = getTheElementsValueById(
      "ellipse-card",
      "ellipse-value-a",
      "ellipse-value-b"
    );

    const ellipseAreaCM2 = multiplyWithPi(
      valuesOfID.inputValueBString,
      valuesOfID.inputValueHString
    );

    serial += 1;
    displayCalculatedData(valuesOfID.cardName, ellipseAreaCM2);
  });

// =========================================================================================================
// @@@@@@@@@@@@@@@@@@@@@@@@@@  CARD MOUSE ENTER Color change section....  @@@@@@@@@@@@@@@@@@@@@@@@@@
// =========================================================================================================

const cards = document.querySelectorAll(".card");

for (const card of cards) {
  let backgroundColorOfCard;

  card.addEventListener("mouseenter", function () {
    backgroundColorOfCard =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    // 16 stands for hexadecimal code...

    card.style.backgroundColor = backgroundColorOfCard;
  });
}
