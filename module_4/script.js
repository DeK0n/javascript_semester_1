let inputRequest = "dogs";
async function tvRequest(inputRequest) {
  try {
    const response = await fetch(
      ` https://api.tvmaze.com/singlesearch/shows?q=${inputRequest}`
    );
    jsonData = await response.json();
    if (jsonData) {
      document.getElementById("resultText").innerHTML = jsonData.name;
      document
        .getElementById("resultLink")
        .setAttribute("href", `${jsonData.url}`);
      document
        .getElementById("resultImage")
        .setAttribute("src", `${jsonData.image.medium}`);
    }
    console.log("data", jsonData);
  } catch (error) {
    console.log(error.message);
  }
  return jsonData;
}
function formSubmit(event) {
  tvRequest(inputRequest);
  
  log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
  event.preventDefault();
}
function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
  }
  
const form = document.getElementById('form');
const resultLink = document.getElementById('resultLink');
const resultImage = document.getElementById('resultImage');
const resultText = document.getElementById('resultText');
form.addEventListener('submit', logSubmit);

<form id="form">
  <label>Test field: <input type="text" /></label>
  <br /><br />
  <button type="submit">Submit form</button>
</form>
<p id="log"></p>



// 1)3p2)4p
