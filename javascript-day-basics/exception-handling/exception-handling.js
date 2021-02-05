stringToInt = (x) => {
    const parsedString = parseInt(x);
    if (isNaN(parsedString)) {
        throw {
            message: (`input ${x} cannot be a number only a string`)
        }
    } 

    document.getElementById("welcome").innerHTML = parsedString;
  
}
try {
    console.log('A');

    console.log(stringToInt('2'));

    console.log('B');
}

catch (e) {
    console.log('error found:' + e.message);
}

finally {
    console.log('C');
}

stringToInt('2');