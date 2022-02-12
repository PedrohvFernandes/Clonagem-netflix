let iframe = document.getElementById("iframe");
let iframebotton = document.getElementById("iframebotton");

function iframePlay() {
  iframe.style.display = "block";
  iframebotton.style.display = "flex";
}

function iframeNoPlay() {
  iframe.style.display = "none";
  iframebotton.style.display = "none";
}
