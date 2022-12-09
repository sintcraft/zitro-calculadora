const error = document.getElementById("error");
const displayError = (msg) => {
  const elem = document.getElementById("error");
  const children = document.createElement("div");
  children.classList.add("alert", "alert-danger");
  children.role = "alert";
  children.innerHTML = msg;
  elem.appendChild(children);
  setTimeout(() => {
    elem.innerHTML = "";
  }, 3000);
};

function calculate() {
  const a = parseFloat(document.getElementById("corda").value);
  const b = parseFloat(document.getElementById("cordb").value);
  var mayor = a;

  if (isNaN(a) || isNaN(b)) return displayError("Números invalidos");

  if (b > a) mayor = b;

  const c = Math.abs(a) + Math.abs(b);
  const d = c / 2;

  const medida = c * 25.4 - 5.95;

  const medio = a - Math.abs(d);

  const medidaElem = document.getElementById("medida-de-pieza");
  medidaElem.innerHTML = `Medida de pieza: ${medida}`;

  const medioElem = document.getElementById("punto-medio");
  medioElem.innerHTML = `Punto medio: ${medio}`;

  // console.log(a, b, c, d);
}

var focusInput = null;

function set(char) {
  if (!focusInput) return;
  const value = parseFloat(focusInput.value);
  if (char == "-" && value >= 0) {
    focusInput.value = value * -1;
    return;
  }
  if (char == "x") {
    if (
      focusInput.value.slice(0, focusInput.value.length - 1)[
        focusInput.value.length - 2
      ] == "."
    ) {
      focusInput.value = focusInput.value.slice(0, focusInput.value.length - 2);
    } else {
      focusInput.value = focusInput.value.slice(0, focusInput.value.length - 1);
    }
    return;
  }
  if (char == ".") {
    focusInput.value = focusInput.value + ".0";
    return;
  }

  const num = parseInt(char);
  if (isNaN(num)) return;
  focusInput.value = focusInput.value + num;
}

document.getElementById("corda").addEventListener("focus", (e) => {
  focusInput = document.getElementById("corda");
});
document.getElementById("cordb").addEventListener("focus", (e) => {
  focusInput = document.getElementById("cordb");
});
