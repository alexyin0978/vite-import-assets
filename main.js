import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import { setupCounter } from "./counter.js";

const svgModules = import.meta.glob("./assets/*.svg", { eager: true });
// const pngModules = import.meta.glob("./assets/*.png");
console.log("module", svgModules);
// console.log("module", pngModules);

// for (let path in svgModules) {
//   svgModules[path]().then((svg) => {
//     // console.log("path:", path);
//     // console.log("svg:", svg);
//   });
// }

// const pngArray = [];
// for (let path in pngModules) {
//   pngModules[path]().then((png) => {
//     pngArray.push(path);
//     console.log("path:", path);
//     console.log("png:", png);
//   });
// }

// const importAll = (module) => {
//   return;
// };

// console.log("array: ", pngArray);

// document.querySelector("#image-demo").innerHTML = `${pngArray.map((path) => {
//   console.log("looping");
//   return `<img src="${path}" />`;
// })}`;

import article1 from "./assets/article1.png";
import article2 from "./assets/article2.png";

// console.log(article1);

const content = [article1, article2];

document.querySelector("#image-demo").innerHTML = `
  ${content
    .map((path) => {
      return `
      <div>
        <h4>test</h4>
        <img src="${path}" />
      </div>
    `;
    })
    .join("")}
`;

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
