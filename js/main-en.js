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

  let selectedPrefix = "body";
  let condition = "";

  if (inputText.includes("src=")) {
    selectedPrefix = "src";
  } else if (inputText.includes("id=")) {
    selectedPrefix = "id";
  }

  const escapedText = escapeSpecialChars(inputText);
  const regex = `${selectedPrefix}:@\\W${escapedText}\\W@${condition}`;

  document.getElementById("outputRegex").textContent = regex;
}
