//variáveis
var botaoInicio = document.querySelector(`#btnInicio`);
var botaoSelect = document.querySelector(`#campoSeleciona`);
var codificar = document.querySelector(`#inputCodificar`);
var decodificar = document.querySelector(`#inputDecoficar`);
var submitCod = document.querySelector(`#codificarMsg`);
var submitDecod = document.querySelector(`#decodificarMsg`);
var resposta = document.querySelector(`#recebeResposta`);

//eventos
//primeiro evento para aparecer o formulário
botaoInicio.addEventListener(`click`, function (event) {
  event.preventDefault();
  formulario.classList.remove(`invisible`);
});
//evento de selecionar as opções de codificação se é cifra de cesar ou base 64
botaoSelect.addEventListener(`change`, function (event) {
  if (botaoSelect.value === "codCesar") {
    incrementoInvisivel.classList.remove(`increment-invisible`);
  } else if (botaoSelect.value === "base64") {
    incrementoInvisivel.classList.add(`increment-invisible`);
  }
});
// evento que aprece o botão de codificar ou decodificar, troca o conteudo do texto dentro do botão
codificar.addEventListener(`click`, function (event) {
  codificarMsg.classList.remove(`cod-invisible`);
  decodificarMsg.classList.add(`decod-invisible`);
});
decodificar.addEventListener(`click`, function (event) {
  decodificarMsg.classList.remove(`decod-invisible`);
  codificarMsg.classList.add(`cod-invisible`);
});
//evento que faz com que as funçoes aconteçam
submitCod.addEventListener(`click`, function (event) {
  event.preventDefault();
  if (botaoSelect.value === "codCesar") {
    codificaCesar();
  }
  if (botaoSelect.value === "base64") {
    var codificandoMsg = btoa(msgCodifica.value);
    resposta.value = `${codificandoMsg}`;
  }
});
submitDecod.addEventListener(`click`, function (event) {
  event.preventDefault();
  if (botaoSelect.value === "codCesar") {
    decodificaCesar();
  }
  if (botaoSelect.value === "base64") {
    var decodificandoMsg = atob(msgCodifica.value);
    resposta.value = `${decodificandoMsg}`;
  }
});
//funcões
function codificaCesar() {
  var incremento = document.querySelector(`#incrementoCesar`).value;
  var inc = parseInt(incremento);
  var msgCodifica = document.querySelector(`#msgCodifica`).value;
  console.log(incremento);
  var mensagemCesar = msgCodifica.split("");
  console.log(mensagemCesar);
  var arrNumVazio = [];
  var arrMsgCodVazio = [];
  var msgFinal = "";

  for (var i = 0; i < mensagemCesar.length; i++) {
    arrNumVazio.push(mensagemCesar[i].charCodeAt() + inc);
    console.log(arrNumVazio);
  }
  for (var j = 0; j < arrNumVazio.length; j++) {
    arrMsgCodVazio.push(String.fromCharCode(arrNumVazio[j]));
  }

  msgFinal = arrMsgCodVazio.join("");
  resposta.value = `${msgFinal}`;
  console.log(msgFinal);
}
function decodificaCesar() {
  var incremento = document.querySelector(`#incrementoCesar`).value;
  var inc = parseInt(incremento);
  var msgCodifica = document.querySelector(`#msgCodifica`).value;
  var mensagemCesar = msgCodifica.split("");
  var arrNumVazio = [];
  var arrMsgCodVazio = [];
  var msgFinal = "";

  for (var i = 0; i < mensagemCesar.length; i++) {
    arrNumVazio.push(mensagemCesar[i].charCodeAt() - inc);
    console.log(arrNumVazio);
  }
  for (var j = 0; j < arrNumVazio.length; j++) {
    arrMsgCodVazio.push(String.fromCharCode(arrNumVazio[j]));
  }

  msgFinal = arrMsgCodVazio.join("");
  resposta.value = `${msgFinal}`;
  console.log(msgFinal);
}
