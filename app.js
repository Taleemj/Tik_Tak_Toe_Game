const gameboard = document.getElementById("gameboard");
const info = document.getElementById("info");
const startcells = ["", "", "", "", "", "", "", "", ""];

let go = "circle";

info.textContent = "circle goes first";

const checkScore = () => {
  const allSquares = document.querySelectorAll(".square");

  // winning combinations on our tic tac toe board

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningCombos.forEach((arr) => {
    let circlewins = arr.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("circle")
    );

    if (circlewins) {
      info.textContent = "circle wins!";
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });

  winningCombos.forEach((arr) => {
    let crosswins = arr.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("cross")
    );

    if (crosswins) {
      info.textContent = "cross wins!";
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });
  console.log(allSquares);
};

// adding the circle or cross element on click

const addGo = (e) => {
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);

  go = go === "circle" ? "cross" : "circle";
  e.target.append(goDisplay);
  info.textContent = "it is now" + " " + go + "'s turn.";
  e.target.removeEventListener("click", addGo);
  checkScore();
};

//creating the tic tak toe board elements

const createboard = () => {
  startcells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGo);
    gameboard.append(cellElement);
  });
};

createboard();
