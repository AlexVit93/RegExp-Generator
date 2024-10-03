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

  let regexParts = [];

  const idMatch = inputText.match(/id\s*=\s*"([^"]+)"/);
  if (idMatch) {
    regexParts.push(`body:@${escapeSpecialChars(idMatch[1])}@`);
  }

  const srcMatch = inputText.match(/src\s*=\s*"([^"]+)"/);
  if (srcMatch) {
    regexParts.push(`src:@${escapeSpecialChars(srcMatch[1])}@`);
  }

  const dataDivMatch = inputText.match(/data-div\s*=\s*"([^"]+)"/);
  if (dataDivMatch) {
    regexParts.push(`data-div:@${escapeSpecialChars(dataDivMatch[1])}@`);
  }

  const dataCodeMatch = inputText.match(/data-code\s*=\s*"([^"]+)"/);
  if (dataCodeMatch) {
    regexParts.push(`data-code:@${escapeSpecialChars(dataCodeMatch[1])}@`);
  }

  const dataVersionMatch = inputText.match(/data-version\s*=\s*"([^"]+)"/);
  if (dataVersionMatch) {
    regexParts.push(
      `data-version:@${escapeSpecialChars(dataVersionMatch[1])}@`
    );
  }

  const dataClubMatch = inputText.match(/data-club\s*=\s*"([^"]+)"/);
  if (dataClubMatch) {
    regexParts.push(`data-club:@${escapeSpecialChars(dataClubMatch[1])}@`);
  }

  if (regexParts.length === 0) {
    document.getElementById("outputRegex").textContent =
      "No matching attributes found.";
    return;
  }

  const finalRegex = regexParts.join("\n");
  document.getElementById("outputRegex").textContent = finalRegex;
}
