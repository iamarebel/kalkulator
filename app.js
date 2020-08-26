
// deklaracja zmiennych wszystkich elelementów
let firstInput = document.querySelector("#first-input");
let secondInput = document.querySelector("#second-input");
let addition = document.querySelector("#addition");
let substraction = document.querySelector("#subtraction");
let multiplication = document.querySelector("#multiplication");
let division = document.querySelector("#division");
let factorial = document.querySelector("#factorial");
let fibonacci = document.querySelector("#ciag-fibonacciego");
let equals = document.querySelector("#equals");
let result = document.querySelector("#result");

// funkcja usuwajaca klase active z elementu ktory zostanie znaleziony
let removeActiveClass = () => {
  let activeElement = document.querySelector(".active");

  if (activeElement) {
    activeElement.classList.remove("active");
  }
}

//dodajemy event na target (uniwersalny) ktory bedize czekal az
// cos sie stnaie i doda klase active wtedy, w devtoolsach po wywolaniu eventow pokazuje target  w wlasciwosciach
let handleClick = (event) => {
  removeActiveClass();
  event.target.classList.add("active"); // dodawanie klasy active - po nazwie klasy
// console.log(event);
}

// nasluchujemy na klikniecia i wywolujemy addActiveClass aby nadac klase aktywna na klikniety element
addition.addEventListener("click", handleClick);
substraction.addEventListener("click", handleClick);
multiplication.addEventListener("click", handleClick);
division.addEventListener("click", handleClick);
factorial.addEventListener("click", handleClick);
fibonacci.addEventListener("click", handleClick);


let factorialFunction = () => {
  let number = firstInput.valueAsNumber;
  if (number === 1 || number === 0) {
    result.value = 1;
  } 
  else if  (number < 0) {
    alert("the number needs to be a positive number");
  }
  // funcja dziala aż do else, wpisanie wyższej liczby niż 1 w firstInput skutkuje Uncaught RangeError: Maximum call stack size exceeded
  else {
    return result.value = number * factorialFunction(number - 1);
  }
}

let handleOperation = () => {
  let activeOperation = document.querySelector(".active");
  result.value = "";  // czyszczenie  pola zeby stare wyniki nie zsotaly

  if (activeOperation === addition) {
    result.value = firstInput.valueAsNumber + secondInput.valueAsNumber;
  }

  else if (activeOperation === substraction) {
    result.value = firstInput.valueAsNumber - secondInput.valueAsNumber;
  }

  else if (activeOperation === multiplication) {
    result.value = firstInput.valueAsNumber * secondInput.valueAsNumber;
  }

  else if (activeOperation === division) {
    if(secondInput.valueAsNumber !== 0)
    result.value = firstInput.valueAsNumber / secondInput.valueAsNumber;
  }

  else if (activeOperation === factorial) {
    factorialFunction();
  }
}

equals.addEventListener("click", handleOperation);

