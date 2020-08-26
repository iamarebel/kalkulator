
// deklaracja zmiennych wszystkich elementów
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

let readOnly = () => {
  secondInput.value = "";
  secondInput.setAttribute("readonly", "");
}

//dodajemy event na target (uniwersalny) ktory bedize czekal az
// cos sie stnaie i doda klase active wtedy, w devtoolsach po wywolaniu eventow pokazuje target  w wlasciwosciach
let handleClick = (event) => {
  secondInput.removeAttribute("readonly", "");
  removeActiveClass();
  event.target.classList.add("active");
   // dodawanie klasy active - po nazwie klasy
}

// nasluchujemy na klikniecia i wywolujemy addActiveClass aby nadac klase aktywna na klikniety element
addition.addEventListener("click", handleClick);
substraction.addEventListener("click", handleClick);
multiplication.addEventListener("click", handleClick);
division.addEventListener("click", handleClick);
factorial.addEventListener("click", handleClick);
factorial.addEventListener("click", readOnly);
fibonacci.addEventListener("click", handleClick);

// funkcja sprawdzająca silnie
let factorialFunction = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  } 
  else if  (n < 0) {
    alert("the number needs to be a positive number");
  }
  else {
    return n*factorialFunction(n-1);
  }
}

let handleOperation = () => {
  let activeOperation = document.querySelector(".active");
  result.value = "";  // czyszczenie  pola zeby stare wyniki nie zostały

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
    if (secondInput.valueAsNumber === 0) {
      alert("you can't divide by 0!");
    }
    else if(secondInput.valueAsNumber !== 0)
    result.value = firstInput.valueAsNumber / secondInput.valueAsNumber;
  }

  else if (activeOperation === factorial) {
    let answer = factorialFunction(firstInput.valueAsNumber);  // definicja zmiennej answer to funkcja silnii pobierajaca atrubut z firstIpnut w postaci number
    result.value = answer;  // przypisanie mziennej answer do pola result
  }
}

equals.addEventListener("click", handleOperation);

