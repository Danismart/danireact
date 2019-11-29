function formateName(user) {
  firstName: "Dani";
  lastName: "Alonso";
}

const element = <h1>Bienvenida a tu website {formateName(user)}</h1>;

ReactDOM.render(element, document.getElementById("root"));
