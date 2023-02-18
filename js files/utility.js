// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  This is the common function to get the   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       values of input field and           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 text field                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function getTheElementsValueById(cardID, inputValue1ID, inputValue2ID) {
  // ~~~~~~~~~~~~~~~      storing the input value and inner text of elements in a variable...       ~~~~~~~~~~~~~~~

  const cardName = document.getElementById(cardID).innerText;

  const inputValueBString = document.getElementById(inputValue1ID).value;

  const inputValueHString = document.getElementById(inputValue2ID).value;

  // ~~~~~~~~~~~~~~~      clearing the input field using empty string/ Quotation mark....      ~~~~~~~~~~~~~~~

  document.getElementById(inputValue1ID).value = "";

  document.getElementById(inputValue2ID).value = "";

  //    ~~~~~~~~~~~~~~~      Input validation added...      ~~~~~~~~~~~~~~~

  if (
    inputValueBString === "" ||
    inputValueHString === "" ||
    inputValueBString <= 0 ||
    inputValueHString <= 0 ||
    isNaN(inputValueBString) ||
    isNaN(inputValueHString) ||
    inputValueBString === "undefined" ||
    inputValueHString === "undefined"
  ) {
    return alert("Please Enter Valid Positive Numbers (bigger than 0...) ");
  }

  // ~~~~~~~~~~~~~~~      using alert as return to insure the validation.....      ~~~~~~~~~~~~~~~

  const valuesOfID = {
    cardName: cardName,

    inputValueBString: inputValueBString,

    inputValueHString: inputValueHString,
  };

  // ~~~~~~~~~~~~~~~      using an object variable to return all the values we get from this function...

  return valuesOfID;
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  This is the common function to display   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       the values to the calculation       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 section...                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function displayCalculatedData(cardName, AreaCM2) {
  // ~~~~~~~~~~~~~~~      selecting table container to append or push the generated value of table by function....

  const container = document.getElementById("table-container");

  const tr = document.createElement("tr");

  // ~~~~~~~~~~~~~~~      creating and defining a table row by function... also append as a child of the container....

  tr.innerHTML = `
      
      <td>${serial}</td>
      
      <td>${cardName}</td>
  
      <td>${AreaCM2}</td>

      <td><button class = "bg-red-200 rounded-xl p-1">Convert</button></td>
      
      <td>${""}</td>
      
      `;

  container.appendChild(tr);

  // ~~~~~~~~~~~~~~~      adding the created row by function to table container....      ~~~~~~~~~~~~~~~
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  This is the common function to multiply  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                  with 0.5                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function multiplyWithHalf(inputValueBString, inputValueHString) {
  //~~~~~~~~~~~~~~~      this is the function to calculate the area of an object which's equation supports the both the two amount will be multiply with each other and it will be also multiply with 0.5.
  const AreaCM2Float =
    0.5 * parseFloat(inputValueBString) * parseFloat(inputValueHString);

  // parseFloat used for to convert string value to number value ...

  const AreaCM2String = AreaCM2Float.toFixed(2);

  // toFixed refers the decimal value of a number after having to much numbers after the decimal point...

  const AreaCM2 = parseFloat(AreaCM2String);

  // converting string value into number and returning it to the function caller...

  return AreaCM2;
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  This is the common function to multiply  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@              with each other              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function multiplyWithEachOther(inputValueBString, inputValueHString) {
  // parseFloat used for to convert string value to number value ...

  const AreaCM2Float =
    parseFloat(inputValueBString) * parseFloat(inputValueHString);

  const AreaCM2String = AreaCM2Float.toFixed(2);

  // toFixed refers the decimal value of a number after having to much numbers after the decimal point...

  const AreaCM2 = parseFloat(AreaCM2String);

  // converting string value into number and returning it to the function caller...

  return AreaCM2;
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  This is the common function to multiply  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@              pi value (3.14)              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function multiplyWithPi(inputValueBString, inputValueHString) {
  // parseFloat used for to convert string value to number value ...

  const AreaCM2Float =
    3.14 * parseFloat(inputValueBString) * parseFloat(inputValueHString);

  const AreaCM2String = AreaCM2Float.toFixed(2);

  // toFixed refers the decimal value of a number after having to much numbers after the decimal point...

  const AreaCM2 = parseFloat(AreaCM2String);

  // converting string value into number and returning it to the function caller...

  return AreaCM2;
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  Linking a page with the help of js event @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          listener to a button             @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

document.getElementById("blog-page").addEventListener("click", function () {
  window.location.href = "blog.html";
});

