// HTMLIFrameElement.contentWindow: A propriedade contentWindow retorna o objeto Window de um HTMLIFrameElement. Você pode usar este objeto Window para acessar o documento do iframe e seu DOM interno. Este atributo é somente leitura, mas suas propriedades podem ser manipuladas como o objeto global Window. 

//var x = document.getElementsByTagName("iframe")[0].contentWindow;
//x = window.frames[0];
// x.document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
// this would turn the 1st iframe in document blue.

// postMessage: mensagem enviada por meio de postMessage pro youtube, no caso a mensagen é a função se foi pauseVideo ou playVideo, qual é o evento no caso um comando e não precisa passar nem um argumento, no todo isso é um objeto JSON https://developer.mozilla.org/pt-BR/docs/Web/API/MessagePort/postMessage
function toggleVideo(state) {
  // if state == 'hide', hide. Else: show video
  let div = document.getElementById("iframe");
  let iframebotton = document.getElementById("iframebotton");
  let iframe = div.getElementsByTagName("iframe")[0].contentWindow;
  div.style.display = state == "hide" ? "none" : "block";
  iframebotton.style.display = state == "hide" ? "none" : "block";
  func = state == "hide" ? "pauseVideo" : "playVideo";
  iframe.postMessage(
    '{"event":"command","func":"' + func + '","args":""}',
    "*"
  );
}
