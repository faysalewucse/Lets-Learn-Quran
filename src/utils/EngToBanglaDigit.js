function EngtoBanglaDigit(digit) {
  let number = digit.toString();
  let result = "";
  for (let i = 0; i < number.toString().length; i++) {
    if (number[i] === "0") result += "০";
    else if (number[i] === "1") result += "১";
    else if (number[i] === "2") result += "২";
    else if (number[i] === "3") result += "৩";
    else if (number[i] === "4") result += "৪";
    else if (number[i] === "5") result += "৫";
    else if (number[i] === "6") result += "৬";
    else if (number[i] === "7") result += "৭";
    else if (number[i] === "8") result += "৮";
    else if (number[i] === "9") result += "৯";
  }
  return result;
}

export default EngtoBanglaDigit;
