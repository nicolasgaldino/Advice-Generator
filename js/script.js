const adviceId = document.querySelector(".adviceId");
const adviceParagraph = document.querySelector(".adviceParagraph");
const diceBtn = document.querySelector(".diceBtn");


const fetchAdviceAPI = async () => {
  const url = "https://api.adviceslip.com/advice";
  const adviceResponse = await fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log(err));
  return adviceResponse;
};

const renderAdvice = async () => {
  const renderAdviceResponse = await fetchAdviceAPI();
  adviceParagraph.innerHTML = '"' + renderAdviceResponse.slip.advice + '"';
  adviceId.innerHTML = "#" + renderAdviceResponse.slip.id;
};

window.onload = () => {
  renderAdvice();
};

const handleAdvice = () => {
  renderAdvice();
};

diceBtn.addEventListener("click", handleAdvice);
