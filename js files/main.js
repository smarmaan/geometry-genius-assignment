let serial = 0;

// ~~~~~~~~~~~~~~~      serial variable was declared to count the number every time the calculate button was clicked....

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

    //  ~~~~~~~~~~~~~~~      using functions and element id to get the values of elements...

    const triangleAreaCM2 = multiplyWithHalf(
      valuesOfID.inputValueBString,
      valuesOfID.inputValueHString
    );

    // ~~~~~~~~~~~~~~~      using function to multiply the inputs ....      ~~~~~~~~~~~~~~~

    serial += 1;

    // ~~~~~~~~~~~~~~~      increasing the serial to count the amount of button clicked ....      ~~~~~~~~~~~~~~~

    displayCalculatedData(valuesOfID.cardName, triangleAreaCM2);

    // ~~~~~~~~~~~~~~~      using function to display the inputs to calculation section....       ~~~~~~~~~~~~~~~
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

    //  ~~~~~~~~~~~~~~~      using functions and element id to get the values of elements...

    const rectangleAreaCM2 = multiplyWithEachOther(
      valuesOfID.inputValueBString,
      valuesOfID.inputValueHString
    );

    // ~~~~~~~~~~~~~~~      using function to multiply the inputs ....      ~~~~~~~~~~~~~~~

    serial += 1;

    // ~~~~~~~~~~~~~~~      increasing the serial to count the amount of button clicked ....      ~~~~~~~~~~~~~~~

    displayCalculatedData(valuesOfID.cardName, rectangleAreaCM2);

    // ~~~~~~~~~~~~~~~      using function to display the inputs to calculation section....       ~~~~~~~~~~~~~~~
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

    //  ~~~~~~~~~~~~~~~      using functions and element id to get the values of elements...

    const parallelogramAreaCM2 = multiplyWithEachOther(
      valuesOfID.inputValueBString,
      valuesOfID.inputValueHString
    );

    // ~~~~~~~~~~~~~~~      using function to multiply the inputs ....      ~~~~~~~~~~~~~~~

    serial += 1;

    // ~~~~~~~~~~~~~~~      increasing the serial to count the amount of button clicked ....      ~~~~~~~~~~~~~~~

    displayCalculatedData(valuesOfID.cardName, parallelogramAreaCM2);

    // ~~~~~~~~~~~~~~~      using function to display the inputs to calculation section....       ~~~~~~~~~~~~~~~
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

    //  ~~~~~~~~~~~~~~~      using functions and element id to get the values of elements...

    const rhombusAreaCM2 = multiplyWithHalf(
      valuesOfID.inputValueBString,
      valuesOfID.inputValueHString
    );
    // ~~~~~~~~~~~~~~~      using function to multiply the inputs ....      ~~~~~~~~~~~~~~~

    serial += 1;

    // ~~~~~~~~~~~~~~~      increasing the serial to count the amount of button clicked ....      ~~~~~~~~~~~~~~~

    displayCalculatedData(valuesOfID.cardName, rhombusAreaCM2);

    // ~~~~~~~~~~~~~~~      using function to display the inputs to calculation section....       ~~~~~~~~~~~~~~~
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

    //  ~~~~~~~~~~~~~~~      using functions and element id to get the values of elements...

    const pentagonAreaCM2 = multiplyWithHalf(
      valuesOfID.inputValueBString,
      valuesOfID.inputValueHString
    );
    // ~~~~~~~~~~~~~~~      using function to multiply the inputs ....      ~~~~~~~~~~~~~~~

    serial += 1;

    // ~~~~~~~~~~~~~~~      increasing the serial to count the amount of button clicked ....      ~~~~~~~~~~~~~~~

    displayCalculatedData(valuesOfID.cardName, pentagonAreaCM2);

    // ~~~~~~~~~~~~~~~      using function to display the inputs to calculation section....       ~~~~~~~~~~~~~~~
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

    //  ~~~~~~~~~~~~~~~      using functions and element id to get the values of elements...

    const ellipseAreaCM2 = multiplyWithPi(
      valuesOfID.inputValueBString,
      valuesOfID.inputValueHString
    );
    // ~~~~~~~~~~~~~~~      using function to multiply the inputs ....      ~~~~~~~~~~~~~~~

    serial += 1;

    // ~~~~~~~~~~~~~~~      increasing the serial to count the amount of button clicked ....      ~~~~~~~~~~~~~~~

    displayCalculatedData(valuesOfID.cardName, ellipseAreaCM2);

    // ~~~~~~~~~~~~~~~      using function to display the inputs to calculation section....       ~~~~~~~~~~~~~~~
  });

// =========================================================================================================
// @@@@@@@@@@@@@@@@@@@@@@@@@@  CARD MOUSE ENTER Color change section....  @@@@@@@@@@@@@@@@@@@@@@@@@@
// =========================================================================================================

const cards = document.querySelectorAll(".card");

// ~~~~~~~~~~~~~~~      using querySelectorAll to get the array like object of all the card class...

for (const card of cards) {
  let backgroundColorOfCard;

  // declaring a null variable to store the data inside of a function...

  card.addEventListener("mouseenter", function () {
    // every Time mouse will enter the card field this function will generate a random hexadecimal code of color....

    backgroundColorOfCard =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    // here math.floor is used to get the integer value of random number

    // the random value was multiplied because hexadecimal number contains 256 bits.... ( 256 * 256 * 256 )= 16777215

    // to.string(16) stands for hexadecimal code base 16...

    card.style.backgroundColor = backgroundColorOfCard;
  });
}
