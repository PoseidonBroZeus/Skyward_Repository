const secretWordsData = [
  {
    word: "electro",
    images: [
      "file:///C:/Users/MomVV/Desktop/Website/Images/Electro.jpg",
      "file:///C:/Users/MomVV/Desktop/Website/Images/johnW.jpg",
      "file:///C:/Users/MomVV/Desktop/Website/Images/ElectroMoves.jpg"
    ],
    texts: [
      "Bro"
    ]
  },
  {
    word: "eruptor&blizzard",
    images: [
      "file:///C:/Users/MomVV/Desktop/Website/Images/E&B.jpg",
      "file:///C:/Users/MomVV/Desktop/Website/Images/E&BMoves.jpg",
      "file:///C:/Users/MomVV/Desktop/Website/Images/Obsidian.jpg"
    ],
    texts: [
      "They need cookies"
    ]
  },
  // Add more secret words and catalogs as needed
];

const userInput = document.getElementById("userInput");
const inputScreen = document.getElementById("input-screen");
const catalogs = document.getElementById("catalogs");

function checkInput() {
  const userInputLowerCase = userInput.value.toLowerCase();
  const correctWordData = secretWordsData.find(data => data.word === userInputLowerCase);

  if (correctWordData) {
    inputScreen.style.display = "none";
    catalogs.style.display = "block";
    displayCatalogs(correctWordData);
  } else {
    alert("Incorrect input. Try again!");
  }
}

function returnHome() {
  inputScreen.style.display = "block";
  catalogs.style.display = "none";
}

function displayCatalogs(wordData) {
  const imageCatalog = document.getElementById("image-catalog");
  const textCatalog = document.getElementById("text-catalog");

  imageCatalog.innerHTML = wordData.images.map(image => `<img src='${image}' alt='Image'>`).join('');
  textCatalog.innerHTML = wordData.texts.map(text => `<p>${text}</p>`).join('');
}