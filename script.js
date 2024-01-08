const secretWordsData = [
  {
    word: "electro",
    images: [
      "Images/Electro.jpg",
      "Images/johnW.jpg",
      "Images/ElectroMoves.jpg"
    ],
    textFile: "Text/Electro.txt"
  },
  {
    word: "eruptor&blizzard",
    images: [
      "Images/E&B.jpg",
      "Images/E&BMoves.jpg",
      "Images/Obsidian.jpg"
    ],
    textFile: "Text/eruptor_blizzard.txt"
  },
  // Add more secret words and catalogs as needed
];

// Load text content dynamically
async function loadTextContent(file) {
  const response = await fetch(file);
  const text = await response.text();
  return text;
}

const userInput = document.getElementById("userInput");
const inputScreen = document.getElementById("input-screen");
const catalogs = document.getElementById("catalogs");

async function checkInput() {
  const userInputLowerCase = userInput.value.toLowerCase();
  const correctWordData = secretWordsData.find(data => data.word === userInputLowerCase);

  if (correctWordData) {
    inputScreen.style.display = "none";
    catalogs.style.display = "block";
    const textContent = await loadTextContent(correctWordData.textFile);
    correctWordData.texts = textContent.split('\n'); // Split text into an array of lines
    displayCatalogs(correctWordData);
  } else {
    alert("Incorrect input. Try again!");
  }
}
