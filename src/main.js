import styles from "./style.css";
import "nes.css/css/nes.min.css";

import blank from "./img/everis.png";
import anibal from "./img/anibal.png";
import edu from "./img/edu.png";
import miguel from "./img/miguel.png";
import laura from "./img/laura.png";
import manu from "./img/manu.png";
import nuria from "./img/nuria.png";
import pedro from "./img/pedro.png";
import sacris from "./img/sacris.png";
import sesi from "./img/sesi.png";
import victor from "./img/victor.png";

document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "edu",
      img: edu,
    },
    {
      name: "miguel",
      img: miguel,
    },
    {
      name: "laura",
      img: laura,
    },
    {
      name: "manu",
      img: manu,
    },
    {
      name: "nuria",
      img: nuria,
    },
    {
      name: "pedro",
      img: pedro,
    },
    {
      name: "sacris",
      img: sacris,
    },
    {
      name: "sesi",
      img: sesi,
    },
    {
      name: "victor",
      img: victor,
    },
    {
      name: "edu",
      img: edu,
    },
    {
      name: "miguel",
      img: miguel,
    },
    {
      name: "laura",
      img: laura,
    },
    {
      name: "manu",
      img: manu,
    },
    {
      name: "nuria",
      img: nuria,
    },
    {
      name: "pedro",
      img: pedro,
    },
    {
      name: "sacris",
      img: sacris,
    },
    {
      name: "sesi",
      img: sesi,
    },
    {
      name: "victor",
      img: victor,
    },
  ].sort(() => 0.5 - Math.random());
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const modalVPN = document.getElementById("dialog-vpn");
  const modalDaily = document.getElementById("dialog-daily");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let longCardsArray = cardArray.length;
  let longCardsWon = cardsWon.length;

  function backgroundImage(url) {
    return `background:url(${url}); background-repeat:no-repeat; background-size:cover;`;
  }

  function createBoard() {
    cardArray.forEach((el, i) => {
      const img = document.createElement("img");
      img.classList = "w-full rounded-sm h-full";
      img.setAttribute("src", blank);
      img.setAttribute("data-id", i);
      img.addEventListener("click", flipCard);

      const card = document.createElement("a");
      card.className = "h-28 w-28 md:h-36 md:w-36 nes-btn";
      card.style = backgroundImage(blank);
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      //card.appendChild(img);
      grid.appendChild(card);
    });
  }
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.style = backgroundImage(cardArray[cardId].img);
    //this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) setTimeout(checkMatch, 500);
  }
  function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.play();
  }
  function checkMatch() {
    const cards = document.querySelectorAll("a");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (optionOneId == optionTwoId) {
      playSound("error");
      cards[optionOneId].style = backgroundImage(blank);
      cards[optionTwoId].style = backgroundImage(blank);
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
      if (longCardsWon !== longCardsArray) playSound("coin");
    } else {
      playSound("error");
      cards[optionOneId].style = backgroundImage(blank);
      cards[optionTwoId].style = backgroundImage(blank);
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length * 100;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Enhorabuena mañana te toca traer empanadas!";
      playSound("win");
    }
  }

  setTimeout(() => {
    modalVPN.showModal();
  }, 5000);

  setInterval(() => {
    modalDaily.showModal();
  }, 10000);

  createBoard();
});
