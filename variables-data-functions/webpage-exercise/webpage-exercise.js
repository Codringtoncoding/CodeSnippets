function buttonClick() {
  const inputValue = document.getElementById("inputText").value;

  if (inputValue == "") {
    alert("enter a value");
    return null;
  }

  if (isNaN(inputValue)) {
      const newString = inputValue.slice(0,3)

      return alert(newString)
  }

  if (inputValue == typeof number);
  {
    const newNumber = parseInt(inputValue);
    const Numberalert = newNumber.toPrecision(4);
    alert(`${Numberalert}`);
  }
}
