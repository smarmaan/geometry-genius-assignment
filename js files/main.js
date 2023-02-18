let serial = 0;

// ===========================================================================================
// ===========================================================================================
// FIRST CARD PROCESS....

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

    // const triangleAreaCM2Float =
    //   0.5 *
    //   parseFloat(valuesOfID.inputValueBString) *
    //   parseFloat(valuesOfID.inputValueHString);

    // const triangleAreaCM2String = triangleAreaCM2Float.toFixed(2);
    // const triangleAreaCM2 = parseFloat(triangleAreaCM2String);
    serial += 1;
    displayCalculatedData(valuesOfID.cardName, triangleAreaCM2);
  });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
