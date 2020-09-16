function show(elementId) {
  for (let i = 1; i < 17; i++) {
    HideContent(`id${i}`);
  }
  ShowContent(elementId);
}

function HideContent(el) {
  document.getElementById(el).style.display = "none";
}

function ShowContent(el) {
  document.getElementById(el).style.display = "block";
}

function ReverseDisplay(el) {
  const display = document.getElementById(el).style.display;
  return display === "none" ? "block" : "none";
}
