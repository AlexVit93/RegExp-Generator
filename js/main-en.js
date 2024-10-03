function escapeSpecialChars(str) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

function generateRegex() {
  const inputText = document.getElementById("inputText").value.trim();

  if (inputText === "") {
    document.getElementById("outputRegex").textContent =
      "No matching input found.";
    return;
  }

  const attributeMap = {
    src: "src",
    id: "id",
    "data-div": "data-div",
    "data-code": "data-code",
    "data-version": "data-version",
    "data-club": "data-club",
  };

  let selectedPrefix = "body";
  let condition = "";

  for (const [key, value] of Object.entries(attributeMap)) {
    if (inputText.includes(`${key}=`)) {
      selectedPrefix = value;
      break;
    }
  }

  const escapedText = escapeSpecialChars(inputText);
  const regex = `${selectedPrefix}:@\\W${escapedText}\\W@${condition}`;

  document.getElementById("outputRegex").textContent = regex;
}
