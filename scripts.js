import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
  addNavEventListeners();
  addPicOnFormSubmit(st);
}

render();

function addNavEventListeners() {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );