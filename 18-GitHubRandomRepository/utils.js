export const Rand = (max) => {
  return Math.floor(Math.random() * 1000) % max;
}

export const getRandomCode = () => {
  const char1 = String.fromCharCode(65 + Rand(26));
  const char2 = String.fromCharCode(65 + Rand(26));
  return char1 + char2;
}

export const createNode = (className = "", text = "") => {
  const element = document.createElement('div');
  element.className = className;

  if (text !== "") 
    element.insertAdjacentHTML("beforeend", text);

  return element;
}
