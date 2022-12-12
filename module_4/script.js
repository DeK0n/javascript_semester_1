let inputRequest = "dogs";
async function tvRequest(inputRequest) {
  try {
    const response = await fetch(
      ` https://api.tvmaze.com/singlesearch/shows?q=${inputRequest}`
    );
    jsonData = await response.json();
    if (jsonData) {
      resultText.textContent = jsonData.name;
      resultLink.setAttribute("href", `${jsonData.url}`);
      resultImage.setAttribute("src", `${jsonData.image.medium}`);
    }
    console.log("data", jsonData);
  } catch (error) {
    console.log(error.message);
  }
  return jsonData;
}
function formSubmit(event) {
  const val = document.querySelector("input").value;
  tvRequest(val);
  event.preventDefault();
}

const form = document.getElementById("form");
const resultLink = document.getElementById("resultLink");
const resultImage = document.getElementById("resultImage");
const resultText = document.getElementById("resultText");
form.addEventListener("submit", formSubmit);
