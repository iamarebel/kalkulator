
// deklaracja zmiennych wszystkich elelementów
let firstInput = document.querySelector("#first-input");
let secondInput = document.querySelector("#second-input");
let addition = document.querySelector("#addition");
let subtraction = document.querySelector("#subtraction");
let multiplication = document.querySelector("#multiplication");
let division = document.querySelector("#division");
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
subtraction.addEventListener("click", handleClick);
multiplication.addEventListener("click", handleClick);
division.addEventListener("click", handleClick);

let getActiveElement = () => {
  handleClick();

}

equals.addEventListener("click", getActiveElement);
