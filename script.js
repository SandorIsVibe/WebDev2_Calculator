function submit(){
  
  const num1 = parseInt(document.getElementById("input1").value);
  const num2 = parseInt(document.getElementById("input2").value);
  const op = document.getElementById("operation").value;
  sol = document.getElementById("solution");
  let result;
  
  switch(op) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    default:
      result = "invalid";
  }
  
  sol.innerHTML = result;
}