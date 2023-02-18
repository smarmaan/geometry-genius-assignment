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
