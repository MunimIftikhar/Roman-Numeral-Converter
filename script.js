function getData() {
  const number = document.getElementById("number").value;
  const output = document.getElementById("output");

  if (number.length == 0) {
    output.innerHTML = "Please enter a valid number";
  } else if (number <= -1) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
  } else if (number >= 4000) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
  } else {
    output.innerHTML = toNumeral(number);
  }
  return;
  // let res = checkPalindrome(inputData);
  // if (res == true) {
  //     output.innerHTML = inputData + " is a palindrome";
  // } else {
  //     output.innerHTML = inputData + " is not a palindrome";
  // }
}

function toNumeral(num) {
  if (!+num) return false;
  var digits = String(+num).split("");
  var key = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
  ];
  var roman = "",
    i = 3;
  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}
