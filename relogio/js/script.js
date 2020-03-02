function tempoRelogio() {
  const data = new Date();
  const hora = data.getHours();
  const min = data.getMinutes();
  const sec = data.getSeconds();
  const tempo = document.querySelector('.div');
  const tempoTotal = ("00" + hora).slice(-2) + ':' +("00" + min).slice(-2) +':' + ("00" + sec).slice(-2);
  tempo.innerText = tempoTotal;
  

}

setInterval(tempoRelogio, 0);
