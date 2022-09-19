import data from "./data.json" assert { type: "json" };

let dailybtn = document.querySelector("#daily");
let weeklybtn = document.querySelector("#weekly");
let monthlybtn = document.querySelector("#monthly");

let secondsection = document.querySelector(".second-section");

dailybtn.addEventListener("click", () => {
  data.forEach((element) => {
    console.log(element);
    secondsection.innerHTML += `
    <div class="card">
          <div class="card__background">
            <img class="card__image" src="./images/icon-work.svg" alt="" />
          </div>
          <div class="card__details">
            <div class="card__activity">
              <p class="card__title">Work</p>
              <img
                class="card__dots"
                src="./images/icon-ellipsis.svg"
                alt="three dots"
              />
            </div>
            <div class="card__time">
              <p class="card__hour">7hrs</p>
              <p class="card__previous">Previous - 7hrs</p>
            </div>
          </div>
        </div>
    
    `;
  });
});
