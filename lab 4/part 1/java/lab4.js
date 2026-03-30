// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings
const characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const places = ["the soup kitchen", "Disneyland", "the White House"];
const events = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and slithered away"];

// Partial return random string function

function returnRandomStoryString() {
const randomCharacters = randomValueFromArray(characters);
const randomPlaces = randomValueFromArray(places);
const randomEvents = randomValueFromArray(events);

let storyText = 'It was 94 Fahrenheit outside, so ${randomCharacters} went for a walk. When they got to ${randomPlaces}, they stared in horror for a few moments, then ${randomEvents}. Bob saw the whole thing, but was not surprised — ${randomCharacters} weighs 300 pounds, and it was a hot day';
  
  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

let newStory = returnRandomStoryString();

function generateStory() {
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300/14.0) + " stone";
    newStory = newStory.replaceAll("300 pounds", weight)
    const temperature = Math.round((94 - 32)* 5.0/9.0) + " celsius";
    newStory = newStory.replace("94 Fahrenheit", celsius)
  }

  // TODO: replace "" with the correct expression
  story.textContent = newStory;
  story.style.visibility = "visible";
  story.style.textDecoration = 'underline';
}