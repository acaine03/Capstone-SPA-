import * as state from "./store";

function render() {
    document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
    `;
}

function addNavEventListener() {
    document.querySelectorAll("nav a").forEach(navLink =>
        navLink.addEventListener("click", event => {
            event.preventDefault();
            let textOfLink = event.target.textContent;
            let pieceOfState = state[textOfLink];
            render(pieceOfState);
            })
        );
}
render(state.Home, addNavEventListener());

import * as components from "./components";